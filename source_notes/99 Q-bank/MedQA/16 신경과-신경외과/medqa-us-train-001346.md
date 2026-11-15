---
type: qbank
schema_version: 1
id: medqa-us-train-001346
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e6b622ea37af9d735b65249b87ccfa15ec57d5796d65477535eb7151365f976c
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "brain death"
  - "brainstem reflexes"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsgqwgKEJyYWluIGRlYXRoKS5tZA
difficulty: complex
answer: D
publication_status: "withheld"
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

22세 남성이 자동차 사고 직후 반응이 없어 삽관되었고, 진정제를 쓰지 않는 상태로 응급실에 도착했다. 체온은 36.5°C, 혈압은 121/62 mmHg이다. 초기 진찰에서 GCS 3점이다. 외상에 대한 초기 소생·영상평가를 진행하면서 시행할 기본 신경학적 진찰은?

## 선택지

A. 무호흡 검사
B. 뇌혈관조영술
C. 뇌파검사
D. 뇌간 반사 평가

## 해설

깊은 혼수 환자에서는 동공 빛반사, 각막반사 등 뇌간 기능을 포함한 신경학적 진찰이 필요하다. GCS 3점이나 사고 직후 한 번의 진찰만으로 뇌사를 판정할 수는 없다. 무호흡검사나 보조검사를 바로 시행할 상황이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. GCS3/사고1시간/기증등록만으로 뇌사평가를 자동시작하는 해설 완화. 임상신경평가 D와 뇌사전제 구분.
- 공식/학회 근거: https://www.neurology.org/doi/10.1212/WNL.0000000000207740

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001346
