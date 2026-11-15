---
type: qbank
schema_version: 1
id: medqa-us-validation-000041
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8ab68af7d8b2ec80fd98dadf1649d321293cdc1638bf7337fc2274208523d12f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "원발성 담즙성 담관염"
  - "담즙정체성 가려움"
  - "우르소데옥시콜산"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sm5DrsJzshLEg64u07KaZ7ISxIOuLtOq0gOyXvCAoUEJDKSAoUHJpbWFyeSBCaWxpYXJ5IENob2xhbmdpdGlzKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowNCDqsITri7Tst4wvVXJzb2Rlb3h5Y2hvbGljQWNpZC5tZA
---

# MedQA US 임상문제

## 문제

36세 여성이 ALP·GGT 상승과 항미토콘드리아 항체 양성으로 원발성 담즙성 담관염을 진단받았다. 가려움도 있다. 질환 진행을 늦추기 위한 1차 약제는?

## 선택지

A. 프레드니솔론
B. 아자티오프린
C. 콜레스티라민
D. 우르소데옥시콜산

## 해설


우르소데옥시콜산(UDCA)이 PBC의 1차 질병조절제다. 콜레스티라민은 담즙정체성 가려움을 줄이는 데 쓸 수 있지만 질환 진행을 늦추는 치료는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000041 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PBC의 UDCA D 질병조절과 소양증 치료를 구분. AMA+담즙정체에서 간생검 필수라는 오류 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.aasld.org/aasld-and-aga-offer-first-medication-focused-guideline-treating-pbc

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000041
- https://doi.org/10.1097/HEP.0000000000001875
