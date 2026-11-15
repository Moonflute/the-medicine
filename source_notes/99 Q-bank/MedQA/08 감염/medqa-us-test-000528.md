---
type: qbank
schema_version: 1
id: medqa-us-test-000528
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:48f9412707b7fb8912f13accbecffa156538ffcf8f557aab2b99fff00b1a0dd8
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "말라리아"
  - "열대열 말라리아"
  - "여행자 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unkOudvOumrOyVhCAoTWFsYXJpYSkubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

서아프리카에서 귀국한 지 8일 된 환자가 발열, 오한과 혈소판 감소로 왔다. 말라리아 예방약을 복용하지 않았다. 말라리아 확인을 위해 즉시 할 검사는?

## 선택지

A. 말라리아 혈청 항체검사
B. 후층·박층 말라리아 혈액도말
C. 혈액배양만 시행
D. 다음 발열에 맞춰 혈액도말을 예약

## 해설


말라리아가 의심되면 열 주기를 기다리지 말고 즉시 후층·박층 혈액도말을 한다. 후층은 검출 민감도를 높이고, 박층은 종과 감염 적혈구 비율을 평가하는 데 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000528 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 유행지 여행후 발열·빈혈·황달·비장비대의 말라리아 확인에 thick/thin smear A 적절. 예방약 복용도 감염을 배제하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/malaria/hcp/clinical-guidance/evaluation-and-diagnosis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000528
- https://www.cdc.gov/malaria/hcp/diagnosis-testing/index.html
