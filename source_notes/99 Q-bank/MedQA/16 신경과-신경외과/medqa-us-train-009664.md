---
type: qbank
schema_version: 1
id: medqa-us-train-009664
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:335011f5e527f2630ecbacddda5f8026bb7e494924dd71cbeccd657c73ba50d7
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "juvenile myoclonic epilepsy"
  - "청소년 근간대성 간질"
  - "valproate"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKt7IaM64WEIOq3vOqwhOuMgOyEsSDrh4zsoITspp0gKEp1dmVuaWxlIE15b2Nsb25pYyBFcGlsZXBzeSkubWQ
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

13세 남자가 레이저 쇼를 보던 중 발생한 전신 강직간대 발작으로 응급실에 왔다. 평소 건강하지만 자주 멍하니 있고, 수개월 동안 아침에 손가락과 팔이 움찔거리는 에피소드가 반복되었다. 의식 소실은 없었다. 가장 적절한 치료는 무엇인가?

## 선택지

A. 디아제팜
B. 에토숙시미드
C. 페니토인
D. 발프로산

## 해설

각성 직후 반복되는 상지 근간대경련, 전신 강직간대발작과 결신 가능성은 청소년 근간대뇌전증을 시사한다. 보기 중 valproate(D)가 여러 전신 발작형을 조절하는 약물이다. Phenytoin은 근간대/결신 발작을 악화시킬 수 있고 ethosuximide는 결신 외 발작을 충분히 치료하지 못한다. 현행 치료에서는 levetiracetam 등 대안과 생식·기타 안전성을 상담한다. 영국에서는 55세 미만 신규 valproate 처방에 두 전문의 판단 등 규제가 있어 무조건적인 일차 처방으로 해석해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. JME의 임상 정의와 약물 구분 오류 교정. D는 보기 중 적합하나 성별을 포함한 valproate 안전성 규정을 명시.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng217/chapter/5-Treating-epileptic-seizures-in-children-young-people-and-adults

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009664
