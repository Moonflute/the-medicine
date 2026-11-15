---
type: qbank
schema_version: 1
id: medqa-us-train-000597
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:acbf195d261377b25c5f60fc84421b574bc535adf3e7898b99451c58ef1cbf0f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "measles"
  - "Behcet disease"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-2ZjeyXrSAoTWVhc2xlcykubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZmN7JetIChNZWFzbGVzKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 아이가 홍역으로 입원했다. 설사와 탈수가 있어 수액을 주고 있으며 폐렴 등 합병증도 평가 중이다. 지지치료에 더해 의료진 감독하에 고려할 보조 치료는?

## 선택지

A. 경구 아시클로버
B. 고용량 비타민 C
C. 비타민 A
D. 회복 전 MMR 백신 접종

## 해설

홍역으로 입원한 소아에서는 비타민 A를 치료 과정에 사용할 수 있다. 수액, 영양, 폐렴 등 합병증 관리를 대체하지 않으며, 보호자가 임의로 고용량을 주도록 권하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 홍역 치료의 비타민 A B 유지. 홍역을 볼거리로 오역하고 아프타를 Koplik으로 단정할 여지를 교정.
- https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/measles-rubeola.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000597
- https://www.who.int/news-room/fact-sheets/detail/measles
- https://www.cdc.gov/measles/hcp/clinical-overview/
