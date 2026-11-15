---
type: qbank
schema_version: 1
id: medqa-us-test-001022
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e2b14c8479073958bc0421de61462c9c2f245e9d13c66febb4affcf388587511
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "수혈 반응"
  - "수술 후 발열"
  - "급성 용혈성 수혈 반응"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-yImOyIoCDtm4Qg67Cc7Je0IChQb3N0b3BlcmF0aXZlIEZldmVyKS5tZA
  - MTEg7Jm46rO8L-q4ieyEsSDsmqntmIjshLEg7IiY7ZiIIOuwmOydkSAoQWN1dGUgSGVtb2x5dGljIFRyYW5zZnVzaW9uIFJlYWN0aW9uKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

농축적혈구 수혈을 시작한 환자에게 갑자기 39.5℃ 발열과 심한 오한이 생겼다. 수혈이 아직 진행 중이다. 가장 먼저 할 조치는?

## 선택지

A. 해열제 투여 후 수혈 속도를 올린다
B. 같은 혈액제제의 다음 단위를 준비한다
C. 혈액검사 결과가 나오기 전까지 수혈을 계속한다
D. 수혈을 즉시 중단하고 환자 상태를 평가하며 혈액은행에 알린다

## 해설

수혈 중 발열과 오한이 생기면 먼저 수혈을 중단한다. 환자와 혈액의 일치 여부를 확인하고 급성 용혈, 세균 오염 등 중증 반응을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수혈 후 발열·오한은 수혈반응 D에 합당하지만 용혈성 아형을 확정할 자료는 없다. 원문 자체의 섭씨/화씨 불일치는 섭씨 39.5°C에 맞춰 화씨만 103.1°F로 정정.
- 공식/학회 근거: https://www.isbtweb.org/resources/educational-modules-on-clinical-use-of-blood/adverse-effects-of-transfusion.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001022
- https://www.hira.or.kr/cms/open/04/04/12/2022_10.pdf
