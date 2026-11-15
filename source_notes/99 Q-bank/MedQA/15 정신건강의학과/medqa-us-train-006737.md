---
type: qbank
schema_version: 1
id: medqa-us-train-006737
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6fd6f91d52e30d6f924e37a2cb2013d510d2143dfc3d38d9f455dc6d0bcf3980
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "불면장애"
  - "수면 유지 장애"
  - "졸피뎀"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-u2iOuptCDsnqXslaAgKEluc29tbmlhIERpc29yZGVyKS5tZA
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9ab2xwaWRlbS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 환자가 7개월 동안 일주일에 네 번 이상 밤에 깨고, 낮에 피곤해 업무에 지장이 있다. 충분히 잘 기회가 있고 다른 수면질환을 시사하는 소견은 없다. 수면 습관 교육 후에도 그대로다. 우선할 치료는?

## 선택지

A. 졸피뎀을 매일 장기 복용
B. 비처방 항히스타민제를 매일 복용
C. 수면다원검사를 일률적으로 시행
D. 불면 인지행동치료(CBT-I)

## 해설

국내 불면 치료 지침에서 만성 불면의 첫 치료는 구조화된 CBT-I다. 수면위생 설명만으로 이를 대신하지 않으며 수면제는 이득과 위험에 따라 별도로 검토한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006737
- https://pubmed.ncbi.nlm.nih.gov/33198436/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 졸피뎀을 노인에게 비교적 안전한 보편적 1차라 한 해설 교정. 만성 불면의 CBT-I 우선과 약물 사용 위험을 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://doi.org/10.7326/M15-2175
- https://www.fda.gov/consumers/consumer-updates/taking-z-drugs-insomnia-know-risks
