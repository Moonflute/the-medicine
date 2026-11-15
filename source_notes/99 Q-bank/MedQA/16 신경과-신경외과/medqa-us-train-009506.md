---
type: qbank
schema_version: 1
id: medqa-us-train-009506
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e59b1aee14462c268cb8392cb1fecc3204db622d539fbd39612b04c7ec543198
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "meningitis"
  - "수막염"
  - "lumbar puncture"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsiJjrp4nsooUgKE1lbmluZ2lvbWEpLm1k
difficulty: complex
answer: B
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

21세 환자가 고열과 경부강직으로 내원했고, 새로 국소 발작을 한 뒤 의식이 저하돼 있다. 급성 세균성 수막염을 포함한 수막뇌염이 의심된다. 검사와 치료 순서는?

## 선택지

A. 요추천자를 먼저 하고 결과가 나올 때까지 치료를 미룬다
B. 배양을 신속히 채취하고 경험적 정맥 치료를 시작하면서, 요추천자 전 뇌영상을 시행한다
C. 뇌 MRI 결과가 나올 때까지 정맥 치료와 배양을 미룬다
D. 뇌파검사만 하고 열이 떨어지면 추가 검사하지 않는다

## 해설

새 국소 발작과 뚜렷한 의식 저하가 있으면 요추천자 전 영상으로 안전성을 평가한다. 혈액배양과 적절한 경험적 치료를 영상 또는 요추천자 때문에 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수막염 환자는 모두 CT를 먼저 받아야 한다는 해설 오류 교정. 이 사례의 새 발작/의식변화 때문에 A 선택.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng240/chapter/Recommendations
- 공식/학회 근거: https://www.journalofinfection.com/article/S0163-4453%2816%2900024-4/fulltext

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009506
- https://www.ncbi.nlm.nih.gov/books/NBK614844/
- https://www.nice.org.uk/guidance/ng240/chapter/recommendations
