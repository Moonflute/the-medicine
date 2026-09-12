# Integrated organ atlas

The original miniature/diorama atlas is maintained here as a separate Vite module. Next.js owns home, disease routes and the /atlas workspace; the same-origin isolated viewer owns its DOM, styles and WebGL context. This avoids global CSS conflicts and allows GPU teardown when leaving the route. No additional navigation tab is added.

Install: npm ci --prefix packages/organ-atlas (from repository root).
Build: npm run build:atlas (from apps/medicine-web); also runs before the normal Next build. Output public/organ-atlas is generated and ignored. The GitHub workflow installs both lockfiles.

Assets retain original node IDs, original-quality options and source credits. Home only requests the dedicated 597 KB heart-preview asset (51,946 triangles) and a small preview entry. Thirty-fps automatic rotation pauses offscreen, in background tabs, during interaction and for reduced-motion users. Drag does not navigate; tap, Enter and the visible link open the atlas. On touch screens vertical gestures remain page scrolling.

Ten disease mappings use exact source IDs, resolved against the current disease DB at build time. Invalid mappings fail the build. The complete catalog is generated from that same DB. Related content without an exact document link opens the existing search with a query.

Messages are checked against the same origin and the expected iframe window. No credentials or DB writes occur in the viewer. Model licenses and the distinction between source anatomy and educational schematics remain available through CREDITS.html and ANATOMY_AUDIT.html.

All shipped model assets are gzip-only. Every removed raw GLB was byte-compared with its decompressed counterpart before removal. Native DecompressionStream is preferred; an on-demand fflate fallback supports browsers without it. Both original and lightweight geometries remain available. Regenerate the home asset with node build-home-preview.mjs inside this package.
