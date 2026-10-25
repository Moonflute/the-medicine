---
type: qbank
schema_version: 1
id: medqa-us-train-008282
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3437e5f5893dde19104065efb7de255ba0c6c2a506a4159658a8759fd5d732ab
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "ischemic stroke"
  - "intravenous alteplase contraindication"
  - "thrombocytopenia"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
difficulty: complex
answer: C
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

71세 남자가 2시간 동안 갑자기 발생한 실어증과 우측 팔·다리 근력저하로 응급실에 왔다. 비조영 두부 CT는 정상이고 확산강조 MRI와 CT 혈관조영술에서 좌측 중대뇌동맥 허혈성 뇌졸중이 확인되었다. 간헐적으로 경구 프레드니손으로 치료하는 면역성 혈소판감소자반증 병력이 있다. 혈압 175/105 mm Hg, 혈소판 95,000/mm³이다. 다음 중 정맥주사 tPA의 금기사항은?

## 선택지

A. 혈압 175/105 mm Hg
B. 71세
C. 혈소판 수 95,000/mm³
D. 6개월 전 심근경색

## 해설

혈소판 95,000/mm³는 100,000/mm³ 미만이므로 정맥 혈전용해 치료의 출혈 위험과 제외 기준에 해당하여 C가 정답이다. 정확한 기준은 100,000 이하가 아니라 미만이다. 제시된 혈압 175/105 mmHg는 치료 전 혈압 한계 185/110 mmHg보다 낮으며, 71세라는 나이 자체와 6개월 전 심근경색만으로 같은 제외 기준에 해당하지는 않는다. 실제 재관류 치료에서는 다른 금기와 혈관 내 치료 가능성도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. tPA 제외 혈소판 기준을 100,000 이하에서 미만으로 교정한다. 원문의 ITP 병력을 최소 복원하며 C는 유지한다.
- 공식/학회 근거: https://www.ahajournals.org/doi/10.1161/STR.0000000000000513

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008282
