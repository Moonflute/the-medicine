---
type: qbank
schema_version: 1
id: medqa-us-train-009865
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:664cd71eef2195345bd9c827ad308d6f1c7e672928f3cf701ee30d8b6504ae18
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신체증상장애"
  - "질병불안"
  - "만성 복통"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOyytCDspp3sg4Eg7J6l7JWgIChTb21hdGljIFN5bXB0b20gRGlzb3JkZXIpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 환자는 장질환 치료를 받으며 1년 이상 복통을 겪었다. 객관적인 질환 상태는 안정적이지만 통증의 의미를 지나치게 걱정해 하루 대부분을 몸 상태 확인에 쓰고 일과 외출을 거의 하지 못한다. 증상이 없다고 생각하는 것은 아니다. 가장 가능성 높은 동반 진단은?

## 선택지

A. 질병불안장애
B. 신체증상장애
C. 인위성 장애
D. 기능성 신경학적 증상장애

## 해설

신체증상장애는 괴로운 신체 증상과 이에 대한 과도한 걱정·행동으로 기능이 떨어지는 경우다. 실제 신체질환이 있어도 동반될 수 있다. 질병불안장애에서는 신체 증상이 없거나 경미한 경우가 많다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009865

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 신체증상장애에 의학적 원인 부재·심리원인이 필수라는 오래된 오류 교정. 실제 증상과 과도한 반응·장기 기능저하를 기준으로 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.psychiatry.org/patients-families/somatic-symptom-disorder/what-is-somatic-symptom-disorder
