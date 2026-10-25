---
type: qbank
schema_version: 1
id: medqa-us-validation-000662
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:cd911be2187c37882567bd38af001e0aa4900caa9e786730b9e3ada8c0cc9c63
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "Rh 부적합"
  - "태아적혈구모성면역"
  - "RhoGam"
  - "Rh alloimmunization"
question_type: prevention
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 26주인 27세 여성(임신 1회)이 B형 Rh 음성이고 파트너는 A형 Rh 양성이다. 항-D 선별검사를 위해 혈액을 채취했다. RhoGam 투여에 관한 가장 적절한 다음 단계는?

## 선택지

A. 항-D 선별검사가 음성이면 임신 28주에 투여
B. 항-D 선별검사가 양성이면 임신 28주에 투여
C. 항-D 선별검사가 음성이면 출생 후 72시간 이내 투여
D. 검사 결과와 관계없이 RhoGam은 필요 없다

## 해설

비감작 RhD 음성 산모는 통상28주에 RhIG 예방(A)을 받는다. 이미 면역성 항-D가 형성된 경우 RhIG 예방으로 감작을 되돌릴 수 없고 태아빈혈 위험을 따로 관리한다. 출생 후 신생아 RhD 상태 및 감작 사건에 따른 추가 예방도 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 항-D 감작이 있으면 단지 투여 시기를 바꾸는 것이 아님.
- https://www.acog.org/womens-health/faqs/the-rh-factor-how-it-can-affect-your-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000662
