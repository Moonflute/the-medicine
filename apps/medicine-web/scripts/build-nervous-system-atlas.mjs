import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const SCRIPT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const WORKSPACE_ROOT = path.resolve(SCRIPT_ROOT, "..", "..");
const sourcePath = path.join(WORKSPACE_ROOT, "source_notes", "02 Diseases", "16 신경과-신경외과", "_data", "nervous-system-atlas.json");
const outputPath = path.join(WORKSPACE_ROOT, "_webapp", "data", "nervous-system-atlas.json");
const publicRoot = path.join(SCRIPT_ROOT, "public");

const atlas = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const required = ["views", "structures", "pathways", "dermatomes", "myotomes", "reflexes", "examNodes", "nexSteps", "theoryTopics", "sources"];
for (const key of required) {
  if (!Array.isArray(atlas[key]) || atlas[key].length === 0) throw new Error(`Neuro atlas is missing ${key}.`);
}
for (const source of atlas.sources) { if (!source.id || !source.title || !source.section || !source.url || !source.usedFor || !source.accessedAt || !source.license) throw new Error(`Neuro atlas source manifest is incomplete for ${source.id ?? source.label}.`); }
const sourceIds = new Set(atlas.sources.map((source) => source.id).filter(Boolean));
for (const collection of ["views", "structures", "pathways", "reflexes", "examNodes", "theoryTopics"]) {
  for (const item of atlas[collection]) {
    for (const sourceId of item.sourceIds ?? []) {
      if (!sourceIds.has(sourceId)) throw new Error(`Neuro atlas ${collection}/${item.id} references unknown source ${sourceId}.`);
    }
  }
}
for (const view of atlas.views) {
  if (!view.baseAsset || !view.interactionMap || !view.orientation) throw new Error(`Neuro atlas view ${view.id} lacks base asset metadata.`);
  if (!view.assetId || !view.assetMethod || !view.assetLicense || !view.assetSha256 || !view.reviewStatus || !view.assetSourceIds?.length) throw new Error(`Neuro atlas view ${view.id} lacks asset provenance metadata.`);
  if (view.assetSourceIds.length < 2) throw new Error(`Neuro atlas view ${view.id} must retain at least two image/reference sources.`);
  if (!['public-domain-source', 'licensed-source', 'independently-redrawn'].includes(view.assetMethod)) throw new Error(`Neuro atlas view ${view.id} has an invalid asset method.`);
  if (!['draft-anatomy', 'source-checked', 'review-ready'].includes(view.reviewStatus)) throw new Error(`Neuro atlas view ${view.id} has an invalid review status.`);
  if (view.status && view.status !== view.reviewStatus) throw new Error(`Neuro atlas view ${view.id} has mismatched status metadata.`);
  for (const sourceId of view.assetSourceIds) if (!sourceIds.has(sourceId)) throw new Error(`Neuro atlas view ${view.id} asset references unknown source ${sourceId}.`);
  if (view.assetMethod === "public-domain-source" && !view.assetSourceIds.some((sourceId) => /public domain/i.test(atlas.sources.find((source) => source.id === sourceId)?.license ?? ""))) {
    throw new Error(`Neuro atlas public-domain view ${view.id} has no public-domain source license.`);
  }
  if (!view.baseAsset.startsWith("/")) throw new Error(`Neuro atlas view ${view.id} has a non-public base asset path.`);
  const assetPath = path.join(publicRoot, view.baseAsset);
  if (!fs.existsSync(assetPath)) throw new Error(`Neuro atlas view ${view.id} is missing base asset ${view.baseAsset}.`);
  const assetSha256 = crypto.createHash("sha256").update(fs.readFileSync(assetPath)).digest("hex");
  if (assetSha256 !== view.assetSha256) throw new Error(`Neuro atlas view ${view.id} has a changed asset without a refreshed checksum.`);
  for (const [variantId, asset] of Object.entries(view.variantAssets ?? {})) {
    if (!asset.asset || !asset.assetId || !asset.license || !asset.sourceIds?.length || !asset.sha256) throw new Error("Neuro atlas variant asset metadata is incomplete.");
    for (const sourceId of asset.sourceIds) if (!sourceIds.has(sourceId)) throw new Error("Neuro atlas variant asset references an unknown source.");
    if (!asset.asset.startsWith("/")) throw new Error("Neuro atlas variant asset is not public.");
    const variantPath = path.join(publicRoot, asset.asset);
    if (!fs.existsSync(variantPath)) throw new Error("Neuro atlas variant asset is missing.");
    const variantSha256 = crypto.createHash("sha256").update(fs.readFileSync(variantPath)).digest("hex");
    if (variantSha256 !== asset.sha256) throw new Error("Neuro atlas variant asset checksum changed.");
  }
}
const viewIds = new Set(atlas.views.map((view) => view.id));
const structureIds = new Set(atlas.structures.map((structure) => structure.id));
const examNodeIds = new Set(atlas.examNodes.map((node) => node.id));
for (const topic of atlas.theoryTopics) {
  if (!topic.id || !topic.title || !topic.category || !topic.summary || !topic.viewId || !viewIds.has(topic.viewId) || !Array.isArray(topic.keyPoints) || topic.keyPoints.length === 0) throw new Error(`Neuro atlas theory topic ${topic.id ?? "unknown"} is incomplete.`);
  if (topic.itemId && !structureIds.has(topic.itemId) && !atlas.pathways.some((pathway) => pathway.id === topic.itemId) && !atlas.reflexes.some((reflex) => reflex.id === topic.itemId)) throw new Error(`Neuro atlas theory topic ${topic.id} references an unknown map item.`);
  for (const sourceId of topic.sourceIds ?? []) if (!sourceIds.has(sourceId)) throw new Error(`Neuro atlas theory topic ${topic.id} references unknown source ${sourceId}.`);
}
for (const view of atlas.views) {
  if (!view.sourceIds?.length) throw new Error(`Neuro atlas view ${view.id} has no source ids.`);
}
for (const structure of atlas.structures) {
  if (!structure.viewIds?.length) throw new Error(`Neuro atlas structure ${structure.id} is not assigned to a view.`);
}
for (const pathway of atlas.pathways) {
  if (!pathway.nodes?.length) throw new Error(`Neuro atlas pathway ${pathway.id} has no rendered nodes.`);
  for (const node of pathway.nodes) if (!structureIds.has(node)) throw new Error(`Neuro atlas pathway ${pathway.id} references unknown node ${node}.`);
}
for (const examNode of atlas.examNodes) {
  if (!examNode.id || !examNode.label || !examNode.kind || !examNode.examId || !viewIds.has(examNode.viewId)) throw new Error(`Neuro atlas exam node ${examNode.id ?? "unknown"} is incomplete.`);
  for (const sourceId of examNode.sourceIds ?? []) if (!sourceIds.has(sourceId)) throw new Error(`Neuro atlas exam node ${examNode.id} references unknown source ${sourceId}.`);
}
for (const reflex of atlas.reflexes) {
  if (!reflex.viewId || !viewIds.has(reflex.viewId)) throw new Error(`Neuro atlas reflex ${reflex.id} has an unknown view.`);
  if (!reflex.route?.length) throw new Error(`Neuro atlas reflex ${reflex.id} has no route.`);
  if (!reflex.reviewStatus || !["draft", "source-checked", "retired"].includes(reflex.reviewStatus)) throw new Error(`Neuro atlas reflex ${reflex.id} has an invalid review status.`);
  if (reflex.routeLabels?.length && reflex.routeLabels.length !== reflex.route.length) throw new Error(`Neuro atlas reflex ${reflex.id} route labels are out of order.`);
  if (reflex.routeStages?.length && reflex.routeStages.length !== reflex.route.length) throw new Error(`Neuro atlas reflex ${reflex.id} route stages are out of order.`);
  for (const stage of reflex.routeStages ?? []) if (!["stimulus", "afferent", "central", "efferent", "effector"].includes(stage)) throw new Error(`Neuro atlas reflex ${reflex.id} has an invalid route stage ${stage}.`);
  if (reflex.laterality && (!Array.isArray(reflex.laterality.options) || !reflex.laterality.options.includes(reflex.laterality.default) || !reflex.laterality.description)) throw new Error(`Neuro atlas reflex ${reflex.id} has invalid laterality metadata.`);
  if (reflex.reviewStatus === "source-checked" && (!reflex.routeStages?.length || !reflex.laterality || !reflex.sourceIds?.length)) throw new Error(`Source-checked reflex ${reflex.id} requires stages, laterality, and sources.`);
  for (const nodeId of reflex.route) if (!structureIds.has(nodeId) && !examNodeIds.has(nodeId)) throw new Error(`Neuro atlas reflex ${reflex.id} references unknown route node ${nodeId}.`);
}
if (atlas.reflexes.filter((reflex) => reflex.reviewStatus === "source-checked").length < 10) throw new Error("Neuro atlas requires at least ten source-checked NEx routes.");for (const collection of ["structures", "pathways", "dermatomes", "myotomes", "reflexes", "examNodes", "nexSteps"]) {
  const ids = atlas[collection].map((item) => item.id);
  if (new Set(ids).size !== ids.length || ids.some((id) => !id)) throw new Error(`Neuro atlas ${collection} contains duplicate or empty ids.`);
}
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(atlas, null, 2)}\n`, "utf8");
console.log(`Built nervous-system atlas: ${atlas.structures.length} structures, ${atlas.pathways.length} pathways.`);