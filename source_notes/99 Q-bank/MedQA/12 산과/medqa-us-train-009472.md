---
type: qbank
schema_version: 1
id: medqa-us-train-009472
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c5615fdef6caa8ff39d3b5a3bd6e528a468637ab4e71b73d26c25eceb33ecd34
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "chronic hypertension in pregnancy"
  - "임신 중 만성 고혈압"
  - "hypertension before 20 weeks"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 13주 초임부의 혈압이 서로 다른 날에 146/94, 145/95 mmHg였다. 임신 전에는 혈압을 측정한 적이 없고 단백뇨나 장기 이상은 없다. 현재 고혈압의 분류는?

## 선택지

A. 임신성 고혈압
B. 만성 고혈압
C. 자간전증
D. 백의고혈압으로 확진

## 해설


임신 전에 있던 고혈압이나 임신 20주 이전에 반복 확인된 고혈압은 보통 만성 고혈압으로 분류한다. 가정혈압이 필요할 수 있으나 단백뇨가 없다는 이유로 혈압 상승 자체를 무시하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009472
- https://www.nice.org.uk/guidance/ng133/chapter/recommendations
