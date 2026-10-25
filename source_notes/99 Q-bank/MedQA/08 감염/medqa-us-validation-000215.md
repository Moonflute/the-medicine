---
type: qbank
schema_version: 1
id: medqa-us-validation-000215
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:d416e8f253f6db6f3edc8ae782a819b7a83b6bf21aa98a2d7297c27ae3ffcd59
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "급성 B형간염"
  - "D형간염 동시감염"
  - "전격성 간염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQu2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBCKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_soITqsqnshLEg6rCE7Je8IChGdWxtaW5hbnQgSGVwYXRpdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: investigation
difficulty: complex
answer: A
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

32세 남성이 급성 중증 간염과 간성뇌증으로 왔다. INR은 3.8이고 HBsAg 양성, HBsAb 음성이었다. 치료를 시작하기 전에 시행할 검사는?

## 선택지

A. D형간염 혈청검사
B. HIV ELISA
C. PPD 피부검사
D. 요추천자

## 해설


HBsAg 양성 환자의 중증 간염에서는 HDV 동시·중복 감염을 평가하는 혈청검사(A)가 중요하다. 항HDV 양성이면 활동성 감염 확인을 위한 HDV RNA 검사가 뒤따른다. 그러나 간성뇌증과 INR 3.8은 급성 간부전 상황을 시사하므로 검사가 끝날 때까지 응급 치료나 간이식센터 평가를 미루어서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000215 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HBsAg 양성 중증 간염의 HDV 검사 A 유지. 간성뇌증/INR3.8은 급성 간부전 위험으로 검사 결과가 응급 치료·이식 평가 지연 이유가 아님을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.who.int/publications/i/item/9789240090903
- https://www.aasld.org/sites/default/files/2022-07/AcuteLiverFailureUpdate201journalformat1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000215
