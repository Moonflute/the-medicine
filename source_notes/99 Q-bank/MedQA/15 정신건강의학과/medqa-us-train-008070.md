---
type: qbank
schema_version: 1
id: medqa-us-train-008070
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c345f9fb14ff2cf56d6e53936c07d1c97b575486c03453adb031482269eb862
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "excoriation disorder"
  - "skin-picking disorder"
  - "SSRI"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2UvOu2gOucr-q4sOq4sOyepeyVoCAoRXhjb3JpYXRpb24gRGlzb3JkZXIpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 수개월간 팔의 피부를 뜯어 상처가 반복된다. 여러 번 멈추려 했지만 실패했고 상처 때문에 사람을 피한다. 외모 결함을 고치려는 생각이나 자신을 다치게 하려는 의도는 없다. 가장 가능성 높은 진단은?

## 선택지

A. 피부뜯기장애
B. 신체이형장애
C. 발모광
D. 망상장애의 신체형

## 해설

피부를 반복해서 뜯어 병변이 생기고, 멈추려 해도 지속되어 일상에 지장을 주면 피부뜯기장애를 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008070
- https://www.psychiatry.org/psychiatrists/practice/dsm/educational-resources/dsm-5-fact-sheets

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 피부뜯기에서 SSRI를 확립된 일차로 단정한 해설 교정. 원문 플루옥세틴은 제한된 선지의 약물 선택으로 보존하며 HRT/CBT 누락 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nhs.uk/mental-health/conditions/skin-picking-disorder/
