# Personal highlights

Migration: `migrations/20260926033233_personal_highlights.sql`.

The web app stores personal highlights separately from GitHub Markdown and private
Qbank sources. Signed-in accounts can select, insert, and update only their own rows.
Anonymous clients have no access. The browser uses the existing public Supabase
configuration and Google session; no new credentials are needed.

Each highlight has an immutable UUID, document key, color, and text anchor. Removing
or recoloring a highlight soft-deletes its old UUID and creates any remaining/new
pieces under fresh UUIDs. A database trigger prevents stale offline writes from
resurrecting deleted highlights or changing their identity.

Browser drafts are isolated by user and document. Changed rows are queued locally,
then upserted in batches. Account changes stop the old queue. Opening a document,
regaining focus/connectivity, or the 30-second polling interval fetches the latest
account records and merges them with pending changes.

The CSS Custom Highlight API paints translucent backgrounds without rewriting the
rendered content or Markdown. Text quotes and surrounding context restore positions
after paragraph insertions or edits around a quote. A rendered-text fingerprint
also preserves the exact position of repeated phrases while that text is unchanged;
old offsets are never trusted after a content change. If the quote itself disappears
or cannot be located unambiguously, its record remains available in the panel for
manual reconnection. Collapsed content is repainted when it becomes visible.

Normal Qbank sessions and mock exams share `qbank:<question ID>` keys. Question,
explanation, and original option IDs anchor their own text independently of shuffled
option labels. Other body content uses its stable page path.

Verification:

- `node --experimental-strip-types --test scripts/test-personal-highlights.mjs scripts/test-personal-highlight-store.mjs`
- Database transaction checks: own-account save/read, other-account isolation,
  immutable identity, and stale writes after deletion. Test rows are rolled back.
- Browser checks: actual text-node ranges across inline formatting and paragraphs,
  hidden content, Qbank option text, and translucent highlight rendering.
