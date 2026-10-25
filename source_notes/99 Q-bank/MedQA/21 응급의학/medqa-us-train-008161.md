---
type: qbank
schema_version: 1
id: medqa-us-train-008161
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:750e2daf271fc83369ea4423f037627889d705d90793cd2b9aa244bd7f540169
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "lactic acidosis"
  - "hypotension"
  - "Ringer lactate"
question_type: management
related_disease_slugs:
  - MDUg7Iug7J6lL-yCsOymnSAoQWNpZG9zaXMpLm1k
difficulty: complex
answer: D
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

정맥주사 약물 남용 병력이 있는 55세 남자가 의식변화로 응급실에 왔다. 경찰이 공원에서 의식 없이 발견했다. 체온 100.0°F(37.8°C), 혈압 87/48 mmHg, 맥박 150회/분, 호흡수 17회/분, 산소포화도 98%이다. 팔꿈치오목에 여러 흉터와 농양이 있다. 혈청 Na⁺ 139, Cl⁻ 105, K⁺ 4.3, HCO₃⁻ 19 mEq/L, BUN 20 mg/dL, 포도당 95 mg/dL, 크레아티닌 1.5 mg/dL이다. 혈압과 산-염기 상태에 가장 적절한 치료는?

## 선택지

A. 5% 포도당 생리식염수
B. 고장성 식염수
C. 생리식염수
D. 젖산 링거액

## 해설

저혈압과 빈맥이 있어 즉각적인 체액 소생과 원인 평가가 필요하며, 감염원일 수 있는 농양도 확인해야 한다. 보기 D의 젖산 링거액은 균형 결정질로, 다량의 0.9% 생리식염수에 비해 고염소성 산증 부담을 줄일 수 있다. 포함된 젖산염은 대사되어 완충 효과에 기여하는 것이지 젖산산증 환자에게 젖산을 보충하려는 목적이 아니다. 낮은 HCO3와 쇼크만으로 혈중 젖산이 실제 상승했다고 확정할 수 없으며, 젖산 측정과 관류 재평가 및 필요한 감염 치료를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 균형 결정질 D의 근거를 젖산 보충 때문이라고 한 오류를 교정한다. HCO3 감소만으로 측정하지 않은 젖산 증가를 확정하지 않는다.
- 공식/학회 근거: https://sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008161
