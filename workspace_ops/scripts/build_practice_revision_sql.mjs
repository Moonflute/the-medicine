import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const privateFile = new URL("../../Qbank book/_private/practice-revised-2026-11-v1.jsonl", import.meta.url);
const projection = readFileSync(new URL("./practice_revision_projection.sql", import.meta.url), "utf8").trim();
const [header, ...rows] = readFileSync(privateFile, "utf8").trim().split(/\r?\n/).map(line => JSON.parse(line));
const mode = process.argv[2] ?? "--check";
const letter = /^[A-E]$/;
const nonempty = value => typeof value === "string" && value.trim().length > 0;
const object = value => value !== null && typeof value === "object" && !Array.isArray(value);
const validId = /^QB-(?!REV-)[A-Za-z0-9-]+$/;

assert.equal(header.schema, "practice-revision-v1");
assert.equal(header.scope, "no_unique");
assert.equal(header.edition, "2026-11");
assert.equal(header.expectedCount, 109);
assert.equal(rows.length, header.expectedCount);
assert.equal(new Set(rows.map(row => row.sourceId)).size, rows.length);
for (const { sourceId, sourceHash, kind, protectedOptions, updates, year, department } of rows) {
  assert.ok(validId.test(sourceId) && /^[0-9a-f]{32}$/.test(sourceHash), "invalid source identity");
  assert.ok(Number.isInteger(year) && nonempty(department), `missing source metadata: ${sourceId}`);
  assert.ok(kind === "missing" || kind === "ambiguous", `invalid edit kind: ${sourceId}`);
  assert.ok(object(protectedOptions) && Object.keys(protectedOptions).length > 0, `no protected choices: ${sourceId}`);
  assert.ok(object(updates) && typeof updates.answer === "string" && letter.test(updates.answer) && nonempty(updates.explanation), `invalid grade: ${sourceId}`);
  assert.ok(Object.entries(protectedOptions).every(([key, value]) => letter.test(key) && nonempty(value)), `invalid protected choice: ${sourceId}`);
  const edits = Object.entries(updates.options ?? {});
  assert.ok(nonempty(updates.question) || edits.length > 0, `empty revision: ${sourceId}`);
  assert.ok(edits.every(([key, value]) => letter.test(key) && nonempty(value) && !Object.hasOwn(protectedOptions, key)), `changed historical choice: ${sourceId}`);
  assert.ok(Array.isArray(updates.evidenceReferences) && updates.evidenceReferences.length > 0, `missing evidence: ${sourceId}`);
  assert.ok(updates.evidenceReferences.every(({ title, url }) => nonempty(title) && new URL(url).protocol === "https:"), `invalid evidence: ${sourceId}`);
  const paths = updates.figurePaths ?? [];
  const historicalFigures = Object.values(protectedOptions).filter(value => /^그림 선택지\s*[1-5]$/.test(value)).length;
  assert.ok(Array.isArray(paths) && paths.length === historicalFigures && updates.retainFigures === (paths.length > 0)
    && new Set(paths).size === paths.length && paths.every(path => /^figures\/QB-[0-9A-Za-z-]+\.(?:png|jpe?g)$/i.test(path)), `invalid historical figure: ${sourceId}`);
}

if (mode === "--check") {
  const countBy = key => Object.fromEntries([...new Set(rows.map(row => row[key]))].map(value => [value, rows.filter(row => row[key] === value).length]));
  const protectedChoices = rows.reduce((sum, row) => sum + Object.keys(row.protectedOptions).length, 0);
  const historicalAnswerStillCorrect = rows.filter(row => Object.hasOwn(row.protectedOptions, row.updates.answer)).length;
  console.log(JSON.stringify({
    edition: header.edition, total: rows.length, byDepartment: countBy("department"), byKind: countBy("kind"),
    protectedChoices, historicalAnswerStillCorrect, retainedFigures: rows.filter(row => row.updates.retainFigures).length,
  }, null, 2));
} else if (mode === "--audit-template" || mode === "--audit" || mode === "--seed") {
  const marker = "$practice_revision_payload$";
  const json = JSON.stringify(rows.map(row => ({ ...row, edition: header.edition })));
  assert.ok(!json.includes(marker), "invalid payload delimiter");
  const binding = mode === "--audit-template" ? "$1" : marker + json + marker;
  // Replace via a callback so '$' sequences in private text stay literal.
  const select = projection.split("\n").filter(line => !line.startsWith("--")).join("\n").replace("$1", () => binding);
  if (mode !== "--seed") {
    console.log(`with projected as (${select})
select count(*) as validated_count,
  count(*) filter (where payload->>'gradingMode' = 'single' and payload->>'answer' ~ '^[A-E]$') as single_answer_count,
  count(*) filter (where jsonb_array_length(payload->'figures') > 0) as items_with_retained_figures,
  md5(string_agg(id, ',' order by id)) as revision_id_hash
from projected;`);
  } else {
    // Print privately for an operator. Never run this automatically on the live database.
    // An edition ID is immutable once imported; reruns only succeed when the rows match exactly.
    console.log(`begin;
create temporary table practice_revision_import on commit drop as
${select};
do $validation$
begin
  if (select count(*) from practice_revision_import) <> ${header.expectedCount} then
    raise exception 'Practice revision source validation failed; no items were written';
  end if;
end;
$validation$;
insert into public.private_qbank_revision_items (id, source_item_id, edition, index_data, payload)
select id, source_item_id, edition, index_data, payload from practice_revision_import
on conflict (id) do nothing;
do $validation$
begin
  if exists (
    select 1 from practice_revision_import p
    where not exists (
      select 1 from public.private_qbank_revision_items r
      where r.id = p.id and r.source_item_id = p.source_item_id and r.edition = p.edition
        and r.index_data = p.index_data and r.payload = p.payload
    )
  ) then
    raise exception 'Existing practice edition differs; use a new edition ID';
  end if;
end;
$validation$;
commit;`);
  }
} else {
  throw new Error("Usage: node workspace_ops/scripts/build_practice_revision_sql.mjs [--check|--audit|--seed]");
}
