---
type: qbank
schema_version: 1
id: medqa-us-train-000624
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3260d75f536827a652ff26f899d2e96ab4db76fdb4505f0f69b531e69b6ffd6a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hypertension"
  - "primary aldosteronism"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-ybkOuwnOyEsSDslYzrj4TsiqTthYzroaDspp0gKFByaW1hcnkgQWxkb3N0ZXJvbmlzbSkubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBsZXJlbm9uZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

38세 여성이 약 3제로도 잘 조절되지 않는 고혈압이 있으며 원발성 알도스테론증이 확인됐다. CT에서 좌측 부신에 2cm 결절이 보인다. 환자가 수술을 원할 때 절제 여부와 방향을 결정하기 위해 할 검사는?

## 선택지

A. 신동맥 CT 혈관조영술
B. 부신정맥 채혈
C. 부신 결절 세침흡인
D. 알도스테론/레닌 비 재검

## 해설

CT에서 보이는 결절이 실제 과분비 부위라고 단정할 수 없다. 수술을 고려할 때 부신정맥 채혈로 편측인지 양측인지 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AVS는 CT 종괴 위치 확인이 아니라 aldosterone 분비의 편측성 판정임을 명시.
- https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000624
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10765003/
