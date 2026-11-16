const http = require("http");
const fs = require("fs");
const path = require("path");
const { findMatchingTransfer } = require("./scripts/gmail-payment-verifier");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const env = readEnvFile(path.join(root, ".env"));
const config = {
  supabaseUrl: process.env.SUPABASE_URL || env.SUPABASE_URL,
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY,
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_ROLE_KEY
};

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

function sendJson(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(body));
}

function readEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return fs.readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .reduce((acc, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) return acc;
      const [key, ...rest] = trimmed.split("=");
      acc[key.trim()] = rest.join("=").trim().replace(/^['"]|['"]$/g, "");
      return acc;
    }, {});
}

function httpError(status, message) {
  const error = new Error(message);
  error.status = status;
  return error;
}

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(payload?.message || payload?.msg || payload?.error_description || payload?.error || `${response.status} ${response.statusText}`);
    error.code = payload?.code;
    throw error;
  }
  return payload;
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    let tooLarge = false;
    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      if (tooLarge) return;
      body += chunk;
      if (body.length > 8192) tooLarge = true;
    });
    req.on("end", () => {
      if (tooLarge) {
        reject(httpError(413, "İstek çok büyük."));
        return;
      }
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(httpError(400, "Geçersiz istek verisi."));
      }
    });
    req.on("error", reject);
  });
}

function bankDate(timestamp) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(timestamp));
}

async function verifyPaymentQuery(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Bu adres yalnızca POST isteklerini kabul eder." });
    return;
  }
  if (!config.supabaseUrl || !config.supabaseAnonKey || !config.supabaseServiceRoleKey) {
    sendJson(res, 503, { error: "Ödeme doğrulama sunucu ayarları eksik." });
    return;
  }

  const authorization = req.headers.authorization || "";
  const accessToken = authorization.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!accessToken) {
    sendJson(res, 401, { error: "Ödeme doğrulaması için oturum açın." });
    return;
  }

  try {
    const user = await fetchJson(`${config.supabaseUrl}/auth/v1/user`, {
      headers: {
        apikey: config.supabaseAnonKey,
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (!user?.id) throw httpError(401, "Oturum doğrulanamadı.");

    const body = await readJsonBody(req);
    const purchaseId = String(body.purchaseId || "").trim();
    const queryNumber = String(body.queryNumber || "").replace(/[^A-Z0-9]/gi, "").toUpperCase();
    if (!purchaseId || !/^[A-Z0-9]{6,40}$/.test(queryNumber)) {
      throw httpError(400, "Geçerli sipariş ve sorgu numarası gerekli.");
    }

    const purchaseUrl = new URL(`${config.supabaseUrl}/rest/v1/purchases`);
    purchaseUrl.search = new URLSearchParams({
      select: "id,buyer_id,amount,payment_status,created_at,is_mock",
      id: `eq.${purchaseId}`,
      buyer_id: `eq.${user.id}`
    });
    const purchases = await fetchJson(purchaseUrl, {
      headers: {
        apikey: config.supabaseServiceRoleKey,
        Authorization: `Bearer ${config.supabaseServiceRoleKey}`
      }
    });
    const purchase = Array.isArray(purchases) ? purchases[0] : null;
    if (!purchase) throw httpError(404, "Bu sipariş hesabınızda bulunamadı.");
    if (purchase.is_mock || !["pending_payment", "rejected"].includes(purchase.payment_status)) {
      throw httpError(409, "Bu sipariş gerçek ödeme sorgusu kabul etmiyor.");
    }

    const duplicateUrl = new URL(`${config.supabaseUrl}/rest/v1/purchases`);
    duplicateUrl.search = new URLSearchParams({
      select: "id",
      query_number: `eq.${queryNumber}`,
      payment_status: "in.(paid,mock_paid)"
    });
    const priorPayments = await fetchJson(duplicateUrl, {
      headers: {
        apikey: config.supabaseServiceRoleKey,
        Authorization: `Bearer ${config.supabaseServiceRoleKey}`
      }
    });
    if (Array.isArray(priorPayments) && priorPayments.some((item) => item.id !== purchaseId)) {
      throw httpError(409, "Bu sorgu numarası daha önce başka bir siparişte kullanılmış.");
    }

    const date = bankDate(Date.now());
    const match = await findMatchingTransfer(queryNumber, purchase.amount, date);
    const status = match ? "paid" : "rejected";
    const updateUrl = new URL(`${config.supabaseUrl}/rest/v1/purchases`);
    updateUrl.search = new URLSearchParams({
      id: `eq.${purchaseId}`,
      buyer_id: `eq.${user.id}`,
      payment_status: "in.(pending_payment,rejected)",
      select: "id"
    });
    const updated = await fetchJson(updateUrl, {
      method: "PATCH",
      headers: {
        apikey: config.supabaseServiceRoleKey,
        Authorization: `Bearer ${config.supabaseServiceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation"
      },
      body: JSON.stringify({
        query_number: queryNumber,
        payment_status: status,
        receipt_check_status: match ? "matched" : "mismatch",
        receipt_detected_reference: queryNumber,
        receipt_detected_amount: match?.amount ?? null,
        receipt_detected_description: match
          ? "Sorgu numarası ve tutar VakıfBank e-postasıyla eşleşti."
          : "Bugün gelen VakıfBank e-postalarında aynı sorgu numarası ve tutar bulunamadı.",
        reviewed_at: match ? new Date().toISOString() : null
      })
    });
    if (!Array.isArray(updated) || !updated.length) {
      throw httpError(409, "Sipariş durumu değişmiş. Sayfayı yenileyip tekrar deneyin.");
    }

    sendJson(res, 200, {
      matched: Boolean(match),
      paymentStatus: status,
      detectedAmount: match?.amount ?? null
    });
  } catch (error) {
    if (error.status) {
      sendJson(res, error.status, { error: error.message });
      return;
    }
    if (error.code === "23505") {
      sendJson(res, 409, { error: "Bu sorgu numarası daha önce başka bir siparişte kullanılmış." });
      return;
    }
    if (error.message.includes("column purchases.query_number does not exist")) {
      sendJson(res, 503, { error: "Veritabanı güncel değil. Supabase SQL Editor'da supabase/schema.sql dosyasını çalıştırın." });
      return;
    }
    console.error("Payment query verification failed:", error.message);
    sendJson(res, 502, { error: "Ödeme kontrolü şu anda tamamlanamadı. Lütfen daha sonra tekrar deneyin." });
  }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);
  if (url.pathname === "/api/payments/verify") {
    verifyPaymentQuery(req, res).catch((error) => {
      console.error("Payment verification request failed:", error.message);
      if (!res.headersSent) sendJson(res, 500, { error: "Ödeme kontrolü tamamlanamadı." });
    });
    return;
  }
  let filePath = decodeURIComponent(url.pathname);

  if (filePath === "/") filePath = "/index.html";
  const resolved = path.normalize(path.join(root, filePath));

  if (!resolved.startsWith(root)) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.readFile(resolved, (err, data) => {
    if (err) {
      fs.readFile(path.join(root, "index.html"), (fallbackErr, fallback) => {
        if (fallbackErr) send(res, 404, "Not found");
        else send(res, 200, fallback, types[".html"]);
      });
      return;
    }

    send(res, 200, data, types[path.extname(resolved)] || "application/octet-stream");
  });
});

server.listen(port, () => {
  console.log(`Notum running at http://localhost:${port}`);
});
