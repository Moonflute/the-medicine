---
type: qbank
schema_version: 1
id: medqa-us-train-009265
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68d8e395e40feb8b79ea38309db22de9bea739368d34b3ded43e3b3824abea33
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "iron deficiency anemia"
  - "철결핍성 빈혈"
  - "elevated TIBC"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
question_type: prevention
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

16개월 아이의 철결핍성 빈혈을 치료하고 있다. 하루에 우유를 1L 가까이 마셔 식사 때 철이 풍부한 고형식을 거의 먹지 않는다. 철분 보충과 함께 재발을 줄이기 위한 식이 조언은?

## 선택지

A. 우유를 더 늘려 철분을 보충한다
B. 철분 약을 중단하고 우유에 의존해 영양을 채운다
C. 과도한 우유를 줄이고 철이 풍부한 고형식을 늘린다
D. 두 돌까지 고형식을 피하고 우유만 먹인다

## 해설


과다한 우유 섭취는 철이 풍부한 식품을 대체해 어린아이의 철결핍 위험을 높인다. 철분을 보충하면서 나이에 맞는 식사와 우유 섭취를 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009265 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 이식증·낮은 ferritin·소구성과 RDW 증가의 철결핍에서 TIBC 증가 B를 전기영동·망상적혈구 등과 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009265
- https://doi.org/10.1542/peds.2026-077414
