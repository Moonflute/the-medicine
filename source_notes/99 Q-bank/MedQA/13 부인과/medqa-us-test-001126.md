---
type: qbank
schema_version: 1
id: medqa-us-test-001126
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0e906ea241dbb7781d223176d0da89bd4c2fdd36ab592e1cd0b3e59a28e8fc85
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "원발성 월경통"
  - "NSAID"
  - "청소년 생리통"
  - "primary dysmenorrhea"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yblOqyve2GtSAoRHlzbWVub3JyaGVhKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 환자의 경련성 하복부 통증은 매번 월경 직전에 시작해 이틀 내 호전된다. 월경 사이 통증은 없고 진찰은 정상이다. 예측 가능한 주기에서 이부프로펜의 적절한 사용법은?

## 선택지

A. 예상 월경 1–2일 전부터 월경 초기까지 규칙적으로 복용
B. 가장 심한 통증이 지나간 뒤 시작해 다음 월경 전까지 복용
C. 월경이 끝난 뒤에만 복용
D. 매일 한 주기 내내 동일 용량으로 복용

## 해설

일차성 월경통은 프로스타글란딘에 의한 자궁 수축과 관련된다. 주기를 예측할 수 있으면 월경 직전부터 초기 2–3일 동안 NSAID를 일정하게 사용하는 편이 효과적이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문모친의자궁내막증·과다월경병력누락복원. 초기NSAID C유지,3~6개월비반응시이차원인평가 명시.
- https://doi.org/10.1097/AOG.0000000000002978

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001126
- https://www.rch.org.au/clinicalguide/guideline_index/dysmenorrhoea/
