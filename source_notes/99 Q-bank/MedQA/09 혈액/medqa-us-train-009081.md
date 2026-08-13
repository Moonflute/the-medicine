---
type: qbank
schema_version: 1
id: medqa-us-train-009081
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7711eb5e089b320161ced95bb4099e7934380f1ae1995ac10bd821bd2b59f0c0
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "transfusion-associated circulatory overload"
  - "pulmonary edema"
  - "blood transfusion complication"
related_disease_slugs:
  - MTEg7Jm46rO8L-yImO2YiCDqtIDroKgg7Iic7ZmY65-JIOqzvOuLpCAoVHJhbnNmdXNpb24tQXNzb2NpYXRlZCBDaXJjdWxhdG9yeSBPdmVybG9hZCkubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

45세 여성이 3일 동안 지속된 심한 월경과다로 응급실에 내원했다. 어지럼도 있고 고혈압으로 리시노프릴을 복용한다. 창백해 보이며 체온 37.5˚C(99.5˚F), 맥박 110회/분, 혈압 100/60mmHg이다. 골반검사에서 질원개에 짙은 적갈색 혈액과 혈전이 있지만 활동성 출혈원은 없다. 혈색소 5.9g/dL로 결정질 수액과 교차 적합 농축 적혈구 4단위를 수혈했다. 2시간 후 호흡곤란과 둔한 흉부 압박감이 생겼고 혈압 170/90mmHg, 산소포화도 92%이다. S3 심음과 양측 하폐야 수포음이 있으며 흉부 X선에서 양측 뿌연 음영이 보이고 심전도는 정상이다. 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 제1형 과민반응
B. 급성 폐색전증
C. 급성 신손상
D. 수혈 관련 순환 과부하

## 해설


수혈 후 급성 호흡곤란, 고혈압, 폐음 및 흉부 X선에서 양측 폐음영 증가는 순환 과부하에 의한 폐부종을 시사한다. 이는 수혈 관련 순환 과부하(TACO)의 전형적인 임상양상이다. 따라서 수혈 관련 순환 과부하가 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009081
