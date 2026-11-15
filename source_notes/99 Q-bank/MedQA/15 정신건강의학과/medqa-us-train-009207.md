---
type: qbank
schema_version: 1
id: medqa-us-train-009207
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f25fa2797605ae39a60e963c500264587582ca03529d84e9b518bd3bed0a7fdb
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "selective mutism"
  - "선택적 함구증"
  - "anxiety disorder"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-u2iOyViCDsnqXslaAgKEFueGlldHkgRGlzb3JkZXJzKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세로 선택적 함구증이 있는 아이가 집에서는 유창하게 말한다. 방과 후 빈 교실에서는 보호자에게 속삭일 수 있지만, 교사가 있으면 말하지 못한다. 학교와 함께 시작할 방법은?

## 선택지

A. 첫날 전체 학급 앞에서 질문에 답하게 한다
B. 교실에서는 기대를 아예 없애고 보호자가 항상 대신 말한다
C. 한 달 동안 등교를 쉬고 자연 회복을 기다린다
D. 편한 사람과 짧게 말하는 것부터 시작해 사람과 상황을 단계적으로 늘린다

## 해설

말하기 부담이 낮은 상황에서 출발해 사람과 장소를 점차 넓힌다. 강요하지 않고 작은 시도를 강화하도록 보호자·학교·치료팀이 계획을 맞춘다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009207
- https://www.asha.org/practice-portal/clinical-topics/selective-mutism/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 선택적 함구증을 의도적으로 말하기를 억제하는 행동 또는 사회불안과 무관한 상태처럼 설명한 오류 수정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nhs.uk/mental-health/conditions/selective-mutism/
