---
type: qbank
schema_version: 1
id: medqa-us-train-007759
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d9a5b7d1d84705451df944c3da99665bf12e7915673262f10e70587932ba43bc
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "renal cell carcinoma"
  - "localized renal cancer"
  - "nephrectomy"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-y9qe2MpeyVlCAoUmVuYWwgQ2VsbCBDYXJjaW5vbWEpLm1k
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

57세 여성의 6 cm 신세포암이 한쪽 신장에 국한돼 있다. 신기능은 정상이며 위치와 해부학적 조건상 종양학적으로 안전하게 신장을 보존할 수 있다. 우선 고려할 수술은?

## 선택지

A. 근치 신절제술을 일률적으로 시행
B. 림프절 곽청만 시행
C. 부분 신절제술
D. 종양 감시만 시행

## 해설


T1 신세포암은 기술적으로 가능하고 안전하면 부분 신절제술을 우선 고려해 신기능을 보존한다. 종양 위치나 복잡도 때문에 부분 절제가 안전하지 않으면 근치 신절제술을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007759 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 국소6cm RCC의 외과치료 C 유지하되 항상 전신장 절제가 필요하다는 오해를 줄이고 부분신절제 가능성 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://uroweb.org/guidelines/renal-cell-carcinoma/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007759
