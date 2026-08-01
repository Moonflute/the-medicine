import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
const sourcePath = path.join(root, "source_notes", "02 Diseases", "16 신경과-신경외과", "_data", "nervous-system-atlas.json");
const publicRoot = path.join(root, "apps", "medicine-web", "public");
const hubPath = path.join(root, "apps", "medicine-web", "src", "components", "nervous-system-hub.tsx");
const diseaseDataPath = path.join(root, "_webapp", "data", "diseases.json");
const specialtyPagePath = path.join(root, "apps", "medicine-web", "src", "app", "specialty", "[slug]", "page.tsx");
const drugCategoryPagePath = path.join(root, "apps", "medicine-web", "src", "app", "drugs", "category", "[slug]", "page.tsx");
const atlas = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const sourceIds = new Set(atlas.sources.map((source) => source.id));
const structureIds = new Set(atlas.structures.map((structure) => structure.id));
const pathwayIds = new Set(atlas.pathways.map((pathway) => pathway.id));
const reflexIds = new Set(atlas.reflexes.map((reflex) => reflex.id));

function assetPath(asset) { return path.join(publicRoot, asset); }
function hash(file) {
  const bytes = fs.readFileSync(file);
  const normalized = path.extname(file).toLowerCase() === ".svg" ? Buffer.from(bytes.toString("utf8").replace(/\r\n/g, "\n"), "utf8") : bytes;
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

test("all 20 atlas views have an existing base asset, provenance, and stable checksum", () => {
  assert.equal(atlas.views.length, 20);
  assert.equal(atlas.views.filter((view) => view.reviewStatus === "draft-anatomy").length, 0, "draft anatomy view remains");
  for (const view of atlas.views) {
    assert.ok(view.reviewedAt && view.reviewBasis?.length >= 3, view.id + " is missing audit metadata");
    assert.ok(fs.existsSync(assetPath(view.baseAsset)), view.id + " base asset is missing");
    assert.equal(hash(assetPath(view.baseAsset)), view.assetSha256, view.id + " base checksum changed");
    assert.ok(view.assetSourceIds.length >= 2, view.id + " needs at least two references");
    for (const id of view.assetSourceIds) assert.ok(sourceIds.has(id), view.id + " unknown asset source " + id);
    for (const [variant, asset] of Object.entries(view.variantAssets ?? {})) {
      assert.ok(fs.existsSync(assetPath(asset.asset)), view.id + "/" + variant + " variant asset missing");
      assert.equal(hash(assetPath(asset.asset)), asset.sha256, view.id + "/" + variant + " checksum changed");
      for (const id of asset.sourceIds) assert.ok(sourceIds.has(id), view.id + "/" + variant + " unknown source " + id);
    }
  }
});

test("three core long tracts retain ordered source-backed nodes", () => {
  const expected = {
    corticospinal: ["precentral-gyrus", "internal-capsule", "midbrain", "pons", "medulla", "lateral-corticospinal", "nerve-root", "peripheral-nerve", "skeletal-muscle"],
    dcml: ["peripheral-nerve", "nerve-root", "dorsal-column", "medulla", "thalamus", "postcentral-gyrus"],
    spinothalamic: ["peripheral-nerve", "nerve-root", "spinothalamic", "thalamus", "postcentral-gyrus"],
  };
  for (const [id, nodes] of Object.entries(expected)) {
    const pathway = atlas.pathways.find((item) => item.id === id);
    assert.deepEqual(pathway?.nodes, nodes, id + " node order changed");
    assert.ok(pathway.sourceIds.every((sourceId) => sourceIds.has(sourceId)), id + " source missing");
    assert.ok(nodes.every((node) => structureIds.has(node)), id + " structure missing");
  }
});

test("source-checked NEx routes have complete staged laterality metadata", () => {
  const checked = atlas.reflexes.filter((reflex) => reflex.reviewStatus === "source-checked");
  assert.ok(checked.length >= 10, "at least ten source-checked NEx routes are required");
  for (const reflex of checked) {
    assert.equal(reflex.route.length, reflex.routeStages.length, reflex.id + " stages are incomplete");
    assert.equal(reflex.route.length, reflex.routeLabels.length, reflex.id + " labels are incomplete");
    assert.ok(reflex.laterality?.options?.includes(reflex.laterality.default), reflex.id + " laterality is incomplete");
    assert.ok(reflex.route.every((node) => structureIds.has(node) || atlas.examNodes.some((item) => item.id === node)), reflex.id + " route has an unknown node");
    assert.ok(reflex.sourceIds?.every((sourceId) => sourceIds.has(sourceId)), reflex.id + " source missing");
  }
});

test("theory topics resolve to a view and a map target", () => {
  const views = new Set(atlas.views.map((view) => view.id));
  for (const topic of atlas.theoryTopics) {
    assert.ok(views.has(topic.viewId), topic.id + " has unknown view");
    assert.ok(structureIds.has(topic.itemId) || pathwayIds.has(topic.itemId) || reflexIds.has(topic.itemId), topic.id + " has unknown item");
    assert.ok(topic.sourceIds?.every((sourceId) => sourceIds.has(sourceId)), topic.id + " source missing");
  }
});


test("every rendered structure hit maps to a concrete atlas view and source group", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  const hitIds = [...hub.matchAll(/<Hit id="([^"]+)"/g)].map((match) => match[1]);
  const hitMapSection = hub.slice(hub.indexOf("const HIT_VIEW"), hub.indexOf("};", hub.indexOf("const HIT_VIEW")) + 2);
  const mappedIds = [...hitMapSection.matchAll(/(?:"([^"]+)"|\b([\w-]+)):/g)].map((match) => match[1] ?? match[2]);
  const missing = [...new Set(hitIds)].filter((id) => !mappedIds.includes(id));
  assert.deepEqual(missing, [], "a rendered hit has no view mapping");
  const knownViews = new Set(atlas.views.map((view) => view.id));
  const mappings = [...hitMapSection.matchAll(/(?:"([^"]+)"|\b([\w-]+)):"([^"]+)"/g)];
  for (const mapping of mappings) assert.ok(knownViews.has(mapping[3]), "unknown mapped view " + mapping[3]);
  assert.equal(/label="\?{2,}/.test(hub), false, "corrupted question-mark label remains in map source");
  assert.match(hub, /function atlasAssetSrc\(asset\?: string\)/, "atlas public asset resolver is missing");
  assert.match(hub, /<image href=\{src\}/, "atlas frame must use the base-path-resolved source");
});


test("Disease and Drug entry points and all linked disease titles resolve", () => {
  const specialtyPage = fs.readFileSync(specialtyPagePath, "utf8");
  const drugCategoryPage = fs.readFileSync(drugCategoryPagePath, "utf8");
  assert.match(specialtyPage, /NervousSystemToolEntry/);
  assert.match(drugCategoryPage, /href="\/nervous-system-hub"/);
  const diseases = JSON.parse(fs.readFileSync(diseaseDataPath, "utf8"));
  const titles = new Set(diseases.map((disease) => disease.title));
  const linkedTitles = [...atlas.structures, ...atlas.pathways].flatMap((item) => item.links ?? []);
  const unresolved = [...new Set(linkedTitles)].filter((title) => !titles.has(title));
  assert.deepEqual(unresolved, [], "neuro map has an unresolved disease link");
});
