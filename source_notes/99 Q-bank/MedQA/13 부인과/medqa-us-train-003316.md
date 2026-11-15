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
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
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

임신 28주 산모에게 처음으로 4시간 간격 혈압 156/98, 154/96 mmHg가 확인됐다. 혈소판은 7.8만/μL로 감소했고 두통과 시야 흐림이 지속된다. 소변 단백/크레아티닌 비는 0.12 mg/mg다. 진단은?

## 선택지

A. 임신성 고혈압
B. 중증 소견을 동반한 자간전증
C. 만성 고혈압
D. 자간증

## 해설

임신 20주 이후 새 고혈압과 다른 원인으로 설명되지 않는 혈소판 10만/μL 미만이 있으면 단백뇨 없이 자간전증으로 판단할 수 있다. 경련을 동반하는 자간증과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- https://kansaspqc.kdhe.ks.gov/wp-content/uploads/2025/09/ACOG-Gestation-HTN-and-Preeclampsia-Practice-Bulletin.pdf
- https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003316
- 미국산부인과학회 Practice Bulletin 222, 임신성 고혈압과 전자간증: https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/gestational-hypertension-and-preeclampsia
