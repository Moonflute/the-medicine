# medicine-web

Read-only Next.js shell for the source markdown notes.

## Data source

- Reads source notes from `../../source_notes/*`
- Generates web DB files into `../../_webapp/data`
- Does not edit the source markdown notes

## Local run

```bash
npm run sync:data
npm install
npm run dev
```

## Static export

```bash
npm run build -- --webpack
```

The site is configured with `output: "export"` so it can be pushed to GitHub Pages later.
