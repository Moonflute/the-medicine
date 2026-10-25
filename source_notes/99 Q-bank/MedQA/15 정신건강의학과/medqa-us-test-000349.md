---
type: qbank
schema_version: 1
id: medqa-us-test-000349
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:3e89e71b7654d09eeaa6192bd26bc81a0b209b499f020cc0cd8bfdce64a92d37
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "주요우울장애"
  - "항우울제 치료 반응"
  - "불면"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 기분에 대해 상담하기 위해 정신과를 방문했다. 최근 피곤하고 어떤 활동에도 참여하고 싶지 않다고 한다. 팔다리가 항상 무겁게 느껴지고 어떤 일을 하든 엄청난 노력이 든다고 한다. 예전에 즐기던 활동에서도 더 이상 행복을 느끼지 못한다. 잠들기 어렵고 때로는 며칠 동안 잠을 자지 못한다고 한다. 적절한 일차 치료를 시작하고 귀가시켰으나 1주 후 증상이 호전되지 않았다며 다시 왔다. 직장과 학교 수행에 지장이 있어 도움을 요청한다. 다음 중 가장 적절한 조치는?

## 선택지

A. 치료에 리튬을 추가한다
B. 치료를 리튬으로 변경한다
C. 현재 치료를 계속한다
D. 전기경련치료

## 해설

우울증 치료를 시작한 지 1주일 만에 호전이 없다는 사실만으로 치료 실패를 판단하지 않는다. 제시된 선택지 중 현재 치료를 지속하는 것이 적절하며, 복약 순응도·부작용·자살위험과 조증 가능성 등을 재평가하고 추적한다. 항우울제는 통상 수 주에 걸쳐 효과를 평가하므로 이 정보만으로 리튬 추가·변경이나 전기경련치료로 즉시 전환할 근거는 없다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000349

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. '1주 차에 효과가 없다고 판단한다'는 정답과 반대인 문장을 교정. 치료 지속 및 초기 안전성 추적 구별.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng222/chapter/Recommendations
