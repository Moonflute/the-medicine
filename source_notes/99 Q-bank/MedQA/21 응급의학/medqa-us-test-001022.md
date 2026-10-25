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
question_type: diagnosis
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

선택적 담낭절제술 2시간 후 43세 여성에게 발열과 오한이 생겼다. 예방적으로 세팔렉신을 받았고 수술 중 농축적혈구 1단위를 수혈받았다. 체온 39.5°C(103.1°F), 맥박 90회/분, 호흡 18회/분, 혈압 125/90 mmHg였으며 복부 수술 상처는 약간 압통이 있었지만 홍반은 없었다. 폐와 심장 진찰은 정상이었고 수술 중 폴리도뇨관과 말초정맥로를 삽입했다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 약물 이상반응
B. 악성 고체온증
C. 요로감염
D. 수혈 반응

## 해설

수술 중 적혈구 수혈 후 수 시간 내 발열과 오한이 발생하여 D, 수혈반응이 가장 타당하다. 발열성 비용혈성 수혈반응뿐 아니라 급성 용혈이나 세균 오염 관련 반응도 평가해야 하며, 발열·오한만으로 급성 용혈성 반응이라고 확정할 수 없다. 경미한 수술창 압통은 용혈의 특이 소견이 아니다. 악성고열을 시사하는 근육 경직이나 과탄산혈증도 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수혈 후 발열·오한은 수혈반응 D에 합당하지만 용혈성 아형을 확정할 자료는 없다. 원문 자체의 섭씨/화씨 불일치는 섭씨 39.5°C에 맞춰 화씨만 103.1°F로 정정.
- 공식/학회 근거: https://www.isbtweb.org/resources/educational-modules-on-clinical-use-of-blood/adverse-effects-of-transfusion.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001022
