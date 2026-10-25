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

36세 여성이 4개월간 피로, 주간 졸림, 전신 가려움으로 진료를 받으러 왔다. 알칼리성 인산분해효소와 직접 빌리루빈, 콜레스테롤이 증가하고 항미토콘드리아 항체와 ANA가 양성이며 복부 초음파에서 담낭 슬러지가 보였다. 가장 적절한 다음 처치는?

## 선택지

A. 간 생검
B. 아토르바스타틴
C. 콜레스티라민
D. 우르소데옥시콜산

## 해설


정답 D. 담즙정체성 검사와 AMA 양성은 PBC를 지지하며 UDCA가 일차 질병조절 치료다. 전형적인 항체와 검사 양상이면 간생검이 반드시 필요한 것은 아니다. UDCA를 소양증에 대한 직접 치료로 설명하지 않는다. 소양증은 별도의 단계적 증상치료를 검토하며 단순 담낭 슬러지가 이 자가면역 담관병의 진단을 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000041 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PBC의 UDCA D 질병조절과 소양증 치료를 구분. AMA+담즙정체에서 간생검 필수라는 오류 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.aasld.org/aasld-and-aga-offer-first-medication-focused-guideline-treating-pbc

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000041
