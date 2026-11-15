-- Applied through MCP; version matches the hosted migration history.
-- Extend existing account-owned records; their RLS/primary keys stay unchanged.
alter table public.qbank_sessions add column if not exists mock_summary jsonb
  check (mock_summary is null or jsonb_typeof(mock_summary) = 'object');
alter table public.user_preferences add column if not exists qbank_progress_reset_at timestamptz;
alter table public.review_cards add column if not exists source jsonb
  check (source is null or (jsonb_typeof(source) = 'object'
    and jsonb_typeof(source->'questionId') = 'string'
    and jsonb_typeof(source->'bank') = 'string'
    and jsonb_typeof(source->'label') = 'string'
    and char_length(source->>'questionId') between 1 and 2000
    and char_length(source->>'bank') between 1 and 40
    and char_length(source->>'label') between 1 and 240));
grant insert (source), update (source) on public.review_cards to authenticated;

-- A delayed offline write must not undo a newer round reset from another device.
create or replace function public.keep_latest_qbank_round_reset()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  new.qbank_progress_reset_at := greatest(old.qbank_progress_reset_at, new.qbank_progress_reset_at);
  return new;
end;
$$;
revoke all on function public.keep_latest_qbank_round_reset() from public, anon, authenticated;
create trigger user_preferences_keep_latest_qbank_round_reset
  before update of qbank_progress_reset_at on public.user_preferences
  for each row execute function public.keep_latest_qbank_round_reset();
