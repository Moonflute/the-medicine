---
type: qbank
schema_version: 1
id: medqa-us-train-001101
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7859d488084236f79c3573dd14d4a3a49956fa57b78d31127dc263ddb2803af3
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "absence seizure"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IaM67Cc7J6RIChBYnNlbmNlIFNlaXp1cmUpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WYWxwcm9hdGUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

7세 아이가 하루 여러 번 몇 초 동안 행동을 멈추고 불러도 반응하지 않다가 곧 하던 일을 계속한다. 뇌파에서 과호흡으로 3Hz 전반성 극서파가 유발됐다. 다른 발작 유형은 없다. 첫 약물은?

## 선택지

A. 라모트리진
B. 발프로산
C. 카르바마제핀
D. 에토숙시미드

## 해설

다른 발작 유형이 없는 소아 결신뇌전증의 일차 약은 에토숙시미드다. 전신 강직간대발작 등 다른 발작이 함께 있으면 여러 발작 유형에 효과가 있는 약을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 전형 결신발작의 에토수시미드 A 유지. 의식소실이 없다는 오류와 결석발작 오역 교정.
- https://www.nice.org.uk/guidance/ng217/chapter/5-Treating-epileptic-seizures-in-children-young-people-and-adults

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001101
- https://www.nice.org.uk/guidance/ng217/chapter/treating-epileptic-seizures-in-children-young-people-and-adults
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=201200246
