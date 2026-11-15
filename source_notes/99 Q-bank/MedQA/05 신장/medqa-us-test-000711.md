---
type: qbank
schema_version: 1
id: medqa-us-test-000711
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2788399227b4c4d02b3a3829ddb4d86074ba65c4d7901a21a0d019476fb22499
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "옥살산칼슘 신장결석"
  - "장 절제 후 고옥살산뇨증"
  - "지방 흡수장애"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tnaHsiJjsnqXslaAubWQ
  - MDUg7Iug7J6lL-yalOuhnOqysOyEnSAoVXJvbGl0aGlhc2lzKS5tZA
question_type: prevention
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

크론병으로 소장을 절제한 환자에게 지방변과 반복되는 칼슘옥살산 결석이 있다. 24시간 소변에서 옥살산 배설이 높다. 결석 재발 위험을 낮추기 위한 식사 지침은?

## 선택지

A. 식이 칼슘을 가능한 한 모두 제한한다
B. 고옥살산 식품을 늘린다
C. 정상량의 칼슘을 식사와 함께 섭취하고 고옥살산 식품을 줄인다
D. 단백질과 소금을 늘린다

## 해설

지방 흡수가 잘되지 않으면 지방산이 칼슘과 결합해 장에서 흡수되는 옥살산이 늘어난다. 식사와 함께 칼슘을 섭취하면 장 안의 옥살산을 결합해 흡수를 줄일 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. 지방산-칼슘 결합으로 유리 옥살산 흡수가 증가하는 장성 고옥살산뇨 기전을 반대로 쓴 오류 교정.
- https://uroweb.org/guidelines/urolithiasis/chapter/guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000711
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10330415/
- https://uroweb.org/guidelines/urolithiasis/chapter/metabolic-evaluation-and-recurrence-prevention
