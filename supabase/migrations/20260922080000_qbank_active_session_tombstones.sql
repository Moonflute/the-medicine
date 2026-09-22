-- Make ending a Q-bank session authoritative across devices. Keeping a
-- tombstone prevents a delayed autosave from recreating a session that the
-- user already ended elsewhere.
alter table public.qbank_active_sessions
  add column if not exists ended_at timestamptz;

create index if not exists qbank_active_sessions_active_user_updated_idx
  on public.qbank_active_sessions (user_id, updated_at desc)
  where ended_at is null;
