---
type: qbank
schema_version: 1
id: medqa-us-test-000992
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9e07d42df200ede9e17f22a258d83c4f3479394d7c03398dd6a7551e6850d7a3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유잉육종"
  - "작은 원형 청색 세포"
  - "양파껍질 골막반응"
  - "Ewing sarcoma"
related_disease_slugs: []
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

13세 환자에게 수주 동안 밤에 심해지는 허벅지 통증이 있다. 영상에서 대퇴골 몸통의 침윤성 골용해 병변과 여러 층의 골막 반응이 보인다. 생검에서 작은 원형세포가 관찰되고 EWSR1::FLI1 융합이 검출됐다. 가장 가능성 높은 진단은?

## 선택지

A. 골육종
B. 골수염
C. 유잉육종
D. 유골골종

## 해설


청소년의 공격적인 골간부 병변과 작은 원형세포에 EWSR1::FLI1 융합이 동반되면 유잉육종에 부합한다. 골막 반응만으로는 골수염 등과 확실히 구별하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000992 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소아 골간부 병변·양파껍질 골막반응·small round blue cells의 Ewing C가 원문과 일치. 병리 기초 내용 검토.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000992
- https://www.cancer.gov/types/bone/hp/ewing-treatment-pdq
