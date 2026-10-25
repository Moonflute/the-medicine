---
type: qbank
schema_version: 1
id: medqa-us-validation-000006
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:61ad84343eecd2e8d95318d8a6eebc57e58a631f35c54a8dcacb55ffba64b616
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철결핍성 빈혈"
  - "소구성 빈혈"
  - "저색소성 빈혈"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

41세 여성이 피로와 쇠약으로 진료를 받으러 왔다. 혈전이나 출혈 병력은 없고 혈구검사에서 헤마토크릿 27.1%, MCV 79 fL, 망상적혈구 2.0%로 빈혈을 진단받았다. 가장 가능성 높은 원인은?

## 선택지

A. 비타민 B12 결핍
B. 엽산 결핍
C. 철 결핍
D. 혈관내 용혈

## 해설


선택지 중 소구성 빈혈(MCV 79fL)의 가장 흔한 원인은 철결핍(C)이다. 망상적혈구 2%는 빈혈에 대해 보정하면 충분한 증가라고 보기 어려우며, 수치 하나만으로 용혈을 지지하지 않는다. B12·엽산 결핍은 보통 거대적혈구성이다. 실제 철결핍 확인에는 ferritin 등 철 상태 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000006 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MCV79와 낮은 보정 망상반응은 철결핍 C가 선택지 중 적절. 실제 없는 저색소 도말 소견을 만들지 않고 망상2%를 빈혈에서 충분한 증가라고 하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000006
