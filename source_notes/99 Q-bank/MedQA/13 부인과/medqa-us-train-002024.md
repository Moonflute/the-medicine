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
question_type: risk_factor
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA
  - MTIg7IKw6rO8L-ykkeymnSDsoITsnpDqsITspp0gKFNldmVyZSBQcmUtZWNsYW1wc2lhKS5tZA
difficulty: complex
answer: B
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

26세 초임부가 임신 35주에 새로 발생한 하지 부종으로 내원했다. 혈압은 145/90 mm Hg로 15분과 4시간 후에도 변하지 않고 소변검사에서 단백질 2+이다. 임신 전 BMI는 18.2 kg/m2 정도였고 어머니와 이모에게 고혈압 병력이 있다. 다음 중 이 환자 상태의 위험 요인은 무엇인가?

## 선택지

A. 임신 전 흡연
B. 초임부
C. 임신 전 BMI < 18.5 kg/m2
D. 고혈압 가족력

## 해설

20주 이후 새 고혈압이 4시간 간격으로 지속되고 요단백이 있는 임상상은 전자간증을 시사한다. 첫 임신/초임부(B)는 알려진 위험인자다. 그러나 다른 고위험 상태보다 모든 초임부가 가장 위험하다는 뜻은 아니다. 본문 가족의 중년 본태성 고혈압은 가족의 전자간증 병력과 동일하지 않으며, 임신 전 흡연을 보호 전략으로 해석해서도 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초임부를 모든 집단 중 가장 높은 위험이라고 과장한 설명을 보기 내 위험인자 판단으로 한정했다.
- https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/pre-eclampsia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002024
