# Organ Atlas integration — 0.12.5

The home search now has an unframed rotating heart miniature underneath it. Drag rotates; click/tap/Enter opens `/atlas/`. No desktop or mobile navigation item was added. Ten exactly mapped disease documents have a small `3D` title action opening the appropriate organ and qualitative pathology scenario; the atlas offers a return link to the source document. Unmapped related terms open prefilled app search.

The Next.js host owns navigation and current disease data. `packages/organ-atlas` owns the existing miniature viewer in a same-origin iframe, isolating global styles and WebGL lifetime. All 29 organ/system entries, structure picking, isolate/faded context, English headings, anatomical assembly explosion, detail schematics, motion, local pathology, original-quality option and whole-body context remain available. Credits and scope notes ship with the viewer.

## Loading and optimization

- Home model: 596,951 gzip bytes, 51,946 triangles; this is a separate thumbnail derivative. Full atlas anatomy assets are unchanged.
- Only the home preview model loads on the home page. The full viewer and other organs load on demand.
- Automatic home rotation is capped at 30 fps, pauses during manipulation and when offscreen/backgrounded, and respects reduced motion. Under local test load: 22.5 rendered frames/sec, 0 additional frames while hidden, 0 additional frames under reduced motion.
- Removed unused legacy models and redundant raw GLBs after byte-equality verification against gzip-decompressed copies. Atlas static assets: approximately 438 MiB to 165 MiB. Original-quality gzip assets remain available.
- Native streaming decompression has a dynamically loaded fflate fallback. Both paths were browser-tested. Viewer exit explicitly disposes GPU resources.
- No PWA model pre-cache or new DB writes. Catalog generation uses the current 1,393 disease records and fails if an exact scenario mapping becomes invalid.

## Verification

- Full ESLint: no errors; 3 existing unused-variable warnings.
- Whole-source TypeScript check passed with isolated configuration.
- Production Next.js export with `/the-medicine` base path: 2,553 pages generated successfully. A first local attempt exhausted available memory; the successful run stopped the owned dev server and used `NODE_OPTIONS=--max-old-space-size=2048 --max-semi-space-size=8`.
- Actual production export browser test: all 29 organ entries load; 10 disease/scenario round trips pass; isolate/context and grouped explosion pass; home requests only its preview model; drag does not navigate; Enter opens the atlas; desktop and 390px mobile layouts have no horizontal page overflow; no JavaScript errors.
- Additional production checks: touch swipe over the miniature scrolls the mobile page (70px) without navigation; Furosemide opens prefilled search; whole-body view displays 904 meshes.
- Separate gzip-only verification: all 29 models, preview, and original-quality lung loading without DecompressionStream pass.

## Reproduce

From repository root, install `npm ci --prefix packages/organ-atlas` and the normal webapp dependencies. The normal webapp build runs `build:atlas` automatically; CI installs both dependency lockfiles and runs atlas contract checks.

Local isolated export (PowerShell, inside `apps/medicine-web`): set `GITHUB_ACTIONS=true`, `NEXT_DIST_DIR=.next-atlas-build`, `NEXT_TSCONFIG_PATH=tsconfig.atlas-check.json`, then `npm run build -- --webpack`. For Next's static-export mode, that custom distDir is the export directory. Set `ATLAS_EXPORT_DIR=.next-atlas-build` and run `node scripts/serve-atlas-export.mjs`. Run `test-atlas-browser.mjs` with `ATLAS_TEST_URL=http://127.0.0.1:4181/the-medicine`; set CHROME_PATH when Chromium is located elsewhere.

Deployment uses the existing GitHub Pages workflow after the integration commit is pushed. A successful build alone is not deployment confirmation; inspect the matching workflow run and live site.
