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
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

71세 남자가 2시간 동안 갑자기 발생한 실어증과 우측 팔·다리 근력저하로 응급실에 왔다. 비조영 두부 CT는 정상이고 확산강조 MRI와 CT 혈관조영술에서 좌측 중대뇌동맥 허혈성 뇌졸중이 확인되었다. 혈압 175/105 mm Hg, 혈소판 95,000/mm³이다. 다음 중 정맥주사 tPA의 금기사항은?

## 선택지

A. 혈압 175/105 mm Hg
B. 71세
C. 혈소판 수 95,000/mm³
D. 6개월 전 심근경색

## 해설


혈소판 수가 95,000/mm³으로 100,000/mm³ 이하이면 출혈 위험이 증가하여 정맥주사 tPA 투여가 금기된다. 혈압 175/105 mm Hg는 185/110 mm Hg 이하이므로 tPA 투여 가능하고, 연령·과거 MI(6개월 전)도 금기에 해당하지 않는다. 따라서 혈소판 감소가 tPA 금기사항이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008282
