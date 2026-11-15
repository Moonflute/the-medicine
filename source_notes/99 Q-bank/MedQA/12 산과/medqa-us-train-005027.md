---
type: qbank
schema_version: 1
id: medqa-us-train-005027
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:116411424fa388652a499de3631846458d044879370d5669b0999aac87f0d203
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "중증 자간전증"
  - "임신성 고혈압"
  - "중증 혈압 기준"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: D
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

임신 35주 산모의 혈압이 168/98 mmHg이고 15분 뒤에도 166/96 mmHg다. 심한 두통이 있으며 혈압을 재는 동안에도 계속됐다. 다음 조치는?

## 선택지

A. 이완기혈압이 110 mmHg 미만이므로 중증이 아니다
B. 최소 4시간 뒤에만 성립하는 기준이므로 치료하지 않는다
C. 황산마그네슘을 주면 별도의 혈압 치료는 필요 없다
D. 지속되는 중증 수축기 고혈압으로 보고 신속히 항고혈압 치료를 시작한다

## 해설

수축기 160 mmHg 이상 또는 이완기 110 mmHg 이상이 지속되는 것은 산과 응급이다. 급성 중증 고혈압으로 확인되면 뇌졸중 위험을 줄이기 위해 신속히 치료하며 자간전증 평가와 발작 예방을 별도로 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 중증혈압기준이160/110둘다필요한것처럼오해되지않도록OR명시. B유지,단백뇨량단독중증기준아님.
- https://kansaspqc.kdhe.ks.gov/wp-content/uploads/2025/09/ACOG-Gestation-HTN-and-Preeclampsia-Practice-Bulletin.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005027
- https://pubmed.ncbi.nlm.nih.gov/30575639/
