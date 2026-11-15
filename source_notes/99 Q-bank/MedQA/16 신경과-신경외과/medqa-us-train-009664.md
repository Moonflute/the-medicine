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
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKt7IaM64WEIOq3vOqwhOuMgOyEsSDrh4zsoITspp0gKEp1dmVuaWxlIE15b2Nsb25pYyBFcGlsZXBzeSkubWQ
difficulty: simple
answer: A
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

15세 학생이 아침에 일어난 직후 양팔이 순간적으로 움찔해 물건을 자주 떨어뜨렸다. 최근 잠을 거의 자지 못한 날 전신 강직간대발작을 겪었고 뇌파에서 전반성 다극서파가 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 청소년 근간대뇌전증
B. 소아 결신뇌전증
C. 측두엽 뇌전증
D. 자기한정 중심측두극파 뇌전증

## 해설

청소년기에 시작된 기상 직후 근간대발작과 전신 강직간대발작, 전반성 다극서파는 청소년 근간대뇌전증에 맞는다. 수면 부족으로 악화할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. JME의 임상 정의와 약물 구분 오류 교정. D는 보기 중 적합하나 성별을 포함한 valproate 안전성 규정을 명시.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng217/chapter/5-Treating-epileptic-seizures-in-children-young-people-and-adults

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009664
- https://pubmed.ncbi.nlm.nih.gov/35503716/
