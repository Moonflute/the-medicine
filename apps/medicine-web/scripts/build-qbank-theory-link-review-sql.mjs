import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(SCRIPT_DIR, "../../..");
const REVIEW_DIR = path.join(REPO_ROOT, "reports", "qbank-theory-link-review");
const SQL_DIR = path.join(REVIEW_DIR, "sql");
const prefix = process.argv.find((value) => value.startsWith("--prefix="))?.slice("--prefix=".length) ?? "phase1-";
const chunkSize = Number(process.argv.find((value) => value.startsWith("--chunk-size="))?.slice("--chunk-size=".length) ?? 50);
const reviewVersion = process.argv.find((value) => value.startsWith("--review-version="))?.slice("--review-version=".length) ?? "2026-09-22-v1";
const reviewedAt = new Date().toISOString();

function sqlText(value) {
  if (value == null) return "null";
  return `'${String(value).replaceAll("'", "''")}'`;
}

function sqlJson(value) {
  return `${sqlText(JSON.stringify(value))}::jsonb`;
}

const files = fs.readdirSync(REVIEW_DIR)
  .filter((name) => name.startsWith(prefix) && name.endsWith(".json"))
  .sort();
if (!files.length) {
  console.error(`No manifests beginning with ${JSON.stringify(prefix)} in ${REVIEW_DIR}`);
  process.exit(1);
}

const rows = files.flatMap((fileName) => {
  const parsed = JSON.parse(fs.readFileSync(path.join(REVIEW_DIR, fileName), "utf8"));
  if (!Array.isArray(parsed)) throw new Error(`${fileName} must contain an array`);
  return parsed.map((row) => ({ ...row, manifest: fileName }));
});

const ids = new Set();
for (const row of rows) {
  if (ids.has(row.id)) throw new Error(`Duplicate review id ${row.id}`);
  ids.add(row.id);
  if (!/^[a-f0-9]{32}$/i.test(row.payloadHash ?? "")) throw new Error(`Missing or invalid payloadHash for ${row.id}`);
}

fs.mkdirSync(SQL_DIR, { recursive: true });
const generated = [];
for (let offset = 0; offset < rows.length; offset += chunkSize) {
  const chunk = rows.slice(offset, offset + chunkSize);
  const values = chunk.map((row) => {
    const documents = row.proposedDocuments.map(({ type, slug, title }) => ({ type, slug, title }));
    return `    (${[
      sqlText(row.id),
      sqlText(row.payloadHash),
      sqlJson(documents),
      sqlText(row.action),
      sqlText(row.rationale),
      sqlText(row.confidence),
      sqlJson(row.flags ?? []),
      sqlText(row.neededDocument ?? null),
      sqlText(row.manifest),
    ].join(", ")})`;
  }).join(",\n");

  const sql = `begin;

with review_values (
  id,
  payload_hash,
  proposed_documents,
  action,
  rationale,
  confidence,
  flags,
  needed_document,
  manifest
) as (
  values
${values}
),
prepared as (
  select
    c.id,
    c.payload,
    c.index_data,
    v.action,
    v.rationale,
    v.confidence,
    v.flags,
    v.needed_document,
    v.manifest,
    coalesce((
      select jsonb_agg(document)
      from jsonb_array_elements(coalesce(c.payload->'relatedDocuments', '[]'::jsonb)) document
      where document->>'type' = 'drug'
    ), '[]'::jsonb) || v.proposed_documents as final_documents,
    coalesce((
      select jsonb_agg(document->>'slug')
      from jsonb_array_elements(v.proposed_documents) document
      where document->>'type' = 'disease'
    ), '[]'::jsonb) as final_disease_slugs,
    coalesce((
      select jsonb_agg(document->>'title')
      from jsonb_array_elements(v.proposed_documents) document
      where document->>'type' = 'disease'
    ), '[]'::jsonb) as final_disease_terms,
    coalesce((
      select jsonb_agg(document->>'slug')
      from jsonb_array_elements(v.proposed_documents) document
      where document->>'type' = 'cc'
    ), '[]'::jsonb) as final_cc_slugs
  from public.private_qbank_canonical_items c
  join review_values v on v.id = c.id
  where md5(c.payload::text) = v.payload_hash
),
updated as (
  update public.private_qbank_canonical_items c
  set
    payload = c.payload || jsonb_build_object(
      'relatedDocuments', p.final_documents,
      'relatedDiseaseSlugs', p.final_disease_slugs,
      'relatedDiseaseTerms', p.final_disease_terms,
      'relatedCcSlugs', p.final_cc_slugs,
      'linkReview', jsonb_strip_nulls(jsonb_build_object(
        'status', case
          when p.action = 'no-suitable-document' then 'codex-semantic-reviewed-no-suitable-document'
          when p.action = 'needs-review' then 'codex-semantic-review-pending'
          else 'codex-semantic-reviewed'
        end,
        'method', 'question-answer-explanation-review',
        'reviewVersion', ${sqlText(reviewVersion)},
        'reviewedAt', ${sqlText(reviewedAt)},
        'action', p.action,
        'reason', p.rationale,
        'confidence', p.confidence,
        'flags', p.flags,
        'neededDocument', p.needed_document,
        'manifest', p.manifest,
        'previous', jsonb_build_object(
          'relatedDocuments', coalesce(c.payload->'relatedDocuments', '[]'::jsonb),
          'relatedDiseaseSlugs', coalesce(c.payload->'relatedDiseaseSlugs', '[]'::jsonb),
          'relatedDiseaseTerms', coalesce(c.payload->'relatedDiseaseTerms', '[]'::jsonb),
          'relatedCcSlugs', coalesce(c.payload->'relatedCcSlugs', '[]'::jsonb),
          'linkReview', coalesce(c.payload->'linkReview', '{}'::jsonb)
        )
      ))
    ),
    index_data = coalesce(c.index_data, '{}'::jsonb) || jsonb_build_object(
      'relatedDiseaseSlugs', p.final_disease_slugs,
      'relatedCcSlugs', p.final_cc_slugs
    )
  from prepared p
  where c.id = p.id
  returning c.id
)
select jsonb_build_object(
  'requested', (select count(*) from review_values),
  'updated', (select count(*) from updated),
  'conflicts', coalesce((
    select jsonb_agg(v.id order by v.id)
    from review_values v
    left join updated u on u.id = v.id
    where u.id is null
  ), '[]'::jsonb)
) as result;

commit;
`;

  const sequence = String(Math.floor(offset / chunkSize) + 1).padStart(3, "0");
  const fileName = `${prefix.replace(/[^a-z0-9_-]+/gi, "-")}${sequence}.sql`;
  const filePath = path.join(SQL_DIR, fileName);
  fs.writeFileSync(filePath, sql, "utf8");
  generated.push(path.relative(REPO_ROOT, filePath));
}

console.log(JSON.stringify({ ok: true, prefix, rows: rows.length, chunks: generated.length, generated }, null, 2));
