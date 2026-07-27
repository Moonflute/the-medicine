-- The Medicine: retry-safe realtime sync operations
-- Run this after 202607270001_learning_sync.sql.

alter table public.review_items add column if not exists metadata jsonb not null default '{}'::jsonb;
alter table public.content_progress add column if not exists metadata jsonb not null default '{}'::jsonb;

create or replace function public.record_content_view(
  p_event_id uuid,
  p_device_id text,
  p_domain text,
  p_content_id text,
  p_metadata jsonb,
  p_occurred_at timestamptz
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_inserted boolean := false;
begin
  if v_user_id is null then
    raise exception 'Authentication required';
  end if;

  insert into public.learning_events (id, user_id, device_id, event_type, domain, content_id, occurred_at, payload)
  values (p_event_id, v_user_id, p_device_id, 'content_view', p_domain, p_content_id, p_occurred_at, jsonb_build_object('metadata', coalesce(p_metadata, '{}'::jsonb)))
  on conflict (id) do nothing;
  get diagnostics v_inserted = row_count;

  if v_inserted then
    insert into public.content_progress (user_id, domain, content_id, first_viewed_at, last_viewed_at, view_count, metadata)
    values (v_user_id, p_domain, p_content_id, p_occurred_at, p_occurred_at, 1, coalesce(p_metadata, '{}'::jsonb))
    on conflict (user_id, domain, content_id) do update
    set first_viewed_at = least(public.content_progress.first_viewed_at, excluded.first_viewed_at),
        last_viewed_at = greatest(public.content_progress.last_viewed_at, excluded.last_viewed_at),
        view_count = public.content_progress.view_count + 1,
        metadata = public.content_progress.metadata || excluded.metadata;
  end if;
end;
$$;

create or replace function public.record_qbank_attempt(
  p_event_id uuid,
  p_device_id text,
  p_question_id text,
  p_answer text,
  p_correct boolean,
  p_occurred_at timestamptz
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_inserted boolean := false;
begin
  if v_user_id is null then
    raise exception 'Authentication required';
  end if;

  insert into public.learning_events (id, user_id, device_id, event_type, content_id, occurred_at, payload)
  values (p_event_id, v_user_id, p_device_id, 'qbank_attempt', p_question_id, p_occurred_at, jsonb_build_object('answer', p_answer, 'correct', p_correct))
  on conflict (id) do nothing;
  get diagnostics v_inserted = row_count;

  if v_inserted then
    insert into public.qbank_question_progress (user_id, question_id, attempts, correct_attempts, consecutive_correct, last_answer, last_correct, last_attempted_at, mastered, wrong_marked)
    values (v_user_id, p_question_id, 1, case when p_correct then 1 else 0 end, case when p_correct then 1 else 0 end, p_answer, p_correct, p_occurred_at, false, not p_correct)
    on conflict (user_id, question_id) do update
    set attempts = public.qbank_question_progress.attempts + 1,
        correct_attempts = public.qbank_question_progress.correct_attempts + case when p_correct then 1 else 0 end,
        consecutive_correct = case when p_correct then public.qbank_question_progress.consecutive_correct + 1 else 0 end,
        last_answer = p_answer,
        last_correct = p_correct,
        last_attempted_at = greatest(coalesce(public.qbank_question_progress.last_attempted_at, p_occurred_at), p_occurred_at),
        mastered = public.qbank_question_progress.mastered or (p_correct and public.qbank_question_progress.consecutive_correct + 1 >= 2),
        wrong_marked = public.qbank_question_progress.wrong_marked or not p_correct;
  end if;
end;
$$;

create or replace function public.set_qbank_flag(
  p_event_id uuid,
  p_device_id text,
  p_question_id text,
  p_flag text,
  p_value boolean,
  p_occurred_at timestamptz
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_inserted boolean := false;
begin
  if v_user_id is null then
    raise exception 'Authentication required';
  end if;
  if p_flag not in ('bookmarked', 'wrong_marked') then
    raise exception 'Invalid Q-bank flag';
  end if;

  insert into public.learning_events (id, user_id, device_id, event_type, content_id, occurred_at, payload)
  values (p_event_id, v_user_id, p_device_id, case when p_flag = 'bookmarked' then 'qbank_bookmark' else 'qbank_wrong_remove' end, p_question_id, p_occurred_at, jsonb_build_object('flag', p_flag, 'value', p_value))
  on conflict (id) do nothing;
  get diagnostics v_inserted = row_count;

  if v_inserted then
    insert into public.qbank_question_progress (user_id, question_id, bookmarked, wrong_marked)
    values (v_user_id, p_question_id, case when p_flag = 'bookmarked' then p_value else false end, case when p_flag = 'wrong_marked' then p_value else false end)
    on conflict (user_id, question_id) do update
    set bookmarked = case when p_flag = 'bookmarked' then p_value else public.qbank_question_progress.bookmarked end,
        wrong_marked = case when p_flag = 'wrong_marked' then p_value else public.qbank_question_progress.wrong_marked end;
  end if;
end;
$$;

grant execute on function public.record_content_view(uuid, text, text, text, jsonb, timestamptz) to authenticated;
grant execute on function public.record_qbank_attempt(uuid, text, text, text, boolean, timestamptz) to authenticated;
grant execute on function public.set_qbank_flag(uuid, text, text, text, boolean, timestamptz) to authenticated;