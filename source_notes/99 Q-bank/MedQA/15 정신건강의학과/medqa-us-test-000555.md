---
type: qbank
schema_version: 1
id: medqa-us-test-000555
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:eba958cdb100c32e72899a1a69d7c1c7ab45e513727bc0b3f0052b03d0377173
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "공황장애"
  - "공황발작"
  - "광장공포증"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qzte2ZqSDsnqXslaAgKFBhbmljIERpc29yZGVyKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q0keyepSDqs7Xtj6zspp0gKEFnb3JhcGhvYmlhKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 환자가 처음 공황발작을 겪었다. 필요한 평가에서 의학적 원인은 확인되지 않았다. 이 한 번의 발작과 구분해 공황장애를 진단하려면 어떤 경과가 필요한가?

## 선택지

A. 한 번의 발작이 30분 이상 지속
B. 가족에게도 공황발작이 있음
C. 예기치 않은 발작이 반복되고, 적어도 한 발작 뒤 1개월 이상 걱정 또는 행동 변화가 지속
D. 광장공포증이 반드시 함께 나타남

## 해설

공황발작은 한 번만 나타날 수 있다. 공황장애는 반복되는 예기치 않은 발작에 더해 이후의 걱정이나 부적응적 행동 변화가 한 달 이상 지속되는 경우다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 공황발작과공황장애혼동/30분지속필수창작교정. 반복예기치않은발작후1개월걱정·행동변화A.
- https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms
- https://www.ncbi.nlm.nih.gov/books/NBK571021/box/ch4.b27/?report=objectonly

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000555
- https://www.nice.org.uk/guidance/cg113/chapter/recommendations
- https://www.ncbi.nlm.nih.gov/books/NBK430973/
