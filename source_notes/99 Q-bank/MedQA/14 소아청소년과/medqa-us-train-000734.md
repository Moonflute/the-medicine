---
type: qbank
schema_version: 1
id: medqa-us-train-000734
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8fd8d82bc4327c7f85330ef184e23d5e85bbcf90c19739de55c7526366fa6a61
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "attention-deficit/hyperactivity disorder"
  - "Kawasaki disease"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCA7JmA7IKs7YKk67ORIChLYXdhc2FraSBEaXNlYXNlKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZXRoeWxwaGVuaWRhdGUubWQ
---

# MedQA US 임상문제

## 문제

11세 아이의 ADHD에 메틸페니데이트를 시작하려 한다. 혈압과 심장 진찰은 정상이나 친형이 18세에 운동 중 원인 불명으로 급사했다. 처방 전에 할 조치는?

## 선택지

A. 소아심장 평가를 의뢰한 뒤 약물 시작 여부를 결정한다
B. 진찰이 정상이므로 예정대로 시작한다
C. 다른 자극제로 바꿔 심장 평가 없이 시작한다
D. 혈압만 한 번 더 정상인지 확인하고 시작한다

## 해설


일차 친족의 젊은 나이 급사는 유전성 심질환을 의심할 단서다. 약물 시작 전 심장 평가가 필요하다. 이런 단서가 없는 모든 환아에게 심전도를 일률적으로 요구한다는 뜻은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000734
- https://www.nice.org.uk/guidance/ng87/chapter/recommendations
- https://doi.org/10.1542/peds.2019-2528
