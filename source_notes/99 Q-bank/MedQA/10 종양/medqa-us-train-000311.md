---
type: qbank
schema_version: 1
id: medqa-us-train-000311
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cfcccae11f47bde8eff8029445c3f8a237e47daee4ea87fb4f91e22b45d87381
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "HCC"
  - "alcohol dependence"
  - "chronic hepatitis C"
  - "hypertension"
  - "type 2 diabetes mellitus"
  - "diabetic retinopathy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQ-2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEMgKEhDVikpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDrp53rp4nrs5Hspp0gKERpYWJldGljIFJldGlub3BhdGh5KS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

간세포암(HCC)과 오랜 알코올 의존증 및 만성 C형 간염 병력이 있는 환자가 암 치료를 위해 mTOR 억제제인 Metalimus 100 mg을 복용해 왔습니다. 암은 부분 반응을 보였습니다. 환자는 또한 고혈압과 당뇨망막병증을 동반한 조절되지 않는 제2형 당뇨병 병력이 있습니다. 현재 복용 중인 약물은 enalapril과 인슐린입니다. 환자는 종양내과 의사와 간 전문의에게 간세포암 치료에 있어 생존율 향상 효과가 있다고 알려진 Noxbinle(tumorolimus)을 시도해 볼 수 있는지 문의했습니다. 약물 광고에 제공된 데이터를 바탕으로 할 때, 다음 중 가장 정확한 진술은 무엇입니까?

## 선택지

A. 환자는 당뇨병 병력으로 인해 Noxbinle을 사용하기에 적합한 대상이 아닙니다
B. 환자는 Metalimus 100 mg 대비 생존율 이점으로 인해 Noxbinle 50 mg을 시작해야 합니다
C. 환자는 Metalimus 100 mg 대비 생존율 이점으로 인해 Noxbinle 100 mg을 시작해야 합니다
D. 환자는 알코올 사용 장애 및 C형 간염 병력으로 인해 Noxbinle 50 mg을 시작해야 합니다

## 해설


Noxbinle(토루리무스)은 당뇨병 환자에서 혈당 조절 악화를 일으킬 위험이 있어, 당뇨병 병력이 있는 환자는 사용에 부적합하다. 따라서 해당 진술이 가장 정확하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000311
