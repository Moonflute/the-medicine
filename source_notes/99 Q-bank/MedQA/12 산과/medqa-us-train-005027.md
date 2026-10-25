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
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
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

임신 35주인 22세 초임부가 다리 부종으로 입원했다. 혈압은 처음 168/95 mmHg였으나 15분 후 항고혈압제 없이 141/88 mmHg로 낮아졌고 소변 단백은 1+였다. 관찰하며 평가를 계속하기로 했다. 다음 중 의심되는 질환을 중증 형태로 분류하게 하는 소견은?

## 선택지

A. 24시간 소변 단백 5 g/L
B. 4시간 후 재측정한 혈압 165/90 mmHg
C. 혈소판 수 133,000/μL
D. 혈청 크레아티닌 0.98 mg/dL

## 해설

중증 범위 혈압은 수축기 160 mmHg 이상 또는 이완기 110 mmHg 이상이다. 따라서 수축기 165 mmHg가 재확인되는 B가 제시된 선지 중 중증 형태를 지지한다. 두 수치가 동시에 기준을 넘어야 하는 것은 아니다. 혈소판 133,000/μL와 크레아티닌 0.98 mg/dL는 각각의 중증 장기손상 기준에 해당하지 않으며, 단백뇨의 양만으로 중증도를 분류하지 않는다. 임상적으로 중증 혈압이 지속되면 4시간을 무조건 기다리지 않고 신속히 재평가·대응한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 중증혈압기준이160/110둘다필요한것처럼오해되지않도록OR명시. B유지,단백뇨량단독중증기준아님.
- https://kansaspqc.kdhe.ks.gov/wp-content/uploads/2025/09/ACOG-Gestation-HTN-and-Preeclampsia-Practice-Bulletin.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005027
