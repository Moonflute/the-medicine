---
type: qbank
schema_version: 1
id: medqa-us-train-008561
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9bea6ffad3f6e51bd3552c654beaedf91abfecfbfb388337e25cc407280d5862
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "treatment-resistant schizophrenia"
  - "psychosis in pregnancy"
  - "clozapine"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BcmlwaXByYXpvbGUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 10주인 조현병 환자가 쿠에티아핀으로 안정적이다. 이전에 약을 중단했을 때 재발해 입원했다. 현재 부작용은 없지만 태아 걱정으로 약을 끊고 싶어 한다. 적절한 계획은?

## 선택지

A. 임신 초기에는 항정신병약을 모두 중단한다
B. 재발과 약물의 위험을 설명하고 기존 약 유지와 산전 대사 감시를 함께 계획한다
C. 태아에 더 안전하다고 단정해 클로자핀으로 교체한다
D. 출산 때까지 증상이 나타나는 날에만 약을 복용한다

## 해설

약 없이 재발 가능성이 높고 기존 항정신병약으로 안정적이면 임신만을 이유로 중단하지 않는다. 산과·정신건강의학과가 산모와 함께 이익과 위험을 논의하고 체중과 임신성 당뇨를 감시한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008561

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 클로자핀만 임신 안전성이 입증됐다는 허위 주장과 ECT는 급성 상황에만 사용된다는 오류 교정. 치료저항성 확인 후 클로자핀 고려로 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/Guidance/CG178/chapter/recommendations
- https://www.nice.org.uk/guidance/cg192/chapter/Recommendations
