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
answer: A
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

32세 여성이 3년 반 동안 원인을 찾지 못한 복통으로 내원했다. 통증은 식사와 관련이 없고 특정 시간대에도 해당하지 않지만, 오심과 복부 팽만은 있다고 한다. 지난 2년 동안 위내시경 두 번, 대장내시경, 진단적 복강경을 받았으나 결과는 없었다. 어머니에게 대장암 병력이 있어 매우 걱정한다. 자신의 상태를 끊임없이 걱정하느라 일을 하거나 사회생활을 유지할 수 없다. 이 환자의 가장 가능성 높은 진단은?

## 선택지

A. 신체증상장애
B. 기능성 신경학적 증상장애
C. 질병불안장애
D. 인위성 장애

## 해설

지속되는 복통 등 신체 증상과 이에 대한 과도한 걱정·시간 소모, 현저한 기능저하가 있어 신체증상장애가 가장 적절하다. 의학적으로 설명되지 않는 증상이어야 하거나 심리적 원인이 증명돼야 하는 진단은 아니며 실제 신체질환과도 함께 존재할 수 있다. 증상이 거의 없거나 경미한데 질병 걱정이 중심인 질병불안장애와 구별한다. 원문 선지의 hypochondriasis는 과거 용어이며 현재 진단 체계와 완전히 일대일 대응하는 명칭은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009865

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 신체증상장애에 의학적 원인 부재·심리원인이 필수라는 오래된 오류 교정. 실제 증상과 과도한 반응·장기 기능저하를 기준으로 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.psychiatry.org/patients-families/somatic-symptom-disorder/what-is-somatic-symptom-disorder
