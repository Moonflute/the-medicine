import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, "../../..");
const CATALOG_PATH = path.join(REPO_ROOT, "apps", "medicine-web", "public", "generated", "theory-documents.json");
const REVIEW_DIR = path.join(REPO_ROOT, "reports", "qbank-theory-link-review");
const allowedActions = new Set([
  "add",
  "replace",
  "remove",
  "keep",
  "keep-drug-only",
  "no-suitable-document",
  "needs-review",
]);

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function documentKey(document) {
  return `${document.type}:${document.slug}`;
}

const catalog = readJson(CATALOG_PATH);
const catalogByKey = new Map(catalog.map((document) => [documentKey(document), document]));
const files = fs.existsSync(REVIEW_DIR)
  ? fs.readdirSync(REVIEW_DIR).filter((name) => name.endsWith(".json")).sort()
  : [];

if (!files.length) {
  console.error(`No review manifests found in ${REVIEW_DIR}`);
  process.exit(1);
}

const errors = [];
const warnings = [];
const ids = new Map();
let reviewed = 0;
let proposedLinks = 0;
let noSuitableDocument = 0;

for (const fileName of files) {
  const filePath = path.join(REVIEW_DIR, fileName);
  let rows;
  try {
    rows = readJson(filePath);
  } catch (error) {
    errors.push(`${fileName}: invalid JSON (${error.message})`);
    continue;
  }
  if (!Array.isArray(rows)) {
    errors.push(`${fileName}: root must be an array`);
    continue;
  }

  rows.forEach((row, index) => {
    const label = `${fileName}[${index}]`;
    reviewed += 1;
    if (!row || typeof row !== "object" || Array.isArray(row)) {
      errors.push(`${label}: row must be an object`);
      return;
    }
    if (typeof row.id !== "string" || !row.id) {
      errors.push(`${label}: missing id`);
    } else if (ids.has(row.id)) {
      errors.push(`${label}: duplicate id also present at ${ids.get(row.id)}`);
    } else {
      ids.set(row.id, label);
    }
    if (!allowedActions.has(row.action)) {
      errors.push(`${label}: unsupported action ${JSON.stringify(row.action)}`);
    }
    if (row.payloadHash != null && !/^[a-f0-9]{32}$/i.test(row.payloadHash)) {
      errors.push(`${label}: payloadHash must be an MD5 hex digest`);
    }
    if (!Array.isArray(row.currentDocuments)) {
      errors.push(`${label}: currentDocuments must be an array`);
    }
    if (!Array.isArray(row.proposedDocuments)) {
      errors.push(`${label}: proposedDocuments must be an array`);
      return;
    }
    if (typeof row.rationale !== "string" || !row.rationale.trim()) {
      errors.push(`${label}: rationale is required`);
    }
    if (!new Set(["high", "medium", "low"]).has(row.confidence)) {
      errors.push(`${label}: confidence must be high, medium, or low`);
    }
    if (!Array.isArray(row.flags)) {
      errors.push(`${label}: flags must be an array`);
    }

    const proposedKeys = new Set();
    proposedLinks += row.proposedDocuments.length;
    for (const proposed of row.proposedDocuments) {
      if (!proposed || typeof proposed !== "object" || Array.isArray(proposed)) {
        errors.push(`${label}: proposed document must be an object`);
        continue;
      }
      if (proposed.type !== "disease" && proposed.type !== "cc") {
        errors.push(`${label}: proposed document type must be disease or cc`);
        continue;
      }
      const key = documentKey(proposed);
      if (proposedKeys.has(key)) errors.push(`${label}: duplicate proposed document ${key}`);
      proposedKeys.add(key);
      const canonical = catalogByKey.get(key);
      if (!canonical) {
        errors.push(`${label}: unknown catalog document ${key}`);
        continue;
      }
      if (proposed.title !== canonical.title) {
        errors.push(`${label}: stale title for ${key}; expected ${JSON.stringify(canonical.title)}`);
      }
      if (proposed.category !== canonical.category) {
        errors.push(`${label}: wrong category for ${key}; expected ${JSON.stringify(canonical.category)}`);
      }
    }

    const diseaseDocuments = row.proposedDocuments
      .map((document) => ({ proposed: document, canonical: catalogByKey.get(documentKey(document)) }))
      .filter(({ proposed, canonical }) => proposed.type === "disease" && canonical);
    for (let left = 0; left < diseaseDocuments.length; left += 1) {
      for (let right = left + 1; right < diseaseDocuments.length; right += 1) {
        const a = diseaseDocuments[left].canonical;
        const b = diseaseDocuments[right].canonical;
        const overlaps = (a.scopeSlugs?.includes(b.slug) && a.slug !== b.slug)
          || (b.scopeSlugs?.includes(a.slug) && a.slug !== b.slug);
        if (overlaps && !row.flags?.includes("ancestor-overlap-justified")) {
          errors.push(`${label}: redundant ancestor/descendant pair ${a.title} <> ${b.title}`);
        }
      }
    }

    if (!row.proposedDocuments.length) {
      if (row.noSuitableDocument === true || row.action === "no-suitable-document") {
        noSuitableDocument += 1;
      } else if (row.action !== "keep-drug-only" && row.action !== "needs-review") {
        warnings.push(`${label}: no proposed theory document without an explicit no-document action`);
      }
    }
  });
}

const summary = {
  ok: errors.length === 0,
  files: files.length,
  reviewed,
  proposedLinks,
  noSuitableDocument,
  warnings: warnings.length,
  errors: errors.length,
};
console.log(JSON.stringify(summary, null, 2));
for (const warning of warnings) console.warn(`WARN ${warning}`);
for (const error of errors) console.error(`ERROR ${error}`);
if (errors.length) process.exit(1);
