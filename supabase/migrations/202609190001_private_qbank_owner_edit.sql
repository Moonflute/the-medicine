-- Only the server-side editor function uses this RPC.  It compares the full
-- JSON payload in the same UPDATE that writes it, so a second device cannot
-- silently overwrite a newer question edit.
create or replace function public.private_qbank_owner_update(
  p_id text,
  p_expected jsonb,
  p_payload jsonb
) returns boolean
language plpgsql
security definer
set search_path = ''
as $$
begin
  if p_id !~ '^QB-[A-Za-z0-9-]+$' or p_payload->>'id' <> p_id then
    raise exception 'invalid private Q-bank payload';
  end if;

  update public.private_qbank_items
     set payload = p_payload
   where id = p_id
     and payload = p_expected;

  return found;
end;
$$;

revoke all on function public.private_qbank_owner_update(text, jsonb, jsonb) from public, anon, authenticated;
grant execute on function public.private_qbank_owner_update(text, jsonb, jsonb) to service_role;
