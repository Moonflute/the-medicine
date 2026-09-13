# Expansion verification — current local build

## Verified in Chromium

`tmp/atlas-qa/check-expansion-full.mjs` loaded all eight target models at both original and light quality. All 190 structure selections matched the English picker label and isolated exactly one mesh. Adrenals and testes were explicitly switched to bilateral mode before enumerating all structures. All sixteen views passed the 390 px horizontal-overflow check. No page errors occurred.

The audit checks interaction and source identifiers, not clinical anatomical completeness. OpenEar has source mesh identifiers and a DOI; malleus, incus and stapes additionally have verified UBERON term mappings. Other OpenEar ontology mappings remain unassigned. Other seven models returned ontology IDs for all tested source structures.

Machine-readable output: `tmp/atlas-qa/expansion-full-selection.json`.

## Remaining model work

- Thyroid: gland, four parathyroids, ten source vascular meshes and two recurrent laryngeal nerve trunks exist (19 total). Inferior thyroid arterial distal connections are incomplete in the source; left superior thyroid vessels, terminal nerve branches and follicles remain absent. Both qualities passed all 19 selections and geometry checks.
- Adrenals: two source gland surfaces and six vessels (bilateral middle/inferior suprarenal arteries and suprarenal veins) plus a separate five-layer teaching cutaway exist. Superior suprarenal arteries, microvascular branching and source internal segmentation are absent. Eight structures passed selection and source/light geometry verification.
- Gallbladder: six source structures can be explored independently and with liver/pancreas; further duct anatomy remains limited by the source.
- Testes: four coarse source surfaces and nineteen teaching structures exist; smoother shading preserves the 736 source triangles but cannot improve silhouette or source detail.
- Pharynx/larynx: source framework and same-source regional combination exist; mucosal folds and airway lumen remain absent.
- Nose: fifteen source structures exist, including bilateral maxillae and palatine bones; turbinates within the ethmoid are not individually segmented; mucosa and sinus spaces are absent.
- Ear: twelve OpenEar structures plus separate left/right auricle specimens exist; auditory tube, detailed auricular regions and membranous labyrinth remain absent.

The new source details are separate specimens, not registered onto the HRA whole-body reference. Low-end physical device testing and expert anatomical sign-off have not been performed. These results do not close the full goal.

Subsequent nose expansion: original and light each passed all 15 selections, English labels, source ontology IDs and mobile horizontal-overflow checks. Evidence: tmp/atlas-qa/nose-palate-selection.json. The earlier 146-selection snapshot predates this addition.




CPU-throttled smoke run: Chromium 4x CPU slowdown, reduced motion, local file delivery, desktop render viewport and mobile overflow check. All eight models reported zero new rendered frames during a 600 ms idle observation after 1.6 s settling. First cold entry took 8.214 s; subsequent entries ranged 0.546–0.720 s with possible cache effects. This is not a sustained-rotation or physical low-end-device benchmark. Evidence: tmp/atlas-qa/expansion-cpu4-benchmark.json.


Testis outflow: BodyParts3D FJ3135/FJ3140 added as separate unilateral source views with the same-source testis and epididymis. Six source meshes / 2,790 triangles / 61,625 gzip bytes, source round-trip verified. Both sides load, show three selectable structures and restore to the base model. The source's coarse surface and absent lumen/ejaculatory ducts remain limitations.


Biliary regional regression: original and light each preserved 55 deduplicated combined structures, isolated the common bile duct, reached maximum exploded state, restored the combined arrangement, and returned to six standalone structures. Both passed the 390 px horizontal-overflow check. The light maximum-explosion screenshot was visually inspected. Test: tmp/atlas-qa/check-biliary-context-explosion.mjs. Physical device details have been requested from the user; no real-device result is claimed.


### Current full-selection recheck (2026-09-13)
- Rebuilt current sources and checked all 8 base models in light and original quality: 16 runs, 186 structure selections. All selected English labels matched the picker; isolation displayed exactly one structure; provenance checks passed; no page errors or mobile horizontal overflow at 390 × 844.
- Updated visible anatomy notes to match thyroid 17, adrenal 8 and nose 15 structures, separate auricle views and optional laryngeal framework views.
- This checks interaction and metadata consistency, not clinical anatomical completeness or physical low-end device performance.

### Surface and internal-detail recheck (2026-09-13)
- Strengthened original/light comparison with up to 256 triangle centroids per primitive in each direction, in addition to vertex samples. All eight models pass the existing 1% per-mesh extent tolerance; this remains a sampled comparison, not a full Hausdorff bound or anatomical validation.
- Re-ran adrenal/testis schematic layers and duct endpoints, larynx/pharynx grouping and indexed-buffer checks, and testis shading position preservation: all pass.

### Alternative testis source acquired (2026-09-13)
- Official BodyParts3D 3.0 95%-reduced OBJ archive: https://dbarchive.biosciencedbc.jp/data/bodyparts3d/20110915/BodyParts3D_3.0_obj_95.zip . Read ZIP directory and four relevant entries by HTTP range; verified ZIP CRC and recorded SHA-256 in tmp/atlas-qa/source30-95/audit.json. No full archive download.
- Candidate right/left testis: 278/280 triangles; right/left epididymis: 120/484. Total 1,162 versus current 736. Source-space bounds are close but not identical (testes-source-comparison.json).
- Candidate is an older version and triangle count alone is not proof of improved anatomy. It is staged for visual and geometric comparison, not installed into the application. Preserve source version distinction and do not silently replace source43 files.

### Testis candidate visual decision (2026-09-13)
- Rendered current 4.3 and official 3.0 95% source meshes with identical material, lighting, camera and normal treatment at 0/90/180 degrees. Inspected tmp/atlas-qa/testes-source-comparison.png. Candidate has modestly smoother epididymal surfaces but does not resolve the unclear body/tail continuity of the coarse base representation.
- Decision: do not replace source43 with the older source merely for its higher triangle count. Preserve the current source set and source-aligned outflow view. The 19-part teaching cutaway remains the explicit route for head/body/tail and internal duct exploration. Updated the organ description to state that these regions are not separately selectable in the base mesh. This is a visual comparison, not expert validation.

### Sustained keyboard-input benchmark (2026-09-13)
- All eight light models passed a 4-second synthetic ArrowRight input stream at 33 ms intervals under 4x Chromium CPU throttling, 1366 × 900, reduced motion enabled.
- Render-counter observation intervals: median 33.1–34.0 ms, p95 51.4–53.2 ms, maximum 60.2 ms across this run. These timings are limited by the input stream and DOM observation; they are not maximum FPS, GPU frame time, drag smoothness or physical-device certification.
- All eight settled to zero rendered frames during a 600 ms idle sample after 1.6 s settling; no page errors. Evidence: tmp/atlas-qa/rotation-cpu4-benchmark.json and benchmark-rotation.mjs.

### Thyroid recurrent laryngeal nerves (2026-09-13)
- Added source43 FJ3923/BP29761/FMA80695 and FJ4021/BP29389/FMA80694, the left/right recurrent laryngeal nerve trunks. Original coordinates and GLB roundtrip preserved. No invented terminal branches or loop-supporting great vessels were added. Relationship variability is documented in the primary anatomical study https://pubmed.ncbi.nlm.nih.gov/11889402/ .
- Thyroid now 19 selectable structures; both original/light passed all selections, English names, ontology exports, isolation and mobile overflow checks. Viewed thyroid-nerves-light.png: distinct gold nerves, left inferior course longer than right, full routes in frame.
- Protect both nerve meshes from simplification: 5,008 + 2,596 source triangles retained. Light total 28,956 triangles, 815,686 gzip bytes; original 32,354 triangles. Separate per-side nerve explosion assemblies. Evidence: thyroid-nerve-selection.json and source/light geometry audit.

### Thyroid-larynx regional exploration (2026-09-13)
- Added thyroid-larynx source view to both thyroid and larynx detail menus. Reuses existing light assets (19 thyroid structures + 39 selectable laryngeal structures = 58); no extra GLB copies.
- Keeps each input world transform, merges only identical ontology groups, then applies one shared translation/uniform scale. Thyroid nerve/vessel/gland groups use source laterality; laryngeal framework assemblies remain separate.
- Browser check passed 58 entries, vocal-ligament and left recurrent nerve selection, two source asset references, mobile horizontal overflow and base-model restoration. Inspected thyroid-larynx-overview.png.
- Both sources are BodyParts3D 4.3; this is not an HRA/source hybrid. Great-vessel loop supports, nerve terminal branches and mucosal airway surfaces remain absent.

### Regional exploded layout correction (2026-09-13)
- Visual inspection found overlapping clusters despite 13 distinct assembly IDs in thyroid-larynx. Added a size-aware four-column exploded arrangement for this regional detail only; preserves every assembly internally and returns to the original pose at zero.
- Verified 58 parts / 13 assemblies, per-side nerve groups, equal member offsets and pairwise non-overlap of assembly XY bounds at maximum expansion. Browser maximum/restore and vocal-ligament selection passed; inspected revised thyroid-larynx-exploded.png. This does not guarantee non-overlap from every rotated camera angle.

### Regional load failure cleanup (2026-09-13)
- Regional loader now disposes source scene resources in a finally block, clears temporary geometry after merging, and releases partial output on errors. Handles source material arrays and rejects incompatible merges explicitly.
- Injected failure on the second file of pharynx-larynx and thyroid-larynx: all 41 cloned temporary geometries were disposed exactly once in each case. A following retry loaded all 58 thyroid-larynx structures. Test: verify-regional-load-failure.mjs. Existing 39/52/58-part geometry and assembly tests pass; production build and host contracts pass.

### Touch and presentation export checks (2026-09-13)
- Chromium CDP touch input at 390x844, DPR2: all eight light models rotate on a 12-step one-finger drag, zoom on an 8-step two-finger spread and retain null selectedPartId after both gestures. No horizontal overflow or page errors. Evidence: tmp/atlas-qa/touch-expansion.json. Synthetic touch does not certify physical multitouch hardware or low-end GPU performance.
- Corrected exported presentation.explodeLayout for thyroid-larynx to regional-tray-v1; other views retain anatomical-assemblies-v1. Browser export assertion and build pass.

### Mobile title clipping fix (2026-09-13)
- Inspected hosted thyroid-larynx at 390x844 in base and maximum exploded state. The large arch radius clipped the long anatomical title despite no horizontal document overflow.
- Reduced hosted mobile exhibit radius to 24px and inset the presentation title by 14px; model viewport size remains unchanged. Rebuilt, re-ran regional mobile selection/explosion/restore checks and inspected the corrected screenshot.

### Thyroid lobe enlargement scenario (2026-09-13)
- Added goiter explanatory size comparison for FJ3671/FJ3672 only, with NIDDK Hashimoto/Graves references. Parathyroids, nerves, vessels and isthmus are not expanded; no nodules, thyroid function or surrounding-tissue displacement are simulated.
- Both quality modes passed bilateral target count 2, left-only count 1, exported laterality and normal restoration count 0. Inspected thyroid-goiter-light.png. This is a qualitative per-lobe expansion, not a mechanically connected gland deformation or clinical severity scale. Detail models continue to disable pathology deformation explicitly.

### Thyroid deformation and disease mapping (2026-09-13)
- verify-thyroid-pathology.mjs loads original/light GLBs and invokes the actual scene deformation method: full-intensity selected lobes scale to 1.18, unrelated 17 structures retain their scale/position, all source vertex buffers remain unchanged, and normal comparison exactly restores position/scale. Left, right and bilateral cases pass.
- Added two exact existing endocrine disease IDs/slugs (Graves disease and Hashimoto thyroiditis) to the atlas scenario mapping. Mapping is a qualitative enlargement example only, not a complete disease representation; no allergy-category duplicate was added. Contracts validate IDs/slugs against the host diseases.json and scenario existence (12 links total).

### Content-addressed model provenance (2026-09-13)
- Vite configuration now generates SHA-256 and byte counts from all 72 compressed model assets. Source view references export assetSha256/assetBytes, and modelRevision includes the actual hashes rather than only a source URL. Composite detail revisions include each asset hash; teaching schematics retain their code revision.
- Verified all 72 hashes against file bytes, schematic fallback, host contracts and two-source thyroid-larynx browser export. This identifies geometry assets and rendering quality; it does not create a database or persist historical copies. Main gzip increased about 4.65 kB for the hash manifest.

### Testicular vascular source views (2026-09-13)
- Added left/right testicular arteries and veins from BodyParts3D 4.3: FJ3532/FJ3533/FJ3617/FJ3618, with exact FMA source identities and SHA-256 provenance. A separate optional testes-vascular asset retains the original coordinate relation with testis/epididymis. 8 bilateral meshes, 54,222 triangles, 1,013,869 gzip bytes, source/GLB roundtrip verified.
- Each side exposes four structures. Both artery selections and base restoration pass; existing three-part outflow views still pass and their asset remains exactly 61,625 bytes. Viewed testis-vascular-left-overview.png: long source vascular route and small gonad retained without artificial size changes.
- This view excludes proximal great-vessel counterparts, pampiniform plexus/microbranches and actual flow. Loaded only when requested; default testis assets remain unchanged.

### Testicular vascular lossless-position compression (2026-09-13)
- Welded duplicate vertices and recompressed without simplification or quantization: 1,013,869 → 847,229 bytes (16.436% less). Roundtrip assertion compares every triangle position in order and every mesh world transform exactly. Test/generator: optimize-testes-vascular.mjs.
- Vascular detail now loads this separate light asset. Fixed its modelReferences.renderingAsset, which previously still pointed to the outflow asset; browser tests assert actual vascular filename, quality and byte count on both sides. Base/outflow assets unchanged. Build and host contracts pass.

### Integrated current-state audit (2026-09-13)
- Base models: 16 original/light cases, 190 selections. Additional views: 13 entry paths, 299 selections with exact English labels, one visible selected structure, correct source/schematic provenance and base restoration. Both reports have no page errors.
- All 74 asset hashes match current files. Regional failure cleanup and retry tests pass.
- No adb or idevice_id executable is available on PATH; this is only a tool-availability check, not proof of no connected physical device. Physical low-end testing remains unverified.
- Anatomical gaps listed above remain; source preservation and interaction tests do not prove anatomical completeness. No deployment performed.
