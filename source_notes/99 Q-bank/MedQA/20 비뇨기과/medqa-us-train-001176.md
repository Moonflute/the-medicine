---
type: qbank
schema_version: 1
id: medqa-us-train-001176
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:987d1f14260ccea42a74022855e703b9f0debe7bb83cc038e20dbf5ceb5d0cce
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "prostate cancer"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 특별한 증상은 없지만 전립선암이 걱정돼 검진을 원한다. 무엇을 권하는 것이 적절한가?

## 선택지

A. 모든 해당 연령 남성에게 설명 없이 매년 PSA를 검사한다
B. PSA 검사로 얻을 수 있는 이득과 위양성·과진단 위험을 설명하고 검사 여부를 함께 정한다
C. 골반 CT를 첫 선별검사로 한다
D. 혈청 PSA 대신 곧바로 전립선 생검을 권한다

## 해설

무증상 남성의 PSA 선별은 국가암검진으로 일률 시행하는 항목이 아니다. 나이·가족력·기대여명과 선호를 고려하고 이득과 위해를 설명한 뒤 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 55세 이상 모든 남성에서 PSA가 자동 권장된다는 설명을 이득·위해 설명 후 공동결정으로 교정.
- 공식/학회 근거: https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001176
- https://uroweb.org/guidelines/prostatecancer/chapter/diagnostic-evaluation
- https://www.cancer.go.kr/lay1/S1T261C263/contents.do
