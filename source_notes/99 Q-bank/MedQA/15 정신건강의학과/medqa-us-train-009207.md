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
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-u2iOyViCDsnqXslaAgKEFueGlldHkgRGlzb3JkZXJzKS5tZA
difficulty: standard
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 여아가 지난 4개월 동안 학교에서 말하기를 점점 꺼려하여 어머니와 함께 내원했다. 교사들은 질문에 대답하지 않아 학업 성적에 영향을 준다고 호소한다. 임신 35주에 태어났고 임신 중 전자간증이 있었다. 이전 영유아 검진은 정상이었다. 오빠는 4년 전 학습장애 진단을 받았다. 키와 체중은 65백분위수이다. 신체검사에서 이상은 없고 지시를 따른다. 질문에 직접 답하지 않고 어머니에게 속삭여 대답하며 어머니가 의사와 아이 사이에서 통역한다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 반응성 애착장애
B. 사회불안장애
C. 선택적 함구증
D. 레트 증후군

## 해설

학교나 진료실처럼 말이 기대되는 특정 상황에서 지속적으로 말하지 못하지만 어머니에게 속삭여 전달할 수 있고 학업에 영향이 있어 선택적 함구증이 가장 적절하다. 의도적으로 말을 거부하거나 선택해 억제한다는 의미가 아니며 불안과 밀접하고 사회불안이 동반될 수 있다. 언어능력·발달·청각 문제와 다른 의사소통 원인도 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009207

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 선택적 함구증을 의도적으로 말하기를 억제하는 행동 또는 사회불안과 무관한 상태처럼 설명한 오류 수정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nhs.uk/mental-health/conditions/selective-mutism/
