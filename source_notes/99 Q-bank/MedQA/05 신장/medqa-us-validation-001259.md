---
type: qbank
schema_version: 1
id: medqa-us-validation-001259
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:16eb8dc87892c2384c9a0e5eaa61bc4d3e8a137e5b28bb6f7ec33bbf3e19ed32
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "당뇨병성 신증"
  - "알부민뇨"
  - "암로디핀"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
curation_status: "revised"
curation_reason: "정답 판단에 필수인 기존 lisinopril 복용을 복원하고 CCB의 별도 신장 보호 효과를 과장하지 않음."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

58세 제2형 당뇨병 환자가 최대 내약 용량의 ACE 억제제를 복용 중이다. HbA1c 6.4%, 혈압 128/76 mmHg이지만 eGFR 42 mL/min/1.73m²이고 UACR 470 mg/g이 지속된다. 신장질환 진행 위험을 낮추기 위해 우선 추가할 약제는?

## 선택지

A. 로사르탄
B. 글리메피리드
C. 시타글립틴
D. 엠파글리플로진

## 해설

제2형 당뇨병과 알부민뇨성 만성콩팥병에서는 HbA1c가 목표에 도달해도 신장 보호 효과가 입증된 SGLT2 억제제를 우선 고려한다. ACE 억제제에 ARB를 겹쳐 쓰는 것은 피한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001259
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
- https://doi.org/10.1016/j.kint.2023.10.016

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 정답 판단에 필수인 기존 lisinopril 복용을 복원하고 CCB의 별도 신장 보호 효과를 과장하지 않음.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf
