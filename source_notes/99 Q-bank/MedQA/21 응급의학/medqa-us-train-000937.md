---
type: qbank
schema_version: 1
id: medqa-us-train-000937
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f0b55b3f135d5191174a834274537a3db64a1d33af37c1f11b2e36f486a4cac
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "type II diabetes mellitus"
  - "hypertension"
  - "glaucoma"
  - "coronary artery disease"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MTgg7JWI6rO8L-uFueuCtOyepSAoZ2xhdWNvbWEpLm1k
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FwdG9wcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG92YXN0YXRpbi5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

금속을 절단하던 37세 남성이 갑자기 눈이 아프고 시력이 떨어졌다. 동공이 뾰족하게 변형됐고 고속 금속 이물에 의한 안구 파열이 의심된다. 안과에 응급 연락하며 먼저 할 조치는?

## 선택지

A. 안압을 재서 파열을 확인한다
B. 안와 MRI부터 시행한다
C. 눈을 압박 붕대로 감는다
D. 눈을 누르지 않는 단단한 보호대를 댄다

## 해설

고속 금속 외상 뒤 시력 저하와 동공 변형은 개방안구손상 경고다. 압박하지 않는 보호대를 사용하고 안압 측정과 불필요한 조작을 피한다. 금속 이물이 의심되면 MRI 대신 CT를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 금속 고속 이물에서 단순 각막찰과상만 가정하지 않도록 수정했다. A는 표면·Seidel 평가로 유지하되 안구압박 금지·금속 의심 MRI 금기를 명시했다.
- 공식/학회 근거: https://eyewiki.aao.org/Intraocular_Foreign_Bodies_%28IOFB%29

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000937
