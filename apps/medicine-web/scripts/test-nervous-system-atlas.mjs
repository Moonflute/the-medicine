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
const nativeAtlasPath = path.join(root, "apps", "medicine-web", "src", "components", "native-neuro-atlas.tsx");
const imageAtlasPath = path.join(root, "apps", "medicine-web", "src", "components", "image-neuro-atlas.tsx");
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
    assert.equal(view.createdAs, "project-original-svg", view.id + " must declare a project-original SVG rendering");
    assert.equal(view.anatomyReviewStatus, "source-mapped", view.id + " needs source-mapped anatomy provenance");
    assert.equal(view.visualReviewStatus, "design-system-checked", view.id + " needs design-system review metadata");
    assert.deepEqual(view.referenceSourceIds, view.assetSourceIds, view.id + " must retain the exact reference source set");
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


test("pilot atlas uses a project illustration image with a separate aligned SVG overlay", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  const nativeAtlas = fs.readFileSync(nativeAtlasPath, "utf8");
  const imageAtlas = fs.readFileSync(imageAtlasPath, "utf8");
  assert.match(nativeAtlas, /ImageNeuroAtlas/, "native atlas must route pilot views to image overlay renderer");
  assert.ok(imageAtlas.includes("href={`\${neuroAssetBasePath}\${map.asset}`}"), "pilot renderer must show a base-path-safe project image layer");
  assert.match(imageAtlas, /function OverlayRegion/, "pilot renderer needs an independent interactive SVG overlay");
  assert.match(imageAtlas, /data-structure-id/, "overlay targets must expose canonical structure IDs");
  assert.match(imageAtlas, /illustrations\//, "pilot renderer must use project-owned illustration assets");
  assert.doesNotMatch(imageAtlas, /reference\//, "pilot renderer must not render legacy reference assets");
  assert.equal(/<image\s+href=/.test(hub), false, "Hub must not render a legacy external base image directly");
});


test("only the three registered image-overlay pilot views are selectable", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  const imageAtlas = fs.readFileSync(imageAtlasPath, "utf8");
  const publishedIds = [...hub.matchAll(/id: "([^"]+)"[^\n]*published: true/g)].map((match) => match[1]);
  assert.deepEqual(publishedIds.sort(), ["brain-midsagittal", "spinal-cross-section", "whole-neuraxis"], "only reviewed pilot views may be selectable");
  for (const id of publishedIds) assert.match(imageAtlas, new RegExp('"' + id + '"'), id + " lacks an image-overlay map");
});

test("theory library has reference-document sections across structures, pathways and examination", () => {
  for (const category of ["Structure", "Pathway", "Reflexes & NEx"]) assert.ok(atlas.theoryTopics.some((topic) => topic.category === category), "missing theory category " + category);
  for (const topic of atlas.theoryTopics) {
    assert.ok(topic.sections?.length >= 2, topic.id + " needs substantive document sections");
    assert.ok(topic.sections.every((section) => section.heading && section.body), topic.id + " has incomplete document content");
  }
});


test("Hub exposes required responsive workspace controls without horizontal selector rails", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  assert.match(hub, /theoryQuery/, "Theory library needs search state");
  assert.match(hub, /mobileInfoOpen/, "mobile detail sheet is missing");
  assert.match(hub, /bottom-\[76px\]/, "mobile detail sheet must clear bottom navigation");
  assert.match(hub, /onAtlasPointerDown/, "atlas pan and pinch handler is missing");
  assert.match(hub, /pointers\.current\.size === 2/, "two-finger pinch zoom is missing");
  assert.match(hub, /desktopInfoOpen/, "desktop information panel must be dismissible");
  assert.equal(/overflow-x-auto/.test(hub), false, "view selection must not depend on a horizontal toolbar rail");
});

test("NEx and Theory never open a legacy bare-SVG view", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  assert.ok(hub.includes("imagePilotViewIds.has(reflex.viewId)"), "NEx must constrain Show in Atlas to an image-overlay pilot");
  assert.ok(hub.includes("imagePilotViewIds.has(theory.viewId)"), "Theory must constrain Show in Atlas to an image-overlay pilot");
  assert.ok(!hub.includes("nativeNeuroViewIds.has(reflex.viewId)"), "legacy SVG views must not be opened from NEx");
});

test("NEx presents route interpretation without converting the workflow into a quiz", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  assert.match(hub, /Normal response/, "NEx needs expected response guidance");
  assert.match(hub, /Abnormal findings \/ cautions/, "NEx needs abnormal finding cautions");
  assert.match(hub, /Laterality/, "NEx needs laterality interpretation");
  assert.doesNotMatch(hub, /Correct answer|Score|Submit answer/, "NEx must not present a quiz workflow");
});

test("pathway and theory controls filter by anatomical learning scope", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  assert.match(hub, /const pathwayOptions = pathways.filter/, "pathway selector must follow the selected layer");
  assert.match(hub, /pathwayLayer\(item\.kind/, "pathway type must map to a learning layer");
  assert.match(hub, /THEORY_SCOPES/, "Theory library needs anatomical scope filters");
  assert.match(hub, /theoryScopeFor\(item\.viewId\)/, "Theory scope filter must be data-driven from atlas location");
});

test("full-screen atlas preserves mobile-safe pan, zoom and reset controls", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  const nativeAtlas = fs.readFileSync(nativeAtlasPath, "utf8");
  assert.match(hub, /fullScreen \? <div/, "full-screen Atlas shell is missing");
  assert.match(hub, /onPointerDown={onAtlasPointerDown}/, "full-screen Atlas must preserve pan interaction");
  assert.match(hub, /aria-label="Zoom out"/, "full-screen Atlas must expose zoom controls");
  assert.match(hub, /aria-label="Reset view"/, "full-screen Atlas must expose reset control");
  assert.match(nativeAtlas, /motion-reduce:transition-none/, "interactive SVG paths must honor reduced motion");
});

test("native SVG highlights all visible structures on selected source-backed pathways", () => {
  const nativeAtlas = fs.readFileSync(nativeAtlasPath, "utf8");
  assert.match(nativeAtlas, /const PATHWAY_STRUCTURE_IDS/, "pathway-to-structure mapping is required");
  assert.match(nativeAtlas, /pathwayStructureIds\.includes\(id\)/, "SVG structure activation must include selected pathway nodes");
  for (const id of ["corticospinal", "dcml", "spinothalamic", "visual", "sympathetic"]) {
    assert.match(nativeAtlas, new RegExp(id), "missing pathway highlight mapping for " + id);
  }
});

test("changing a view keeps the selected pathway available for continuous tract review", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  assert.match(hub, /const chooseView = \(id: string\) => \{ setViewId\(id\); reset\(\); \};/, "view changes must not clear the selected pathway");
  assert.doesNotMatch(hub, /const chooseView = \(id: string\) => \{[^}]*setPathwayId\(""\)/, "view changes must preserve pathway selection");
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
