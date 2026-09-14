# GitHub document editor

GitHub `Moonflute/the-medicine`, branch `master`, remains the only published
document source. This function stores no document body in Supabase. The shared
core at `apps/medicine-web/src/lib/document-edit-core.ts` defines the five allowed document directories and the verified Google owner's Supabase user ID.

## Server setup

Create a fine-grained GitHub token scoped to this repository only:

- Contents: Read and write (read latest source and commit edits)
- Actions: Read (inspect the existing Pages workflow)
- Metadata: Read (implicit)
- No workflow-file write permission is needed.

Set `DOCUMENT_EDITOR_GITHUB_TOKEN` as a Supabase Edge Function secret in project
`xibmggjmmgbtffyqssfv`. Never put it in a `NEXT_PUBLIC_` variable, Git, browser
storage, screenshots, or a chat message. Check expiry and branch protection
before enabling the frontend. Existing GitHub App installation credentials can
replace the PAT in a later iteration; this pilot expects an unexpired token.

Deploy `index.ts`, `handler.ts`, and the shared core preserving their relative
paths. The handler independently validates every bearer token through Supabase
Auth `/auth/v1/user` and then checks the exact owner ID and Google provider from
server-managed app metadata. Gateway JWT verification may be disabled for this
function because authentication is explicitly implemented here (compatible with
asymmetric signing keys). Missing GitHub configuration fails closed with 503.

## Supported documents

- All Markdown files under CC, Diseases, Pharmacology, Lab & Img, and Skills.
- The server rejects traversal, encoded paths, other directories and non-Markdown files.
- Supported blocks use Tiptap. Full-body Markdown mode supports headings, wiki
  links, callouts, code and other source syntax without rich-text conversion.
- YAML metadata is preserved byte-for-byte in both modes. Drug body sections
  are all available; YAML-derived attributes still require a separate metadata editor.
- Unedited blocks and metadata retain original bytes, BOM, EOL and final newline.
- Typing creates a per-owner, per-document, per-tab localStorage draft, not a commit.
  Drafts are local to the device. Explicit save commits to GitHub.
- Both a preliminary SHA check and GitHub's atomic Contents API SHA check prevent
  stale writes. A failed/uncertain PUT is never automatically retried.
- The conflict view keeps the draft and offers both versions for copying. Close
  and reopen to choose the latest document; no automatic merge or force overwrite.
- Source save and Pages deployment are separate states. Deployment checks accept
  a successful descendant run when the original run was superseded/cancelled.
  Status inspection is limited to the latest 20 workflow runs; old saves may need
  manual checking in GitHub Actions.

## Verification and activation

From `apps/medicine-web`:

```
node --experimental-strip-types --test scripts/test-document-edit.mjs scripts/test-document-editor-api.mjs scripts/test-document-tiptap.mjs
```

The API suite uses an injected mock GitHub fetcher. It does not modify source
documents or make real commits. Browser verification likewise intercepts all
requests to `https://editor-test.invalid` and never uses real account credentials.

Browser harness (no production route): install esbuild locally under
`apps/medicine-web/tmp/document-editor-harness`, run
`node scripts/serve-document-editor-harness.cjs`, then run
`node scripts/verify-document-editor-browser.cjs` with `PLAYWRIGHT_MODULE` pointing
to an installed Playwright package. It uses port 3018 and the actual editor
components. For visual checks it reuses the isolated Next build's generated CSS.

Before production activation, validate an authenticated read, a no-op save,
one intended content edit, and the resulting Actions/Pages deployment. Never
insert fake clinical text into published documents just to test the commit path.
The initial four-document save/deployment checks passed before expansion.
The corpus test now checks all five document trees (2,211 files at expansion).
