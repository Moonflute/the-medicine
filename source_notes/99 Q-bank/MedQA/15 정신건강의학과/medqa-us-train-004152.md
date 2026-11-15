---
type: qbank
schema_version: 1
id: medqa-us-train-004152
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:71ef929ee8c6005d1f636579cd7bc8fdbdcbd46b3b15406bed31b5171c1f1ef9
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조현병"
  - "급성 초조"
  - "항정신병약물"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

환자가 응급실에서 심하게 초조해 큰소리를 내지만 위협적인 행동은 없고 의료진의 말에 반응한다. 시간과 거리를 두고 대화할 수 있으며 의학적 원인도 평가 중이다. 우선할 접근은?

## 선택지

A. 원인 평가 전에 신체 억제를 시행한다
B. 여러 직원이 동시에 가까이 다가가 지시에 따르라고 요구한다
C. 자극을 줄이고 한 사람이 차분하게 대화하며 원하는 도움을 묻는다
D. 상황을 설명하지 않고 즉시 주사로 진정시킨다

## 해설

대화가 가능한 초기 초조에서는 안전거리를 유지하고 자극을 줄이며 언어적 진정을 먼저 시도한다. 위험이 커지면 원인과 신체 상태에 맞춰 추가 안전 조치를 마련한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004152
- https://www.nice.org.uk/guidance/ng10/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 할로페리돌을 '전형 1형 비정형'으로 혼합 분류한 오류 수정. 급성 선택과 대사·추체외로 위험 및 장기 순응도 계획 구별.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
