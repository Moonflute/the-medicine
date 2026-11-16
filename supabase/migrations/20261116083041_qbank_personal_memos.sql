-- Personal notes are independent of question attempts, sessions and round resets.
-- Timestamp matches the hosted migration recorded through Supabase MCP.
-- Empty text is a revisioned tombstone; offline clients cannot resurrect cleared notes.
create table public.qbank_question_memos (
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null check (length(question_id) between 1 and 2000),
  body text not null default '' check (length(body) <= 6000),
  revision bigint not null default 1 check (revision > 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, question_id)
);
alter table public.qbank_question_memos enable row level security;
revoke all on public.qbank_question_memos from anon, authenticated;
grant select on public.qbank_question_memos to authenticated;
grant insert (user_id, question_id, body), update (body) on public.qbank_question_memos to authenticated;
grant all on public.qbank_question_memos to service_role;
create policy memo_select_own on public.qbank_question_memos for select to authenticated
  using ((select auth.uid()) = user_id);
create policy memo_insert_own on public.qbank_question_memos for insert to authenticated
  with check ((select auth.uid()) = user_id);
create policy memo_update_own on public.qbank_question_memos for update to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create function public.qbank_memo_revision() returns trigger
language plpgsql security invoker set search_path = '' as $$
begin
  new.revision := old.revision + 1;
  new.updated_at := clock_timestamp();
  return new;
end;
$$;
revoke all on function public.qbank_memo_revision() from public, anon, authenticated;
create trigger qbank_memo_revision before update on public.qbank_question_memos
  for each row execute function public.qbank_memo_revision();
do $$ begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    alter publication supabase_realtime add table public.qbank_question_memos;
  end if;
end $$;
