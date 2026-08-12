---
type: qbank
schema_version: 1
id: medqa-us-train-002886
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0579560dbf6e358e9c7f41485f1b5dcfa09bed0f0aeb1413ccf2fba61a1a4f0e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Somogyi effect"
  - "nocturnal hypoglycemia"
  - "rebound morning hyperglycemia"
  - "insulin dose reduction"
related_disease_slugs:
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
question_type: adverse_effect
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

제2형 당뇨병이 있는 69세 여성이 5년 동안 기저-식사 인슐린 요법을 사용하고 있는데 HbA1c가 3.9%이다. 건강한 식단을 유지하고 예정대로 인슐린을 투여하지만 아침 식사 전 공복 고혈당이 기록된다. 원인을 확인하기 위해 새벽 3시에 혈당을 측정하도록 했고 오전 4시 혈당은 49 mg/dL였다. 다음 중 이 환자의 현재 상태 관리를 가장 잘 설명하는 것은?

## 선택지

A. 새벽현상을 겪고 있으므로 밤 인슐린을 늘린다
B. 소모기 효과를 겪고 있으므로 밤 인슐린을 늘린다
C. 소모기 효과를 겪고 있으므로 밤 인슐린을 줄인다
D. 고삼투성 고혈당 상태이므로 밤 인슐린을 늘린다

## 해설


밤 인슐린 과다 투여로 저혈당이 발생하면 반동성 고혈당(소모기 효과)이 나타난다. 현재 환자는 야간 저혈당을 보이고 있으므로 밤 인슐린 용량을 감소시켜야 한다. 인슐린을 늘리면 상황이 악화된다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002886
