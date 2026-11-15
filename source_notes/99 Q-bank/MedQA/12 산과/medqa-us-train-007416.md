---
type: qbank
schema_version: 1
id: medqa-us-train-007416
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a766d889bc946afe2e4f7be0e333de9ab94d91cc1b4b9c7d0e71011dd33af188
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 주수 추정"
  - "머리-엉덩이 길이"
  - "임신 초기 초음파"
question_type: investigation
related_disease_slugs: []
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

생리 주기가 불규칙한 초임부의 임신 1삼분기 초음파에서 배아가 보인다. 마지막 월경일을 신뢰하기 어려울 때 임신 주수를 가장 정확하게 정할 계측은?

## 선택지

A. 머리엉덩길이(CRL)
B. 대퇴골 길이
C. 양두정골 지름
D. 양수지수

## 해설


임신 1삼분기에는 머리엉덩길이로 재태 주수를 가장 정확하게 추정한다. 초기 초음파로 예정일을 정한 뒤에는 후기 성장 계측만으로 예정일을 자주 바꾸지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007416
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date
