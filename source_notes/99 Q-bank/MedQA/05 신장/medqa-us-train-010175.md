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
answer: B
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

45세 남성이 제2형 당뇨병으로 새로 진단됐다. 소변 단백 시험지는 음성이며 신장 증상은 없다. 초기 당뇨병콩팥병을 평가하기 위해 함께 시행할 검사는?

## 선택지

A. 혈청 요소질소와 요당 시험지
B. 점뇨 알부민/크레아티닌 비와 추정 사구체여과율
C. 24시간 소변량과 요비중
D. 신장 CT와 요배양

## 해설

제2형 당뇨병은 진단 시부터 소변 알부민/크레아티닌 비와 추정 사구체여과율을 함께 평가한다. 일반 단백 시험지가 음성이어도 알부민뇨가 있거나 여과율이 낮을 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010175
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 모든 당뇨병성 신기능 손상에 단일 최민감 검사라는 모호함을 초기 albuminuria 검출 목적에 맞춤.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf
