---
type: qbank
schema_version: 1
id: medqa-us-train-000533
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ede5b212c41fe2f90890c7e2886b3ebe5aa27c782531a615eb12450ec4c08596
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "breast cancer"
  - "brain metastasis"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: standard
answer: A
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

45세 유방암 환자에게 두통과 진행하는 우측 편마비가 생겼다. 뇌 MRI에서 심한 부종과 종괴 효과를 동반한 5 cm 단일 뇌전이가 보인다. 전신 암은 조절되고 수술로 접근할 수 있다. 덱사메타손을 시작한 뒤 우선 고려할 국소치료는?

## 선택지

A. 종괴 절제술
B. 전뇌 방사선치료 단독
C. 정위 방사선수술 단독
D. 국소치료 없이 전신 항암치료 변경

## 해설


크고 접근 가능하며 종괴 효과를 일으키는 단일 뇌전이는 수술로 신속하게 감압할 수 있다. 이후 절제 부위 방사선치료 등을 개별적으로 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000533 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 증상성 단일 5cm 뇌전이 의심에서 수술 D 유지. 모든 뇌전이는 수술이 근본치료라는 과장 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8917399/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000533
