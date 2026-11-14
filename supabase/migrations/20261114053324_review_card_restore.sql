-- Reinsert a deleted card with its original schedule and display settings.
-- The existing row policy still requires user_id to match the signed-in account.
grant insert (home_hidden, content_revision, review_count, due_at, created_at)
  on table public.review_cards to authenticated;
