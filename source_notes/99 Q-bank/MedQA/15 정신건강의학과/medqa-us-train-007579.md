---
type: qbank
schema_version: 1
id: medqa-us-train-007579
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0dab2aa5e21b31f5f82f49a0d5e7f98f0879f0220e9bbc6eac3e2755651733b2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "사회불안장애"
  - "수행불안"
  - "사회적 회피"
  - "심계항진"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yCrO2ajCDrtojslYgg7J6l7JWgIChTb2NpYWwgQW54aWV0eSBEaXNvcmRlcikubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 학생이 발표할 때 얼굴이 붉어지는 것을 남들이 창피하게 볼까 두려워 수업을 피한다. 발표가 없는 상황에서는 갑작스러운 불안 발작이 없고 다른 사람과 편하게 지낸다. 가장 가능성 높은 진단은?

## 선택지

A. 공황장애
B. 광장공포증
C. 사회불안장애
D. 범불안장애

## 해설


발표라는 사회적 수행 상황에서 타인의 부정적 평가를 두려워하고 회피한다. 그 상황 밖에서도 예기치 않은 발작이 반복되는 공황장애나 여러 문제를 과도하게 걱정하는 범불안장애와 다르다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007579
- https://www.nice.org.uk/guidance/cg159/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영문/한국어 본문·네 선지·정답·해설 대조. 타인의 부정적 평가 두려움과 발표·토론 회피가 1년 지속된 사회불안장애 선택 적절.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
