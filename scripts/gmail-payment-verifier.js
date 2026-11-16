#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const envPath = path.join(rootDir, '.env');
const env = readEnvFile(envPath);

const config = {
  clientId: process.env.GOOGLE_CLIENT_ID || env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || env.GOOGLE_CLIENT_SECRET,
  refreshToken: process.env.GOOGLE_REFRESH_TOKEN || env.GOOGLE_REFRESH_TOKEN,
  gmailAccount: process.env.GMAIL_ACCOUNT || env.GMAIL_ACCOUNT || 'me',
  supabaseUrl: process.env.SUPABASE_URL || env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_ROLE_KEY,
  paymentVerificationMode: process.env.PAYMENT_VERIFICATION_MODE || env.PAYMENT_VERIFICATION_MODE || 'gmail'
};

function readEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return fs.readFileSync(filePath, 'utf8')
    .split(/\r?\n/)
    .reduce((acc, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) return acc;
      const [key, ...rest] = trimmed.split('=');
      const value = rest.join('=').trim();
      acc[key.trim()] = value.replace(/^['"]|['"]$/g, '');
      return acc;
    }, {});
}

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (!item.startsWith('--')) continue;
    const key = item.slice(2);
    const next = argv[index + 1];
    if (next && !next.startsWith('--')) {
      args[key] = next;
      index += 1;
    } else {
      args[key] = true;
    }
  }
  return args;
}

function isTruthy(value) {
  return ['1', 'true', 'yes', 'on'].includes(String(value).toLowerCase());
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  let payload = null;
  try {
    payload = text ? JSON.parse(text) : null;
  } catch (error) {
    payload = text;
  }
  if (!response.ok) {
    const detail = payload && typeof payload === 'object' ? JSON.stringify(payload) : String(payload || response.statusText);
    throw new Error(`${response.status} ${response.statusText}: ${detail}`);
  }
  return payload;
}

async function getAccessToken() {
  if (!config.clientId || !config.clientSecret || !config.refreshToken) {
    throw new Error('Google OAuth bilgileri eksik. .env içinde GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET ve GOOGLE_REFRESH_TOKEN tanımlı olmalı.');
  }

  const tokenUrl = 'https://oauth2.googleapis.com/token';
  const payload = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    refresh_token: config.refreshToken,
    grant_type: 'refresh_token'
  });

  const result = await fetchJson(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: payload.toString()
  });

  if (!result.access_token) {
    throw new Error('Google access token alınamadı. Refresh token doğruluğunu kontrol edin.');
  }

  return result.access_token;
}

async function listMessages(accessToken, dateString, maxResults = 20) {
  const dateAtUtc = new Date(`${dateString}T00:00:00.000Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString) || Number.isNaN(dateAtUtc.getTime()) || dateAtUtc.toISOString().slice(0, 10) !== dateString) {
    throw new Error(`Geçersiz tarih: ${dateString}`);
  }
  const startTimestamp = Math.floor((dateAtUtc.getTime() - 3 * 60 * 60 * 1000) / 1000);
  const endTimestamp = startTimestamp + 24 * 60 * 60;
  const query = `from:vakifbank after:${startTimestamp - 1} before:${endTimestamp}`;
  const url = `https://gmail.googleapis.com/gmail/v1/users/${encodeURIComponent(config.gmailAccount)}/messages?maxResults=${maxResults}&q=${encodeURIComponent(query)}`;
  const result = await fetchJson(url, { headers: { Authorization: `Bearer ${accessToken}` } });
  return Array.isArray(result.messages) ? result.messages : [];
}

async function getMessage(accessToken, messageId) {
  const url = `https://gmail.googleapis.com/gmail/v1/users/${encodeURIComponent(config.gmailAccount)}/messages/${messageId}?format=full`;
  return fetchJson(url, { headers: { Authorization: `Bearer ${accessToken}` } });
}

async function findMatchingTransfer(expectedQueryNumber, expectedAmount, dateString) {
  const accessToken = await getAccessToken();
  const messages = await listMessages(accessToken, dateString, 50);
  const normalizedExpectedQuery = normalizeQueryNumber(expectedQueryNumber);
  const amount = Number(expectedAmount);
  if (!normalizedExpectedQuery || !Number.isFinite(amount) || amount <= 0) {
    throw new Error('Geçerli sorgu numarası ve tutar gerekli.');
  }

  for (const message of messages) {
    const full = await getMessage(accessToken, message.id);
    const info = extractQueryInfo(extractBody(full.payload || {}));
    const match = matchQueryToPurchase(info, normalizedExpectedQuery, amount, dateString);
    if (info.hasVakıfbankMarker && match.matched) {
      return {
        queryNumber: info.queryNumber,
        amount: info.amount,
        messageId: message.id
      };
    }
  }
  return null;
}

function decodeBase64Url(value = '') {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
  return Buffer.from(padded, 'base64').toString('utf8');
}

function extractBody(payload) {
  if (!payload) return '';
  if (payload.body && payload.body.data) return decodeBase64Url(payload.body.data);
  if (Array.isArray(payload.parts)) {
    const parts = payload.parts
      .map((part) => extractBody(part))
      .filter(Boolean)
      .join('\n');
    if (parts) return parts;
  }
  return '';
}

function normalizeQueryNumber(value) {
  return String(value || '').replace(/[^A-Z0-9]/gi, '').toUpperCase();
}

function stripHtml(text) {
  return String(text || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&uuml;/gi, 'ü')
    .replace(/&Uuml;/gi, 'Ü')
    .replace(/&ccedil;/gi, 'ç')
    .replace(/&Ccedil;/gi, 'Ç')
    .replace(/&ouml;/gi, 'ö')
    .replace(/&Ouml;/gi, 'Ö')
    .replace(/&scedil;/gi, 'ş')
    .replace(/&Scaron;/gi, 'Ş')
    .replace(/&igrave;/gi, 'i')
    .replace(/&iacute;/gi, 'i')
    .replace(/&atilde;/gi, 'a')
    .replace(/&otilde;/gi, 'o')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseMoney(value) {
  const clean = String(value || '').replace(/[^0-9,\.]/g, '').trim();
  if (!clean) return null;
  const normalized = clean.replace(/\./g, '').replace(',', '.');
  const amount = Number(normalized);
  return Number.isFinite(amount) ? amount : null;
}

function extractQueryInfo(text) {
  const plainText = stripHtml(text || '');
  const lowerText = plainText.toLocaleLowerCase('tr');

  const lines = plainText
    .replace(/\r/g, '')
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  let queryNumber = '';
  let amountValue = null;

  for (const line of lines) {
    const queryMatch = line.match(/(?:sorgu\s*(?:numarasi|numaras[ıi]|numara|no)|query\s*(?:number|no))\s*[:\-]?\s*([A-Z0-9]{6,})/iu);
    if (queryMatch && !queryNumber) {
      queryNumber = normalizeQueryNumber(queryMatch[1]);
    }

    const amountMatch = line.match(/(?:[Iiİı][sş]lem\s*tutar[ıi]|[Iiİı][sş]lem\s*tutari|tutar[ıi]|tutari|tutar)\s*[:\-]?\s*([0-9]{1,3}(?:[.,\s][0-9]{3})*(?:[.,][0-9]{2})?|[0-9]+(?:[.,][0-9]{2})?)/iu);
    if (amountMatch && amountValue === null) {
      amountValue = parseMoney(amountMatch[1]);
    }
  }

  const fallbackQuery = [
    /(sorgu\s*(?:numarasi|numaras[ıi]|numara|no)|query\s*(?:number|no))[\s:.-]*([A-Z0-9]{6,})/iu,
    /([A-Z0-9]{8,})/i
  ].map((pattern) => plainText.match(pattern)).find(Boolean);
  if (!queryNumber && fallbackQuery) {
    queryNumber = normalizeQueryNumber(fallbackQuery[1] || fallbackQuery[0]);
  }

  if (!amountValue) {
    const fallbackAmount = plainText.match(/([0-9]{1,3}(?:[.,\s][0-9]{3})*(?:[.,][0-9]{2})?|[0-9]+(?:[.,][0-9]{2})?)\s*(?:TL|TRY|₺)/iu);
    if (fallbackAmount) amountValue = parseMoney(fallbackAmount[1]);
  }

  const hasVakıfbankMarker = /vakifbank|banka|islem|işlem|sorgu numarasi|sorgu numarası|sorgu no|transfer|havale|eft/i.test(lowerText);

  return {
    queryNumber,
    amount: amountValue,
    hasVakıfbankMarker
  };
}

function matchQueryToPurchase(messageInfo, expectedQueryNumber, expectedAmount, expectedDate) {
  const normalizedExpectedQuery = normalizeQueryNumber(expectedQueryNumber || '');
  const normalizedMessageQuery = normalizeQueryNumber(messageInfo.queryNumber || '');
  const amountMatch = expectedAmount != null && messageInfo.amount != null
    ? Math.abs(Number(expectedAmount) - Number(messageInfo.amount)) < 0.01
    : false;
  const queryMatch = Boolean(normalizedExpectedQuery && normalizedMessageQuery === normalizedExpectedQuery);
  const dateMatch = Boolean(expectedDate);
  return {
    queryMatch,
    amountMatch,
    dateMatch,
    matched: Boolean(normalizedMessageQuery && amountMatch && queryMatch && dateMatch)
  };
}

async function loadPendingPurchases() {
  if (!config.supabaseUrl || !config.supabaseKey) {
    return [];
  }

  const url = `${config.supabaseUrl}/rest/v1/purchases?select=id,buyer_id,note_id,amount,payment_status,query_number,created_at&payment_status=in.(pending_payment,rejected,pending_review)`;
  const data = await fetchJson(url, {
    headers: {
      apikey: config.supabaseKey,
      Authorization: `Bearer ${config.supabaseKey}`,
      Prefer: 'return=representation'
    }
  });
  return Array.isArray(data) ? data : [];
}

async function updatePurchaseStatus(purchaseId, status) {
  if (!config.supabaseUrl || !config.supabaseKey || !purchaseId) return;
  const url = `${config.supabaseUrl}/rest/v1/purchases?id=eq.${encodeURIComponent(purchaseId)}`;
  await fetchJson(url, {
    method: 'PATCH',
    headers: {
      apikey: config.supabaseKey,
      Authorization: `Bearer ${config.supabaseKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      payment_status: status,
      reviewed_at: new Date().toISOString()
    })
  });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const debugMails = Boolean(args['debug-mails'] || args['debug-mail'] || args['list-mails']);
  const hasExplicitTarget = Boolean(args['purchase-id'] || args['query-number'] || args['amount']);
  const targetDate = args.date || new Date().toISOString().slice(0, 10);
  const accessToken = await getAccessToken();
  const matches = [];
  const inspected = [];

  if (hasExplicitTarget) {
    const queryNumber = String(args['query-number'] || '').trim();
    const amountValue = Number(args.amount || 0);
    const purchaseId = String(args['purchase-id'] || '').trim();
    const messages = await listMessages(accessToken, targetDate, 20);
    for (const message of messages) {
      const full = await getMessage(accessToken, message.id);
      const content = extractBody(full.payload || {});
      const info = extractQueryInfo(content || '');
      const candidate = { messageId: message.id, ...info, subject: full.payload?.headers?.find((h) => h.name.toLowerCase() === 'subject')?.value || '' };
      inspected.push(candidate);
      if (!info.hasVakıfbankMarker || !info.queryNumber) continue;
      const match = matchQueryToPurchase(info, queryNumber, amountValue, targetDate);
      if (match.matched) {
        matches.push({ purchaseId, queryNumber: info.queryNumber, amount: info.amount, status: 'paid', messageId: message.id });
      }
    }
  } else {
    const purchases = await loadPendingPurchases();
    for (const purchase of purchases) {
      if (!purchase.query_number) continue;
      const purchaseDate = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Europe/Istanbul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(new Date(purchase.created_at || Date.now()));
      const messages = await listMessages(accessToken, purchaseDate, 20);
      for (const message of messages) {
        const full = await getMessage(accessToken, message.id);
        const content = extractBody(full.payload || {});
        const info = extractQueryInfo(content || '');
        const candidate = { messageId: message.id, ...info, subject: full.payload?.headers?.find((h) => h.name.toLowerCase() === 'subject')?.value || '' };
        inspected.push(candidate);
        if (!info.hasVakıfbankMarker || !info.queryNumber) continue;
        const match = matchQueryToPurchase(info, purchase.query_number, Number(purchase.amount || 0), purchaseDate);
        if (match.matched) {
          matches.push({
            purchaseId: purchase.id,
            queryNumber: info.queryNumber,
            amount: info.amount,
            referenceCode: purchase.reference_code,
            status: 'paid',
            messageId: message.id
          });
        }
      }
    }
  }

  if (debugMails && inspected.length) {
    console.log(`\nTarih: ${targetDate} için Gmail taraması (${inspected.length} e-posta):\n`);
    for (const candidate of inspected) {
      const snippet = String(candidate.subject || '').slice(0, 160) || 'Konu okunamadı';
      console.log(JSON.stringify({
        messageId: candidate.messageId,
        subject: snippet,
        queryNumber: candidate.queryNumber || null,
        amount: candidate.amount || null,
        hasVakıfbankMarker: Boolean(candidate.hasVakıfbankMarker)
      }, null, 2));
    }
  }

  if (!matches.length) {
    console.log('Eşleşen Vakıfbank transferi bulunamadı.');
    if (debugMails && inspected.length) {
      console.log('Not: Yukarıdaki maillerden eşleşen sorgu numarası/işlem tutarı tespit edilemedi.');
    }
    return;
  }

  for (const match of matches) {
    console.log(JSON.stringify({
      purchaseId: match.purchaseId,
      queryNumber: match.queryNumber,
      amount: match.amount,
      matchingMailId: match.messageId,
      status: 'paid'
    }, null, 2));
    if (!isTruthy(args['dry-run'])) {
      await updatePurchaseStatus(match.purchaseId, 'paid');
    }
  }
}

if (require.main === module) {
  main().catch((error) => {
    const message = error?.message || String(error || '');
    if (String(message).includes('invalid_grant') || String(message).includes('Bad Request')) {
      console.error('Gmail ödeme doğrulama hatası: Google refresh token geçersiz veya OAuth kimlik bilgileri eşleşmiyor.');
      console.error('Neden olabilir:');
      console.error('1) Refresh token yanlış/eskimiş');
      console.error('2) GOOGLE_CLIENT_ID ve GOOGLE_CLIENT_SECRET aynı OAuth client ile değil');
      console.error('3) Kullanılan token aslında authorization code, refresh token değil');
      console.error('4) Google hesabından app erişimi revoked edilmiş');
      console.error('Çözüm: Google Cloud Console > APIs & Services > Credentials > OAuth 2.0 Client ID ile aynı client ID/secret kullanarak yeni refresh token üret.');
    } else {
      console.error('Gmail ödeme doğrulama hatası:', message);
    }
    process.exitCode = 1;
  });
}

module.exports = { findMatchingTransfer };
