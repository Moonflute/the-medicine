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

9개월 된 영아가 2일 전부터 시작된 전신성 가려움증이 없는 발진으로 내원하였다. 발진은 몸통에서 시작되어 사지로 퍼졌다. 5일 전, 이 영아는 40.5°C의 발열과 1분간 지속된 전신 강직-간대 발작으로 응급실에 내원한 적이 있다. 만삭아로 태어났으며 심각한 질환의 과거력은 없다. 예방접종은 최신 상태이다. 현재 복용 중인 약물은 아세트아미노펜(acetaminophen)이다. 체온은 37.2°C이고 맥박은 분당 120회이다. 진찰 결과 압박 시 창백해지는 구진성 발진이 관찰된다. 발진 사진이 제시되어 있다. 귀 뒤 림프절병증(posterior auricular lymphadenopathy)이 존재한다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 가와사키병(Kawasaki disease)
B. 농가진(Impetigo)
C. 돌발진(Roseola infantum)
D. 풍진(Rubella)

## 해설

고열과 짧은 열성경련 후 해열되면서 몸통에서 시작해 퍼지는 발진이 생긴 경과는 돌발진(C)에 부합한다. 본문의 최고 체온은 40.5°C이지 40~50°C 범위가 아니다. 돌발진은 HHV-6/7과 관련된다. 참조 발진 사진은 현재 없지만 본문이 발진의 분포·압박 시 창백 및 발열과의 시간 관계를 기술하므로 그 정보에 한해 정답을 유지하며 실제 사진 소견을 검수했다고 주장하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 40~50°C고열이라는명백한수치오류수정. 해열뒤몸통발진경과로C유지,사진은미검수.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000632
