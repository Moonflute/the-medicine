---
type: qbank
schema_version: 1
id: medqa-us-train-005204
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ba6331f62e75a2d8ded368a02ea5ee7a6af94e93c193841f86436d6fa1779f8c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신경모세포종"
  - "신경능선 세포"
  - "히르슈스프룽병"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug6rK966qo7IS47Y-s7KKFIChOZXVyb2JsYXN0b21hKS5tZA
difficulty: simple
answer: D
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

3세 아이가 여러 방향으로 튀는 빠른 안구운동과 팔다리의 불규칙한 경련성 움직임을 보인다. 최근 보행도 불안정해졌다. 안구간대–근간대–운동실조 증후군에서 동반 여부를 평가할 종양은?

## 선택지

A. 두개인두종
B. 윌름스종양
C. 망막모세포종
D. 신경모세포종

## 해설

소아의 안구간대–근간대–운동실조는 신경모세포종의 종양연관 증상일 수 있다. 모든 환자가 종양에 의한 것은 아니지만 동반 여부를 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 히르슈스프룽병을 신경능선 유래 종양으로 잘못 정의하고 환아의 실제 종양과 혼동한 해설을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005204
- https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq
