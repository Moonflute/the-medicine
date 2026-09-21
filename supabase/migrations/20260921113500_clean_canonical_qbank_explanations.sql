-- The question UI deliberately renders explanations as plain text.  Normalize
-- headings that were introduced while merging the two source explanations.
update public.private_qbank_canonical_items
set payload = jsonb_set(
  payload,
  '{explanation}',
  to_jsonb(
    regexp_replace(
      regexp_replace(
        regexp_replace(
          regexp_replace(payload->>'explanation', E'^### 해설 1\\\\n', E'[해설 1]\n'),
          E'\\\\n\\\\n### 해설 2\\\\n', E'\n\n[해설 2]\n', 'g'
        ),
        E'\n\n### 추가 · 사진 변형\n', E'\n\n[추가]\n', 'g'
      ),
      E'\\*\\*\\[사진\\]\\*\\*', '[사진]', 'g'
    )
  ),
  true
)
where payload->>'explanation' like '### 해설 1\\n%'
   or payload->>'explanation' like '%### 추가 · 사진 변형%';
