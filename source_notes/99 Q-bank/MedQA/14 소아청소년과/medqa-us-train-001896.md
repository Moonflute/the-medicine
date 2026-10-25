---
type: qbank
schema_version: 1
id: medqa-us-train-001896
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ebd0f5dae3b6ab16535ff1f682884e633c14843837b94d53aa75cd4422617f2f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "developmental milestone"
  - "language development"
  - "infant sitting"
question_type: other
related_disease_slugs: []
difficulty: standard
answer: A
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

이전에 발달 이정표가 정상이었던 남아가 정기검진을 위해 소아과에 왔다. 임신과 출산에 합병증이 없었고 40주에 태어났다. 손으로 지탱하면 잠시 앉을 수 있고 지지 없이 앉으며 크래커와 으깬 음식을 혼자 먹는다. 장난감 곰을 계속 흔들지만 어머니가 ‘안 돼’라고 하면 멈춘다. 다음 중 가장 가능성 높은 언어 발달 이정표는 무엇인가?

## 선택지

A. 옹알이
B. 쿠잉
C. 사과와 고양이 같은 단어를 약 4개 정도 말함
D. 두 단어 조합

## 해설

독립 앉기·손으로 음식 집기 등은 대략 생후 중후반 영아기에 맞고 반복 자음 옹알이(A)가 기대된다. 옹알이는 일반적으로 첫돌보다 먼저 나타나며 CDC 9개월 이정표에도 포함된다. 단어 4개나 두 단어 문장은 더 뒤 단계다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 발달 단계에 맞는 옹알이 A 유지. 옹알이 시작을 12개월로 둔 오류 교정.
- https://www.cdc.gov/act-early/milestones/9-months.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001896
