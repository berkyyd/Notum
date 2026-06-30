const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = path.resolve(__dirname, "..");
const catalogPath = path.join(root, "src", "data", "yokatlas-programs.json");
const configPath = path.join(root, "src", "supabase-config.js");
const batchSize = Number(process.env.BATCH_SIZE || 500);

function readSupabaseUrl() {
  if (process.env.SUPABASE_URL) return process.env.SUPABASE_URL;
  const config = fs.readFileSync(configPath, "utf8");
  return config.match(/url:\s*["']([^"']+)["']/)?.[1] || "";
}

function stableId(item) {
  if (item.programCode) return String(item.programCode);
  return crypto
    .createHash("sha1")
    .update([item.university, item.faculty, item.department, item.program, item.language].join("|"))
    .digest("hex");
}

function normalize(item) {
  return {
    id: stableId(item),
    source: item.source || "YOK Atlas",
    source_table: item.sourceTable || "",
    level: item.level || "",
    program_code: String(item.programCode || "").trim(),
    university: String(item.university || "").trim(),
    city: String(item.city || "").trim(),
    university_type: String(item.universityType || "").trim(),
    faculty: String(item.faculty || "").trim(),
    unit_type: String(item.unitType || "").trim(),
    department: String(item.department || item.program || "").trim(),
    program: String(item.program || item.department || "").trim(),
    education_type: String(item.educationType || "").trim(),
    language: String(item.language || "").trim()
  };
}

async function upsertBatch(url, serviceKey, rows) {
  const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/categories?on_conflict=id`, {
    method: "POST",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
      Prefer: "resolution=merge-duplicates"
    },
    body: JSON.stringify(rows)
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Supabase import failed: ${response.status} ${body}`);
  }
}

async function main() {
  const url = readSupabaseUrl();
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url) throw new Error("SUPABASE_URL bulunamadi. src/supabase-config.js icine URL yaz veya SUPABASE_URL ver.");
  if (!serviceKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY env degiskeni gerekli.");

  const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"))
    .map(normalize)
    .filter((item) => item.university && item.faculty && item.department);

  for (let index = 0; index < catalog.length; index += batchSize) {
    const batch = catalog.slice(index, index + batchSize);
    await upsertBatch(url, serviceKey, batch);
    console.log(`${Math.min(index + batch.length, catalog.length)} / ${catalog.length} kategori yuklendi`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
