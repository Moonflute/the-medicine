-- Keep the private canonical payload and the lightweight picker index in sync
-- when the owner edits disease/CC theory-page links in the web editor.
create or replace function public.private_qbank_owner_update(
  p_id text,
  p_expected jsonb,
  p_payload jsonb
) returns boolean
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if p_id !~ '^QB-[A-Za-z0-9-]+$'
     or p_payload->>'id' <> p_id
     or jsonb_typeof(coalesce(p_payload->'relatedDiseaseSlugs', '[]'::jsonb)) <> 'array'
     or jsonb_typeof(coalesce(p_payload->'relatedCcSlugs', '[]'::jsonb)) <> 'array'
     or jsonb_typeof(coalesce(p_payload->'relatedDocuments', '[]'::jsonb)) <> 'array' then
    raise exception 'invalid private Q-bank payload';
  end if;

  update public.private_qbank_canonical_items
     set payload = p_payload,
         index_data = jsonb_set(
           jsonb_set(index_data, '{relatedDiseaseSlugs}', coalesce(p_payload->'relatedDiseaseSlugs', '[]'::jsonb), true),
           '{relatedCcSlugs}', coalesce(p_payload->'relatedCcSlugs', '[]'::jsonb), true
         )
   where id = p_id
     and payload = p_expected;

  return found;
end;
$$;

revoke all on function public.private_qbank_owner_update(text, jsonb, jsonb) from public, anon, authenticated;
grant execute on function public.private_qbank_owner_update(text, jsonb, jsonb) to service_role;
