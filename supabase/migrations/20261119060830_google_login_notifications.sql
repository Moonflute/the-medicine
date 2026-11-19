-- Intentionally no client RLS policies: only service_role may access alerts.
-- Only the server may claim or acknowledge an alert. Logout removes the record
-- with its Auth session; no names, email addresses, or tokens are stored here.
create table public.google_login_notifications (
  session_id uuid primary key references auth.sessions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  signed_in_at timestamptz not null,
  claim_id uuid not null default gen_random_uuid(),
  lease_until timestamptz not null,
  attempts integer not null default 1 check (attempts between 1 and 3),
  sent_at timestamptz
);
create index google_login_notifications_user_idx on public.google_login_notifications(user_id);
alter table public.google_login_notifications enable row level security;
revoke all on public.google_login_notifications from public, anon, authenticated;
grant select, insert, update on public.google_login_notifications to service_role;

create function public.google_login_notification_claim(p_user_id uuid, p_session_id uuid, p_signed_in_at timestamptz)
returns jsonb language plpgsql security invoker set search_path = '' as $$
declare
  v_now timestamptz := clock_timestamp();
  v_claim uuid;
  v_status text;
begin
  if p_signed_in_at is null or p_signed_in_at < v_now - interval '10 minutes'
    or p_signed_in_at > v_now + interval '1 minute' then
    return jsonb_build_object('status', 'ignored');
  end if;
  insert into public.google_login_notifications as current_alert
    (session_id, user_id, signed_in_at, lease_until)
  values (p_session_id, p_user_id, p_signed_in_at, v_now + interval '1 minute')
  on conflict (session_id) do update set
    claim_id = gen_random_uuid(), lease_until = excluded.lease_until,
    attempts = current_alert.attempts + 1
  where current_alert.user_id = excluded.user_id and current_alert.sent_at is null
    and current_alert.lease_until <= v_now and current_alert.attempts < 3
  returning claim_id into v_claim;
  if v_claim is not null then
    return jsonb_build_object('status', 'claimed', 'claimId', v_claim);
  end if;
  select case when sent_at is not null then 'already_notified'
    when lease_until > v_now then 'processing' else 'exhausted' end into v_status
  from public.google_login_notifications where session_id = p_session_id and user_id = p_user_id;
  return jsonb_build_object('status', coalesce(v_status, 'ignored'));
end;
$$;

create function public.google_login_notification_finish(p_session_id uuid, p_claim_id uuid, p_sent boolean)
returns void language sql security invoker set search_path = '' as $$
  update public.google_login_notifications
  set sent_at = case when p_sent then clock_timestamp() else sent_at end,
    lease_until = clock_timestamp()
  where session_id = p_session_id and claim_id = p_claim_id and sent_at is null;
$$;

revoke all on function public.google_login_notification_claim(uuid, uuid, timestamptz),
  public.google_login_notification_finish(uuid, uuid, boolean) from public, anon, authenticated;
grant execute on function public.google_login_notification_claim(uuid, uuid, timestamptz),
  public.google_login_notification_finish(uuid, uuid, boolean) to service_role;
