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
answer: C
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

15세 여아가 심한 생리통으로 소아과에 왔다. 초경은 11세였고 처음 2년간 2~3개월마다 불규칙했지만 이후 28~35일 간격으로 규칙적이었다. 극심한 경련성 통증으로 학교를 자주 빠지며 온찜질의 효과는 제한적이었다. 생리량이 많은 기간도 있지만 활동을 제한하지는 않는다. 성생활은 하지 않고 복부 압통이나 발달 이상은 없었다. 어머니는 자궁내막증과 과다월경 병력이 있다. 생리통에 대한 가장 적절한 다음 처치는?

## 선택지

A. 골반 초음파
B. 골반 MRI
C. NSAID
D. 운동량 증가

## 해설

아직 약물치료를 시도하지 않은 청소년 월경통에서 NSAID(C)는 적절한 초기 치료이다. 원발성 월경통은 프로스타글란딘 매개 자궁수축과 관련된다. 다만 모친의 자궁내막증 병력과 학교생활을 방해하는 심한 통증이 있어 경과를 확인해야 하며, 적절한 치료를 3~6개월 시행해도 호전되지 않으면 복약 이행과 이차성 월경통·자궁내막증을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문모친의자궁내막증·과다월경병력누락복원. 초기NSAID C유지,3~6개월비반응시이차원인평가 명시.
- https://doi.org/10.1097/AOG.0000000000002978

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001126
