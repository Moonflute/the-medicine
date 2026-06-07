# _webapp

Generated web-app data derived from `vault_medicine` and web-only manual sources.

- Source of truth: markdown files in `vault_medicine/*`
- Output: committed JSON for GitHub Pages build under `_webapp/data`
- Direction: source markdown -> generated JSON only
- Keep `vault_medicine` itself free of web-app artifacts
- Do not hand-edit JSON here unless explicitly treating it as manual-only data

Regenerate with:

```bash
cd apps/medicine-web
npm run sync:data
```
