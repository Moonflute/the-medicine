---
type: qbank
schema_version: 1
id: medqa-us-train-000936
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fe876efb9988df8b2c65cb7cf5c7b5301086eaaf8abd73fc3c5fa50fdafb1078
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV"
  - "tetanus"
  - "diphtheria"
  - "hepatitis B"
  - "chickenpox"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2MjOyDge2SjSAoVGV0YW51cykubWQ
  - MTIg7IKw6rO8L-yImOuRkCAoVmFyaWNlbGxhKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: prevention
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

항레트로바이러스 치료로 바이러스량이 억제된 HIV 성인의 CD4가 450/μL로 유지된다. 홍역·볼거리·풍진 면역 증거가 없고 다른 접종 금기도 없다. MMR 접종 계획으로 적절한 것은?

## 선택지

A. MMR은 HIV 환자에게 항상 금기다
B. MMR을 1회 접종하면 기초접종을 마친다
C. CD4가 200/μL 미만으로 떨어지면 접종한다
D. MMR을 최소 4주 간격으로 2회 접종한다

## 해설


HIV가 조절되고 CD4가 200/μL 이상이며 면역이 없는 성인에게는 MMR 2회 접종을 권고한다. 진행된 면역저하나 조절되지 않는 HIV에서는 생백신 투여를 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000936 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HIV에서 MMR의 면역·ART 조건과 태국 여행만으로 황열백신이 필요하지 않음을 명확화.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/sites/default/files/guidelines/documents/adult-adolescent-oi/immunizations-adult-adolescent-oi.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000936
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/immunizations
