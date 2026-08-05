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
const drugDataPath = path.join(root, "_webapp", "data", "drugs.json");
const specialtyPagePath = path.join(root, "apps", "medicine-web", "src", "app", "specialty", "[slug]", "page.tsx");
const drugCategoryPagePath = path.join(root, "apps", "medicine-web", "src", "app", "drugs", "category", "[slug]", "page.tsx");
const atlas = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const sourceIds = new Set(atlas.sources.map((source) => source.id));
const structureIds = new Set(atlas.structures.map((structure) => structure.id));
const pathwayIds = new Set(atlas.pathways.map((pathway) => pathway.id));
const reflexIds = new Set(atlas.reflexes.map((reflex) => reflex.id));

function assetPath(asset) { return path.join(publicRoot, asset); }
function pngDimensions(file) {
  const bytes = fs.readFileSync(file);
  assert.equal(bytes.subarray(1, 4).toString("ascii"), "PNG", file + " is not a PNG asset");
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

function hash(file) {
  const bytes = fs.readFileSync(file);
  const normalized = path.extname(file).toLowerCase() === ".svg" ? Buffer.from(bytes.toString("utf8").replace(/\r\n/g, "\n"), "utf8") : bytes;
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

test("all public atlas views use a project illustration with provenance and a stable checksum", () => {
  assert.equal(atlas.views.length, 30);
  for (const view of atlas.views) {
    assert.equal(view.published, true, view.id + " must not fall back to a legacy renderer");
    assert.equal(view.isPilotSelectable, true, view.id + " needs an image-overlay registration");
    assert.equal(view.createdAs, "project-generated-illustration", view.id + " must declare a project illustration");
    assert.ok(view.illustrationAsset, view.id + " is missing project illustration metadata");
    assert.ok(view.illustrationAsset.asset.startsWith("/neuro-atlas/illustrations/"), view.id + " must not render a reference asset");
    assert.ok(fs.existsSync(assetPath(view.illustrationAsset.asset)), view.id + " project illustration is missing");
    assert.equal(hash(assetPath(view.illustrationAsset.asset)), view.illustrationAsset.sha256, view.id + " illustration checksum changed");
    assert.equal(view.illustrationAsset.width > 0 && view.illustrationAsset.height > 0, true, view.id + " illustration dimensions are missing");
    assert.ok(view.illustrationAsset.referenceSourceIds?.length >= 2, view.id + " needs at least two anatomy references");
    for (const id of view.illustrationAsset.referenceSourceIds) assert.ok(sourceIds.has(id), view.id + " unknown illustration source " + id);
  }
});

test("project illustration dimensions and SVG coordinate systems stay aligned", () => {
  const imageAtlas = fs.readFileSync(imageAtlasPath, "utf8");
  for (const view of atlas.views.filter((item) => item.published)) {
    const image = view.illustrationAsset;
    const actual = pngDimensions(assetPath(image.asset));
    assert.deepEqual(actual, { width: image.width, height: image.height }, view.id + " metadata must match the PNG dimensions");
    const assetPos = imageAtlas.indexOf('asset: "' + image.asset + '"');
    assert.ok(assetPos >= 0, view.id + " image map is missing");
    const nearby = imageAtlas.slice(assetPos, assetPos + 180);
    assert.ok(nearby.includes('viewBox: "0 0 '+ image.width + " " + image.height + '"'), view.id + " SVG overlay must share the base image coordinate system");
  }
});

test("every selectable SVG overlay structure has bidirectional canonical view links", () => {
  const imageAtlas = fs.readFileSync(imageAtlasPath, "utf8");
  for (const view of atlas.views.filter((item) => item.published)) {
    const start = imageAtlas.indexOf('"' + view.id + '": {');
    const end = imageAtlas.indexOf('\n  "', start + 1);
    assert.ok(start >= 0, view.id + " needs an overlay map");
    const block = imageAtlas.slice(start, end < 0 ? imageAtlas.length : end);
    const ids = [...block.matchAll(/\{ id: "([^\"]+)"/g)].map((match) => match[1]);
    assert.ok(ids.length, view.id + " needs at least one selectable structure");
    for (const id of ids) {
      const structure = atlas.structures.find((item) => item.id === id);
      assert.ok(structure, view.id + " overlay has unknown structure " + id);
      assert.ok(view.structureIds.includes(id), view.id + " misses " + id + " in its structure list");
      assert.ok(structure.viewIds?.includes(view.id), id + " misses reverse link to " + view.id);
    }
  }
});

test("published views retain no legacy external-image metadata", () => {
  for (const view of atlas.views.filter((item) => item.published)) {
    for (const key of ["baseAsset", "interactionMap", "assetId", "assetMethod", "assetSourceIds", "assetLicense", "assetSha256", "variants", "variantAssets"]) {
      assert.equal(Object.hasOwn(view, key), false, view.id + " must not retain legacy " + key);
    }
    assert.equal(view.createdAs, "project-generated-illustration");
  }
});


test("view hierarchy is a single Atlas-data source of truth", () => {
  for (const view of atlas.views) {
    assert.ok(Array.isArray(view.hierarchy) && view.hierarchy.length > 0, view.id + " hierarchy is missing");
  }
});

test("source metadata keeps external illustrations reference-only", () => {
  for (const source of atlas.sources) {
    const text = [source.usedFor, source.license].filter(Boolean).join(" ");
    assert.doesNotMatch(text, /base asset|base image|베이스 자산|베이스 이미지|bundled image|번들(?:된)? 이미지/i, source.id + " must not imply an external illustration is bundled or rendered");
  }
});

test("planned cerebellar and spinal-level sectional views are published with image-overlay pairs", () => {
  for (const id of ["cerebellum-section", "spinal-cervical-section", "spinal-thoracic-section", "spinal-lumbar-section", "spinal-sacral-section"]) {
    const view = atlas.views.find((item) => item.id === id);
    assert.equal(view?.published, true, id + " must be public");
    assert.equal(view?.illustrationAsset?.asset.startsWith("/neuro-atlas/illustrations/"), true, id + " requires a project illustration");
    assert.match(fs.readFileSync(imageAtlasPath, "utf8"), new RegExp('"' + id + '"'), id + " requires a same-coordinate SVG overlay map");
  }
});

test("every public view has canonical structures and illustration review metadata", () => {
  for (const view of atlas.views.filter((item) => item.published)) {
    assert.ok(view.structureIds?.length, view.id + " structure list missing");
    assert.ok(view.structureIds.every((id) => structureIds.has(id)), view.id + " has an unknown structure");
    assert.ok(view.illustrationAsset?.kind, view.id + " illustration kind missing");
    assert.ok(view.illustrationAsset?.reviewStatus, view.id + " illustration review status missing");
    assert.ok(view.illustrationAsset?.reviewedAt && view.illustrationAsset?.reviewBasis, view.id + " illustration review record missing");
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

test("all pathways retain structured origin, relay, crossing, termination and laterality data", () => {
  for (const pathway of atlas.pathways) {
    assert.ok(pathway.origin, pathway.id + " origin missing");
    assert.ok(pathway.relayNuclei?.length, pathway.id + " relay nuclei missing");
    assert.ok(pathway.decussation, pathway.id + " decussation description missing");
    assert.ok(pathway.termination, pathway.id + " termination missing");
    assert.ok(pathway.primaryFunction, pathway.id + " function missing");
    assert.ok(pathway.lesionPattern, pathway.id + " lesion pattern missing");
    assert.ok(pathway.laterality?.rule && pathway.laterality?.description, pathway.id + " laterality missing");
    assert.ok(pathway.segments?.length, pathway.id + " rendered segments missing");
    assert.ok(pathway.segments.every((segment) => structureIds.has(segment.structureId)), pathway.id + " has an unknown segment structure");
  }
});

test("all NEx records have explicit laterality or comparison guidance", () => {
  for (const reflex of atlas.reflexes) {
    assert.ok(reflex.laterality?.options?.includes(reflex.laterality.default), reflex.id + " laterality options are incomplete");
    assert.ok(reflex.laterality?.description, reflex.id + " laterality description is missing");
  }
});

test("source-checked NEx routes have complete staged laterality metadata", () => {
  const checked = atlas.reflexes.filter((reflex) => reflex.reviewStatus === "source-checked");
  assert.ok(checked.length >= 10, "at least ten source-checked NEx routes are required");
  for (const reflex of checked) {
    assert.equal(reflex.route.length, reflex.routeStages.length, reflex.id + " stages are incomplete");
    assert.equal(reflex.route.length, reflex.routeLabels.length, reflex.id + " labels are incomplete");
    assert.ok(reflex.laterality?.options?.includes(reflex.laterality.default), reflex.id + " laterality is incomplete");
    assert.ok(reflex.route.every((node) => structureIds.has(node)), reflex.id + " route has an unknown node");
    assert.ok(reflex.sourceIds?.every((sourceId) => sourceIds.has(sourceId)), reflex.id + " source missing");
  }
});

test("NEx routes use canonical structure IDs without temporary exam nodes", () => {
  assert.equal("examNodes" in atlas, false, "temporary exam node collection must not be retained");
  assert.equal("nexSteps" in atlas, false, "quiz-step data must not be retained in the atlas");
  for (const reflex of atlas.reflexes) {
    assert.ok(reflex.route.every((id) => structureIds.has(id)), reflex.id + " route must use canonical structure IDs");
    assert.ok(reflex.route.every((id) => !id.startsWith("exam-")), reflex.id + " still has a temporary exam ID");
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


test("theory prose is Korean while anatomy terms stay in the title layer", () => {
  for (const topic of atlas.theoryTopics) {
    assert.match(topic.summary, /[가-힣]/, topic.id + " summary must be Korean prose");
    for (const section of topic.sections ?? []) {
      assert.match(section.heading, /[가-힣]/, topic.id + " section heading must be Korean prose");
      assert.match(section.body, /[가-힣]/, topic.id + " section body must be Korean prose");
    }
  }
});

test("Theory map actions route structures, pathways and NEx records to their native workspace", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  assert.ok(hub.includes("const theoryReflex = theory.itemId ? reflexes.find"), "Theory reflex documents must open NEx rather than a bare map");
  assert.ok(hub.includes('setTab("nex")'), "Theory reflex documents must select the NEx workspace");
  assert.ok(hub.includes("pathways.some((item) => item.id === theory.itemId)"), "Theory pathway documents must keep pathway selection");
  for (const topic of atlas.theoryTopics) {
    assert.ok(structureIds.has(topic.itemId) || pathwayIds.has(topic.itemId) || reflexIds.has(topic.itemId), topic.id + " must resolve to an interactive target");
  }
});

test("image atlas uses a project illustration image with a separate aligned SVG overlay", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  const nativeAtlas = fs.readFileSync(nativeAtlasPath, "utf8");
  const imageAtlas = fs.readFileSync(imageAtlasPath, "utf8");
  assert.match(nativeAtlas, /ImageNeuroAtlas/, "native atlas must route public views to image overlay renderer");
  assert.ok(imageAtlas.includes("<img src={`\${neuroAssetBasePath}\${map.asset}`}"), "image atlas renderer must render a base-path-safe project image layer");
  assert.match(imageAtlas, /function StructureCallout/, "image atlas renderer needs an independent interactive SVG callout layer");
  assert.match(imageAtlas, /data-structure-id/, "overlay targets must expose canonical structure IDs");
  assert.match(imageAtlas, /illustrations\//, "image atlas renderer must use project-owned illustration assets");
  assert.doesNotMatch(imageAtlas, /reference\//, "image atlas renderer must not render legacy reference assets");
  assert.equal(/<image\s+href=/.test(hub), false, "Hub must not render a legacy external base image directly");
});


test("every selectable atlas view uses a registered project illustration and overlay", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  const imageAtlas = fs.readFileSync(imageAtlasPath, "utf8");
  const publishedIds = atlas.views.filter((item) => item.published).map((item) => item.id);
  assert.match(hub, /const views = atlas\.views\.filter/, "view selector must derive its choices from Atlas data");
  assert.doesNotMatch(hub, /const VIEWS:/, "view hierarchy must not be duplicated as a component-local list");
  assert.equal(publishedIds.length, atlas.views.length, "all declared Atlas views must be public");
  assert.equal(new Set(publishedIds).size, publishedIds.length, "published atlas views must not be duplicated");
  for (const id of publishedIds) {
    const view = atlas.views.find((item) => item.id === id);
    assert.ok(view?.illustrationAsset?.asset?.startsWith("/neuro-atlas/illustrations/"), id + " needs a project illustration asset");
    assert.match(imageAtlas, new RegExp('"' + id + '"'), id + " lacks an image-overlay map");
  }
});

test("theory library has reference-document sections across structures, pathways and examination", () => {
  for (const category of ["구조", "경로", "반사·진찰"]) assert.ok(atlas.theoryTopics.some((topic) => topic.category === category), "missing theory category " + category);
  for (const topic of atlas.theoryTopics) {
    assert.ok(topic.sections?.length >= 3, topic.id + " needs substantive document sections");
    assert.ok(topic.sections.every((section) => section.heading && section.body && section.body.length >= 70), topic.id + " needs clinically useful section prose");
    assert.equal(new Set(topic.sections.map((section) => section.body)).size, topic.sections.length, topic.id + " cannot repeat the same text across sections");
    assert.ok(topic.sourceIds?.length, topic.id + " needs a source record");
  }
});


test("generic Atlas UI is Korean while formal anatomy names remain data labels", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  for (const text of ["Whole neuraxis", "No pathway selected", "Hide info", "Structure search", "Motor pathway", "Sensory pathway", "Somatic maps"]) {
    assert.equal(hub.includes(text), false, "generic UI text must be Korean: " + text);
  }
  assert.match(hub, /보기 선택/);
  assert.match(hub, /선택한 경로 없음/);
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
  assert.ok(hub.includes("imageAtlasViewIds.has(reflex.viewId)"), "NEx must constrain Show in Atlas to an image-overlay pilot");
  assert.ok(hub.includes("imageAtlasViewIds.has(theory.viewId)"), "Theory must constrain Show in Atlas to an image-overlay pilot");
  assert.ok(!hub.includes("nativeNeuroViewIds.has(reflex.viewId)"), "legacy SVG views must not be opened from NEx");
});

test("NEx presents route interpretation without converting the workflow into a quiz", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  assert.match(hub, /정상 반응/, "NEx needs expected response guidance");
  assert.match(hub, /이상 소견 \/ 주의사항/, "NEx needs abnormal finding cautions");
  assert.match(hub, /측성/, "NEx needs laterality interpretation");
  assert.doesNotMatch(hub, /Correct answer|Score|Submit answer/, "NEx must not present a quiz workflow");
});


test("every NEx route has a stage-aligned rendered atlas anchor", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  const anchorBlock = hub.slice(hub.indexOf("const NEX_STAGE_ANCHORS"), hub.indexOf("function pathwayLayer"));
  for (const reflex of atlas.reflexes) {
    const key = reflex.id.includes("-") ? "\"" + reflex.id + "\": [" : reflex.id + ": [";
    assert.ok(anchorBlock.includes(key), reflex.id + " has no atlas anchor map");
  }
});

test("NEx routes move each selected stage to a view that renders its anatomical anchor", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  const imageAtlas = fs.readFileSync(imageAtlasPath, "utf8");
  assert.match(hub, /const NEX_STAGE_ANCHORS/, "NEx stages need explicit anatomical anchors");
  assert.match(hub, /imageAtlasViewForStructure\(nexAtlasTarget, reflex\?\.viewId\)/, "NEx must select a view containing the stage anchor");
  assert.match(hub, /이 단계를 지도에서 보기/, "NEx needs a direct atlas action for each stage");
  assert.match(imageAtlas, /export function imageAtlasViewForStructure/, "atlas needs a rendered-structure view lookup");
});

test("pathway and theory controls filter by anatomical learning scope", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  assert.match(hub, /const pathwayOptions = pathways.filter/, "pathway selector must follow the selected layer");
  assert.match(hub, /pathwayLayer\(item\.kind/, "pathway type must map to a learning layer");
  assert.match(hub, /THEORY_SCOPES/, "Theory library needs anatomical scope filters");
  assert.match(hub, /theoryScopeFor\(item\.viewId\)/, "Theory scope filter must be data-driven from atlas location");
});

test("hovered structures expose their English name without relying on a clipped tooltip", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  assert.match(hub, /const hoveredStructure = hoveredId/, "hovered structure lookup is missing");
  assert.match(hub, /hoveredStructure.en/, "hover label must expose the formal structure name");
  assert.match(hub, /max-w-[calc(100%-1.5rem)]/, "hover label must fit within the Atlas viewport");
});

test("pathway stages select canonical structures and move to a matching Atlas view", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  assert.ok(hub.includes("const choosePathwayStage = (index: number)"), "pathway stage selector missing");
  assert.ok(hub.includes("imageAtlasViewForStructure(segment.structureId, viewId)"), "pathway stage must move to its Atlas structure");
  assert.ok(hub.includes("경로 단계"), "desktop and mobile pathway stage controls missing");
  for (const pathway of atlas.pathways) {
    assert.ok(pathway.segments.every((segment) => structureIds.has(segment.structureId)), pathway.id + " stage must resolve to a canonical structure");
  }
});

test("full-screen atlas preserves mobile-safe pan, zoom and reset controls", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  const imageAtlas = fs.readFileSync(imageAtlasPath, "utf8");
  assert.match(hub, /fullScreen \? <div/, "full-screen Atlas shell is missing");
  assert.match(hub, /onPointerDown={onAtlasPointerDown}/, "full-screen Atlas must preserve pan interaction");
  assert.match(hub, /aria-label="축소"/, "full-screen Atlas must expose zoom controls");
  assert.match(hub, /aria-label="보기 초기화"/, "full-screen Atlas must expose reset control");
  assert.match(imageAtlas, /StructureCallout/, "interactive SVG callouts must be rendered above the illustration");
});

test("image overlay renderer keeps selectable paths, keyboard access and pathway emphasis", () => {
  const imageAtlas = fs.readFileSync(imageAtlasPath, "utf8");
  assert.match(imageAtlas, /<img src={`\${neuroAssetBasePath}\${map.asset}`}/, "project illustration must render as a dedicated image layer");
  assert.match(imageAtlas, /data-structure-id/, "overlay structures need canonical IDs");
  assert.match(imageAtlas, /onKeyDown/, "overlay structures need keyboard selection");
  assert.match(imageAtlas, /pathway\.includes\(item\.id\)/, "pathway-to-structure emphasis is required");
  for (const id of ["corticospinal", "dcml", "spinothalamic"]) assert.match(imageAtlas, new RegExp(id), "missing image overlay pathway mapping for " + id);
});

test("changing a view keeps the selected pathway available for continuous tract review", () => {
  const hub = fs.readFileSync(hubPath, "utf8");
  assert.match(hub, /const chooseView = \(id: string\) => \{ const next = views.find/, "view changes must not clear the selected pathway");
  assert.doesNotMatch(hub, /const chooseView = \(id: string\) => \{[^}]*setPathwayId\(""\)/, "view changes must preserve pathway selection");
});

test("pathway selection emphasizes source-backed representative callouts without approximate contour routes", () => {
  const imageAtlas = fs.readFileSync(imageAtlasPath, "utf8");
  assert.match(imageAtlas, /const pathwayRoutes:/, "pathway route registry is missing for compatible view lookup");
  assert.match(imageAtlas, /const pathway = props\.pathwayId \? pathwayStructures/, "selected pathway must resolve against canonical structure IDs");
  assert.doesNotMatch(imageAtlas, /fillOpacity=\{active/, "callout renderer must not present approximate region fills as anatomical boundaries");
  assert.match(imageAtlas, /imageAtlasViewForPathway/, "pathway selection should open a compatible atlas view");
});

test("declared neuro drug links resolve to drug documents", () => {
  const drugs = JSON.parse(fs.readFileSync(drugDataPath, "utf8"));
  const titles = new Set(drugs.map((drug) => drug.title));
  const links = [...atlas.structures, ...atlas.pathways, ...atlas.theoryTopics].flatMap((item) => item.drugLinks ?? []);
  const unresolved = [...new Set(links)].filter((title) => !titles.has(title));
  assert.deepEqual(unresolved, [], "neuro atlas has an unresolved drug link");
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
