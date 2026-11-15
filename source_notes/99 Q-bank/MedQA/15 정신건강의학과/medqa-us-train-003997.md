---
type: qbank
schema_version: 1
id: medqa-us-train-003997
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:40cc6095bf5945063794ddb08505967d8ab3a784c2039211ee529d2b104afd12
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "강박장애"
  - "강박사고"
  - "강박행동"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qwleuwlSDsnqXslaAgKE9ic2Vzc2l2ZS1Db21wdWxzaXZlIERpc29yZGVyLCBPQ0QpLm1k
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 환자는 문손잡이를 만지면 오염됐다는 생각이 반복해서 떠오른다. 과도하다는 걸 알면서도 불안을 줄이려 하루 두 시간씩 확인하고 닦느라 외출에 늦는다. 가장 가능성 높은 진단은?

## 선택지

A. 강박성 성격장애
B. 강박장애
C. 범불안장애
D. 틱장애

## 해설


원치 않는 침투적 사고와 불안을 줄이기 위한 반복행동이 시간을 소모하고 기능을 방해하면 강박장애를 의심한다. 완벽주의적 성격 특성이나 여러 주제에 대한 걱정과는 다르다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003997
- https://www.nice.org.uk/guidance/cg31/chapter/Recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영한 본문·선지·정답·해설 대조. 오염에 대한 침투적 걱정과 반복 청소·고통이 강박장애를 뒷받침하며 손 씻기 표현은 일반 강박행동 예시로 읽을 수 있음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
