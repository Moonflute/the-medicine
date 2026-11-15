---
type: qbank
schema_version: 1
id: medqa-us-test-000611
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:40bcd0a457e212ce5e50333b39b6af2e1f414e621a363e0d2196d4e2594dec75
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "Rh 음성 임신"
  - "Rh 동종면역"
  - "항-D 면역글로불린"
  - "Rh alloimmunization"
related_disease_slugs: []
question_type: prevention
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 27주 산모는 RhD 음성이고 항-D 항체가 없다. 태아 RhD는 아직 모른다. 정기 감작 예방 계획은?

## 선택지

A. 항-D 항체가 검출될 때까지 예방하지 않는다
B. 28주에 항-D 면역글로불린을 한 번 주면 출산 후에는 항상 필요 없다
C. 출생아 RhD가 음성이면 산전과 산후 모두 예방한다
D. 28주 무렵 예방하고, 출생아가 RhD 양성이면 산후 72시간 이내 추가 투여한다

## 해설

RhD 음성 비감작 산모는 28주 무렵 정기 예방을 받는다. 새로 태어난 아기가 RhD 양성이면 보통 72시간 이내 추가 투여하고 태아모체 출혈량에 따라 용량을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 항체 양성일 때 RhIG를 준다는 오류 및 28주 예방 투여 누락 수정.
- https://www.acog.org/womens-health/faqs/the-rh-factor-how-it-can-affect-your-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000611
- https://sogc.org/common/Uploaded%20files/ACSC/ACSC2024/gui448CPG2404E.pdf
