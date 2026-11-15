---
type: qbank
schema_version: 1
id: medqa-us-train-009498
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:472d2e17e061fe558a03b40ed72f5b67d3d403a3cb2d8d2d1ed5d525ee0e5de0
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "esophageal variceal bleeding"
  - "식도정맥류 출혈"
  - "upper gastrointestinal bleeding"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_si53rj4Qg7KCV66el66WYIChFc29waGFnZWFsIFZhcmljZXMpLm1k
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
---

# MedQA US 임상문제

## 문제

간경변이 있는 61세 여성이 토혈로 왔다. 기도와 순환을 안정화했고 옥트레오타이드와 예방적 항생제를 시작했다. 정맥류 출혈이 의심되며 현재 혈압이 안정적이다. 다음 처치는?

## 선택지

A. INR 정상화까지 신선동결혈장만 투여
B. 옥트레오타이드에 충분히 반응하는지 이틀 관찰
C. 경구 비선택적 베타차단제를 시작하고 내시경 연기
D. 조기 상부 내시경으로 출혈원을 확인하고 지혈

## 해설


정맥류 출혈이 의심되면 소생 후 가능한 한 이른 내시경으로 출혈원을 확인하고 지혈한다. 식도정맥류가 원인이면 결찰한다. 혈관작용제와 항생제는 내시경 지혈을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009498 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 초기 소생 후 EGD D 유지; 간경변만으로 정맥류 출혈 확진·Mallory-Weiss 배제하지 않도록 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11090185/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009498
