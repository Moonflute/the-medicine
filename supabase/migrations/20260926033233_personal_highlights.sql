create table public.personal_highlights (
  user_id uuid not null references auth.users(id) on delete cascade,
  id uuid not null,
  document_key text not null check (length(document_key) between 1 and 1000),
  color text not null check (color in ('yellow','green','blue','pink','purple','orange')),
  anchor jsonb not null check (
    jsonb_typeof(anchor) = 'object' and anchor ?& array['exact','prefix','suffix','block','start'] and
    jsonb_typeof(anchor->'exact') = 'string' and length(anchor->>'exact') between 1 and 20000 and
    jsonb_typeof(anchor->'prefix') = 'string' and length(anchor->>'prefix') <= 48 and
    jsonb_typeof(anchor->'suffix') = 'string' and length(anchor->>'suffix') <= 48 and
    jsonb_typeof(anchor->'block') = 'string' and length(anchor->>'block') <= 200 and
    jsonb_typeof(anchor->'start') = 'number' and
    (anchor->>'start')::numeric >= 0 and trunc((anchor->>'start')::numeric) = (anchor->>'start')::numeric
  ),
  deleted boolean not null default false,
  primary key (user_id,id)
);
create index personal_highlights_document_idx on public.personal_highlights(user_id,document_key,id);
alter table public.personal_highlights enable row level security;
revoke all on public.personal_highlights from anon, authenticated;
grant select, insert, update on public.personal_highlights to authenticated;
create policy "highlights: read own" on public.personal_highlights for select to authenticated using ((select auth.uid()) = user_id);
create policy "highlights: insert own" on public.personal_highlights for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "highlights: update own" on public.personal_highlights for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create function public.keep_highlight_identity() returns trigger
language plpgsql set search_path = '' as $$
begin
  new.user_id := old.user_id;
  new.id := old.id;
  new.document_key := old.document_key;
  new.anchor := old.anchor;
  new.color := old.color;
  new.deleted := old.deleted or new.deleted;
  return new;
end;
$$;
revoke all on function public.keep_highlight_identity() from public, anon, authenticated;
create trigger keep_highlight_identity before update on public.personal_highlights for each row execute function public.keep_highlight_identity();
