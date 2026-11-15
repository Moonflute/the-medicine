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

47세 남성이 간경변으로 진료 중이다. 내시경에서 적색 징후가 있는 큰 식도정맥류가 보이지만 출혈 병력은 없다. 혈압은 115/72 mmHg이고 신기능은 안정적이다. 금기가 없다면 첫 정맥류 출혈을 예방할 약물은?

## 선택지

A. 아테놀롤
B. 세프트리악손
C. 프로프라놀롤
D. 옥트레오타이드 정맥 주입

## 해설


큰 식도정맥류나 적색 징후가 있으면 첫 출혈 위험이 높다. 프로프라놀롤 같은 비선택적 베타차단제가 문맥압을 낮춘다. 저혈압이나 급성 신손상이 생기면 조정하며 사용할 수 없는 경우 내시경 결찰을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000425 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 작은 정맥류+복수 환자의 propranolol C 유지하되 혈압/신기능과 금기 평가 필요.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11090185/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000425
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7160350/
