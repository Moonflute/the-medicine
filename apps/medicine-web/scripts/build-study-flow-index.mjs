import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataRoot = path.resolve(appRoot, "../../_webapp/data");
const generated = path.join(appRoot, "public/generated");
const search = JSON.parse(fs.readFileSync(path.join(dataRoot, "search-index.json"), "utf8"));
const kinds = { disease: "disease", chiefComplaint: "cc", drug: "drug", labImg: "lab", skill: "skill", physiology: "page", pathology: "page", microorganism: "page", clinicalGroup: "page", resistancePhenotype: "page" };
const entries = search.filter(entry => kinds[entry.type]).map(entry => ({
  key: kinds[entry.type] + ":" + entry.href.replace(/\/$/, ""),
  kind: kinds[entry.type], title: entry.title.slice(0, 300), href: entry.href,
  aliases: [...new Set([...(entry.aliases ?? []), ...(entry.keywords ?? [])])].slice(0, 30),
}));
const documentNames = new Map(search.map(entry => [entry.slug, entry.title]));
const questions = JSON.parse(fs.readFileSync(path.join(generated, "qbank/index.json"), "utf8"));
const shards = new Map();
for (const question of questions) {
  // Private practice-bank content is fetched through its existing approved-user RPC.
  if (question.questionBank === "practice") continue;
  if (!shards.has(question.specialtySlug)) {
    const shardPath = path.join(generated, "qbank", question.specialtySlug + ".json");
    shards.set(question.specialtySlug, fs.existsSync(shardPath) ? new Map(JSON.parse(fs.readFileSync(shardPath, "utf8")).map(value => [value.id, value])) : new Map());
  }
  const full = shards.get(question.specialtySlug).get(question.id);
  const topic = question.targetTitle || documentNames.get(question.targetSlug);
  const excerpt = String(full?.question ?? "").replace(/\s+/g, " ").trim().slice(0, 95);
  entries.push({
    key: "question:" + question.id, kind: "question",
    title: ((topic ? topic + " · " : question.specialty + " · ") + (excerpt || question.questionType || "문제")).slice(0, 300),
    href: "/review/qbank/session?mode=study-flow&ids=" + encodeURIComponent(question.id) + "&count=1",
    aliases: [...new Set([question.id, question.specialty, topic, ...((question.relatedDiseaseSlugs ?? []).map(slug => documentNames.get(slug)))].filter(Boolean))].slice(0, 12),
  });
}
fs.mkdirSync(generated, { recursive: true });
const unique = [...new Map(entries.map(entry => [entry.key, entry])).values()];
const output = JSON.stringify(unique) + "\n";
fs.writeFileSync(path.join(generated, "study-flow-index.json"), output, "utf8");
console.log("Study Flow search: " + unique.length + " entries, " + Buffer.byteLength(output) + " bytes");
