---
type: qbank
schema_version: 1
id: medqa-us-train-001209
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:941212866e7355123d2daccdc99d1f4df7e2df0a16741f8039664757d7184e64
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Tourette syndrome"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uanOugmyDsnqXslaAgKFRvdXJldHRlIERpc29yZGVyKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 아이가 18개월째 눈을 깜빡이고 어깨를 들썩이는 운동 틱과 킁킁 소리를 내는 음성 틱을 보인다. 틱 때문에 수업과 친구 관계가 어렵다. 아이와 가족이 치료에 참여할 수 있다면 우선 권할 방법은?

## 선택지

A. 틱이 나오면 꾸짖어 참게 한다
B. 틱을 위한 포괄적 행동중재(CBIT)를 제공한다
C. 벤조디아제핀을 매일 먼저 복용한다
D. 기능에 영향이 있지만 아무 도움 없이 지켜본다

## 해설

틱이 기능을 떨어뜨리고 훈련에 참여할 수 있다면, 틱 알아차리기와 경쟁 반응 훈련 등을 포함한 CBIT가 일차 선택이다. 접근이 어렵거나 효과가 부족할 때 약물 등 다른 방법을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 장애가 심한 Tourette 틱의 보기 중 리스페리돈 B 유지. 모든 환자의 유일한 1차 치료라는 단정 수정.
- https://www.aan.com/Guidelines/home/GetGuidelineContent/960

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001209
- https://pubmed.ncbi.nlm.nih.gov/31061208/
- https://pubmed.ncbi.nlm.nih.gov/34313861/
