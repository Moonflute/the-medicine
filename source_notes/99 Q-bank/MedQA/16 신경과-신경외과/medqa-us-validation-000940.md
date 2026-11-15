---
type: qbank
schema_version: 1
id: medqa-us-validation-000940
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:512c89ab2bfa4be0b3ff7528c598613b8de5cb0599587fe02232d4fe33727339
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "파킨슨병"
  - "서동증"
  - "렘수면행동장애"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-ugmOyImOuptCDtlonrj5kg7J6l7JWgIChSRU0gU2xlZXAgQmVoYXZpb3IgRGlzb3JkZXIpLm1k
difficulty: standard
answer: C
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

67세 환자가 한쪽 손의 안정떨림을 보인다. 손가락을 빠르게 마주치게 하자 동작이 진행될수록 점점 느려지고 진폭이 작아졌다. 수동운동에 경직도 있다. 가장 가능성 높은 진단은?

## 선택지

A. 본태떨림
B. 소뇌 의도떨림
C. 파킨슨병
D. 헌팅턴병

## 해설

반복 동작의 속도와 크기가 작아지는 서동에 안정떨림이나 경직이 동반되면 파킨슨증에 부합한다. 비대칭 시작과 다른 경고 징후의 부재는 파킨슨병을 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Foot tapping 감소를 수면 중 근육이완 소실로 설명한 해설 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000940
- https://pubmed.ncbi.nlm.nih.gov/26474316/
