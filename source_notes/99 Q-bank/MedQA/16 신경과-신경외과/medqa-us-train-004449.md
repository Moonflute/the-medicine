---
type: qbank
schema_version: 1
id: medqa-us-train-004449
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b18262ce4d5326b5b1335c38da842bc8e175a1bc403fd097e44008f53e0c35c3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "원발성 중추신경계 림프종"
  - "AIDS"
  - "Epstein-Barr 바이러스"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

HIV 감염이 있는 52세 환자가 수주간 무감동과 보행 불안정을 보인다. CD4는 90/μL이고 MRI에 뇌량을 침범하는 큰 단일 조영증강 종괴가 있다. 압력 상승 위험을 평가한 뒤 시행한 뇌척수액 검사에서 EBV DNA가 검출됐다. 가장 가능성 높은 진단은?

## 선택지

A. 톡소포자충 뇌염
B. 진행성 다초점 백질뇌병증
C. HIV 관련 신경인지장애
D. 원발성 중추신경계 림프종

## 해설

심한 면역저하 환자의 단일 뇌종괴에서 뇌척수액 EBV DNA가 검출되면 원발성 중추신경계 림프종을 의심한다. PCR만으로 확진하지 않으며, 톡소포자충증과 조직검사 필요성 등을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. EBV 양성 CSF와 면역저하의 단일 뇌량 병변은 PCNSL B를 강하게 지지하나 모든 고리병변의 가장 흔한 원인 또는 PCR만으로 확진이라고 일반화하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004449
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/toxoplasmosis
- https://onlinelibrary.wiley.com/doi/full/10.1002/hem3.150
