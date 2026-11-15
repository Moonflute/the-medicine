---
type: qbank
schema_version: 1
id: medqa-us-test-000551
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0abb87321e96f61b92016ae160000fd11d2636d2165c234014207a04cf3f6b4d
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "무통성 혈뇨"
  - "방광암"
  - "요로 종양"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyVlCAoQmxhZGRlciBjYW5jZXIpLm1k
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30갑년 흡연력이 있는 65세 남성이 통증 없는 육안적 혈뇨로 내원했다. 소변 현미경에서 적혈구가 확인됐고 배양은 음성이다. 방광 내 종양을 확인하는 데 가장 적합한 검사는?

## 선택지

A. 방광경검사
B. 소변세포검사 단독
C. 혈청 PSA 측정
D. 소변검사만 1년 뒤 반복

## 해설

고령의 흡연자에서 통증 없는 육안적 혈뇨는 방광암을 배제해야 한다. 방광경으로 방광 점막을 직접 확인하며 환자 위험도에 맞춰 상부 요로도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 선택지 중 무통성 육안혈뇨의 방광종양 A는 타당. 모든 고령자 혈뇨의 가장 흔한 원인 또는 RCC는 통증이 있어야 한다는 일반화 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000551
- https://uroweb.org/guidelines/non-muscle-invasive-bladder-cancer/chapter/diagnosis
