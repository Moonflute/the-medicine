---
type: qbank
schema_version: 1
id: medqa-us-train-003316
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:812ad252470d381b41a0057f14da4005cc86129c1cd3755136d747396beaa909
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "preeclampsia"
  - "gestational hypertension"
  - "24-hour urine protein"
  - "new-onset hypertension in pregnancy"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
  - MTIg7IKw6rO8L-ykkeymnSDsoITsnpDqsITspp0gKFNldmVyZSBQcmUtZWNsYW1wc2lhKS5tZA
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

임신 24주인 29세 여성이 최근 몇 주 동안 빈도가 증가한 시야 흐림과 두통으로 내원했다. 혈압은 159/90 mmHg이고 2일 전 남편이 측정한 혈압은 154/96 mmHg였으며 이전에는 항상 120/80 미만이었다. 다음 중 진단을 확정하는 가장 적절한 다음 단계는?

## 선택지

A. 비조영 두부 CT
B. 혈청 전혈구검사와 전해질
C. 24시간 소변 수집
D. 태아 초음파

## 해설

20주 이후 새로 발생한 고혈압에서는 전자간증을 평가해야 한다. 제시된 선택지 중 C의 24시간 소변 단백 정량은 단백뇨를 평가하는 방법이다. 다만 현행 기준에서는 단회뇨 단백/크레아티닌 비로도 평가할 수 있으며, 시각 증상 등 장기 손상이 있으면 단백뇨 없이도 전자간증 진단이 가능하다. 두통과 시야 흐림이 있는 이 환자에서 단백뇨 결과만 기다리거나 이를 필수 확진 조건으로 삼아서는 안 된다. 실제 진료에서는 증상을 즉시 재평가하고 혈소판, 신장기능, 간효소 및 태아 상태를 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- https://kansaspqc.kdhe.ks.gov/wp-content/uploads/2025/09/ACOG-Gestation-HTN-and-Preeclampsia-Practice-Bulletin.pdf
- https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003316
