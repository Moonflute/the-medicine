---
type: qbank
schema_version: 1
id: medqa-us-train-006923
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:53364868b275388e87ee16c500b2e5aaa9da3abf652fb980dceda1977efce560
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "지연성 수면-각성 주기 장애"
  - "청소년 수면장애"
  - "주간 졸림"
  - "Delayed sleep phase disorder"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOuptOymnSAoTmFyY29sZXBzeSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 학생이 평일에는 새벽 2시에야 잠들어 지각이 잦다. 방학에는 새벽 2시부터 오전 10시까지 중간에 깨지 않고 자며 개운하다. 이런 일정이 반년 넘게 반복됐다. 가장 가능성 높은 진단은?

## 선택지

A. 만성 불면장애
B. 수면-각성 위상 전진 장애
C. 기면증
D. 수면-각성 위상 지연 장애

## 해설

원하는 늦은 시간에는 수면이 정상인데 학교 일정에 맞춰 일찍 자고 일어나기 어렵다. 수면 자체가 어려운 불면장애와 구분하며 수면일지가 평가에 도움 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 단순 입면 지연을 모두 지연성 수면위상으로 분류한 불충분한 해설을 자유 일정에서 정상 수면이라는 핵심 단서로 보완했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006923
- https://pubmed.ncbi.nlm.nih.gov/26414986/
