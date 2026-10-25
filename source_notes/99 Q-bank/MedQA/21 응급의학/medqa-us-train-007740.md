---
type: qbank
schema_version: 1
id: medqa-us-train-007740
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f21adf056e14e314ab4b6225d46ea6d32c7842b428548987767558f25bff2cae
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "hemorrhagic shock"
  - "emergency transfusion"
  - "Jehovah's Witness"
question_type: ethics
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성이 고속 교통사고 20분 후 응급실에 왔다. 도착 당시 의식이 없었다. 맥박 140회/분, 호흡수 12회/분으로 얕고 혈압 76/55 mm Hg이다. 0.9% 생리식염수 주입을 시작했다. 초음파를 이용한 집중평가에서 복부 좌상부에 혈액이 보인다. 헤모글로빈 7.6 g/dL, 헤마토크릿 22%이다. 외과의는 응급 탐색적 개복술을 위해 수술실로 옮기기로 했고 수술 전에 농축적혈구 수혈을 처방했다. 그러나 환자의 친구가 환자가 여호와의 증인이므로 수혈을 보류해 달라고 요청한다. 환자에게 사전의료지시서가 없고 수혈 거부를 나타내는 기록도 없다. 남편과 자녀에게는 연락할 수 없다. 다음 중 관리에서 가장 적절한 다음 단계는?

## 선택지

A. 히드록시에틸 전분 투여
B. 농축적혈구 수혈
C. 병원 윤리위원회 자문
D. 수혈 없이 수술 진행

## 해설

환자는 심한 출혈성 쇼크와 복강 내 출혈로 즉각적인 수술·소생이 필요한 상태이다. 본인의 유효한 수혈 거부가 확인되지 않았고 대리인과 연락되지 않는 출제 조건에서는 생명을 구하는 응급 수혈(B)을 시행할 수 있다. 다만 문서가 없다는 이유만으로 거부 의사가 전혀 없다고 단정해서는 안 되며, 친구가 전한 정보의 구체성 및 신뢰성과 환자의 사전 의사를 지체 없이 확인할 수 있는 범위에서 평가한다. 확인을 위한 시도가 응급 출혈 통제를 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 확인된 유효한 수혈 거부 없이 생명 위급한 무의식 성인을 치료하는 B를 유지하되 문서가 없으면 친구의 정보를 무조건 무시해도 된다는 해석을 피한다.
- 공식/학회 근거: https://www.facs.org/about-acs/statements/recommendations-for-surgeons-caring-for-patients-who-are-jehovah-s-witnesses/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007740
