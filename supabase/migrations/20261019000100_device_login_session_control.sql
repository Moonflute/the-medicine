-- Track only sessions created by the device-login function. The browser cannot
-- write this registry; service_role can call the narrowly scoped RPCs below.
alter table public.device_login_codes
  alter column expires_at set default (clock_timestamp() + interval '10 seconds');

create or replace function public.device_login_issue(p_user_id uuid, p_code_hash text)
returns jsonb language plpgsql security invoker set search_path = '' as $$
declare
  v_code public.device_login_codes;
  v_now timestamptz := clock_timestamp();
begin
  delete from public.device_login_codes where expires_at <= v_now;
  delete from public.device_login_rate_limits where window_ends_at < v_now - interval '1 day';
  insert into public.device_login_codes as current_code(user_id, code_hash, created_at, expires_at)
  values (p_user_id, p_code_hash, v_now, v_now + interval '10 seconds')
  on conflict (user_id) do update set
    id = gen_random_uuid(), code_hash = excluded.code_hash,
    created_at = excluded.created_at, expires_at = excluded.expires_at
  where current_code.code_hash <> excluded.code_hash
  returning * into v_code;
  if v_code.id is null then
    raise exception using errcode = '23505', message = 'Login code collision';
  end if;
  return jsonb_build_object('id', v_code.id, 'expiresAt', v_code.expires_at);
end;
$$;

create table public.device_login_sessions (
  session_id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default clock_timestamp(),
  revoked_at timestamptz
);
create index device_login_sessions_user_revoked_idx
  on public.device_login_sessions(user_id, revoked_at);
alter table public.device_login_sessions enable row level security;
revoke all on public.device_login_sessions from public, anon, authenticated;

-- Security definer is needed because service_role cannot delete auth.sessions.
-- Every RPC is callable only by service_role and checks the user/session pair.
create function public.device_login_session_exists(p_user_id uuid, p_session_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from auth.sessions
    where user_id = p_user_id and id = p_session_id
  );
$$;

create function public.device_login_register_session(p_user_id uuid, p_session_id uuid)
returns boolean language plpgsql security definer set search_path = '' as $$
begin
  if not exists (
    select 1 from auth.sessions where user_id = p_user_id and id = p_session_id
  ) then
    return false;
  end if;
  insert into public.device_login_sessions(session_id, user_id)
  values (p_session_id, p_user_id)
  on conflict (session_id) do nothing;
  return exists (
    select 1 from public.device_login_sessions
    where session_id = p_session_id and user_id = p_user_id and revoked_at is null
  );
end;
$$;

create function public.device_login_session_active(p_user_id uuid, p_session_id uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.device_login_sessions d
    join auth.sessions s on s.id = d.session_id and s.user_id = d.user_id
    where d.user_id = p_user_id and d.session_id = p_session_id
      and d.revoked_at is null
  );
$$;

create function public.device_login_revoke_session(p_user_id uuid, p_session_id uuid)
returns void language plpgsql security definer set search_path = '' as $$
begin
  update public.device_login_sessions set revoked_at = clock_timestamp()
  where user_id = p_user_id and session_id = p_session_id and revoked_at is null;
  delete from auth.sessions where user_id = p_user_id and id = p_session_id;
end;
$$;

create function public.device_login_revoke_sessions(p_user_id uuid)
returns integer language plpgsql security definer set search_path = '' as $$
declare
  v_count integer;
begin
  -- A still-visible code must not recreate a session just after this action.
  delete from public.device_login_codes where user_id = p_user_id;
  with revoked as (
    update public.device_login_sessions
    set revoked_at = clock_timestamp()
    where user_id = p_user_id and revoked_at is null
    returning session_id
  )
  delete from auth.sessions s using revoked r
  where s.id = r.session_id and s.user_id = p_user_id;
  get diagnostics v_count = row_count;
  return v_count;
end;
$$;

revoke all on function public.device_login_session_exists(uuid, uuid),
  public.device_login_register_session(uuid, uuid),
  public.device_login_session_active(uuid, uuid),
  public.device_login_revoke_session(uuid, uuid),
  public.device_login_revoke_sessions(uuid) from public, anon, authenticated;
grant execute on function public.device_login_session_exists(uuid, uuid),
  public.device_login_register_session(uuid, uuid),
  public.device_login_session_active(uuid, uuid),
  public.device_login_revoke_session(uuid, uuid),
  public.device_login_revoke_sessions(uuid) to service_role;

comment on table public.device_login_sessions is
  'Server-only registry of Auth sessions created by temporary device codes.';
