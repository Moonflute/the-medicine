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

제2형 당뇨병이 있는 69세 여성이 5년 동안 기저-식사 인슐린 요법을 사용하고 있는데 HbA1c가 3.9%이다. 건강한 식단을 유지하고 예정대로 인슐린을 투여하지만 아침 식사 전 공복 고혈당이 기록된다. 원인을 확인하기 위해 새벽 3시에 혈당을 측정하도록 했고 오전 4시 혈당은 49 mg/dL였다. 다음 중 이 환자의 현재 상태 관리를 가장 잘 설명하는 것은?

## 선택지

A. 새벽현상을 겪고 있으므로 밤 인슐린을 늘린다
B. 소모기 효과를 겪고 있으므로 밤 인슐린을 늘린다
C. 소모기 효과를 겪고 있으므로 밤 인슐린을 줄인다
D. 고삼투성 고혈당 상태이므로 밤 인슐린을 늘린다

## 해설

새벽 혈당 49 mg/dL는 임상적으로 중요한 저혈당이며 매우 낮은 HbA1c와 함께 insulin 치료를 재평가해야 한다. 선택지 중 C의 야간 insulin 감량 방향이 적절하고 용량·시간·식사 및 CGM/야간혈당 자료에 맞추어 조정한다. 다만 한 번의 새벽 저혈당과 아침 고혈당만으로 Somogyi 반동 기전이 입증되는 것은 아니다. 저혈당 없이 아침 고혈당이 생기는 dawn phenomenon과 구분하고 단순히 야간 insulin을 늘리지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 확인된 야간 저혈당49와 A1c3.9는 인슐린 과잉 위험. C의 감량 방향은 유지하되 Somogyi 반동을 입증했다고 단정하지 않음.
- https://doi.org/10.2337/dc26-s006

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002886
