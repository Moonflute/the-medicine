# Whole-body systems implementation

Objective: skeleton → muscles → vessels → nerves, preserving anatomical positions and reviewing consistency at each stage.

## Current authoritative progress
- Acquired 242 BodyParts3D 4.3 source OBJ files; compatibility headers, internal FJ/FMA/name and SHA-256 recorded in tmp/atlas-qa/skeleton43-source-audit.json.
- Source source files: tmp/atlas-qa/skeleton43. Reproducible fetch: fetch-body-skeleton.mjs.
- Built static/models/current/body-skeleton.glb.gz (11,417,860 bytes). This is a candidate, not yet connected to app navigation or existing HRA body.
- build-body-skeleton.mjs preserves every source triangle vertex and shared world transform through GLB roundtrip. Applies one common -90° X rotation and millimeter-to-meter scale.
- 24 mobile vertebrae, 24 ribs, 23 intervertebral discs counted. 242 meshes are NOT 242 bones.
- verify-body-skeleton.mjs passes left/right X sign checks, nine major paired bone height comparisons (<5 mm), C1–L5 descending Z order.
- Front and side source renders inspected; back render saved. These broad views are not joint-surface validation.
- No independent coccyx found in the acquired file list. Determine whether represented within another source mesh; do not invent one or silently mark complete.
- Ethmoid, bilateral nasal bones and vomer added from same compatibility 4.3 headers (FJ6309/6383/6470/6486); full skull fit still requires review.
- Two sesamoid meshes per foot share a broad FMA identity; these are separate source surfaces, not automatically duplicates.

## Next required work
1. Inspect skull fit, sacrum/coccyx coverage and major articulations in detail. Verify surface alignment, not only center points.
2. Compress duplicate vertices without changing anatomical coordinates, then establish conservative geometry reduction checks.
3. Connect a source-consistent whole-body systems viewer; do not align BodyParts3D to HRA by arbitrary per-organ scaling/translation.
4. Add muscles, then vessels, then nerves in the same source frame, with coverage/attachment/course audits and runtime checks.
5. Keep unrelated Atlas UI changes intact. No deployment performed for this objective.

Source limitations: https://lifesciencedb.jp/bp3d/info_en/index.html and https://pmc.ncbi.nlm.nih.gov/articles/PMC2686534/ . Source-coordinate preservation alone does not establish anatomical correctness.

## App integration and lossless geometry compression
- optimize-body-skeleton.mjs produced body-skeleton-light.glb.gz: 9,565,962 bytes, 16.219% smaller. Every indexed triangle position and source world transform exactly matches the original after roundtrip. No simplification or quantization applied.
- Added independent skeleton catalog entry (overview:false), source/FMA identities, icon, anatomy notes and host route allowlist. This does not replace or spatially combine with the HRA overview.
- Production build passed. Browser check confirmed 242 selectable structures; left femur, right humerus, Atlas and sacrum FMA selection and restoration; 390px horizontal overflow check passed. Broad app screenshot inspected.
- Original-coordinate skeletal review and integration are progressing; skull/joint contact and coccyx coverage remain unverified. Muscle, vessel and nerve systems remain to implement.

## Muscle source conversion and combined spatial inspection
- fetch-body-muscles.mjs acquired 376 compatibility-4.3 OBJ candidates (FJ1383–1601 including mirrored M IDs). All verified internal headers; source audit at tmp/atlas-qa/muscles43-source-audit.json. Includes supporting tendons/membranes; not 376 distinct muscles. Face muscles are outside this acquisition range.
- build-body-muscles.mjs preserves every original triangle position and shared world transform through GLB roundtrip; candidate body-muscles.glb.gz = 45,499,316 bytes.
- optimize-body-muscles.mjs welds and compresses without quantization/simplification: 36,223,826 bytes (20.386% smaller); every resolved triangle coordinate and source transform compared exactly.
- render-musculoskeletal.mjs combines skeleton and muscle source scenes BEFORE one common centering, with no individual alignment/scale adjustment. Front/back renders inspected. Broad trunk/limb/neck spatial arrangement is coherent at whole-body scale; this is not origin/insertion validation.
- Skeleton skull/hip close-up renders inspected. Large-scale placement looks coherent, but deep joint surfaces and independent coccyx coverage are still unresolved.
- Skeleton material rules now preserve bone vs disc/costal-cartilage colors in the app.
- Muscle candidate not yet connected to app; transfer size requires region partitioning and conservative geometry reduction before normal use. Source attachment checks and missing craniofacial muscle acquisition remain next steps before progressing to vasculature and nerves.

## Muscle regional loading preparation and laterality defect
- Current source has 1,975,878 triangles across 376 source meshes. Source metadata was checked against geometry centers, not accepted blindly.
- FJ1469 (source label Left flexor pollicis brevis / FMA37389) lies at negative X, alongside right-hand structures; mirrored FJ1469M has the inverse conflict. Both are quarantined from regional runtime candidates pending source identity review. Do not simply relabel without resolving whole-muscle vs component identity.
- partition-body-muscles.mjs creates 12 files for lower/upper limbs, anterior trunk, chest wall, back and neck. These are loading groups, not new anatomical subdivisions. Geometry is not cropped and no per-group centering/scaling is applied.
- 374 meshes occur exactly once in regional candidates, 2 are explicitly quarantined. Every node world transform and primitive index/attribute hash is checked against the original lossless source document after writing and reading each region.
- Largest regional file is left chest wall: 5,334,524 bytes; each arm about 1.85 MB; each leg about 3.1 MB. Total size remains substantial; partitioning reduces on-demand transfer, not total dataset size.
- Obsolete monolithic trunk partition was removed after replacement. Full original and lossless muscle source assets remain for comparison.
- Regional runtime UI, craniofacial muscle acquisition, source attachment checks and the remaining vascular/nerve work are still incomplete. No deployment.

## Muscle regional runtime integration
- Added 12 muscle-region views to the skeleton detail selector. Each loads the 242-structure skeleton plus one muscle region using their unchanged common source frame, followed by one shared display normalization. No per-region translation, rotation, scaling or geometry cropping.
- Source FMA/English identities are attached to every selectable structure; muscle identity payload is lazy-loaded with the detail loader. FJ1469/M remain excluded. Per-mesh material clones prevent selection highlighting from changing unrelated structures; detail disposal releases geometry/materials on replacement.
- Production build passed. tmp/atlas-qa/check-musculoskeletal.mjs exercised all 12 regions: exact structure counts, muscle selection/isolation, FMA export, SHA-bearing asset references, restore and return to base skeleton. No monolithic muscle model request, no browser page errors, no 390px horizontal overflow. Neck+skeleton screenshot inspected.
- verify-musculoskeletal-runtime.mjs independently compared 895,501 rendered vertices (neck and left-leg muscle regions plus skeleton) against source world coordinates under the single recorded display transform. Maximum display-coordinate error 1.885e-7, below 5e-7 tolerance. This proves coordinate preservation, not anatomical attachment correctness.
- Remaining: multi-region layer selection (currently one region at a time), craniofacial coverage, muscle origin/insertion review, deeper skeletal joint/coccyx review, conservative geometry reduction, vascular and nerve systems. The current regional view is a step toward the complete systems viewer, not completion. No deployment.

## Attachment screening and vascular acquisition
- audit-muscle-attachments.mjs computes original muscle-vertex to bone-triangle distances in millimeters using a spatial hierarchy. body-muscle-attachment-screening.json records source hashes, nearest points and method limitations for bilateral tibialis anterior and all three deltoid portions (16 muscle–bone comparisons).
- All sampled expected bone relationships have minimum distances below 0.12 mm. This only supports proximity; it does not prove correct named footprints or rule out penetration. No anatomical coordinates were edited based on these distances.
- References for expected relationships: https://pmc.ncbi.nlm.nih.gov/articles/PMC11064717/ and https://pubmed.ncbi.nlm.nih.gov/11948958/ . The latter reports tibialis anterior insertion variation; do not impose one shape as universal.
- Craniofacial muscle-name search of current manifest found no masseter, temporalis, pterygoid muscle, orbicularis, buccinator or facial-expression muscle entries. Similar names found were nerves/vessels; never substitute these for muscles. Missing coverage needs another verified source/version.
- Beginning central vascular source acquisition from FJ3400–3670 names containing artery/vein/aorta/vena/venous. This is an acquisition scope, not a completeness claim. Internal source headers remain authoritative. New fetch writes .partial first; requires successful curl before renaming.
- Central vascular acquisition completed: 201 compatibility-4.3 source files, 26,212,696 raw bytes; converted 398,854 triangles into body-vessels.glb.gz (7,751,776 bytes), lossless welded body-vessels-light.glb.gz (6,447,433 bytes). Exact source triangle positions and world transforms verified by build/optimization. Not app-integrated yet.
- Initial X-center screen flags FJ3493 Left ascending lumbar vein at -17.39 mm and FJ3589 Right ascending lumbar vein at +18.52 mm for bilateral source-identity review. Do not relabel or enable these before checking actual course. Other sign flags include gastric/gastroepiploic vessels and a near-midline dorsal penile vein: anatomical naming need not imply the entire vessel stays on that body half, so centroid sign alone is NOT a defect diagnosis. Two inferior vena cava entries FJ3441/FJ3659 need component/overlap inspection.

## Central vascular runtime integration and IVC review
- body-vessels-ivc-review.json records two distinct IVC source surfaces: FJ3441 spans source Z1094.94–1190.53 mm, FJ3659 Z950.89–1095.03 mm. Their nearest original vertices are 0.01000002 mm apart at the shared end. Keep both; this does not prove a watertight lumen or clinical continuity.
- partition-body-vessels.mjs excludes FJ3493/FJ3589 pending laterality review; keeps 109 arterial and 90 venous source meshes. Written/read-back primitive hashes and world transforms match source exactly. Assets: central arteries 2,646,446 bytes; central veins 3,659,304 bytes.
- Added two skeleton detail views for central arteries/veins. Refactored muscle and vessel loading through body-system-detail.js to apply one shared display frame, independent selection materials, source identity, lazy loading and disposal.
- Build passed. Browser check-vascular.mjs verified exact structure counts, selection/isolation, FMA metadata, asset hashes, restoration and 390px overflow; no page errors. Arterial/skeleton screenshot inspected at whole-body scale. Existing muscle coordinate test still passes after refactor.
- verify-vascular-runtime.mjs compared 902,489 vertices against source world coordinates under shared display transform, maximum error 1.762e-7 display units. This verifies placement preservation only, not branch accuracy.
- Still incomplete: full limb/head vessel acquisition and branch/course audits; nerve system; muscle coverage/attachment and skeletal joint gaps described above; integrated multi-layer whole-body controls. No deployment.

## Limb vascular acquisition, exclusions and integration
- fetch/build/optimize-body-limb-vessels.mjs acquired 281 compatibility-4.3 candidates from FJ2050–2400 with vascular names: 58,489,961 raw bytes; original GLB gzip 17,442,293 bytes; lossless light 14,368,122 bytes. Source triangles/transforms preserved.
- partition-body-limb-vessels.mjs retains 272 meshes in 8 side/system regions. Excluded FJ2190 (right fibular vein in positive-X left side), FJ2186/FJ2199 (metacarpal vein labels on foot-region coordinates), and 6 out-of-limb acquisition candidates (penile, thyroid, hepatic vessels). No arbitrary relabeling. Full records remain in quarantine/source audits.
- Added 8 limb views to existing 2 central vascular views. Each limb artery/vein asset is about 1.32–2.36 MB, loaded on request with skeleton. generate-body-vessel-catalog.mjs reproducibly derives navigation and identities from retained IDs and rejects duplicates.
- Production build passed. check-vascular.mjs now checks all 10 views, exact part counts, original FMA metadata, quarantine absence, selection/isolation, restore, base-skeleton return, mobile overflow and absence of monolithic vessel requests. No page errors; right-arm venous view screenshot inspected.
- verify-vascular-runtime.mjs checks all 10 source partitions against the combined display: 4,100,971 vertices, maximum coordinate error 1.766e-7 display units. This supports shared-frame fidelity only. Source course, attachment and branch topology still need review, and mislabeled source subdivisions may remain.
- Full objective remains active: head/neck vessel coverage, nerve acquisition/integration, integrated multi-region layer controls, and unresolved skeletal/muscle validation gaps. No deployment.

## Neural source coverage and first runtime integration
- Corrected earlier narrow-search result: manifest contains brachial nerve plexus trunks/cords plus median/ulnar/radial nerves. Searching only 'brachial plexus' missed 'brachial nerve plexus'. No matching sciatic, femoral, tibial, fibular, lumbar/sacral plexus or obturator nerve entries found in current manifest; absence from this source is not absence from anatomy.
- fetch/build/optimize-body-nerves.mjs acquired 240 compatibility-4.3 candidates (26,425,273 raw bytes); original GLB gzip 7,828,677 bytes, lossless light 6,458,917 bytes. Exact source triangle/world transform checks passed.
- partition-body-nerves.mjs quarantines FJ3901 (Left glossopharyngeal nerve on negative-X side) and FJ4024 (right vagus trunk with positive-X centroid) pending full-course/source identity review. The vagus flag is not proof of a wrong name; it is a review hold.
- Retained 238 structures in five source-coordinate loading regions: cranial-left 88, cranial-right 89, spinal-cord 2, cranial-midline 1, cervical-upper-left 58. Upper limb source is left-sided; no invented right mirror. Whole lower-limb nervous system remains missing. Central canal is explicitly cavity-surface, not neural tissue, with a separate color.
- Added five skeleton detail choices and lazy neural identities through shared body-system loader. generate-body-nerve-catalog.mjs regenerates retained identities from partition audit. Model notices explicitly state incomplete coverage.
- Build and browser check-neural.mjs passed all 5 views: exact counts, source FMA selection, quarantine exclusion, isolate/restore, base return, 390px overflow and no page errors. Left cervical/upper-limb screenshot inspected at whole-body scale.
- verify-neural-runtime.mjs compared 1,924,941 vertices to source coordinates through shared display normalization, max error 1.763e-7. This is coordinate preservation, not a course/foramen/nerve-root accuracy verdict.
- Still required: independent anatomical course/attachment checks, missing muscle/vascular/neural coverage, integrated multi-region layers and optimization beyond lossless welding. Goal remains incomplete; no deployment.

## Regional multi-system composition and layer controls
- Added combined upper/lower limb views for both sides: shared skeleton plus regional muscle, artery and vein partitions; left upper limb also includes available cervical/upper-limb neural source. Other views explicitly state missing neural coverage. No mirrored or fabricated anatomy.
- Shared body-system loader supports de-duplicated file lists and one common final transform. Composite metadata retains every source asset hash. Individual detail structures now carry layer keys (skeleton, muscles, arteries, veins, nerves).
- Settings offers available layer checkboxes. Hidden layers remain hidden through normal inspection; selecting a structure in a hidden layer re-enables its own layer. Switching model resets layer state. No unavailable nerve toggle is shown.
- Build passed. check-combined.mjs verified all four combinations (430/373/362/363 total structures), exact counts, hide/reveal/select/restore, missing-nerve UI, source hashes and 390px overflow; no browser errors. Combined lower-limb screenshot inspected.
- verify-combined-runtime.mjs independently compared 2,293,405 source vertices under the recorded display transform; maximum error 1.762e-7 display units. Relative source placement preserved across all included systems.
- Whole objective remains incomplete: this is region composition, not a complete all-body layered dataset; missing source coverage and anatomical course/attachment/joint validation remain. No deployment.

## Missing-coverage source discovery and registration screening
- Downloaded public Z-Anatomy/Models-of-human-anatomy master Z-Anatomy.zip (86,734,957 bytes) into tmp/atlas-qa, extracted ONLY Startup.blend for data inspection. No embedded scripts executed. Source inventory and SHA256 recorded in z-anatomy-object-inventory.json (7,184 objects, including annotations and non-anatomical helpers; not 7,184 body structures).
- Data-only inspection using workspace-local blender-asset-tracer found mesh objects for bilateral masseter/temporalis/pterygoid muscles and coccyx, and curve objects for bilateral sciatic/femoral/tibial/obturator nerves. This proves candidate objects exist, not anatomical quality or suitability for direct import.
- Sources: https://raw.githubusercontent.com/Z-Anatomy/Models-of-human-anatomy/master/Readme.md and https://zenodo.org/records/4953712 . Z-Anatomy is a modified BodyParts3D-derived dataset with mixed/additional references. Its attribution list includes separately licensed inner-ear/kidney content; target-specific provenance must be preserved before reuse.
- check-z-coordinates.py screens stored object matrices and legacy mesh coordinates against current skeleton bounds. 15 readable bone bounding-box centers under one similarity fit have RMS residual 27.809 mm, max 53.597 mm. Four radius/ulna meshes skipped because legacy vertex block count is smaller than declared mesh count. Blender modifiers/shape keys were NOT evaluated; this is a provisional diagnostic, not a valid final registration or proof that the evaluated models differ by exactly these amounts.
- Result: do not directly insert or individually eyeball-fit missing nerves/muscles/coccyx. Next inspect evaluated geometry using Blender with auto-execution disabled, then verify whole-source frame and region-specific anatomical relationships. Could use a source-consistent replacement regional set if global registration remains unsuitable, but must not break skeleton/muscle/vessel consistency.
- Current app assets unchanged by this research. Full objective remains active; no deployment.

## Evaluated source inspection setup and distribution size reduction
- Preparing official Blender 3.6.23 portable archive (official release index https://download.blender.org/release/Blender3.6/). SHA256 manifest downloaded. Archive download is currently live under exec session 28229; last observed 232,112,128 / 388,356,346 bytes. Re-poll that handle; do not restart based on this note alone. Verify official SHA256 before extracting/running. No Blender evaluation has run yet.
- Prepared tmp/atlas-qa/evaluate-z-anatomy.py for evaluated world-coordinate mesh/curve export of major paired bones, coccyx, missing neural and craniofacial candidates; run Blender headless with factory startup and autoexec disabled. compare-z-evaluated.py will compare all available evaluated bone anchors against current BP3D skeleton. Do not treat the earlier raw-DNA residual as final evaluated alignment.
- Fixed deployment payload: source-only-models.mjs excludes 8 unused monolithic body muscle/vessel/nerve research assets from generated Vite output, while preserving all local originals. Omitted total 142,020,360 bytes. This does not reduce a normal page's existing regional transfer; it reduces generated deployment content.
- verify-runtime-assets.mjs confirmed all 29 runtime body models remain byte-size-identical in output and all 8 research sources remain locally but are absent from distribution. Build passed. Combined four-view browser regression, layer switching/selection/restore and mobile overflow passed after filtering.
- No deployment. Goal remains incomplete and not blocked; source evaluation/download is pending.

## Evaluated Z-Anatomy geometry and direct-fit diagnostic
- Blender 3.6.23 portable official SHA256 verified (e3296eba7eab32c2e5182459ec7614af32224eee2bd32c9d0a08ffd751c54f3b); extraction completed. Download session 28229 and extraction session 19010 finished successfully.
- Direct full scene load crashed (exec 86275 terminal exit1) with an oesophagus/profile dependency cycle; embedded z-anatomy.py explicitly skipped with autoexec disabled. Recovered by loading only target object libraries and their parent objects into a clean factory scene; no embedded script execution.
- evaluate-z-anatomy.py completed 34 evaluated objects (major paired bones, sacrum/coccyx, bilateral sciatic/femoral/tibial/obturator nerves, masseter and temporalis). AutoexecEnabled=false, missing=[]; per-object mesh JSON and modifier audit stored in tmp/atlas-qa/z-anatomy-evaluated-audit.json. No process remains live from this operation.
- compare-z-evaluated.py uses 19 evaluated bone bounding-box centers and one global similarity fit. RMS residual 12.169 mm, max21.105 mm; replaces earlier unevaluated 15-anchor estimate. Bounding-box center fit is not surface registration; cannot use it to authorize direct anatomical merging with BP3D source.
- render-z-neural.mjs produced front/back/side of left lower limb neural candidates with their OWN Z-Anatomy skeletal source frame. Back view inspected; coarse continuity visible, but branch exits, relationships and source completeness are not established. Source curves rendered as evaluated meshes; no invented tube paths. These are research previews, not app assets.
- Runtime body-system loader now rejects unknown identities, duplicate structures and count mismatches instead of silently omitting geometry. Pending imported source scenes belong to root during loading so errors dispose them too. verify-body-source-integrity.mjs covers all three rejection paths; combined coordinate test and build passed.
- Next: compare anatomical relationships in the Z-derived regional source and evaluate source-consistent use for missing coverage rather than forcing global fit. Full goal remains incomplete; no deployment.

## Source-consistent supplemental lower-limb nerves
- Expanded evaluated Z-Anatomy export to 42 objects with bilateral piriformis, iliacus, psoas major and inguinal ligament. Front/back pelvic close-up previews inspected alongside sciatic/femoral/obturator nerves in the source's own frame. Broad relations are consistent with the usual course discussed in https://pubmed.ncbi.nlm.nih.gov/36412694/ and https://pmc.ncbi.nlm.nih.gov/articles/PMC5633261/ ; this is not full branch/variant validation.
- build-z-neural.mjs creates independent left/right supplemental regional assets, each 14 structures (807,451 / 808,768 bytes). Uses evaluated meshes from one source and checks every position plus world transform after GLB roundtrip. Includes source bones, three muscles, inguinal ligament and four principal nerves. No registration, per-part fitting or BP3D geometry mixing.
- Added explicit '(보충 원본)' regional choices. Shared loader now supports an optional base asset and explicit source reference/version/unit scale. Z-Anatomy metadata uses archive SHA identity, original object names and null ontologyId (no invented FMA assignment). Attribution/source limitations are included. Existing BP3D views continue to use their default source and base skeleton.
- Browser check-z-neural.mjs passed both views: 14 structures, sciatic selection, source metadata, single hashed asset, no BP skeleton request, muscle layer visibility and mobile overflow; no errors. Screenshot inspected. Supplemental source .l/.r laterality is recognized through its preserved GLB suffix; sacrum remains unassigned.
- Existing combined runtime coordinate test still passed after shared-loader changes. Build passed and runtime asset inventory now retains 31 body assets; original-only monoliths remain excluded.
- This adds usable regional coverage but does NOT complete the whole-body nervous system: distal branches/feet, integration with primary-body frame, craniofacial additions, remaining anatomical course checks and full-body layer assembly are still outstanding. No deployment.

## Whole-source system extraction toward a consistent body frame
- Inspected Z-Anatomy collection hierarchy without executing source scripts. tmp/atlas-qa/z-system-coverage.json records accepted MESH/CURVE objects with unsuffixed or .l/.r names, plus excluded annotation/variant objects. Initial memberships: skeleton329, muscle/support681, systemic arteries400, systemic veins212, PNS531. These are source objects, not counts of bones/muscles/nerves.
- Found 278 muscle objects also listed under PNS (innervation context); none of these overlap names are nerve/ganglion/plexus structures. Assigned them to muscles once, leaving253 PNS-only objects. Do not duplicate them as neural geometry.
- export-z-systems.py evaluated all1,875 unique candidates in a clean scene with autoexec disabled. Zero export failures, all finite positions and valid triangle indices. Binary per-object world-space data with SHA256 at tmp/atlas-qa/z-system-evaluated; all same source frame. Named-left/right objects have no entirely opposite-side bounding boxes in initial screen; this is not proof of course accuracy.
- build-z-whole-candidates.mjs generated five RESEARCH GLBs in that temp directory, not public static assets. Every position, triangle index and world transform verified after gzip/GLB roundtrip. Records/counts in z-whole-system-candidates.json. Total7,883,386 triangles, so this is not yet a suitably lightweight web runtime.
- Candidate sizes approximately: skeleton11.85MB, muscle/support34.15MB, arteries33.07MB, veins16.13MB, PNS16.77MB. Material explicitly nonmetallic; coordinates unchanged. Full-body skeleton source preview generated, initial front view inspected; no full anatomical quality approval. Display alone is not proof of joint contacts or source completeness.
- Next required: conservative geometric optimization and accurate classification of cavity/support objects; bilateral/common-frame coverage and course checks; central neural coverage; provenance exclusions as applicable. These candidates offer a route toward a common whole-body frame, but do not replace current app data yet. No deployment.

## Conservative whole-source simplification pass
- optimize-z-system.mjs uses original vertices only (no vertex movement), locked borders, structure-size-specific tolerance and component-count rejection. Tolerance cap is0.25mm for skeletal/muscle surfaces and0.025mm for vessel/neural surfaces, further reduced to1% of smallest object extent; sampled bidirectional vertex/triangle-centroid surface error must stay below twice that tolerance. Rejected changes retain original mesh. Error sampling is NOT a continuous Hausdorff or clinical/anatomical guarantee.
- mesh-surface-screen.mjs provides triangle BVH distance sampling and connectivity count. No disconnected object removal or automatic filling of gaps.
- Optimized research results: skeleton814,839→319,485 triangles (4,633,023 bytes); muscles2,314,143→1,438,495 (21,416,609); arteries2,381,290→1,184,274 (17,035,531); veins1,165,728→765,816 (10,955,711); nerves1,207,386→867,812 (12,516,999). Full candidate still too heavy to eagerly load all systems.
- verify-z-optimized.mjs read-back checked all1,875 structures across5 groups: every retained vertex is an exact original coordinate, transforms and identities unchanged, nonempty index buffers and valid indices. Original mesh surfaces remain available for comparison.
- Optimized whole skeleton front preview inspected; side/back saved. This does not complete small-joint/skull or other-system visual validation. Results remain research candidates in tmp, not runtime replacements.
- Remaining work includes additional targeted optimization, anatomical coverage/classification/course checks, central neural structures and consistent full-body runtime integration. No deployment; full goal remains active.

## Shared display frame and whole-source identity manifest
- build-z-whole-manifest.mjs now derives a research runtime manifest from all five optimized GLBs and the evaluated source audit. All 1,875 IDs are unique and mapped to original names/hash; source .l/.r determines laterality, absent suffix remains unassigned. FMA remains null. Vessel layer is explicit rather than inferred solely from label text. Possible skeletal cavity objects are marked unreviewed, not automatically classified as bone.
- Manifest remains in tmp/atlas-qa/z-system-evaluated/runtime-manifest.json, no public copying. Includes per-asset SHA256/count/bounds/bytes and one skeletal display frame for future on-demand layer loading.
- Shared body-system loader accepts an explicit validated displayFrame and explicit identity.layer while preserving existing default behavior. This prevents independently requested layers from being normalized around different centers/scales.
- verify-z-shared-frame.mjs loaded all five candidates through the actual Three.js loader, compared every loaded position to optimized GLB source world coordinates using the same skeletal frame: 2,327,107 vertices, max display-space error 1.063e-7. All structure counts and explicit layers passed. Test reads BufferAttribute accessors to handle interleaved vertex buffers correctly.
- Existing missing-identity/count-mismatch/duplicate-source rejection tests passed. These are coordinate/identity preservation checks, not anatomical validation.
- Still pending: user-facing lazy layer assembly, source-specific anatomical/provenance review, cavity classification, central neural coverage and remaining course checks. No deployment; goal remains active.

## On-demand assembly and interactive research browser
- src/body-layer-assembly.js owns independently requested source layers under one fixed skeletal frame. Initial creation requests nothing; callers select skeleton first. Concurrent requests for one layer share one load; last visibility choice wins while pending; failed requests can retry. Late completion after disposal releases resources. Export assets track loaded layers.
- verify-body-layer-assembly.mjs passed load deduplication, pending hide, cached re-enable, failure retry, immutable frame forwarding, asset export and disposal including late arrivals.
- verify-z-shared-frame.mjs now tests the assembly itself with all five real optimized assets, rather than isolated loader calls. 1,875 structures / 2,327,107 vertices retain their source-frame positions (max display-space error1.063e-7); layer visibility independence passed.
- Added tmp/atlas-qa/whole-body-layers.html interactive research viewer using the production assembly module: five checkboxes, orbit/zoom/pan and click English source name. Not a production route or deployed asset.
- check-whole-body-layers.mjs passed Chromium browser: only skeleton initially requested, four remaining assets loaded on checkbox selection, no re-download on re-enable, camera unchanged, no page errors and no horizontal overflow at390px. Screenshots whole-body-all-layers.png and whole-body-skeleton-arteries-nerves.png inspected.
- Visual finding: broad muscle/support surfaces obscure many individual muscles with all layers enabled. Need classify fascia/support and set useful defaults before production UI integration. Thin peripheral neural branches remain targets for regional anatomical course review; a whole-body screenshot does not validate them.
- No deployment. Remaining production UI integration, anatomical/source classification, provenance checks and CNS coverage keep full goal incomplete.

## Reversible fascia display in shared whole-body assembly
- Source-name inventory identified investing fascia over trunk/limbs among the muscle collection. Manifest now marks exact-word fascia objects as a separate display category, retaining original system, geometry and identifiers. Tensor fasciae latae does not match this category; platysma, tendons, aponeuroses and retinacula remain visible.
- Anatomical distinction checked against https://www.ncbi.nlm.nih.gov/books/NBK557497/ and https://www.ncbi.nlm.nih.gov/books/NBK499870/ : fascia lata surrounds thigh tissues, tensor fasciae latae is a muscle. Classification is still explicitly source-name based, not complete histological validation.
- Assembly defaults fascia surfaces off and provides reversible setFasciaVisible; future pending loads inherit latest category setting. Research viewer includes a fascia checkbox. No source meshes removed or altered.
- Manifest rebuilt; source-coordinate verification passed all five actual assets /2,327,107 vertices. Browser verification passed reversible fascia visibility and both retained tensor muscles, plus prior lazy-load/camera/cache/mobile checks.
- Updated whole-body-all-layers.png inspected: individual pectoral, abdominal and thigh muscle forms are now distinguishable instead of covered by continuous investing surfaces. This improves exploration but is not proof of attachment/course correctness. No production integration or deployment yet; remaining full goal work unchanged.

## Central neural coverage and evaluated source extraction
- inspect-z-central.py inspected CNS, spinal cord, brainstem, cerebellum, telencephalon and diencephalon source collections with scripts disabled. CNS collection contains250 candidate MESH/CURVE objects;7 already occur in peripheral-system export (including cauda equina/nerve roots and two quadratus femoris nerves), so collection membership is not an authoritative CNS tissue classification.
- Spinal cord collection alone contains only3 accepted candidates. Whole-object inventory located separate Anterior horn of spinal cord, Posterior horn of spinal cord and White matter of spinal cord meshes outside that useful collection traversal. These were explicitly added for evaluated inspection, without guessing geometry.
- Evaluated Spinal cord.j has2 vertices and0 triangles, a helper rather than an anatomical surface. Explicitly excluded with reason in z-central-export-input.json. export-z-systems.py now accepts separate coverage/output arguments and rejects zero-triangle objects, in addition to existing finite-coordinate/index checks.
- Exported246 nonduplicate CNS research candidates to tmp/atlas-qa/z-central-evaluated, zero failures,776,514 triangles. Original .blend world transforms evaluated in a clean scene with autoexec disabled. Spinal anterior/posterior horns and white matter have actual triangle surfaces; source Z bounds roughly1.055–1.545m. These bounds alone do not prove anatomical level/course correctness.
- No CNS runtime asset or public copy yet. Next needs tissue/cavity/support classification, positional relation checks against same-source vertebrae/skull, conservative optimization and shared-frame neural integration. Goal incomplete; no deployment.

## CNS mesh conversion and spinal termination screening
- build-z-whole-candidates.mjs accepts --central with separate input/output/report, preserving original five-system defaults. Converted246 CNS candidates into a research GLB (11,703,553 bytes,776,514 triangles), with exact position/index/world-matrix roundtrip assertions. No public asset copying.
- check-z-cord-level.py verifies binary hashes and reports inferior spinal surface coordinates and same-source T12–L4 disc references. White-matter inferior Z is6.525mm below the global minimum Z of the L2–L3 disc. Global Z alone does not establish vertebral-body level due to spinal/disc inclination.
- render-z-cord-review.mjs rendered same-frame T10–L4 vertebrae/discs with white matter, side screenshot z-cord-lumbar-side.png inspected. Broad posterior-to-body canal course visible; inferior tip appears near lower lumbar reference in this crop, requiring precise vertebral-level annotation before claiming a typical adult model. No arbitrary shortening or displacement performed.
- Compared clinical reference https://pubmed.ncbi.nlm.nih.gov/30567421/ (mostly L1, observed range to L2–L3 disc). This study does not validate this model or justify calling an apparent lower tip automatically erroneous. Preserve a review flag and evaluate local sagittal level/cord boundaries.
- CNS remains research-only pending source tissue classification, cranial relations, optimization and runtime integration. No deployment; goal incomplete.

## CNS connected to common-frame research layer assembly
- optimize-z-system.mjs / verify-z-optimized.mjs support --central with isolated paths/reports. Same conservative neural tolerance applied:776,514→690,751 triangles,10,468,295 bytes;118 of246 structures accepted for reduction, others retained. Readback verifies349,773 retained vertices have exact original coordinates and unchanged transforms/IDs. Sampled error screen remains nonclinical evidence.
- build-z-whole-manifest.mjs --central merges246 CNS identities with1,875 existing structures, rejecting duplicate source names. CNS asset is copied only within tmp research directory under a distinct name; no public/deployment copy. Same skeletal display frame for all2,121 structures.
- Explicit named ventricular/central-canal representations marked cavity-surface rather than neural tissue. Spinal dura and choroid plexus still require deeper tissue/representation review; source collection is not a histological claim.
- Research viewer has separate peripheral and central neural toggles; CNS downloads only on selection. Existing fixed-frame assembly supports six assets without special geometry transforms.
- verify-z-shared-frame.mjs passed all2,676,880 runtime vertices across six layers, max display error1.063e-7. Browser check passed six lazy requests, no re-download, unchanged camera, reversible fascia visibility, retained tensor muscles, mobile width and no page errors.
- Previous cord-level review flag remains unresolved; this integration does not certify anatomy. Production app integration, remaining anatomical/provenance review and payload optimization still pending. No deployment; goal active.

## Source laterality used by application filters and paired coverage audit
- sourceLaterality accepts explicit Z-Anatomy detail metadata, including authoritative null (no fallback side guessing from hash/English label). Scene inspection and main structure list/assembly count filters now pass detail metadata. Legacy source-name behavior remains for prior assets.
- verify-source-laterality.mjs checks all2,121 source suffixes:949 left,947 right,225 unassigned, plus explicit-null/legacy/conflicting-name cases. Local build passed after expected sandbox esbuild directory restriction was resolved with approved build escalation. No deployment.
- audit-z-pairs.mjs compares imported source names with full original inventory. Twelve names lack an exact opposite suffix match, not merely two structures missing. Most include naming differences/unsuffixed candidate objects; do not infer their laterality automatically.
- Two exact counterparts exist in the original inventory but were absent from CNS collection export: Medulla oblongata.r and Anterior cochlear nucleus.r. This is concrete CNS coverage work for next step; evaluate actual source objects, do not mirror left models. Report at tmp/atlas-qa/z-pair-coverage-review.json.
- Goal remains incomplete; production whole-source route and remaining anatomy review still pending.

## Missing right central neural source counterparts restored
- Added Medulla oblongata.r and Anterior cochlear nucleus.r explicitly to CNS extraction input, using actual source objects outside the useful collection traversal, not generated mirrors. Blender export248 surfaces completed with0 failures and scripts disabled.
- Evaluated paired bounds checked: left medulla/nucleus X positive, right X negative; both medulla Z1.53880–1.57888m and nuclei Z1.57949–1.58148m. This supports source laterality/relative pairing, not complete brainstem anatomical validation.
- CNS research GLB rebuilt782,786 original triangles, then conservatively simplified to695,165 triangles /10,533,156 bytes.119 structures accepted for reduction, others retained. Independent readback verifies351,984 surviving source vertices and all248 IDs/transforms.
- Updated research manifest now2,123 unique structures; common-frame runtime test2,679,091 vertices passed (max display error1.063e-7). Source laterality test949L/949R/225unassigned. Paired-name audit now10 unmatched names and zero exact opposite-suffix objects known in source inventory but omitted from export. Unmatched naming/unsuffixed cases remain unresolved; matching counts are not completeness proof.
- No public asset addition or deployment. Production integration and remaining anatomical/provenance/coverage review still incomplete.

## Exact source-pair naming exceptions resolved
- Reviewed10 exact-suffix unmatched entries against actual evaluated records: counterparts were already present under unsuffixed names or M2/M3 spelling variants. z-source-name-review.mjs lists8 explicit left/right source pairs; no geometry generation or generic unsuffixed-side inference.
- Manifest validates both source records exist and evaluated bounding midpoint sides agree. Six formerly unassigned names now receive reviewed laterality: rib-head ligament, iliocostalis colli and left testicular artery on left; descending lateral circumflex femoral artery branch, cochlear nerve and medial plantar digital branches on right. Root-crossing vessels are not forced to have every vertex on one side.
- Source object names/hash identities stay unchanged. English display prefixes strip existing Left/Right to avoid duplicate labels (Right Right testicular artery). Side metadata records basis explicitly as reviewed source pair and evaluated position; this is not full course/attachment validation.
- Source laterality tests now952L/952R/219unassigned; legacy and no-double-prefix checks passed. Pair review report retains the10 naming mismatches with resolved counterpart names instead of hiding them. All2,679,091 source-frame runtime vertices still pass.
- Production whole-source integration, anatomy/provenance review and unresolved cord-level classification remain. No deployment; goal incomplete.

## Assembly lifecycle connected to existing detail resource management
- detail-resources.js now tracks optional controllers in a WeakMap, outside serialized userData. Registered assemblies are disposed through the same disposeDetailModel path used by model replacement and stale request cleanup. Unregister-before-dispose avoids recursion/double handling.
- body-layer-assembly registers itself and unregisters on direct disposal. Pending requests finishing after model replacement dispose their geometry/materials instead of attaching orphaned meshes.
- AtlasScene.dispose also closes registered model controllers before traversing remaining scene resources, covering full viewer teardown with outstanding layer requests.
- verify-body-layer-assembly exercises the actual shared disposal entry point, controller removal and pending late completion; passed. Existing missing-identity/count/duplicate-source rejection tests passed.
- This is integration infrastructure; no new whole-body production choice or asset distribution yet. Full goal remains incomplete and no deployment.

## Whole-source assembly integrated into existing Atlas UI
- Added whole-source-body to skeleton detail choices and lazy z-whole-detail loader. prepare-z-runtime.mjs verifies all six asset hashes and copies into local static/runtime output with manifest; this is local app integration, not deployment. Initial selection loads only skeleton; other layers requested by existing settings checkboxes.
- Main settings now show available controller layers including CNS before they are loaded, support fascia toggle, load status/failure text and refresh structure picker after loading. Scene inspection preserves fascia category visibility and reveals a loaded hidden layer when its structure is selected.
- Local runtime source manifest retains source identity, per-asset hash, source reference and anatomy-review notice. Added assets total approximately77.1MB, requested by layer rather than eagerly. Original research sources remain separate.
- Full Atlas Chromium check-whole-atlas.mjs passed:329 initial skeletal structures/one initial GLB,2,123 after six layers, six hashed export references, right medulla selection metadata, hidden CNS auto-reveal, unchanged camera across loading, mobile width and no page errors.
- Inspected integrated screenshot; adjusted whole-source reset framing to a larger near-frontal model and narrower diorama plinth. Rebuilt and reran full integration check successfully; updated screenshot whole-atlas-integrated.png inspected.
- Remaining: saved-view restoration must preload requested layer assets, failed request checkbox state robustness, comprehensive anatomical/course/provenance review and residual performance/interaction issues. No version bump or deployment performed; full goal remains incomplete.

## Whole-body saved-state restoration
- Assembly serializes loaded/visible layer state separately from pending request flags, supports validated restore through trusted current manifest assets only, and resets requested visibility after a failed load so checkbox retry is consistent.
- Added organAtlas.restoreWholeBodyView for schema1 whole-source snapshots: loads model and saved layers first, verifies asset-derived model revision and selected structure availability, then restores inspection/explosion/camera/fascia. This API is specific to whole-source views, not a new general restore implementation for every atlas model.
- exportView now deep-copies detailModel metadata; otherwise replacing the current assembly would mutate the saved detail state through shared references.
- Build passed. Full Atlas browser regression extended to same-page exportView→restoreWholeBodyView without transport cloning; restores selected right medulla, layer states, model revision and camera within1e-8 float tolerance. Prior lazy loading/hash/reveal/mobile checks passed. Initial strict camera equality failed only at7e-18 floating point difference and was corrected to explicit numeric tolerance.
- Remaining full-goal work: anatomy/course/provenance review, performance and interaction audit, end-to-end host persistence integration if required. No deployment.

## Major arterial junction and order screening
- audit-z-arterial-junctions.mjs checks15 source relationships: ascending/arch/thoracic/abdominal aorta continuity, three arch branches, two brachiocephalic branches, coeliac/SMA/IMA/renal/common-iliac branches. Binary hashes verified before using evaluated world coordinates; minimum child-vertex-to-parent-triangle-surface distance calculated with triangle BVH.
- All15 distances <0.3mm (max0.2872mm ascending-to-arch). This supports local surface proximity, not watertightness, lumen continuity or full branch-course accuracy; no geometry changed or gaps automatically filled.
- Seven superior/inferior comparisons of nearest-surface candidate points are consistent with coeliac→SMA→renal→IMA→common-iliac ordering. This is not an exact ostium/vertebral-level measurement.
- References https://www.ncbi.nlm.nih.gov/books/NBK499911/ and primary anatomical study https://pubmed.ncbi.nlm.nih.gov/16177834/ . Findings saved at tmp/atlas-qa/z-arterial-junction-screen.json for subsequent visual/course review.
- Remaining goal includes broader regional vessel/nerve/muscle checks and provenance/interaction review. No deployment; incomplete.

## Major limb nerve junction screening
- audit-z-nerve-junctions.mjs checks20 bilateral major relationships (posterior brachial cord/radial, radial deep/superficial, sciatic tibial/common fibular, common fibular deep/superficial, obturator anterior/posterior and femoral cutaneous branches). Uses verified original binary hashes and bidirectional vertex-to-triangle-surface distances.
- Eighteen pairs close by this screen; bilateral sciatic→common fibular flagged at1.4329mm child-to-parent and1.5107mm parent-to-child. Both directions remain >1mm; still not exact triangle-edge minimum or branch endpoint proof. Other tested child→parent distances range0.0004–0.0637mm.
- Saved source candidate points and review flags in tmp/atlas-qa/z-nerve-junction-screen.json. Must inspect popliteal division locally before repairing; no arbitrary bridging or shortening performed. This is a concrete remaining source geometry/course review, not a pass.
- References https://www.ncbi.nlm.nih.gov/books/NBK534840/ and https://www.ncbi.nlm.nih.gov/books/NBK482431/ for main radial/sciatic branch relations. Full peripheral pathways not yet validated.
- Goal remains incomplete, no deployment.

## Sciatic division close-up: source partition boundary issue
- render-z-sciatic-review.mjs renders original (not simplified) sciatic/red, tibial/blue and common-fibular/gold surfaces in the same frame at the flagged left division. Back and side screenshots inspected: fibular surface meets the tibial-labelled surface below the end of the sciatic-labelled surface. This supports a source segmentation-boundary interpretation rather than a gap in the full three-part assembly.
- Added bilateral tibial/fibular surface-contact checks, explicitly NOT anatomical parent-child assertions. Minimum child-vertex-to-surface distance0.0175mm each side, versus1.4329mm direct sciatic/fibular. Full triangle watertight continuity remains unproven.
- Do not relabel common fibular nerve as a tibial branch or insert an artificial bridge. The real anatomical parent relation remains sciatic→tibial/common fibular. Individual source surface boundaries near this junction need a documented representation caveat or evidence-based partition correction before detailed cut-boundary teaching.
- Existing anatomy review flags retained, no source coordinates modified. No deployment; goal remains incomplete.

## Source boundary caveat attached to selectable nerve structures
- Manifest now carries a specific representationNote, stable reviewIssue and reference for bilateral sciatic/tibial/common-fibular surfaces (six identities). It explains true sciatic branching while documenting that the source partitions common surface near the division under the tibial label. Original mesh names, IDs, coordinates and geometry remain intact.
- structureIdentityText displays structure-specific representation notes alongside source identity rather than leaving the finding only in research logs. Notes also travel with selectedDetailStructure for DB consumers.
- Regenerated runtime manifest/assets with hash verification. Checked exactly six affected identities and that their note reaches the structure-info text. Local build passed; no deployment.
- This documents a known source limitation rather than declaring partition correction complete. Remaining muscle attachment/course/provenance audits and full completion checks continue.

## Major muscle/tendon to bone contact screening
- audit-z-muscle-contact.mjs checks28 bilateral muscle/tendon–bone pairs: supraspinatus/infraspinatus/subscapularis to scapula/humerus, gluteus medius and iliacus to hip/femur, tibialis anterior to tibia/medial cuneiform/first metatarsal, calcaneal tendon to calcaneus. Original evaluated binary hashes verified.
- Minimum muscle-vertex to bone-triangle distance ranges~0–0.0207mm; no >2mm separation flags. Candidate nearest points retained in z-muscle-contact-screen.json for location review. Close surfaces alone do not prove the correct footprint or absence of penetration, and no blanket attachment approval is given.
- References primary anatomical studies https://pubmed.ncbi.nlm.nih.gov/37421479/ (tibialis anterior insertion) and https://pubmed.ncbi.nlm.nih.gov/19255195/ (rotator cuff footprints). These motivate location-specific inspection rather than treating any contact as an accurate insertion.
- Source geometry unchanged. Full goal remains incomplete; no deployment.

## Targeted original-source muscle attachment visual review
- render-z-muscle-review.mjs loads original (not simplified) skeleton and muscle GLBs together with their shared source transform; isolates left shoulder (scapula/humerus + supraspinatus/infraspinatus/subscapularis) and tibialis anterior insertion (medial cuneiform/first metatarsal + adjacent talus/navicular).
- Four images generated and inspected: z-muscle-shoulder-back/medial.png and z-muscle-foot-back/medial.png. Shoulder shows supraspinatus above the scapular spine, infraspinatus posterior/inferior to it, subscapularis on anterior scapula toward humerus. Foot medial view shows distal tibialis surface approaching medial cuneiform/first metatarsal region. Back foot view is largely bone-occluded and is not useful as insertion proof.
- No gross placement contradiction observed in these targeted views. Exact enthesis footprint, mesh penetration and bilateral detailed symmetry are not certified. Previous primary literature references on rotator-cuff footprint and tibialis insertion remain applicable. No source reshaping performed.
- This extends contact-distance screening with visual relationships for two regions, not complete all-muscle validation. Goal active; no deployment.

## Skeletal sinus surfaces distinguished from bone tissue
- Audited previously unclassified skeletal space candidates: Sinus of frontal bone and Sinus of sphenoid bone. Classified explicitly as cavity-surface, with display names Frontal sinus / Sphenoidal sinus and representation note distinguishing air space from bone, mucosal thickness or precise ostium shape. Original source names/IDs/geometry unchanged.
- Reference: https://training.seer.cancer.gov/anatomy/respiratory/passages/nose.html (NCI SEER) describes paranasal sinuses as air-filled cavities. This establishes the concept distinction, not exact source lumen/ostium accuracy.
- Shared loader uses cavity material color regardless of source collection, so skeletal cavity surfaces no longer inherit bone color. Existing CNS cavity colors remain consistent.
- Regenerated runtime manifest with hash-verified assets; runtime check includes cavity color and all2,679,091 shared-frame vertices. Build passed. No deployment; full goal remains incomplete.

## Pointer picking excludes hidden layers before intersection
- Found AtlasScene.visibleHits raycast recursively over all descendants then discarded hidden results, so hidden whole-body layers still incurred triangle intersection work on hover/click.
- Added visible-picking.js: traverseVisible gathers only visible meshes before intersectObjects; clipping-plane filtering and nearest-hit ordering retained. Scene uses this helper.
- verify-visible-picking.mjs proves2000 hidden child meshes never receive raycast calls, while visible hit order, hidden-root behavior and clipping remain correct. Local build passed.
- This removes unnecessary hidden-layer picking work; it is not a measured end-to-end FPS claim or a solution for all-visible indication-label cost. Source geometry unchanged; goal still active, no deployment.

## Indication screen-space broad-phase optimization
- projected-picking-index.js conservatively bins projected world bounding boxes; any box crossing clip planes stays a global candidate. Indications uses candidates from the sample's screen cell instead of all visible meshes for every ray. Actual triangle/clipping checks remain unchanged.
- Synthetic regression441rays:194,922 all-mesh candidates→2,205 indexed candidates, identical ordered hit sequences; includes near-plane-crossing geometry. This is a candidate-count reduction, not a universal FPS claim.
- Extended actual whole-body shared-frame verifier:21rays across front/side/top views of all loaded source layers have identical full-vs-indexed hit sequences. All2,679,091 coordinate checks still pass. Local build passed.
- Dense-label readability and complete all-visible browser performance remain separate work. Source geometry unchanged; goal active, no deployment.

## Full-body indication browser stress check exposed remaining bottleneck
- Extended check-whole-atlas.mjs --indications to enable actual all-layer labels and record label count/font size/update timing. First synchronous test remained unresponsive and was explicitly interrupted (session24523 terminal exit1), not treated as a pass.
- Indications now scans via a generator across frames (nominal6ms budget between ray samples), caching a scan for a fixed camera/model/visibility signature instead of completing all rays in one task. Full candidate set retained. Build passed.
- Second all-layer browser run session51886 ended with explicit60s waitForFunction timeout waiting for labels. Therefore full-body indication completion/performance is NOT verified and remains broken/too slow in stress case.
- Subsequently quantized camera/model signature values to1e-6 to prevent infinitesimal OrbitControls matrix noise from restarting scans. This latest adjustment has NOT yet been rebuilt/browser verified. Need do that next, inspect pending scan progress and pursue per-mesh ray acceleration if scan remains too slow. updateMs currently measures final slice, not total scan duration; fix diagnostic naming/total timing before making latency claims.
- No live process remains from these stress tests. Goal still active; this is an actionable performance issue, not a blocker requiring user input. No deployment.

## Indication bottleneck diagnosed and nearest-hit pruning added
- Rebuilt quantized scan signature and added reset/sample/elapsed/slice diagnostics; clears stale label count on invalidation. updateMs now measures complete scan instead of final slice.
- Actual all-six-layer browser run17932 ended with60s timeout: resets0,851 samples,60450.6ms elapsed,45.6ms last slice. Confirms a progressing but slow scan, not continuous signature restart. Browser terminal exit1, no live process.
- Added nearest-visible-hit.js: conservative world-AABB ray-entry ordering, exact original mesh intersection and clipping, terminate only after remaining entry bounds exceed nearest accepted hit. No structures dropped and no source geometry changes.
- Extended projected-picking regression with882 nearest-hit comparisons (clipped/unclipped); matches original object/distance. Existing441 broad-phase comparisons and build passed.
- Latest nearest-hit optimization still needs actual whole-body browser stress rerun and real anatomical ray equivalence check; synthetic results are not latency proof. Dense-label readability and anatomical/provenance reviews remain. No deployment, goal incomplete.

## Actual source nearest-hit equivalence and scan budgeting
- Extended verify-z-shared-frame.mjs to compare nearest hit identity/distance on21 front/side/top actual whole-body rays, both unclipped and a coronal clipping plane. Passed; all2,679,091 vertices remain in the same frame (max1.063e-7). Laterality952L/952R/219unassigned and hidden-mesh picking tests also passed.
- Actual browser session97391 still timed out60s with nearest-hit pruning: resets0,samples1301,elapsed60201.7ms,lastslice11.7ms. No label completion; terminal exit1.
- Found signature preparation consumed nominal scan budget. Split preparation from6ms scan allowance to avoid one-sample starvation. Built successfully.
- Actual browser session8773 still timed out: resets0,samples1660,elapsed60241.9ms,lastslice17.2ms. Terminal exit1; no live sessions. More progress within same window, but still not acceptable performance or completed indication rendering. Per-triangle acceleration or a different visibility pass is required; do not declare the feature verified.
- No anatomical geometry changed. Goal remains incomplete: broader anatomical/provenance review and whole-body interaction performance remain. No deployment.

## Source mesh BVH and stationary scan rendering
- Installed pinned three-mesh-bvh0.9.15, compatible with existing Three0.180.0. Upstream README/API reviewed. source-mesh-bvh.js uses indirect indexing, mesh-local acceleratedRaycast (no global prototype override), disposes tree on geometry disposal. Builds after final display transform, yields between meshes to reduce loading stalls. Geometry animation currently uses object transforms, not changing vertices.
- verify-source-mesh-bvh.mjs proves unchanged positions/index order, idempotent tree reuse, face IDs and distances under nonuniform scale/rotation, disposal. Actual shared-frame verifier compares native Mesh.raycast against acceleration on21 actual views, including cuts; passed all2,679,091 source vertex checks. Integrity and layer lifecycle tests passed.
- Browser25165 completed full six-layer indications:562labels,25895.1ms. All prior integration assertions passed. Screenshot inspected: extremely crowded labels (minfont2.67px) are unreadable; completion does NOT imply acceptable label UX.
- Found pending SVG scan forced a full 3D redraw every frame. Scene now continues pending scan in stationary branch without geometry/material processing or WebGL rendering; camera/state changes still use normal dirty rendering path.
- Rebuilt and browser96734 completed: same562labels,7655.7ms; six lazy layers,2123structures, hashes, restore, selection/reveal, mobile width and page errors passed. Both browser processes terminal exit0. This is headless test timing, not all-device guarantee; still needs further latency/readability work and motion-change regression.
- No anatomy geometry changed or source labels omitted. Remaining anatomical/provenance review and dense indication UI remain. No deployment; goal incomplete.

## Major venous confluences screened; hepatic source boundary flagged
- Added audit-z-venous-junctions.mjs; verifies original evaluated binary hashes, screens23 major drainage/continuation pairs (SVC/brachiocephalic/jugular/subclavian/azygos, IVC/renal/iliac, femoral/deep femoral/popliteal, hepatic), plus one diagnostic alternate source segment.
-22 initial pairs have minimum vertex-to-recipient-triangle distance0–0.2868mm. Hepatic veins to source-labelled abdominal IVC flagged60.1276mm. Alternate source-labelled thoracic IVC is0.0235mm away; its source bounding Z range1.17048–1.26326m spans hepatic candidate1.23211–1.24757m. Indicates a source partition/name issue requiring diaphragm-level review, not evidence of a missing6cm bridge. No geometry invented or relabelled.
- References NCBI NBK544339,NBK545255,NBK482353,NBK554574 checked for drainage relationships. Distance screening is not lumen continuity, exact confluence position, course or anatomical variant validation.
- Added hepatic-caval-source-boundary note to exactly three runtime identities, explaining that source thoracic/abdominal names are not verified diaphragm boundaries. Rebuilt manifest, hash-verified runtime assets, confirmed three notes, build passed.
- Saved z-venous-junction-screen.json retains flagged original comparison and alternate result. Targeted visual diaphragm/IVC review remains; this is not certification of all veins. No source coordinate changes or deployment. Goal incomplete; other anatomical/provenance and dense label UX work remains.

## Diaphragm/caval source visual review and misleading labels corrected
- Added render-z-caval-review.mjs and inspected front/side/top screenshots of original unoptimized diaphragm, hepatic veins and both IVC surfaces in their shared source frame. Diaphragm translucent only for inspection; no fitting or geometry alterations.
- Source-labelled thoracic IVC extends well inferior to the diaphragm dome; the upper/lower source color boundary is below the dome. Together with prior contact results, this supports a segmentation-label discrepancy, not a6cm absent vessel requiring a bridge.
- Runtime English names now Inferior vena cava — upper source segment / lower source segment. Exact sourceMesh names, IDs, hashes, geometry and ontologyId:null retained. Notes explicitly distinguish source segmentation from true thoracic/abdominal anatomical divisions.
- Visible hepatic surfaces are short confluence stubs, not complete intrahepatic venous arborization; note now states that limitation. Exact caval aperture alignment and full liver-venous course are not certified by translucent screenshots.
- Regenerated manifest/runtime with verified hashes, laterality test passed and build passed. No deployment. Remaining overall anatomical/coverage/provenance review and dense labels continue; goal incomplete.

## Major skeletal coverage and toe label correction
- Added audit-z-skeletal-coverage.mjs:176 exact-name expectations cover24 presacral vertebrae+sacrum/coccyx,24ribs, paired major limb/girdle/carpal/tarsal bones,20metacarpal/metatarsal bones and56 hand/foot phalanges. No missing names;23 superior-inferior adjacent vertebral bounding-center comparisons pass. This is not the complete206-bone inventory or joint congruence certification; skull and tissue classification need separate review.
- OpenStax vertebral column/lower limb references checked. Found source mistranslation finger of foot in28 bilateral toe phalanges. Display labels now hallux for first digit, second/third/fourth/fifth toe for others. SourceMesh names/IDs/hashes unchanged.
- Runtime manifest rebuilt and assets hash-verified. Verified exactly28 corrected entries with no finger of foot in display labels; build passed. No source geometry changes or deployment. Broader anatomical/provenance review and label UX remain; goal incomplete.

## Skeletal structural categories and material distinction
- Added skeletal-structure-type.js scoped to reviewed Z skeletal collection:210 bone surfaces,31cartilage,11ligaments,28teeth,23discs,23nuclei pulposi,1symphysis,2cavities. These are source surface counts, not anatomical bone counts. Unknown layers do not use this classifier.
- Manifest carries structureType for329 skeletal identities; loader applies consistent muted palette (ligaments lavender, disc/cartilage sage, nucleus blue-sage, teeth ivory, bone cream). Selected structure identity text exposes the type, preserving English names/source ID/provenance. Type is a structural grouping, not uniform tissue histology of a disc or tooth.
- OpenStax7.3 consulted for disc/nucleus/ligament distinctions. Runtime asset hashes verified. Actual shared-frame test checks every skeletal material against type plus2,679,091 vertices and native-vs-accelerated ray hits; passed. Build passed. No geometry edits or deployment. Remaining overall anatomy/provenance and dense-label UI review; goal incomplete.

## Dense indication rails retain names at readable size
- Added indication-rails.js. When a side cannot fit34px rows, all its visible-structure names remain in a bounded scrollable side rail (minimum11px text,44px rows) instead of shrinking hundreds of names to2.67px. Connectors reflect currently visible rail rows and update on scroll. Sparse views retain original labels. This intentionally uses local list scrolling rather than pretending hundreds of labels can simultaneously fit legibly.
- Wheel/pointer/touch propagation isolated from model controls; keyboard navigation keys stay in the focusable list. No model geometry or source identities changed.
- Full Atlas browser70184 passed with562labels,minfont11,9.94s scan; screenshot inspected, readable side rails and unobscured central body. Added exact displayed-name count match, scroll/connector update, camera unchanged and minimumfont checks.
- Rebuilt keyboard handling and full browser53246 passed:562labels,8.16s scan,11px minfont; wheel and PageDown scroll without changing camera. Six-layer restore/selection/hash/mobile-width/error assertions also pass. No live process remains. Further camera-motion/dense-mobile usability review still needed.
- Screen inspection exposed unidentified source labels: arteries ?x.r/?x.l, vein ????????. Verified these exact names in runtime manifest; provenance/name identification or explicit unresolved display treatment is required next. Do not assign invented medical names.
- Build passed; no deployment. Overall goal remains incomplete (anatomy/coverage/provenance and residual UI review).

## Unidentified source surfaces are explicit in runtime
- Confirmed exact original evaluated source names ?x.r/?x.l in arterial collection and ???????? in venous collection. Their positions alone do not establish named vascular identities; no speculative renaming or FMA assignment.
- Runtime names now Right/Left arterial structure — identity unresolved and Venous structure — identity unresolved. Metadata identityStatus/reviewIssue unresolved-source-name and representationNote explicitly distinguish source collection classification from verified anatomy. All three original sourceMesh names, stableZA IDs, hashes, coordinates and nullontology remain intact.
- verify-z-unresolved-identities.mjs checks all three identities, source provenance, nullontology and actual structureIdentityText output. Passed, as did laterality and build. Regenerated runtime assets with hash checks. No geometry removed or moved and no deployment.
- This resolves misleading/unreadable UI labels, not the source identification task itself. Provenance/name research, anatomical course review and remaining full-goal checks remain; goal incomplete.

## Whole-body anatomical angle presets preserve scale
- Scene.setAngle previously reused standalone fixed9-unit positions, making the larger framed whole-body view shrink when front/side/back/top/bottom was selected. Whole-source controller views now preserve camera-to-target distance, center on the common source origin and change direction only. Standalone presets unchanged; explicit dirty update added.
- Actual browser94224 clicked all five visible angle buttons before layer loading, checking distance preservation within1e-6 and requested axis alignment >.999999. Full2123structure/six-layer/hash/restore/selection/mobile-width regression passed. Build passed, terminal exit0.
- No source anatomy transformed or reshaped; this improves consistent inspection scale across viewpoints. No deployment. Overall anatomy/provenance and remaining interaction review still incomplete.

## Late-loaded whole-body layers invalidate explosion grouping
- Found groupedExplosion cache survives new layer attachment; newly loaded meshes can lack offsets while existing groups retain old center. Assembly now invalidates grouping on successful layer attachment; settings recomputes active explosion after layer visibility update.
- prepareGroupedExplosion accepts currently applied explosion amount, subtracts existing parent-transformed displacement from bounds before calculating new radial offsets. Prevents using already-expanded positions as the anatomical reference frame when regrouping. Mesh orientations/scales and source vertices unchanged.
- Extended verify-radial-explosion with a late layer added at70% expansion under rotated/scaled parents: recomputed offsets match a fresh unexpanded assembly within1e-8. Existing radial/orientation/exact restore/camera-direction and assembly lifecycle tests passed; build passed.
- Actual all-layer browser late-load/explosion transition regression still required. No deployment; full anatomy/provenance and interaction goal remains incomplete.

## Actual browser late-load explosion regression
- check-whole-atlas.mjs --explode now loads muscles, sets70% explosion through the actual slider, then adds arteries/veins/PNS/CNS and checks updated group count and applied amount after every load. Resets slider0 and confirms restored camera within1e-6 before running existing2123structure/hash/restore/selection/mobile checks. Browser22574 passed.
- During inspection found camera fit delta assumed unchanged offsets. setExplode now captures previous offsets before regrouping and fits bounds with newOffset*target-oldOffset*applied, accounting for changed group centers and previously unexpanded new layers.
- Radial/late-load unit regressions passed, rebuilt, actual browser79708 passed (terminal0). Screenshot whole-atlas-exploded.png inspected: whole-layer groups remain largely vertically aligned/overlapping and fit makes model small; basic regroup/restore is verified, but exploded whole-body presentation is not yet polished. No anatomical repositioning in normal view.
- No live processes, no deployment. Full goal incomplete: anatomical/provenance and remaining presentation review continue.

## Major neural coverage exposes missing named surfaces
- Added audit-z-neural-coverage.mjs comparing52 bilateral named cranial/major peripheral expectations against current runtime identities and all7184 original object names.48 separately named surfaces present; bilateral Phrenic nerve and Inferior gluteal nerve absent by exact name in both. Broader phren/gluteal inventory search found vascular/helper structures but no named nerve counterparts. This does not prove related fibers are absent inside some other mesh.
- Four anterior/posterior spinal root source surfaces exist as bilateral collections, not per-level selectable roots. Do not claim individual31-pair spinal nerve coverage from these four meshes.
- NCBI NBK513325 (phrenic) and NBK532884 (inferior gluteal) reviewed to prioritize these as major motor pathways, not optional tiny branches. Need anatomically grounded source recovery or reconstruction; no arbitrary curves/mirroring/source-coordinate mixing performed.
- Saved z-neural-coverage-screen.json with positive and negative results and explicit scope. This evidence changes next action from broad completeness assumptions to targeted source search. No app geometry changes/build needed this turn; no deployment. Goal incomplete.

## Alternative phrenic source candidates inspected
- Searched local BP4.3 archive plus external source discovery. Found five cached phrenic-labelled original OBJ surfaces, hashes independently verified against nerves43-source-audit.json. Saved exact hashes, vertices, mm bounds and X-side in phrenic-source-candidates.json.
- FJ4157 left trunk spansZ1192.46–1433.04mm; FJ4279 also labelled left trunk/FMA65387 spansZ1179.07–1193.30mm with broad lateral extent. Both are left-sided, not opposite-side duplicates. FJ4291 is right-sided phrenico-abdominal branch set; FJ4156/FJ4226 are right/left pericardial branches. No right trunk was identified by these names.
- The duplicated trunk concept on distinct source partitions requires review; do not infer a right trunk by renaming/mirroring. BP-to-Z frame registration remains unvalidated; no candidate added to Z assembly. No inferior-gluteal named mesh found in local cached nerve files.
- This establishes concrete recoverable source candidates and limitations, not implementation completion. Need region-specific correspondence/course evidence or a better shared-frame source. No app geometry changes/build needed, no deployment. Goal incomplete.

## 2026-09-13 device model storage / 0.13.0 milestone
- Added explicit per-browser model saving, cancel and scoped deletion. SHA-256 revision keys and download validation prevent stale/corrupt cache reuse. Normal network loading remains available when storage is denied.
- Actual HTTPS Chromium UI passed heart save, duplicate save without download, network-blocked reload, scoped deletion, and all six whole-body system saves plus five previously unloaded layers with model networking blocked.
- Model storage does not cache the whole web application; browser eviction remains possible.
- First release retains documented source coverage and anatomical identity limitations; full anatomical verification is not claimed.
