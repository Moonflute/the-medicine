-- The revised edition never replaces canonical questions or their progress IDs.
create table public.private_qbank_revision_items (
  id text primary key,
  source_item_id text not null references public.private_qbank_canonical_items(id),
  edition text not null check (edition ~ '^[0-9]{4}-(0[1-9]|1[0-2])$'),
  index_data jsonb not null,
  payload jsonb not null,
  unique (source_item_id, edition),
  check (id = 'QB-REV-' || replace(edition, '-', '') || '-' || substr(source_item_id, 4)),
  check (index_data @> jsonb_build_object('id', id, 'bookSeries', '실전 개정판')
    and not (index_data ? 'sourceIds')),
  check (payload @> jsonb_build_object('id', id, 'questionBank', 'practice', 'gradingMode', 'single')
    and (payload->>'answer' ~ '^[A-E]$') is true
    and ((payload->'options') ? (payload->>'answer')) is true)
);

alter table public.private_qbank_revision_items enable row level security;
revoke all on public.private_qbank_revision_items from public, anon, authenticated;
grant select (id, index_data, payload) on public.private_qbank_revision_items to authenticated;
grant all on public.private_qbank_revision_items to service_role;
create policy private_qbank_revision_items_read on public.private_qbank_revision_items
  for select to authenticated
  using ((select exists(
    select 1 from public.private_qbank_access
    where user_id = (select auth.uid()) and enabled
  )));
