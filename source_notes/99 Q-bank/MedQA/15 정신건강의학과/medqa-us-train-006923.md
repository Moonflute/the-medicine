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
answer: A
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

17세 고등학생이 6개월 동안 지속된 불면으로 내원했다. 학교가 있는 날에는 오후 11시쯤 잠자리에 들지만 잠들기 어려워 새벽 2시쯤 졸릴 때까지 책상에서 공부한다. 밤중에 깨지는 않는다. 수면이 부족할까 걱정하며 평일 아침에 일어나기 어렵고 지각을 반복한다. 학교에서 주간 졸림이 있고 아침에 커피 1~2잔을 마신다. 낮잠은 피한다. 주말에는 오전 2시에 자서 오전 10시까지 자고 나면 개운하다. 중증 질환 병력이나 복용 약물은 없다. 다음 중 수면장애를 가장 잘 설명하는 것은?

## 선택지

A. 지연성 수면-각성 주기 장애
B. 정신생리학적 불면증
C. 전진성 수면-각성 주기 장애
D. 불규칙 수면-각성 주기 장애

## 해설

원하는 늦은 시간인 새벽 2시~오전 10시에는 중간 각성 없이 충분히 자고 개운하지만 학교 일정의 이른 취침/기상에 맞추기 어려운 점이 지연성 수면-각성 위상장애(A)를 지지한다. 잠드는 데 오래 걸린다는 사실만으로 정하는 것이 아니라 일정한 위상 지연과 원하는 일정에서의 수면 보존을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 단순 입면 지연을 모두 지연성 수면위상으로 분류한 불충분한 해설을 자유 일정에서 정상 수면이라는 핵심 단서로 보완했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006923
