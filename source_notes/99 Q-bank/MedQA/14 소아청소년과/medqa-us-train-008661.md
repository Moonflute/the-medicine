---
type: qbank
schema_version: 1
id: medqa-us-train-008661
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:25a252088f6ab0d5a5872b09e48a49701af08855c4862c8bfb06b67cd260ea3f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "severe dehydration"
  - "hypovolemic shock"
  - "sunken anterior fontanelle"
  - "dehydration"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug7IOd7JWEIOydvOyLnOyXtCAoTmVvbmF0YWwgVHJhbnNpZW50IEZldmVyKS5tZA
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

13개월 아이가 물설사를 하며 소변량이 줄었다. 입안이 마르고 눈이 약간 들어가 있지만 의식과 말초 관류는 정상이고, 주면 조금씩 마신다. 적절한 첫 수분 보충 방법은?

## 선택지

A. 포도당이 든 탄산음료를 한 번에 많이 준다
B. 바로 정맥 수액으로만 보충하고 경구 섭취를 금지한다
C. 경구수분보충액을 소량씩 자주 먹이고 반응을 본다
D. 설사가 멈출 때까지 수분 섭취를 줄인다

## 해설

쇼크가 없고 마실 수 있는 경도·중등도 탈수는 경구수분보충액이 먼저다. 소량씩 자주 먹이면 구토를 줄일 수 있다. 마시지 못하거나 상태가 악화되면 경관·정맥 보충을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 함몰된 대천문을 전두엽 함몰로 오역하고 정상 혈압을 저혈압으로 단정한 설명 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008661
- https://www.nice.org.uk/guidance/CG84/chapter/recommendations
