---
type: qbank
schema_version: 1
id: medqa-us-test-000935
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:71c9c7f1534088594a52a69f8580e77377c5e55250f79b0f282d190c743b2c24
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "위선암"
  - "호스피스"
  - "완화의료"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITslZQgKEdhc3RyaWMgQ2FuY2VyKS5tZA
question_type: ethics
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

76세 남성이 6개월간 소화불량과 체중 감소로 진료를 받으러 왔다. 중증 질환 병력이나 복용약은 없었다. 내시경과 생검에서 위선암이 확인되었다. 추가 검사와 병기 설정 전에 결과를 설명하자 환자는 화학요법, 방사선치료, 수술 등 생명 연장 치료를 모두 거부하고 의료비 부담이 크지 않은 적절한 완화의료를 원했다. 호스피스 자격에 대해 가장 적절한 다음 단계는?

## 선택지

A. 생명 연장 치료를 시험한다
B. 치료하지 않았을 때의 기대수명을 판단한다
C. 전이 여부를 확인한다
D. 이미 호스피스 자격이 있으므로 추가 단계가 필요 없다

## 해설


미국 Medicare hospice 자격은 질환이 통상 경과를 따를 때 예상 생존이 6개월 이하라는 의사 인증 등이 필요해 B가 적절하다. 치료 거부나 위암 진단만으로 말기·자격이 자동 확정되지 않는다. 병기·상태와 환자 목표에 맞춰 예후를 평가하며 완화의료는 별도로 제공할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000935 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 미국 hospice 자격 예후평가 B 유지. 병기 미정 환자를 이미 말기로 확정한 문구 교정 및 치료거부만으로 자격 자동 획득 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cms.gov/medicare/payment/fee-for-service-providers/hospice

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000935
