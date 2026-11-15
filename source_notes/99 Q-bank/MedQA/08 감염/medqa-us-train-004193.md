---
type: qbank
schema_version: 1
id: medqa-us-train-004193
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3765c9e53e29a9aed3c53547e4b2e6f2535573da5b21866da542977565b14c1a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "C형 간염"
  - "간경변"
  - "혈소판감소증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: investigation
difficulty: complex
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

56세 환자가 올해 국가건강검진에서 C형간염 항체 양성 통보를 받았다. 간수치는 정상이고 과거 C형간염 치료력은 없다. 현재 감염 여부를 확인할 다음 검사는?

## 선택지

A. 간 탄성도 검사
B. 혈청 HCV RNA 검사
C. C형간염 항체검사만 반복
D. HCV 유전자형 검사부터 시행

## 해설


국가검진에서 항-HCV가 검출돼도 현재 감염이 확정된 것은 아니다. 간수치에 관계없이 HCV RNA로 현재 감염을 확인한 뒤 치료와 간섬유화 평가를 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004193 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HCV antibody B는 선별이며 현재 감염 확진은 RNA가 필요함을 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-c/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004193
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12835810/
