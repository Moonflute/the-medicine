---
type: qbank
schema_version: 1
id: medqa-us-train-002024
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a9924b6c112421ade16cb7be3ccb649da9cb13f05d8cc2900dd8d7f7b1e9a280
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "preeclampsia"
  - "primigravida"
  - "risk factors"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA
  - MTIg7IKw6rO8L-ykkeymnSDsoITsnpDqsITspp0gKFNldmVyZSBQcmUtZWNsYW1wc2lhKS5tZA
difficulty: complex
answer: A
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

분만 5일 뒤 산모가 새로 심한 두통과 시야 흐림을 호소한다. 혈압은 168/112 mmHg이고 15분 뒤에도 166/111 mmHg다. 임신 중에는 혈압이 정상이었다. 우선 조치는?

## 선택지

A. 산후 중증 고혈압으로 응급 치료하고 자간전증을 함께 평가
B. 소변 단백 결과가 나올 때까지 혈압 치료 보류
C. 체액이 빠질 때까지 외래에서 일주일 관찰
D. 단순 편두통으로 진통제만 투여

## 해설

임신 중 정상 혈압이었어도 산후 자간전증이 발생할 수 있다. 지속되는 중증 혈압을 신속히 치료하고 장기 이상과 경련 위험을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초임부를 모든 집단 중 가장 높은 위험이라고 과장한 설명을 보기 내 위험인자 판단으로 한정했다.
- https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/pre-eclampsia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002024
- https://pubmed.ncbi.nlm.nih.gov/30575639/
