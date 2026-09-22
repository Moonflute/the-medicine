-- Store each in-progress Q-bank set independently so users can resume more
-- than one session across signed-in devices.
create table if not exists public.qbank_active_sessions (
  user_id uuid not null references auth.users(id) on delete cascade,
  session_id text not null,
  payload jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, session_id),
  constraint qbank_active_sessions_session_id_check check (
    char_length(session_id) between 1 and 200
    and session_id = btrim(session_id)
    and session_id !~ '[[:cntrl:]]'
  ),
  constraint qbank_active_sessions_payload_check check (
    jsonb_typeof(payload) = 'object'
    and payload ?& array['sessionId', 'questionIds', 'answers', 'updatedAt']
    and jsonb_typeof(payload -> 'sessionId') = 'string'
    and payload ->> 'sessionId' = session_id
    and jsonb_typeof(payload -> 'questionIds') = 'array'
    and jsonb_typeof(payload -> 'answers') = 'array'
    and jsonb_typeof(payload -> 'updatedAt') = 'string'
  )
);

create index if not exists qbank_active_sessions_user_updated_idx
  on public.qbank_active_sessions (user_id, updated_at desc);

alter table public.qbank_active_sessions enable row level security;

revoke all on table public.qbank_active_sessions from anon;
grant select, insert, update, delete on table public.qbank_active_sessions to authenticated;

drop policy if exists "qbank_active_sessions: select own rows" on public.qbank_active_sessions;
create policy "qbank_active_sessions: select own rows"
  on public.qbank_active_sessions
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "qbank_active_sessions: insert own rows" on public.qbank_active_sessions;
create policy "qbank_active_sessions: insert own rows"
  on public.qbank_active_sessions
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "qbank_active_sessions: update own rows" on public.qbank_active_sessions;
create policy "qbank_active_sessions: update own rows"
  on public.qbank_active_sessions
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "qbank_active_sessions: delete own rows" on public.qbank_active_sessions;
create policy "qbank_active_sessions: delete own rows"
  on public.qbank_active_sessions
  for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- Preserve the one legacy active set, if present. The preference row timestamp
-- is the reliable database-side ordering key for conflict resolution.
insert into public.qbank_active_sessions as existing (user_id, session_id, payload, updated_at)
select
  preferences.user_id,
  preferences.qbank_active_session ->> 'sessionId',
  preferences.qbank_active_session,
  preferences.updated_at
from public.user_preferences as preferences
where jsonb_typeof(preferences.qbank_active_session) = 'object'
  and preferences.qbank_active_session ?& array['sessionId', 'questionIds', 'answers', 'updatedAt']
  and jsonb_typeof(preferences.qbank_active_session -> 'sessionId') = 'string'
  and char_length(preferences.qbank_active_session ->> 'sessionId') between 1 and 200
  and preferences.qbank_active_session ->> 'sessionId' = btrim(preferences.qbank_active_session ->> 'sessionId')
  and preferences.qbank_active_session ->> 'sessionId' !~ '[[:cntrl:]]'
  and jsonb_typeof(preferences.qbank_active_session -> 'questionIds') = 'array'
  and jsonb_typeof(preferences.qbank_active_session -> 'answers') = 'array'
  and jsonb_typeof(preferences.qbank_active_session -> 'updatedAt') = 'string'
on conflict (user_id, session_id) do update
set payload = excluded.payload,
    updated_at = excluded.updated_at
where excluded.updated_at > existing.updated_at;

-- ALTER PUBLICATION has no IF NOT EXISTS form for tables.
do $$
begin
  if exists (
    select 1
    from pg_publication
    where pubname = 'supabase_realtime'
  ) and not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'qbank_active_sessions'
  ) then
    alter publication supabase_realtime add table public.qbank_active_sessions;
  end if;
end
$$;
