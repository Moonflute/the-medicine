---
type: qbank
schema_version: 1
id: medqa-us-train-001757
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ba591c7999396f236b626e84eb114b89b22a28e0d59951b1022b1fc8498e4121
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "obsessive-compulsive disorder"
  - "intrusive thoughts"
  - "compulsions"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qwleuwlSDsnqXslaAgKE9ic2Vzc2l2ZS1Db21wdWxzaXZlIERpc29yZGVyLCBPQ0QpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9TZXJ0cmFsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 여성이 원치 않는 침입 생각 때문에 불안하고, 문이 잠겼는지 매일 한 시간 넘게 확인한다. 강박장애로 진단받고 초기 치료로 약물 사용을 원한다. 적절한 약은?

## 선택지

A. 부프로피온
B. 세르트랄린
C. 올란자핀
D. 로라제팜

## 해설

세르트랄린은 강박장애에 사용할 수 있는 SSRI다. 노출 및 반응방지를 포함한 인지행동치료도 핵심 치료이고, 중증도와 환자 선호에 따라 병합할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: OCD의 SSRI D 유지하되 가장흔한 약이라는 근거 없는 우위 주장 제거하고 ERP·증상별 치료선택 추가.
- https://www.nice.org.uk/guidance/cg31/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001757
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=201007672
