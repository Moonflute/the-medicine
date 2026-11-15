---
type: qbank
schema_version: 1
id: medqa-us-train-002008
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7d4bdf016090b4c7d4c8b7b31507d8eed4b642189db7e892c8dd88fdacc3dc26
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "progressive multifocal leukoencephalopathy"
  - "JC virus"
  - "HIV"
  - "Progressive multifocal leukoencephalopathy"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
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

HIV 치료를 중단한 48세 환자에게 수주 동안 편측 위약과 보행장애가 진행한다. CD4는 75/μL이고 MRI에서 뚜렷한 종괴 효과 없이 비대칭 백질 병변이 여러 개 보인다. 가장 의심할 합병증은?

## 선택지

A. 원발성 중추신경계 림프종
B. 화농성 뇌농양
C. 급성 수막염
D. 진행성 다초점 백질뇌병증

## 해설

진행하는 국소 신경결손과 비대칭 백질 병변에 종괴 효과가 거의 없다면 심한 면역저하에서 진행성 다초점 백질뇌병증을 의심한다. 다른 기회질환도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. JC 바이러스에 의한 PML의 한국어 병명이 잘못되어 진행성 다초점 백질뇌병증으로 교정했다. 면역저하·비대칭 비조영 백질 병변·탈수초 소견과 C가 일치한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002008
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/progressive
