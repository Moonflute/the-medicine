# Integrated organ atlas

The original miniature/diorama atlas is maintained here as a separate Vite module. Next.js owns home, disease routes and the /atlas workspace; the same-origin isolated viewer owns its DOM, styles and WebGL context. This avoids global CSS conflicts and allows GPU teardown when leaving the route. No additional navigation tab is added.

Install: npm ci --prefix packages/organ-atlas (from repository root).
Build: npm run build:atlas (from apps/medicine-web); also runs before the normal Next build. Output public/organ-atlas is generated and ignored. The GitHub workflow installs both lockfiles.

Assets retain original node IDs, original-quality options and source credits. Home only requests the dedicated 597 KB heart-preview asset (51,946 triangles) and a small preview entry. Thirty-fps automatic rotation pauses offscreen, in background tabs, during interaction and for reduced-motion users. Drag does not navigate; tap, Enter and the visible link open the atlas. On touch screens vertical gestures remain page scrolling.

Ten disease mappings use exact source IDs, resolved against the current disease DB at build time. Invalid mappings fail the build. The complete catalog is generated from that same DB. Related content without an exact document link opens the existing search with a query.

Messages are checked against the same origin and the expected iframe window. No credentials or DB writes occur in the viewer. Model licenses and the distinction between source anatomy and educational schematics remain available through CREDITS.html and ANATOMY_AUDIT.html.

All shipped model assets are gzip-only. Every removed raw GLB was byte-compared with its decompressed counterpart before removal. Native DecompressionStream is preferred; an on-demand fflate fallback supports browsers without it. Both original and lightweight geometries remain available. Regenerate the home asset with node build-home-preview.mjs inside this package.

Internal exploration streams reviewed regions at shared source structures. Position, gaze, scale and active input survive an automatic transition. Only the current region and one prefetched neighbour are decoded. A catalogue graph supports cross-region guidance; it never connects different specimen frames or turns an omitted capillary bed into a tube. Explicit omitted-microcirculation transfers remain labelled actions.

The extension sources reuse HRA renal calyx groups, bladder/male urethra and Allen ventricular casts, plus Z-Anatomy major head/neck arteries and four original papillary muscles. Renal group letters are source grouping labels. Ventricular components are voxelised individually and unioned, preventing overlapping source casts from creating false internal walls. Cortical walking projects onto the local pial bank; deep inspection and CSF exploration remain distinct modes. The anterior communicating artery and sigmoid-sinus/jugular join were excluded after source contact checks found unmatched gaps. The mesh is an educational navigation reconstruction, not a clinical lumen segmentation or full histology.

Offline flow paths follow explicit directional connections through the shipped collision field. Runtime renders at most 48 nearby points in one draw, at 20 Hz, with no simulation or additional renderer. Pulmonary/right-heart and systemic/left-heart colours follow their respective circuits. Communicating-artery flow is not assigned an unconditional direction. Reduced-motion preference disables moving cues initially. Paths do not cross tissue, a lesion, or an omitted capillary bed; they do not model velocity, pressure or pulsatile valve physiology.

To regenerate a region, run `node build-journey.mjs <region>`; brain surface starts use `node build-journey-brain.mjs`. After a geometry/field change, run `node build-journey-flow.mjs <region>` and `writeAssetRevisions()` from `write-asset-revisions.mjs`. These offline generators are not run during deployment. `verify-journey-expansion.mjs` covers usable lumen connectivity and walls; `verify-journey-continuity.mjs` covers cross-region poses, specimen separation, prefetch ownership and particle paths.
