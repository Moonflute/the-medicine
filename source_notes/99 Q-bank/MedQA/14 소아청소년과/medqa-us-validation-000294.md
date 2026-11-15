---
type: qbank
schema_version: 1
id: medqa-us-validation-000294
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:01874f05372e2c13bd3cb72c53ec986b89edc987a6367dfca574b546b45a60ea
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "울음 유발 무호흡 발작"
  - "청색증형 호흡정지 발작"
  - "양성 소아 실신"
question_type: diagnosis
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

11개월 아이가 장난감을 빼앗겨 심하게 울더니 숨을 멈추고 입술이 파래졌다. 몇 초 동안 축 늘어졌으나 곧바로 평소처럼 놀았다. 진찰은 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 초점뇌전증발작
B. 심실빈맥
C. 청색형 숨참발작
D. 급성 기도 이물

## 해설

울음 뒤 숨을 멈추고 청색증과 짧은 의식 소실이 생긴 다음 바로 회복하는 순서는 숨참발작에 전형적이다. 울음 없이 발생하거나 회복이 늦고 운동과 연관되면 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 전형적 호흡정지 발작을 간질성 발작처럼 쓰거나 가족력이 없다고 한 오류 교정.
- https://www.rch.org.au/kidsinfo/fact_sheets/Breath_holding/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000294
- https://www.nhs.uk/conditions/breath-holding-in-babies-and-children/
