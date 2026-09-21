-- Canonical practice-question layer
--
-- Keep the uploaded P/R source records immutable.  The application reads this
-- table instead, so one logical question has one stable ID while every source
-- record remains traceable through private_qbank_canonical_sources.
create table public.private_qbank_canonical_items (
  id text primary key check (id like 'QB-%'),
  source_ids text[] not null check (cardinality(source_ids) >= 1),
  index_data jsonb not null,
  payload jsonb not null,
  check (index_data->>'id' = id and payload->>'id' = id)
);

alter table public.private_qbank_canonical_items enable row level security;
revoke all on public.private_qbank_canonical_items from anon, authenticated;
grant select on public.private_qbank_canonical_items to authenticated;
create policy private_qbank_canonical_items_read on public.private_qbank_canonical_items
  for select to authenticated
  using ((select exists(
    select 1 from public.private_qbank_access
    where user_id = (select auth.uid()) and enabled
  )));

create table public.private_qbank_canonical_sources (
  source_id text primary key references public.private_qbank_items(id) on delete cascade,
  canonical_id text not null references public.private_qbank_canonical_items(id) on delete cascade
);

alter table public.private_qbank_canonical_sources enable row level security;
revoke all on public.private_qbank_canonical_sources from anon, authenticated;
grant select on public.private_qbank_canonical_sources to authenticated;
create policy private_qbank_canonical_sources_read on public.private_qbank_canonical_sources
  for select to authenticated
  using ((select exists(
    select 1 from public.private_qbank_access
    where user_id = (select auth.uid()) and enabled
  )));

grant all on public.private_qbank_canonical_items, public.private_qbank_canonical_sources to service_role;

-- Every Perfect item stays a stable canonical ID, including its older years
-- that have no Real counterpart.  P/R labels are deliberately removed from
-- the runtime index.
insert into public.private_qbank_canonical_items (id, source_ids, index_data, payload)
select
  id,
  array[id],
  jsonb_set(jsonb_set(index_data, '{bookSeries}', to_jsonb('실전'::text), true), '{bookTitle}', to_jsonb('실전문제'::text), true),
  jsonb_set(payload, '{id}', to_jsonb(id), true)
from public.private_qbank_items
where index_data->>'bookSeries' = '퍼펙트';

-- The one Real-only item is retained as its own canonical item.
insert into public.private_qbank_canonical_items (id, source_ids, index_data, payload)
select
  id,
  array[id],
  jsonb_set(jsonb_set(index_data, '{bookSeries}', to_jsonb('실전'::text), true), '{bookTitle}', to_jsonb('실전문제'::text), true),
  jsonb_set(payload, '{id}', to_jsonb(id), true)
from public.private_qbank_items
where id = 'QB-RL2020-V01-OG-0012';

insert into public.private_qbank_canonical_sources (source_id, canonical_id)
select id, id
from public.private_qbank_items
where index_data->>'bookSeries' = '퍼펙트';

-- Match the unambiguous P/R pairs within their common year and subject.  The
-- score is character-trigram coverage, used only to generate this audited map;
-- the remaining nine pairs are supplied explicitly below.
create temporary table _practice_auto_pairs on commit drop as
with items as (
  select id, index_data->>'bookSeries' as series,
    nullif(index_data->>'examYear', '')::int as exam_year,
    index_data->>'bookDepartment' as department,
    lower(regexp_replace(coalesce(payload->>'question', ''), '[[:space:][:punct:]]', '', 'g')) as nq
  from public.private_qbank_items
  where index_data->>'bookSeries' in ('퍼펙트', '리얼')
), shared_groups as (
  select exam_year, department from items group by 1, 2
  having count(*) filter (where series = '퍼펙트') > 0
     and count(*) filter (where series = '리얼') > 0
), p as (
  select i.* from items i join shared_groups g using (exam_year, department) where series = '퍼펙트'
), r as (
  select i.* from items i join shared_groups g using (exam_year, department) where series = '리얼'
), scores as (
  select p.id as perfect_id, r.id as real_id,
    (select count(*)::numeric from (
      select distinct substring(p.nq from pos for 3) as gram from generate_series(1, greatest(length(p.nq) - 2, 0)) pos
      intersect
      select distinct substring(r.nq from pos for 3) as gram from generate_series(1, greatest(length(r.nq) - 2, 0)) pos
    ) x) / nullif(least(
      (select count(distinct substring(p.nq from pos for 3)) from generate_series(1, greatest(length(p.nq) - 2, 0)) pos),
      (select count(distinct substring(r.nq from pos for 3)) from generate_series(1, greatest(length(r.nq) - 2, 0)) pos)
    ), 0) as coverage
  from p join r using (exam_year, department)
), ranked as (
  select *,
    row_number() over (partition by perfect_id order by coverage desc, real_id) as p_rank,
    row_number() over (partition by real_id order by coverage desc, perfect_id) as r_rank
  from scores
)
select perfect_id, real_id from ranked where p_rank = 1 and r_rank = 1;

insert into public.private_qbank_canonical_sources (source_id, canonical_id)
select real_id, perfect_id from _practice_auto_pairs;

-- Nine OCR/wording-variant pairs manually checked by clinical topic.
insert into public.private_qbank_canonical_sources (source_id, canonical_id) values
  ('QB-RL2020-V01-OG-0003', 'QB-PF2026-V02-OG-Y2020-0004'),
  ('QB-RL2020-V01-OG-0006', 'QB-PF2026-V02-OG-Y2020-0016'),
  ('QB-RL2020-V01-OG-0010', 'QB-PF2026-V02-OG-Y2020-0011'),
  ('QB-RL2020-V01-OG-0011', 'QB-PF2026-V02-OG-Y2020-0015'),
  ('QB-RL2020-V01-OG-0013', 'QB-PF2026-V02-OG-Y2020-0007'),
  ('QB-RL2020-V01-OG-0018', 'QB-PF2026-V02-OG-Y2020-0019'),
  ('QB-RL2020-V01-GS-0013', 'QB-PF2026-V01-GS-Y2020-0011'),
  ('QB-RL2020-V01-GS-0023', 'QB-PF2026-V01-GS-Y2020-0022'),
  ('QB-RL2020-V01-GS-0025', 'QB-PF2026-V01-GS-Y2020-0023'),
  ('QB-RL2020-V01-OG-0012', 'QB-RL2020-V01-OG-0012');

do $$
begin
  if (select count(*) from public.private_qbank_canonical_sources m join public.private_qbank_items i on i.id = m.source_id where i.index_data->>'bookSeries' = '리얼') <>
     (select count(*) from public.private_qbank_items where index_data->>'bookSeries' = '리얼') then
    raise exception 'Real canonical map is incomplete';
  end if;
end $$;

-- Preserve traceability on every canonical row.
update public.private_qbank_canonical_items c
set source_ids = coalesce((
  select array_agg(m.source_id order by m.source_id)
  from public.private_qbank_canonical_sources m
  where m.canonical_id = c.id
), c.source_ids);

-- When both source keys agree, show both explanations consecutively.  Cases
-- requiring a selected answer are intentionally excluded below.
with paired as (
  select m.canonical_id, p.payload->>'explanation' as perfect_explanation, r.payload->>'explanation' as real_explanation
  from public.private_qbank_canonical_sources m
  join public.private_qbank_items r on r.id = m.source_id and r.index_data->>'bookSeries' = '리얼'
  join public.private_qbank_items p on p.id = m.canonical_id and p.index_data->>'bookSeries' = '퍼펙트'
  where m.canonical_id <> m.source_id
    and m.canonical_id not in (
      'QB-PF2026-V01-GS-Y2019-0022', 'QB-PF2026-V02-OG-Y2020-0010',
      'QB-PF2026-V02-PE-Y2020-0012', 'QB-PF2026-V02-PE-Y2020-0015',
      'QB-PF2026-V01-GS-Y2020-0019', 'QB-PF2026-V02-PE-Y2022-0015',
      'QB-PF2026-V01-GS-Y2022-0018', 'QB-PF2026-V01-GS-Y2022-0028',
      'QB-PF2026-V02-OG-Y2023-0014', 'QB-PF2026-V02-PE-Y2023-0015',
      'QB-PF2026-V01-IM-Y2024-0019', 'QB-PF2026-V02-PE-Y2024-0004',
      'QB-PF2026-V02-PE-Y2024-0019', 'QB-PF2026-V01-GS-Y2024-0026',
      'QB-PF2026-V01-GS-Y2024-0027'
    )
)
update public.private_qbank_canonical_items c
set payload = jsonb_set(c.payload, '{explanation}', to_jsonb(
  concat('### 해설 1\n', coalesce(paired.perfect_explanation, ''), '\n\n### 해설 2\n', coalesce(paired.real_explanation, ''))
), true)
from paired where paired.canonical_id = c.id;

-- Four cases where the clinically correct answer comes from the Real source.
update public.private_qbank_canonical_items c
set payload = jsonb_set(r.payload, '{id}', to_jsonb(c.id), true)
from public.private_qbank_items r
where (c.id, r.id) in (
  ('QB-PF2026-V02-PE-Y2020-0012', 'QB-RL2020-V01-PE-0012'),
  ('QB-PF2026-V02-PE-Y2020-0015', 'QB-RL2020-V01-PE-0014'),
  ('QB-PF2026-V01-IM-Y2024-0019', 'QB-RL2024-V01-IM-0019'),
  ('QB-PF2026-V02-PE-Y2024-0019', 'QB-RL2024-V01-PE-0017')
);

-- The source images below were reconstructed differently.  The representative
-- image/answer follows the stem, while the alternate image condition remains
-- visible at the end of the explanation instead of becoming a duplicate item.
update public.private_qbank_canonical_items c
set payload = jsonb_set(c.payload, '{explanation}', to_jsonb((c.payload->>'explanation') || E'\n\n### 추가 · 사진 변형\n**[사진]** 유두 외측의 경계가 좋은 원형 양성 석회화만 보이는 경우에는 조직검사보다 1년 간격 유방촬영 추적관찰이 적절합니다.'), true)
where c.id = 'QB-PF2026-V01-GS-Y2019-0022';
update public.private_qbank_canonical_items c
set payload = jsonb_set(c.payload, '{explanation}', to_jsonb((c.payload->>'explanation') || E'\n\n### 추가 · 사진 변형\n**[사진]** 항문관 6시 방향의 선형 궤양(치열) 사진이라면, 이 문항의 선택지에서는 내괄약근절개술이 답이 됩니다.'), true)
where c.id = 'QB-PF2026-V01-GS-Y2020-0019';
update public.private_qbank_canonical_items c
set payload = jsonb_set(c.payload, '{explanation}', to_jsonb((c.payload->>'explanation') || E'\n\n### 추가 · 사진 변형\n**[사진]** 광범위 복막염 없이 국한된 충수돌기주위 농양이 주 소견인 CT라면, 정주 항생제와 경피배농술로 초기 치료합니다.'), true)
where c.id = 'QB-PF2026-V01-GS-Y2022-0018';
update public.private_qbank_canonical_items c
set payload = jsonb_set(c.payload, '{explanation}', to_jsonb((c.payload->>'explanation') || E'\n\n### 추가 · 사진 변형\n**[사진]** CC view에서 outer, MLO view에서 upper 쪽에 병변이 확인되는 사진이라면 상외부 병변입니다.'), true)
where c.id = 'QB-PF2026-V01-GS-Y2022-0028';
update public.private_qbank_canonical_items c
set payload = jsonb_set(c.payload, '{explanation}', to_jsonb((c.payload->>'explanation') || E'\n\n### 추가 · 사진 변형\n**[사진]** 만성·가족력 맥락에서 유전구상적혈구증을 시사하는 도말이라면, 삼투압 취약성 검사 또는 EMA 결합 검사가 적절합니다.'), true)
where c.id = 'QB-PF2026-V02-PE-Y2023-0015';

-- Existing attempts, bookmarks and wrong-answer queues merge onto the
-- canonical ID.  Counts add; latest answer wins; review flags are retained.
create temporary table _canonical_progress on commit drop as
select
  q.user_id,
  m.canonical_id as question_id,
  sum(q.attempts)::integer as attempts,
  sum(q.correct_attempts)::integer as correct_attempts,
  max(q.consecutive_correct)::integer as consecutive_correct,
  (array_agg(q.last_answer order by q.last_attempted_at desc nulls last))[1] as last_answer,
  (array_agg(q.last_correct order by q.last_attempted_at desc nulls last))[1] as last_correct,
  max(q.last_attempted_at) as last_attempted_at,
  bool_or(q.mastered) as mastered,
  bool_or(q.wrong_marked) as wrong_marked,
  bool_or(q.bookmarked) as bookmarked,
  max(q.updated_at) as updated_at
from public.qbank_question_progress q
join public.private_qbank_canonical_sources m on m.source_id = q.question_id
group by q.user_id, m.canonical_id;

delete from public.qbank_question_progress q
using public.private_qbank_canonical_sources m
where q.question_id = m.source_id;

insert into public.qbank_question_progress (
  user_id, question_id, attempts, correct_attempts, consecutive_correct,
  last_answer, last_correct, last_attempted_at, mastered, wrong_marked, bookmarked, updated_at
)
select user_id, question_id, attempts, correct_attempts, consecutive_correct,
  last_answer, last_correct, last_attempted_at, mastered, wrong_marked, bookmarked, updated_at
from _canonical_progress;

-- Completed session summaries retain their historical scores, but their stored
-- IDs now resolve to canonical questions.
update public.qbank_sessions s
set question_ids = (
  select jsonb_agg(to_jsonb(coalesce(m.canonical_id, item.question_id)) order by item.ordinality) as question_ids
  from jsonb_array_elements_text(s.question_ids) with ordinality as item(question_id, ordinality)
  left join public.private_qbank_canonical_sources m on m.source_id = item.question_id
)
where s.question_ids is not null;

-- In-progress cloud sessions include IDs in arrays, answer objects and draft
-- object keys.  Recursively replace every source ID without touching answers.
create or replace function public.remap_private_qbank_json(value jsonb)
returns jsonb language plpgsql security invoker set search_path = '' as $$
declare result jsonb;
begin
  if value is null then return null; end if;
  if jsonb_typeof(value) = 'string' then
    return to_jsonb(coalesce((select canonical_id from public.private_qbank_canonical_sources where source_id = value #>> '{}'), value #>> '{}'));
  elsif jsonb_typeof(value) = 'array' then
    select coalesce(jsonb_agg(public.remap_private_qbank_json(item.value) order by item.ordinality), '[]'::jsonb)
      into result from jsonb_array_elements(value) with ordinality as item(value, ordinality);
    return result;
  elsif jsonb_typeof(value) = 'object' then
    select coalesce(jsonb_object_agg(coalesce(m.canonical_id, entry.key), public.remap_private_qbank_json(entry.value)), '{}'::jsonb)
      into result
      from jsonb_each(value) entry
      left join public.private_qbank_canonical_sources m on m.source_id = entry.key;
    return result;
  end if;
  return value;
end;
$$;
revoke all on function public.remap_private_qbank_json(jsonb) from public, anon, authenticated;

update public.user_preferences
set qbank_active_session = public.remap_private_qbank_json(qbank_active_session)
where qbank_active_session is not null;

-- Serve only the canonical layer.  sourceIds lets an already-open browser
-- migrate its local progress before it makes the next sync write.
create or replace function public.private_qbank_index() returns jsonb
language sql stable security invoker set search_path = '' as $$
  select coalesce(jsonb_agg(jsonb_set(index_data, '{sourceIds}', to_jsonb(source_ids), true) order by id), '[]'::jsonb)
  from public.private_qbank_canonical_items;
$$;

create or replace function public.private_qbank_questions(requested_ids text[]) returns jsonb
language sql stable security invoker set search_path = '' as $$
  select coalesce(jsonb_agg(payload order by id), '[]'::jsonb)
  from public.private_qbank_canonical_items
  where id = any(requested_ids) and cardinality(requested_ids) <= 100;
$$;

create or replace function public.private_qbank_owner_update(
  p_id text, p_expected jsonb, p_payload jsonb
) returns boolean
language plpgsql security definer set search_path = '' as $$
begin
  if p_id !~ '^QB-[A-Za-z0-9-]+$' or p_payload->>'id' <> p_id then
    raise exception 'invalid private Q-bank payload';
  end if;
  update public.private_qbank_canonical_items set payload = p_payload
  where id = p_id and payload = p_expected;
  return found;
end;
$$;
revoke all on function public.private_qbank_owner_update(text, jsonb, jsonb) from public, anon, authenticated;
grant execute on function public.private_qbank_owner_update(text, jsonb, jsonb) to service_role;
