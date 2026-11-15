---
type: qbank
schema_version: 1
id: medqa-us-validation-000479
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7523f56b3bd500274ad1819f59131ba1f3533b54392b35c8e0978a1c4aea3ed8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "소아 요로감염"
  - "변비"
  - "요로감염 위험인자"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67OA67mEIChDb25zdGlwYXRpb24pLm1k
difficulty: complex
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

배변 훈련을 마친 6세 아이에게 배양으로 확인된 요로감염이 반복된다. 평소 소변을 오래 참다가 속옷에 지리고, 딱딱한 변을 주 1–2회 본다. 재발을 줄이기 위해 함께 할 처치는?

## 선택지

A. 학교에 있는 동안에는 배뇨를 참게 한다
B. 수분 섭취를 줄이고 변비는 그대로 둔다
C. 정해진 시간에 배뇨하게 하고 변비를 적극 치료한다
D. 열이 없으면 배뇨·배변 증상은 평가하지 않는다

## 해설

배뇨를 참는 습관과 변비가 함께 있으면 방광·장 기능장애를 평가한다. 시간을 정해 소변을 보게 하고 변비를 치료하면 배출 기능을 개선하고 감염 재발을 줄이는 데 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 변비의 핵심 원문 단서인 마지막 배변3일을 복원하고 없는 과거 UTI 문장을 제거.
- https://uroweb.org/guidelines/paediatric-urology/chapter/urinary-tract-infections-in-children

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000479
- https://uroweb.org/guidelines/paediatric-urology/chapter/daytime-lower-urinary-tract-conditions
