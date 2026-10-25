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
question_type: prevention
difficulty: complex
answer: "D"
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

58세 여성이 제2형 당뇨병·고혈압·천식으로 추적 진료를 받으러 왔다. 지난해 증식성 망막병증에 레이저 치료를 받았고 현재 metformin, lisinopril, albuterol 흡입제를 사용한다. 혈압은 152/98mmHg이며 양쪽 발바닥 모노필라멘트 감각이 감소했다. 6개월 전과 비교해 HbA1c는 6.4%에서 6.2%, creatinine은 1.1에서 1.3mg/dL, 소변 albumin/creatinine 비는 260에서 470mg/g으로 변했다. 제시된 선택지 중 추가 혈압 조절을 통해 신기능 악화를 줄이는 데 가장 적합한 약물은?

## 선택지

A. 로사르탄
B. 아스피린
C. 아토르바스타틴
D. 암로디핀

## 해설

이미 ACE억제제 lisinopril을 복용하는데 혈압이 조절되지 않아 선택지 중 amlodipine을 추가해 혈압을 낮추는 것이 적합하다. Losartan을 겹쳐 ACE억제제+ARB로 쓰는 것은 AKI·고칼륨 위험 때문에 피한다. Amlodipine의 주된 이점은 추가 혈압 조절이지 RAS차단제와 같은 독립적 albuminuria 억제 효과라는 뜻은 아니다. 현대 CKD 치료에서는 eGFR·칼륨·금기에 따라 SGLT2억제제 등 다른 신장 보호 치료도 별도 검토한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001259

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 정답 판단에 필수인 기존 lisinopril 복용을 복원하고 CCB의 별도 신장 보호 효과를 과장하지 않음.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf
