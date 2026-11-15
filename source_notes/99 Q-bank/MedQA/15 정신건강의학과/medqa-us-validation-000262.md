---
type: qbank
schema_version: 1
id: medqa-us-validation-000262
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2e116a444cb38a70f801de3380881ed7d2e9f9fff6dd04ce594f604ca8e6427f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "질병불안장애"
  - "건강염려"
  - "정상 혈당"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yniOuzkSDrtojslYgg7J6l7JWgIChJbGxuZXNzIEFueGlldHkgRGlzb3JkZXIpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 환자가 가벼운 피로만 있지만 2년째 당뇨병에 걸렸을까 걱정한다. 여러 검사에서 혈당은 정상이었는데도 하루 여러 번 확인하고 건강 정보를 검색하느라 일상이 어렵다. 가장 가능성 높은 진단은?

## 선택지

A. 신체증상장애
B. 질병불안장애
C. 범불안장애
D. 망상장애

## 해설

신체 증상 자체는 경미하지만 질병에 걸렸다는 두려움과 반복 확인이 생활을 지배한다. 신체 증상과 그에 대한 과도한 반응이 두드러지는 신체증상장애와 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000262
- https://pubmed.ncbi.nlm.nih.gov/32119286/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 질병불안장애에 실제 신체질환이 없다는 것이 필수라는 오류 제거. 경미한 신체증상보다 질병 집착·과도한 확인이 중심임을 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://extranet.who.int/ncdccs/Data/LBN_D1_PHC%20clinical%20guidelines.pdf
