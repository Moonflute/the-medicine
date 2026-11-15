---
type: qbank
schema_version: 1
id: medqa-us-train-002793
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7d24d69be1a1e944616b56e1020fd98bf5ee59f0b9b321afbafc390535893269
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "Tourette syndrome"
  - "motor and vocal tics"
  - "tic disorder"
  - "risperidone"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2LsSDsnqXslaAgKFRpYyBEaXNvcmRlcikubWQ
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uanOugmyDsnqXslaAgKFRvdXJldHRlIERpc29yZGVyKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

11세 아이의 뚜렛증후군이 수업과 친구 관계에 지장을 준다. 아이가 적극적으로 참여할 수 있고 약을 쓰기 전 근거 있는 치료를 원한다. 무엇을 권할까?

## 선택지

A. 틱이 생길 때마다 혼내고 중단시킨다
B. 물리치료로 틱에 관여하는 근육을 강화한다
C. 틱을 알아차리고 경쟁 반응을 연습하는 틱 종합행동중재
D. 뇌파 생체되먹임 단독치료

## 해설


습관반전훈련을 포함한 틱 종합행동중재(CBIT)는 기능에 지장을 주는 틱에서 우선 고려할 수 있다. 가정과 학교의 지지도 중요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002793
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6537133/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 운동·음성 틱에 리스페리돈 원정답 유지. 모든 투렛증후군의 단일 1차라는 단정 삭제.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
