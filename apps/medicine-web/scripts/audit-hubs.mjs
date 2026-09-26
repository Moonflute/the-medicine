import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const workspaceRoot = path.resolve(appRoot, "..", "..");
const dataRoot = path.join(workspaceRoot, "_webapp", "data");
const read = (name) => JSON.parse(fs.readFileSync(path.join(dataRoot, name), "utf8"));
const fail = (message) => { throw new Error(message); };

const diseases = read("diseases.json");
const infection = read("infection-pathways.json");
const maternal = read("maternal-child-hub.json");
const neuro = read("nervous-system-atlas.json");
const diseaseSlugs = new Set(diseases.map((item) => item.slug));

for (const pathway of infection.pathways) {
  if (!diseaseSlugs.has(pathway.diseaseSlug)) fail(`Broken infection disease link: ${pathway.id}`);
  if (!pathway.sourceIds.every((id) => infection.sources.some((source) => source.id === id))) fail(`Broken infection source: ${pathway.id}`);
}

const maternalSources = new Set(maternal.sources.map((source) => source.id));
if (new Set(maternal.stages.map((stage) => stage.id)).size !== maternal.stages.length) fail("Duplicate maternal-child stage id.");
for (const stage of maternal.stages) {
  if (!stage.sourceIds.length || stage.sourceIds.some((id) => !maternalSources.has(id))) fail(`Broken maternal-child source: ${stage.id}`);
}

const neuroSources = new Set(neuro.sources.map((source) => source.id));
const neuroItems = [...neuro.structures, ...neuro.pathways, ...neuro.reflexes, ...neuro.theoryTopics];
for (const item of neuroItems) {
  if (!item.note || !Array.isArray(item.note.anatomy) || !Array.isArray(item.note.function) || !Array.isArray(item.note.clinical) || !Array.isArray(item.note.related) || !Array.isArray(item.note.diseases)) fail(`Missing neuro note payload: ${item.id}`);
  if ((item.note.sourceIds ?? item.sourceIds ?? []).some((id) => !neuroSources.has(id))) fail(`Broken neuro source: ${item.id}`);
}

console.log(JSON.stringify({
  ok: true,
  infection: { pathways: infection.pathways.length, sources: infection.sources.length },
  maternalChild: { stages: maternal.stages.length, milestones: maternal.pediatricMilestones.length, sources: maternal.sources.length },
  nervousSystem: { notes: neuroItems.length, structures: neuro.structures.length, pathways: neuro.pathways.length, reflexes: neuro.reflexes.length, sources: neuro.sources.length },
}, null, 2));
