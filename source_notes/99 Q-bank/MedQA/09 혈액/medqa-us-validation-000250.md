---
type: qbank
schema_version: 1
id: medqa-us-validation-000250
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ecf09ef9b9eb3fd315a912cb3f93ad9edfb0d54062e6b49f2b6d7a4f28f2524a
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "면역성 혈소판감소증"
  - "혈소판감소증"
  - "C형간염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: investigation
difficulty: standard
answer: B
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
---

# MedQA US 임상문제

## 문제

31세 환자가 멍과 점상출혈로 진료받았다. 반복 검사에서 혈소판만 28,000/μL이고 도말에 혈소판 응집이나 분열 적혈구는 없다. 약물 원인이 없고 HIV 검사는 음성이다. 이차성 혈소판감소증의 원인을 찾기 위한 검사는?

## 선택지

A. 항혈소판항체만 단독 측정
B. C형간염 항체검사
C. D-이합체 단독 측정
D. 증상 없이 혈액배양부터 시행

## 해설


새로 면역성 혈소판감소증을 의심하면 HIV와 C형간염 등 이차 원인을 확인한다. 항혈소판항체 검사는 민감도에 한계가 있어 일상적인 필수 확진검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000250 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고립 혈소판감소의 이차 원인 HCV 항체 C 평가 유지. HCV가 이미 확정되거나 모든 급성 혈소판감소의 흔한 원인이라고 일반화하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6963252/
- https://www.cdc.gov/hepatitis-c/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000250
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8958378/
