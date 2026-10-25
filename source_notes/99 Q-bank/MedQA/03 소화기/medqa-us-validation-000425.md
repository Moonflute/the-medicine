---
type: qbank
schema_version: 1
id: medqa-us-validation-000425
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:211d89885790bb5c8301558e6e153ae215928cb3ea159a57e87cfcdf36a878b7
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간경변"
  - "식도정맥류"
  - "정맥류 출혈 예방"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_si53rj4Qg7KCV66el66WYIChFc29waGFnZWFsIFZhcmljZXMpLm1k
question_type: prevention
difficulty: complex
answer: C
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRlbm9sb2wubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
---

# MedQA US 임상문제

## 문제

47세 남성이 체중 증가와 복부 불편감으로 진료를 받으러 왔다. 한 달 동안 체중이 10파운드 증가했고 이번 주부터 가벼운 전반적 복부 불편감이 있다. 황달, 간비대, 양성 복수파동이 있으며 초음파에서 간경변, 문맥 확장, 중등도 복수가 보였다. 복수천자 후 증상이 호전되었고 상부내시경에서 출혈이 없는 작은 식도정맥류가 여러 개 보였다. 다음 관리 단계는?

## 선택지

A. 아테놀롤
B. 세프트리악손
C. 프로프라놀롤
D. 경정맥 간내 문맥전신 단락술

## 해설


정답 C. 간경변·문맥고혈압과 작은 식도정맥류가 있는 이 환자에서 비선택적 베타차단제 propranolol은 문맥압과 출혈 위험을 낮추는 선택지다. Atenolol은 선택적 β1 차단제로 같은 효과를 기대하기 어렵다. 복수가 있어도 사용할 수 있으나 저혈압이나 간신증후군/급성 신손상 등에서는 감량·중단을 검토하고 혈압·신기능을 추적한다. 출혈이 없다는 이유만으로 TIPS를 우선 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000425 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 작은 정맥류+복수 환자의 propranolol C 유지하되 혈압/신기능과 금기 평가 필요.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11090185/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000425
