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
answer: A
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

7세 남아가 2개월 전부터 시작된 반응 없음과 눈이 위로 돌아가는 증상으로 내원하였다. 발작은 갑작스럽게 시작되어 수 초간 지속된다. 발작 동안 아이는 타인의 목소리를 듣지 못하거나 목적 있는 움직임을 보이지 않는다. 발작이 끝나면 아이는 발작 전 하던 일을 계속한다. 자세를 잃거나 바닥으로 쓰러지지는 않는다. 발작은 하루에도 여러 번 발생한다. 신체 검진상 이상 소견은 없다. 과호흡 후 시행한 뇌파검사(EEG)에서 3Hz 극서파(spike-and-slow-wave) 방전이 관찰된다. 현재 가장 적절한 약물 치료는 무엇인가?

## 선택지

A. Ethosuximide
B. Lamotrigine
C. Sodium valproate
D. 현재 약물 치료 불필요

## 해설

갑자기 반응이 사라졌다 바로 회복하고 과호흡 시 3 Hz 극서파가 나타나는 것은 전형 결신발작이다. 의식/인지가 잠깐 저하되지만 자세는 유지될 수 있다. 다른 전신발작이 없는 결신발작에는 에토수시미드(A)가 1차 선택이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 전형 결신발작의 에토수시미드 A 유지. 의식소실이 없다는 오류와 결석발작 오역 교정.
- https://www.nice.org.uk/guidance/ng217/chapter/5-Treating-epileptic-seizures-in-children-young-people-and-adults

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001101
