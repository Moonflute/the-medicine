---
type: qbank
schema_version: 1
id: medqa-us-train-008172
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9aeb5e4554fef18a8d725d5e539920a76f31cd8a5af53550fdbb4daee421a3ad
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "acute ischemic stroke"
  - "intracranial hemorrhage exclusion"
  - "noncontrast head CT"
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
---

# MedQA US 임상문제

## 문제

65세 남자가 갑작스러운 우측 다리 근력저하로 응급실에 왔다. 자동차 정비 중 급성으로 발생해 넘어졌고 2시간 전까지 신경학적으로 정상이었다. 고혈압과 제2형 당뇨병이 있다. 체온 98.8°F(37.1°C), 혈압 177/108 mmHg, 맥박 90회/분, 호흡수 15회/분, 산소포화도 99%이다. 신경학적 검사에서 말하기 어려워하고 우측 상·하지에 심한 근력저하가 있다. 가장 적절한 다음 처치는?

## 선택지

A. 아스피린
B. CT 혈관조영술
C. 비조영 두부 CT
D. 혈전용해제

## 해설


급성 신경학적 결손이 나타난 후 2시간 이내에 CT 혈관조영술보다 먼저 비조영 두부 CT를 시행해 출혈 여부를 배제해야 한다. 이는 급성 허혈성 뇌졸중 치료 결정에 필수적이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008172
