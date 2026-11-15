---
type: qbank
schema_version: 1
id: medqa-us-train-006480
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:88bde47e7312d93079d6aa80798a3a7aa7226f7d8c6d777d2006f7a5ca0ff890
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "철분 중독"
  - "소아 독성 섭취"
  - "데페록사민 해독"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
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

5세 남아가 철분제를 과량 삼킨 것으로 의심된다. 반복 구토에 피가 섞이고 빈맥, 저혈압과 대사성 산증이 있다. 정맥 수액 소생과 함께 투여할 해독제는?

## 선택지

A. 포메피졸
B. 날록손
C. 데페록사민
D. 중탄산나트륨 단독

## 해설

심한 구토와 저혈압·산증은 중증 철 중독을 시사한다. 신속하게 소생하고 독성학 자문과 함께 철 킬레이트제인 데페록사민 치료를 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 철 중독에서 데페록사민 A의 근거를 확인하고 토혈을 혈변으로 바꾼 해설을 바로잡는다.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/iron_poisoning/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006480
