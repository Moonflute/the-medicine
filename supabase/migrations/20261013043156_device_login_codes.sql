-- Applied via Supabase MCP as migration 20261013043156.
-- Only the device-login Edge Function may read or mutate these tables/RPCs.
-- No plaintext login codes, email addresses, or Auth tokens are stored here.
create table public.device_login_codes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  code_hash text not null unique check (code_hash ~ '^[0-9a-f]{64}$'),
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '3 minutes')
);
create index device_login_codes_expiry_idx on public.device_login_codes(expires_at);

create table public.device_login_rate_limits (
  bucket text primary key check (length(bucket) between 1 and 160),
  hits integer not null check (hits > 0),
  window_ends_at timestamptz not null
);
create index device_login_rate_limits_expiry_idx on public.device_login_rate_limits(window_ends_at);

alter table public.device_login_codes enable row level security;
alter table public.device_login_rate_limits enable row level security;
revoke all on public.device_login_codes, public.device_login_rate_limits from public, anon, authenticated;
grant select, insert, update, delete on public.device_login_codes, public.device_login_rate_limits to service_role;

-- UPSERT serializes concurrent attempts, including across Edge Function workers.
-- Returns zero when allowed, otherwise the seconds until this window ends.
create function public.device_login_rate_limit(p_bucket text, p_limit integer, p_window_seconds integer)
returns integer language plpgsql security invoker set search_path = '' as $$
declare
  v_now timestamptz := clock_timestamp();
  v_hits integer;
  v_end timestamptz;
begin
  if p_limit < 1 or p_limit > 1000 or p_window_seconds < 1 or p_window_seconds > 3600 then
    raise exception 'Invalid rate limit';
  end if;
  insert into public.device_login_rate_limits as current_limit(bucket, hits, window_ends_at)
  values (p_bucket, 1, v_now + make_interval(secs => p_window_seconds))
  on conflict (bucket) do update set
    hits = case when current_limit.window_ends_at <= v_now then 1 else least(current_limit.hits + 1, p_limit + 1) end,
    window_ends_at = case when current_limit.window_ends_at <= v_now then v_now + make_interval(secs => p_window_seconds) else current_limit.window_ends_at end
  returning hits, window_ends_at into v_hits, v_end;
  return case when v_hits <= p_limit then 0 else greatest(1, ceil(extract(epoch from (v_end - v_now)))::integer) end;
end;
$$;

create function public.device_login_issue(p_user_id uuid, p_code_hash text)
returns jsonb language plpgsql security invoker set search_path = '' as $$
declare
  v_code public.device_login_codes;
begin
  delete from public.device_login_codes where expires_at < now();
  delete from public.device_login_rate_limits where window_ends_at < now() - interval '1 day';
  -- One active code per account: regeneration atomically replaces the previous code.
  insert into public.device_login_codes as current_code(user_id, code_hash)
  values (p_user_id, p_code_hash)
  on conflict (user_id) do update set
    id = gen_random_uuid(), code_hash = excluded.code_hash,
    created_at = now(), expires_at = now() + interval '3 minutes'
  where current_code.code_hash <> excluded.code_hash
  returning * into v_code;
  if v_code.id is null then
    raise exception using errcode = '23505', message = 'Login code collision';
  end if;
  return jsonb_build_object('id', v_code.id, 'expiresAt', v_code.expires_at);
end;
$$;

create function public.device_login_redeem(p_code_hash text)
returns uuid language plpgsql security invoker set search_path = '' as $$
declare
  v_user_id uuid;
begin
  -- DELETE RETURNING ensures only one of two simultaneous requests can succeed.
  delete from public.device_login_codes
  where code_hash = p_code_hash and expires_at > clock_timestamp()
  returning user_id into v_user_id;
  return v_user_id;
end;
$$;

create function public.device_login_revoke(p_user_id uuid, p_id uuid)
returns void language sql security invoker set search_path = '' as $$
  delete from public.device_login_codes where user_id = p_user_id and id = p_id;
$$;

revoke all on function public.device_login_rate_limit(text, integer, integer),
  public.device_login_issue(uuid, text), public.device_login_redeem(text),
  public.device_login_revoke(uuid, uuid) from public, anon, authenticated;
grant execute on function public.device_login_rate_limit(text, integer, integer),
  public.device_login_issue(uuid, text), public.device_login_redeem(text),
  public.device_login_revoke(uuid, uuid) to service_role;

comment on table public.device_login_codes is 'Short-lived one-time device login codes; service_role only, RLS denies browser access.';
comment on table public.device_login_rate_limits is 'Server-only atomic rate limits; buckets contain HMACs, never raw IP addresses.';
