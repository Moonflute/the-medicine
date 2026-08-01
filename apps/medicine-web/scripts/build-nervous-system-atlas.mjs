import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const SCRIPT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const WORKSPACE_ROOT = path.resolve(SCRIPT_ROOT, "..", "..");
const sourcePath = path.join(WORKSPACE_ROOT, "source_notes", "02 Diseases", "16 신경과-신경외과", "_data", "nervous-system-atlas.json");
const outputPath = path.join(WORKSPACE_ROOT, "_webapp", "data", "nervous-system-atlas.json");
const publicRoot = path.join(SCRIPT_ROOT, "public");
const stableHash = (file) => {
  const bytes = fs.readFileSync(file);
  const normalized = path.extname(file).toLowerCase() === ".svg" ? Buffer.from(bytes.toString("utf8").replace(/\r\n/g, "\n"), "utf8") : bytes;
  return crypto.createHash("sha256").update(normalized).digest("hex");
};

const atlas = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const required = ["views", "structures", "pathways", "dermatomes", "myotomes", "reflexes", "theoryTopics", "sources"];
for (const key of required) {
  if (!Array.isArray(atlas[key]) || atlas[key].length === 0) throw new Error(`Neuro atlas is missing ${key}.`);
}
for (const source of atlas.sources) { if (!source.id || !source.title || !source.section || !source.url || !source.usedFor || !source.accessedAt || !source.license) throw new Error(`Neuro atlas source manifest is incomplete for ${source.id ?? source.label}.`); }
const sourceIds = new Set(atlas.sources.map((source) => source.id).filter(Boolean));
for (const collection of ["views", "structures", "pathways", "reflexes", "theoryTopics"]) {
  for (const item of atlas[collection]) {
    for (const sourceId of item.sourceIds ?? []) {
      if (!sourceIds.has(sourceId)) throw new Error(`Neuro atlas ${collection}/${item.id} references unknown source ${sourceId}.`);
    }
  }
}
const uniqueIds = (collection, label) => {
  const ids = collection.map((item) => item.id);
  if (ids.some((id) => !id) || new Set(ids).size !== ids.length) throw new Error("Neuro atlas " + label + " contains duplicate or empty ids.");
};
for (const [label, collection] of Object.entries({ views: atlas.views, structures: atlas.structures, pathways: atlas.pathways, reflexes: atlas.reflexes, theoryTopics: atlas.theoryTopics })) uniqueIds(collection, label);

for (const view of atlas.views) {
  if (!view.hierarchy?.length || !view.orientation || !view.reviewStatus || !view.createdAs || !view.referenceSourceIds?.length || !view.anatomyReviewStatus || !view.visualReviewStatus || !view.reviewScope || !view.reviewedAt || !view.reviewBasis?.length) throw new Error("Neuro atlas view " + view.id + " lacks hierarchy or review metadata.");
  if (view.createdAs !== "project-generated-illustration") throw new Error("Neuro atlas view " + view.id + " must use a project-created illustration.");
  if (!["draft-anatomy", "source-checked", "review-ready"].includes(view.reviewStatus)) throw new Error("Neuro atlas view " + view.id + " has an invalid review status.");
  if (view.referenceSourceIds.length < 2) throw new Error("Neuro atlas view " + view.id + " needs at least two anatomy references.");
  for (const sourceId of view.referenceSourceIds) if (!sourceIds.has(sourceId)) throw new Error("Neuro atlas view " + view.id + " references unknown anatomy source " + sourceId + ".");
  if (new Set(view.sourceIds ?? []).size !== new Set(view.referenceSourceIds).size || view.referenceSourceIds.some((sourceId) => !(view.sourceIds ?? []).includes(sourceId))) throw new Error("Neuro atlas view " + view.id + " source ids must match its anatomy references.");
}

// Every publicly selectable view must use a project-owned base image plus a separate SVG overlay.
const selectableViews = atlas.views.filter((view) => view.isPilotSelectable);
if (selectableViews.length < 3) throw new Error(`Neuro atlas requires at least three registered image-overlay views, found ${selectableViews.length}.`);
for (const view of atlas.views) {
  if (view.isPilotSelectable && !view.published) throw new Error(`Image-overlay view ${view.id} must be explicitly published.`);
  if (view.published && !view.isPilotSelectable) throw new Error(`Published view ${view.id} may not use a legacy or bare-SVG renderer.`);
  if (!view.isPilotSelectable) continue;
  const illustration = view.illustrationAsset;
  if (!illustration?.asset || !illustration.overlayId || !illustration.sha256 || !illustration.width || !illustration.height) throw new Error(`Image-overlay view ${view.id} lacks project illustration/overlay metadata.`);
  if (!illustration.asset.startsWith('/neuro-atlas/illustrations/')) throw new Error(`Image-overlay view ${view.id} cannot use a legacy or external base illustration.`);
  const illustrationPath = path.join(publicRoot, illustration.asset);
  if (!fs.existsSync(illustrationPath)) throw new Error(`Image-overlay view ${view.id} is missing project illustration ${illustration.asset}.`);
  if (stableHash(illustrationPath) !== illustration.sha256) throw new Error(`Image-overlay view ${view.id} illustration checksum changed; refresh the anatomy review record.`);
  if (!illustration.referenceSourceIds?.length || illustration.referenceSourceIds.length < 2) throw new Error(`Image-overlay view ${view.id} needs two anatomy references.`);
  for (const sourceId of illustration.referenceSourceIds) if (!sourceIds.has(sourceId)) throw new Error(`Image-overlay view ${view.id} references unknown anatomy source ${sourceId}.`);
}

const viewIds = new Set(atlas.views.map((view) => view.id));
const structureIds = new Set(atlas.structures.map((structure) => structure.id));
for (const topic of atlas.theoryTopics) {
  if (!topic.id || !topic.title || !topic.category || !topic.summary || !topic.viewId || !viewIds.has(topic.viewId) || !Array.isArray(topic.keyPoints) || topic.keyPoints.length === 0) throw new Error(`Neuro atlas theory topic ${topic.id ?? "unknown"} is incomplete.`);
  if (topic.itemId && !structureIds.has(topic.itemId) && !atlas.pathways.some((pathway) => pathway.id === topic.itemId) && !atlas.reflexes.some((reflex) => reflex.id === topic.itemId)) throw new Error(`Neuro atlas theory topic ${topic.id} references an unknown map item.`);
  for (const sourceId of topic.sourceIds ?? []) if (!sourceIds.has(sourceId)) throw new Error(`Neuro atlas theory topic ${topic.id} references unknown source ${sourceId}.`);
}
for (const view of atlas.views) {
  if (!view.sourceIds?.length) throw new Error(`Neuro atlas view ${view.id} has no source ids.`);
}
for (const view of atlas.views) {
  if (!view.structureIds?.length) throw new Error("Neuro atlas view " + view.id + " has no canonical structure list.");
  for (const structureId of view.structureIds) if (!structureIds.has(structureId)) throw new Error("Neuro atlas view " + view.id + " references unknown structure " + structureId + ".");
  const illustration = view.illustrationAsset;
  if (!illustration?.kind || !illustration.reviewStatus || !illustration.reviewedAt || !illustration.reviewBasis) throw new Error("Neuro atlas view " + view.id + " has incomplete project illustration review metadata.");
}
for (const structure of atlas.structures) {
  if (!structure.viewIds?.length) throw new Error(`Neuro atlas structure ${structure.id} is not assigned to a view.`);
  for (const viewId of structure.viewIds) if (!viewIds.has(viewId)) throw new Error(`Neuro atlas structure ${structure.id} references unknown view ${viewId}.`);
  if (structure.parentId && !structureIds.has(structure.parentId)) throw new Error(`Neuro atlas structure ${structure.id} references unknown parent ${structure.parentId}.`);
}
for (const pathway of atlas.pathways) {
  if (!pathway.nodes?.length) throw new Error("Neuro atlas pathway " + pathway.id + " has no rendered nodes.");
  if (!pathway.origin || !pathway.relayNuclei?.length || !pathway.decussation || !pathway.termination || !pathway.primaryFunction || !pathway.lesionPattern || !pathway.laterality?.rule || !pathway.laterality?.description || !pathway.segments?.length || !pathway.reviewedAt || !pathway.reviewBasis) throw new Error("Neuro atlas pathway " + pathway.id + " lacks structured route metadata.");
  for (const node of pathway.nodes) if (!structureIds.has(node)) throw new Error("Neuro atlas pathway " + pathway.id + " references unknown node " + node + ".");
  for (const segment of pathway.segments) if (!structureIds.has(segment.structureId) || !segment.role || !segment.label) throw new Error("Neuro atlas pathway " + pathway.id + " has an invalid render segment.");
}
for (const reflex of atlas.reflexes) {
  if (!reflex.viewId || !viewIds.has(reflex.viewId)) throw new Error(`Neuro atlas reflex ${reflex.id} has an unknown view.`);
  if (!reflex.route?.length) throw new Error(`Neuro atlas reflex ${reflex.id} has no route.`);
  if (!reflex.reviewStatus || !["draft", "source-checked", "retired"].includes(reflex.reviewStatus)) throw new Error(`Neuro atlas reflex ${reflex.id} has an invalid review status.`);
  if (reflex.routeLabels?.length && reflex.routeLabels.length !== reflex.route.length) throw new Error(`Neuro atlas reflex ${reflex.id} route labels are out of order.`);
  if (reflex.routeStages?.length && reflex.routeStages.length !== reflex.route.length) throw new Error(`Neuro atlas reflex ${reflex.id} route stages are out of order.`);
  for (const stage of reflex.routeStages ?? []) if (!["stimulus", "afferent", "central", "efferent", "effector"].includes(stage)) throw new Error(`Neuro atlas reflex ${reflex.id} has an invalid route stage ${stage}.`);
  if (!reflex.laterality || !Array.isArray(reflex.laterality.options) || !reflex.laterality.options.includes(reflex.laterality.default) || !reflex.laterality.description) throw new Error("Neuro atlas reflex " + reflex.id + " requires complete laterality metadata.");
  if (reflex.reviewStatus === "source-checked" && (!reflex.routeStages?.length || !reflex.laterality || !reflex.sourceIds?.length)) throw new Error(`Source-checked reflex ${reflex.id} requires stages, laterality, and sources.`);
  for (const nodeId of reflex.route) if (!structureIds.has(nodeId)) throw new Error(`Neuro atlas reflex ${reflex.id} references unknown route node ${nodeId}.`);
}
if (atlas.reflexes.filter((reflex) => reflex.reviewStatus === "source-checked").length < 10) throw new Error("Neuro atlas requires at least ten source-checked NEx routes.");for (const collection of ["dermatomes", "myotomes"]) uniqueIds(atlas[collection], collection);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(atlas, null, 2)}\n`, "utf8");
console.log(`Built nervous-system atlas: ${atlas.structures.length} structures, ${atlas.pathways.length} pathways.`);