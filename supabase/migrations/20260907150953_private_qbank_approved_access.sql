
create table public.private_qbank_access (
 user_id uuid primary key references auth.users(id) on delete cascade,
 enabled boolean not null default true
);
alter table public.private_qbank_access enable row level security;
revoke all on public.private_qbank_access from anon, authenticated;
grant select on public.private_qbank_access to authenticated;
create policy private_qbank_access_self on public.private_qbank_access for select to authenticated using (user_id=(select auth.uid()));

create table public.private_qbank_items (
 id text primary key check (id like 'QB-%'),
 index_data jsonb not null,
 payload jsonb not null,
 check (index_data->>'id'=id and payload->>'id'=id)
);
alter table public.private_qbank_items enable row level security;
revoke all on public.private_qbank_items from anon, authenticated;
grant select on public.private_qbank_items to authenticated;
create policy private_qbank_items_read on public.private_qbank_items for select to authenticated using (
 (select exists(select 1 from public.private_qbank_access where user_id=(select auth.uid()) and enabled))
);

create table public.private_qbank_assets (
 path text primary key, sha256 text not null, bytes bigint not null
);
alter table public.private_qbank_assets enable row level security;
revoke all on public.private_qbank_assets from anon,authenticated;
grant select on public.private_qbank_assets to authenticated;
create policy private_qbank_assets_read on public.private_qbank_assets for select to authenticated using (
 (select exists(select 1 from public.private_qbank_access where user_id=(select auth.uid()) and enabled))
);

create table public.private_qbank_import_jobs (
 token_hash text primary key, expires_at timestamptz not null
);
alter table public.private_qbank_import_jobs enable row level security;
revoke all on public.private_qbank_import_jobs from anon,authenticated;

create function public.private_qbank_index() returns jsonb
language sql stable security invoker set search_path='' as $$
 select coalesce(jsonb_agg(index_data order by id),'[]'::jsonb) from public.private_qbank_items;
$$;
revoke all on function public.private_qbank_index() from public,anon;
grant execute on function public.private_qbank_index() to authenticated;

create function public.private_qbank_questions(requested_ids text[]) returns jsonb
language sql stable security invoker set search_path='' as $$
 select coalesce(jsonb_agg(payload order by id),'[]'::jsonb)
 from public.private_qbank_items where id=any(requested_ids)
 and cardinality(requested_ids)<=100;
$$;
revoke all on function public.private_qbank_questions(text[]) from public,anon;
grant execute on function public.private_qbank_questions(text[]) to authenticated;

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('private-qbank','private-qbank',false,10485760,array['image/jpeg']);
create policy private_qbank_storage_read on storage.objects for select to authenticated using (
 bucket_id='private-qbank' and
 (select exists(select 1 from public.private_qbank_access where user_id=(select auth.uid()) and enabled))
);
grant all on public.private_qbank_access, public.private_qbank_items,public.private_qbank_assets,public.private_qbank_import_jobs to service_role;
