-- Read originals only. $1 is a validated array from the private edition file.
with drafts as (
  select item
  from jsonb_array_elements($1::jsonb) as entries(item)
), source_rows as (
  select
    'QB-REV-' || replace(d.item->>'edition', '-', '') || '-' || substr(c.id, 4) as id,
    c.id as source_item_id,
    d.item->>'edition' as edition,
    c.index_data,
    c.payload,
    d.item->'updates' as updates,
    d.item->'protectedOptions' as protected_options
  from drafts d
  join public.private_qbank_canonical_items c on c.id = d.item->>'sourceId'
  where c.index_data->>'bookSeries' = '실전'
    and c.payload->>'questionBank' = 'practice'
    and c.index_data->'examYear' = d.item->'year'
    and c.index_data->'bookDepartment' = d.item->'department'
    and md5(c.payload::text) = d.item->>'sourceHash'
), assembled as (
  select s.*, s.payload->'options' || coalesce(s.updates->'options', '{}'::jsonb) as new_options,
    (select jsonb_object_agg(o.key, o.value)
      from jsonb_each(s.payload->'options') o
      where o.key = s.payload->>'answer' or (s.payload->'acceptedAnswers') ? o.key
        or s.payload->>'gradingMode' = 'all-credit') as original_keys,
    (select coalesce(jsonb_agg(f.figure order by f.position), '[]'::jsonb)
      from jsonb_array_elements(case when jsonb_typeof(s.payload->'figures') = 'array'
        then s.payload->'figures' else '[]'::jsonb end) with ordinality as f(figure, position)
      where (s.updates->'figurePaths') ? (f.figure->>'path')) as retained_figures
  from source_rows s
)
select id, source_item_id, edition,
  (index_data - 'sourceIds') || jsonb_build_object(
    'id', id, 'bookId', 'practice-revised-' || edition, 'bookTitle', '실전 개정판',
    'bookSeries', '실전 개정판', 'editionYear', substring(edition, 1, 4)::int
  ) as index_data,
  (payload - array['acceptedAnswers','ungradedReason','sourcePath','figureReview','sourceIds'])
    || jsonb_build_object(
      'id', id, 'source', '실전 개정판 · ' || edition, 'sourceSplit', 'private-revision',
      'questionType', '실전 개정판', 'question', coalesce(updates->>'question', payload->>'question'),
      'options', new_options, 'answer', updates->>'answer', 'gradingMode', 'single',
      'explanation', updates->>'explanation', 'evidenceReferences', updates->'evidenceReferences',
      'figures', retained_figures
    ) as payload
from assembled
where original_keys = protected_options and new_options @> protected_options
  and new_options ?& array['A','B','C','D','E']
  and new_options ? (updates->>'answer')
  and (select count(*) = 5 and count(distinct regexp_replace(btrim(o.value), '[[:space:]]+', ' ', 'g')) = 5
    from jsonb_each_text(new_options) o)
  and jsonb_array_length(retained_figures) = jsonb_array_length(coalesce(updates->'figurePaths', '[]'::jsonb))
