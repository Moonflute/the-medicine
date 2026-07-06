---
aliases: []
tags:
  - qbank
  - nejm
  - case-challenge
---
# NEJM Case Challenge

- source: [NEJM Case Challenges](https://www.nejm.org/case-challenges)
- status: scaffolded
- note: direct script fetch is currently blocked by Cloudflare, so the first reliable path is `saved HTML -> parser -> vault notes`.

## Workflow
- Run [build_nejm_case_challenge_index.py](/C:/Users/kek28/Documents/antigravity%20dev/19%20the%20medicine%20resource/workspace_ops/scripts/build_nejm_case_challenge_index.py) with a saved NEJM HTML file.
- Generated metadata lands in `workspace_ops/docs/generated/nejm_case_challenges_index.json`.
- Generated case notes will appear in this folder.

## Next
- Fetch the listing page into a local HTML snapshot.
- Parse and generate the first batch of case notes.
