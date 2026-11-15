---
type: qbank
schema_version: 1
id: medqa-us-train-003621
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9bcff3e9c777bcb47ce885cd0d994624745816191c1af44b1fde1460b175d859
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "chronic pelvic pain syndrome"
  - "chronic prostatitis"
  - "negative urine culture"
  - "prostate pain"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyXvCAoUHJvc3RhdGl0aXMpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 남성이 4개월간 회음부 통증과 사정통으로 내원했다. 열은 없고 반복 소변배양은 음성이다. 요로 폐쇄나 종양을 의심할 소견은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 만성 골반통증증후군
B. 전립선 농양
C. 급성 세균성 전립선염
D. 양성 전립선비대증

## 해설

회음부나 골반의 만성 통증과 사정통이 이어지지만 세균감염이 확인되지 않으면 만성 골반통증증후군을 고려한다. 경미한 전립선 압통만으로 세균감염을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 음뇨 등 잘못된 용어를 제거하고 3개월 통증·음성 배양의 CPPS 근거를 명확히 함.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003621
