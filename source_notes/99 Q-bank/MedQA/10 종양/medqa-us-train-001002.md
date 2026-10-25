---
type: qbank
schema_version: 1
id: medqa-us-train-001002
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1257b9b9490b4bac9bacbe15d0736db690dce428bb1070e62d8dae5418f93628
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "metastatic prostate cancer"
  - "hypercalcemia"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

전이성 전립선암(metastatic prostate cancer)을 앓고 있는 80세 남성이 '뼈가 쑤신다'는 모호한 증상을 주소로 내원하였다. 이상하게도 그는 다른 의사의 이름을 사용하여 당신을 부른다. 신체 검진상 열은 없으나 분당 100회의 경미한 빈맥이 있다. 점막은 건조하다. 심장 검진상 규칙적인 리듬이며 잡음은 없다. 환자는 미만성이고 국소적이지 않은 복통을 호소한다. 그는 정확한 날짜를 말하지 못한다. 혈청 칼슘 수치를 확인한 결과 15.3 mg/dL로 확인되었다. 다음으로 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 파미드로네이트(Pamidronate)
B. 정맥 내 생리식염수(Intravenous normal saline)
C. 칼시토닌(Calcitonin)
D. 혈액투석(Hemodialysis)

## 해설


중증 고칼슘혈증에 탈수·의식 변화가 있어 먼저 상태에 맞는 IV 생리식염수(B)로 순환량과 신관류를 회복한다. 심장·신장 상태에 따라 수액을 조절하며 calcitonin과 항골흡수제 등도 신속히 평가한다. 전립선암 병력만으로 PTHrP 분비를 원인으로 확정하거나 신장을 희석하는 치료라고 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001002 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 탈수 동반 중증 고칼슘혈증 초기 NS B 유지. 전립선암이면 PTHrP가 주원인이라는 단정·신장을 희석한다는 오류 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.endocrinology.org/media/4277/emergency-guidance_acute-hypercalcaemia-in-adults.pdf
- https://www.endocrine.org/clinical-practice-guidelines/hypercalcemia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001002
