---
type: qbank
schema_version: 1
id: medqa-us-train-000632
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e3133365569b48d3acfe4932634f4d1f4be6adcd8493eaae80dd827b6b032e1d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Kawasaki disease"
  - "Impetigo"
  - "Roseola infantum"
  - "Rubella"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCA7JmA7IKs7YKk67ORIChLYXdhc2FraSBEaXNlYXNlKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64-M67Cc7KeEIChFeGFudGhlbSBTdWJpdHVtKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZKN7KeEIChSdWJlbGxhKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9개월 영아가 3일간 40℃ 가까이 열이 났다. 열이 갑자기 떨어진 뒤 몸통에서 시작한 분홍색 발진이 팔다리로 퍼졌다. 지금은 잘 먹고 잘 논다. 가장 가능성 높은 진단은?

## 선택지

A. 홍역
B. 가와사키병
C. 돌발진
D. 성홍열

## 해설

며칠 동안의 고열이 가라앉은 뒤 몸통 중심의 발진이 나타나는 것이 돌발진의 전형적인 순서다. 홍역에서는 발진이 시작될 때도 고열과 호흡기 증상이 흔히 지속된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 40~50°C고열이라는명백한수치오류수정. 해열뒤몸통발진경과로C유지,사진은미검수.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000632
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5729
