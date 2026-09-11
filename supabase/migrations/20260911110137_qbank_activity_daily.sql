create table public.qbank_activity_daily (
  user_id uuid not null references auth.users(id) on delete cascade,
  source_id text not null check (length(source_id) between 1 and 120),
  activity_date date not null,
  kind text not null check (kind in ('legacy', 'increment')),
  attempts integer not null default 0 check (attempts >= 0),
  correct integer not null default 0 check (correct >= 0 and correct <= attempts),
  updated_at timestamptz not null default now(),
  primary key (user_id, source_id, activity_date)
);
alter table public.qbank_activity_daily enable row level security;
grant select, insert, update on public.qbank_activity_daily to authenticated;
revoke all on public.qbank_activity_daily from anon;
create policy "activity: own rows" on public.qbank_activity_daily
  for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create function public.preserve_qbank_daily_counts()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
  if new.user_id <> old.user_id or new.source_id <> old.source_id
    or new.activity_date <> old.activity_date or new.kind <> old.kind then
    raise exception 'Activity identity is immutable';
  end if;
  new.attempts := greatest(old.attempts, new.attempts);
  new.correct := greatest(old.correct, new.correct);
  new.updated_at := now();
  return new;
end;
$$;
revoke all on function public.preserve_qbank_daily_counts() from public;
create trigger preserve_qbank_daily_counts before update on public.qbank_activity_daily
  for each row execute function public.preserve_qbank_daily_counts();

-- Existing server sessions are a historical floor, not a second additive history.
-- All sessions are included, not only the latest 100 used by the result list.
insert into public.qbank_activity_daily (user_id, source_id, activity_date, kind, attempts, correct)
select user_id, 'legacy-sessions', (completed_at at time zone 'Asia/Seoul')::date,
       'legacy', sum(total)::integer, sum(correct)::integer
from public.qbank_sessions group by user_id, (completed_at at time zone 'Asia/Seoul')::date
on conflict do nothing;

alter publication supabase_realtime add table public.qbank_activity_daily;
