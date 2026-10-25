---
type: qbank
schema_version: 1
id: medqa-us-train-010175
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86d768af5d976d6abc338131c51d975183168df7bae84ba79692846db2fed698
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "당뇨병성 신장병증"
  - "미세알부민뇨"
  - "알부민/크레아티닌 비"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
question_type: investigation
difficulty: simple
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "모든 당뇨병성 신기능 손상에 단일 최민감 검사라는 모호함을 초기 albuminuria 검출 목적에 맞춤."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

45세 남성이 15년간 당뇨병을 앓고 있으며 정기검진을 위해 내원했다. 의사는 당뇨병 관련 신장 손상의 초기 albumin 누출을 확인하려 한다. 다음 중 일반 단백 dipstick보다 적은 양의 albuminuria를 정량적으로 검출하는 데 적합한 검사는?

## 선택지

A. 시스타틴 C 수치
B. 소변 미세알부민/크레아티닌 비
C. 헤모글로빈 A1C
D. 소변 단백 딥스틱

## 해설

점뇨 albumin/creatinine ratio(UACR)는 일반 단백 dipstick보다 적은 albumin 누출을 정량적으로 확인하는 데 적합하다. 당뇨병성 CKD 평가에는 eGFR도 함께 필요하고 albuminuria 없이 GFR이 감소하는 경우도 있다. 상승한 UACR은 일시적 원인을 배제하고 반복 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010175

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 모든 당뇨병성 신기능 손상에 단일 최민감 검사라는 모호함을 초기 albuminuria 검출 목적에 맞춤.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf
