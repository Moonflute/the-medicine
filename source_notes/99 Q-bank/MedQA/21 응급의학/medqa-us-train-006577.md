---
type: qbank
schema_version: 1
id: medqa-us-train-006577
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6cef0211e224b270b16622e9c4d7b27b05102fe260307769a9c47f5cfdcc2dcc
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "대량 수혈"
  - "구연산염 독성"
  - "전해질 이상"
question_type: investigation
related_disease_slugs:
  - MDUg7Iug7J6lL-yghO2VtOyniCDsnbTsg4EubWQ
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
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 수혈 후 감각 이상에서 누락된 이온화 저칼슘혈증 선지를 교정"
curation_status: "revised"
curation_reason: "수혈 후 감각 이상에서 누락된 이온화 저칼슘혈증 선지를 교정"
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

외상으로 대량 수혈을 받은 환자에게 입 주위 저림이 새로 생겼으며 심전도에서 QT가 길어졌다. 수혈과 관련해 즉시 확인할 전해질 항목은?

## 선택지

A. 혈청 나트륨
B. 혈청 인
C. 총 혈청 단백
D. 이온화 칼슘

## 해설

혈액제제의 구연산은 칼슘을 결합해 이온화 칼슘을 낮출 수 있다. 대량 수혈 중에는 이온화 칼슘을 반복 측정하고 필요한 경우 보충한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 수혈 후 감각 이상에서 누락된 이온화 저칼슘혈증 선지를 교정
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://ccforum.biomedcentral.com/articles/10.1186/s13054-023-04327-7

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006577
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
