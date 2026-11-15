---
type: qbank
schema_version: 1
id: medqa-us-train-002757
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:10bb27c752f9dd2c0d792fdc2abae30159a07e88d09c5c2b155393e3f082b9d6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertension in diabetes"
  - "ACE inhibitor"
  - "renin-angiotensin-aldosterone system"
  - "lisinopril pharmacodynamics"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "content-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 이름 없는 약제 때문에 생긴 ACEI·ARB 중복정답을 조건부 ACEI 기전 질문으로 교정."
curation_status: "revised"
curation_reason: "이름 없는 약제 때문에 생긴 ACEI·ARB 중복정답을 조건부 ACEI 기전 질문으로 교정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

52세 여성이 제2형 당뇨병과 고혈압으로 내원했다. 반복 혈압은 157/93 mmHg이고, 지난 4개월 동안 소변 알부민/크레아티닌비는 두 차례 모두 300 mg/g 이상이었다. eGFR은 66 mL/min/1.73 m², 혈청 칼륨은 4.3 mEq/L이다. 혈압 조절과 콩팥 보호를 위해 우선 포함할 약제는?

## 선택지

A. 로사르탄
B. 암로디핀
C. 히드로클로로티아지드
D. 독사조신

## 해설

고혈압·당뇨병과 지속적인 알부민뇨가 함께 있으면 ACE 억제제 또는 안지오텐신 수용체 차단제(ARB)를 우선 포함한다. 보기 중 로사르탄이 이에 해당한다. 시작하거나 증량한 뒤 크레아티닌과 칼륨을 확인하고 ACE 억제제와 ARB를 병용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 이름 없는 약제 때문에 생긴 ACEI·ARB 중복정답을 조건부 ACEI 기전 질문으로 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002757
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
- https://doi.org/10.1016/j.kint.2023.10.016

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
