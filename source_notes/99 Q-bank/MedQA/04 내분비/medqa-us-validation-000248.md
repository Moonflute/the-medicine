---
type: qbank
schema_version: 1
id: medqa-us-validation-000248
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8c09e8421bfa0711e0b7656a8f7fa6a3905158d05750dc1ad295428e7a49d492
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상선기능저하증"
  - "갑상선기능저하성 근병증"
  - "크레아틴키나아제 상승"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRlbm9sb2wubWQ
---

# MedQA US 임상문제

## 문제

43세 여성이 계단을 오르기 어렵고 두 허벅지가 아프다. CK가 높고 변비·추위불내성도 있으며 깊은힘줄반사의 이완이 느리다. 약물이나 과격한 운동으로 설명되지 않는다. 근병증의 교정 가능한 원인을 찾을 검사는?

## 선택지

A. TSH와 유리 T4
B. 아세틸콜린 수용체 항체
C. 항미토콘드리아 항체
D. 혈청 알도스테론

## 해설


근위부 근력 약화와 CK 상승이 갑상선기능저하에서 나타날 수 있다. 추위불내성과 느린 반사 이완은 원인 단서이며 갑상선기능검사로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000248 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: hypothyroid myopathy를 저칼륨성 근병증으로 설명한 오연결 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000248
