-- Study Flow is account-owned and independent from medical source documents.
-- Version matches the migration applied to the connected Supabase project.
-- A field-stamped merge keeps offline edits to different fields instead of
-- replacing a user's entire outline. Deleted rows remain as tombstones.
create or replace function public.study_flow_fields_valid(record_kind text, payload jsonb)
returns boolean
language plpgsql immutable
set search_path = ''
as $function$
declare
  required text[];
  field_name text;
  meta jsonb;
  val jsonb;
  link jsonb;
  address text;
begin
  required := case record_kind
    when 'flow' then array['title','createdAt','deleted']
    when 'item' then array['flowId','parentId','order','text','done','links','createdAt','deleted']
    else null end;
  if required is null or jsonb_typeof(payload) is distinct from 'object' then return false; end if;
  if (select count(*) from jsonb_object_keys(payload)) <> cardinality(required) then return false; end if;
  foreach field_name in array required loop
    meta := payload -> field_name;
    if jsonb_typeof(meta) is distinct from 'object'
      or not (meta ?& array['value','at','by'])
      or (select count(*) from jsonb_object_keys(meta)) <> 3
      or jsonb_typeof(meta -> 'at') is distinct from 'number'
      or jsonb_typeof(meta -> 'by') is distinct from 'string'
      or (meta ->> 'by') !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
      then return false; end if;
    if (meta ->> 'at')::numeric < 0 or (meta ->> 'at')::numeric > 9007199254740991
      or trunc((meta ->> 'at')::numeric) <> (meta ->> 'at')::numeric then return false; end if;
    val := meta -> 'value';
    case field_name
      when 'title', 'text' then
        if jsonb_typeof(val) is distinct from 'string' or ((field_name = 'title' and char_length(meta ->> 'value') > 200) or char_length(meta ->> 'value') > 20000) then return false; end if;
      when 'deleted', 'done' then
        if jsonb_typeof(val) is distinct from 'boolean' then return false; end if;
      when 'flowId' then
        if jsonb_typeof(val) is distinct from 'string' or (meta ->> 'value') !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' then return false; end if;
      when 'parentId' then
        if val <> 'null'::jsonb and (jsonb_typeof(val) is distinct from 'string' or (meta ->> 'value') !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$') then return false; end if;
      when 'createdAt' then
        if jsonb_typeof(val) is distinct from 'number' then return false; end if;
        if (meta ->> 'value')::numeric < 0 or (meta ->> 'value')::numeric > 9007199254740991 or trunc((meta ->> 'value')::numeric) <> (meta ->> 'value')::numeric then return false; end if;
      when 'order' then
        if jsonb_typeof(val) is distinct from 'number' or abs((meta ->> 'value')::numeric) > 1000000000000 then return false; end if;
      when 'links' then
        if jsonb_typeof(val) is distinct from 'array' or jsonb_array_length(val) > 50 then return false; end if;
        for link in select value from jsonb_array_elements(val) loop
          if jsonb_typeof(link) is distinct from 'object' or not (link ?& array['key','kind','title','href'])
            or jsonb_typeof(link -> 'key') is distinct from 'string' or char_length(link ->> 'key') not between 1 and 1000
            or jsonb_typeof(link -> 'kind') is distinct from 'string' or char_length(link ->> 'kind') not between 1 and 40
            or jsonb_typeof(link -> 'title') is distinct from 'string' or char_length(link ->> 'title') not between 1 and 300
            or jsonb_typeof(link -> 'href') is distinct from 'string' then return false; end if;
          address := link ->> 'href';
          if char_length(address) > 2000 or left(address, 1) <> '/' or left(address, 2) = '//'
            or address ~ '[[:space:][:cntrl:]]' or position(E'\\' in address) > 0 then return false; end if;
        end loop;
      else return false;
    end case;
  end loop;
  return true;
exception when others then
  return false;
end;
$function$;

create or replace function public.study_flow_merge_fields(previous jsonb, incoming jsonb)
returns jsonb
language plpgsql immutable
set search_path = ''
as $function$
declare
  merged jsonb := previous;
  field_name text;
  field_value jsonb;
  old_field jsonb;
begin
  for field_name, field_value in select key, value from jsonb_each(incoming) loop
    old_field := previous -> field_name;
    if old_field is null
      or (field_value ->> 'at')::numeric > (old_field ->> 'at')::numeric
      or ((field_value ->> 'at')::numeric = (old_field ->> 'at')::numeric
          and (field_value ->> 'by') collate "C" > (old_field ->> 'by') collate "C")
    then merged := jsonb_set(merged, array[field_name], field_value); end if;
  end loop;
  return merged;
end;
$function$;

create table public.study_flow_records (
  user_id uuid not null references auth.users(id) on delete cascade,
  id uuid not null,
  kind text not null check (kind in ('flow','item')),
  fields jsonb not null,
  updated_at timestamptz not null default clock_timestamp(),
  primary key (user_id, id),
  constraint study_flow_records_fields_check check (public.study_flow_fields_valid(kind, fields))
);
create index study_flow_records_sync_idx on public.study_flow_records (user_id, updated_at, id);
alter table public.study_flow_records enable row level security;

create or replace function public.study_flow_records_before_write()
returns trigger
language plpgsql
set search_path = ''
as $function$
begin
  if not public.study_flow_fields_valid(new.kind, new.fields) then
    raise exception 'Invalid study Flow record' using errcode = '23514';
  end if;
  if tg_op = 'UPDATE' then
    if new.user_id is distinct from old.user_id or new.id is distinct from old.id or new.kind is distinct from old.kind then
      raise exception 'Study Flow identity is immutable' using errcode = '23514';
    end if;
    new.fields := public.study_flow_merge_fields(old.fields, new.fields);
  end if;
  new.updated_at := clock_timestamp();
  return new;
end;
$function$;
create trigger study_flow_records_before_write
before insert or update on public.study_flow_records
for each row execute function public.study_flow_records_before_write();

revoke all on table public.study_flow_records from anon, authenticated;
grant select, insert, update on table public.study_flow_records to authenticated;
revoke execute on function public.study_flow_fields_valid(text, jsonb) from public, anon;
revoke execute on function public.study_flow_merge_fields(jsonb, jsonb) from public, anon;
revoke execute on function public.study_flow_records_before_write() from public, anon, authenticated;
grant execute on function public.study_flow_fields_valid(text, jsonb), public.study_flow_merge_fields(jsonb, jsonb) to authenticated;

create policy study_flow_records_select on public.study_flow_records for select to authenticated
using ((select auth.uid()) = user_id);
create policy study_flow_records_insert on public.study_flow_records for insert to authenticated
with check ((select auth.uid()) = user_id);
create policy study_flow_records_update on public.study_flow_records for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

do $block$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime')
    and not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'study_flow_records')
  then
    alter publication supabase_realtime add table public.study_flow_records;
  end if;
end;
$block$;
