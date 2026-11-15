---
type: qbank
schema_version: 1
id: medqa-us-train-003235
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:97fd42d943312ad4eda4b3545accfc532c03d5110dbf48783100f5f96c613929
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "Alzheimer disease"
  - "sundowning"
  - "behavioral symptoms of dementia"
  - "sleep-wake regulation"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy4oO2VmOydtOuouCDsuZjrp6QgKEFsemhlaW1lcidzIERpc2Vhc2UpLm1k
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

알츠하이머 치매 환자가 수개월째 늦은 오후에 불안해지고 밤잠이 흐트러진다. 낮에는 오래 누워 지내며, 급성 주의력 저하나 새 질환은 확인되지 않았다. 위험 행동은 없다. 먼저 마련할 계획은?

## 선택지

A. 매일 밤 벤조디아제핀을 준다
B. 저녁마다 항정신병약을 예방적으로 준다
C. 일정한 기상·취침, 낮의 빛 노출과 활동을 늘리고 저녁 자극을 줄인다
D. 낮에 오래 재워 밤의 수면 필요를 낮춘다

## 해설


치매 환자의 수면·행동 문제는 통증, 약물, 환경과 급성 섬망부터 평가한다. 만성적으로 수면이 불규칙하면 빛 노출, 낮 활동과 일정 조정 등 여러 비약물 조치를 함께 시도한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003235
- https://www.nice.org.uk/guidance/ng97/chapter/recommendations
- https://pubmed.ncbi.nlm.nih.gov/39944528/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영문·한국어 본문과 모든 선지·답 대조. 낮밤 역전·야간 초조에서 규칙적인 수면·각성 일정과 환경 접근 우선이라는 해설 적절.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
