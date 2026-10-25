---
type: qbank
schema_version: 1
id: medqa-us-train-008860
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d2c700fe4bd8157460e3d3dbccdbcdf4193c12461bee3af8a20904a72c910ac7
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "HSV encephalitis"
  - "herpes simplex virus"
  - "acyclovir"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64uo7Iic7Y-s7KeE67CU7J2065-s7IqkIOqwkOyXvCAoSGVycGVzIFNpbXBsZXggVmlydXMgSW5mZWN0aW9uKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL1JpdHV4aW1hYi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 혼란스러운 상태로 친구들에 의해 응급실에 이송되었다. 5일 전까지는 괜찮았으나 발열과 독감 유사 증상이 시작되었고 미열과 두통이 있었다. 지난 2일 동안 점점 과민하고 혼란스러워졌으며 사소한 일에도 화를 냈다. 과거력은 특이사항이 없다. 대학생이고 신체활동이 많다. 가끔 담배를 피우고 사회적으로 음주하며 여자친구와 성관계를 하지만 콘돔은 일관되게 사용하지 않는다. 혈압 120/80mmHg, 심박수 108회/분, 호흡수 10회/분, 체온 37.4°C(99.4°F)이다. 혼란스럽고 방향감각이 없다. 동공은 3mm이며 빛에 느리게 반응하고 사지는 자발적으로 움직인다. 목은 뻣뻣하지 않다. 뇌 MRI가 제시되어 있다. 뇌척수액 개방압은 16cmH₂O, 백혈구 112/mm³(림프구 85%), 단백질 42mg/dL, 포도당 58mg/dL이다. 다음 중 가장 적절한 치료는 무엇인가?

## 선택지

A. 아시클로버
B. 고용량 스테로이드
C. 정맥 면역글로불린
D. 리툭시맙

## 해설

발열·두통 후 급성 행동변화/혼돈과 림프구성 뇌척수액은 감염성 뇌염을 의심하게 한다. HSV 뇌염이 배제되지 않은 환자에서는 PCR 등 원인 검사를 진행하면서 정맥 acyclovir(A)를 지체 없이 시작한다. 이 뇌척수액 양상이 HSV에만 특이한 것은 아니며, 누락된 MRI에서 측두엽 병변을 확인했다고 단정할 수 없다. 면역치료만 먼저 시행할 근거는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 누락 MRI 소견을 본 것으로 단정하지 않고, 임상적 뇌염에서 경험적 acyclovir A를 선택하는 근거로 교정.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/encephalitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008860
