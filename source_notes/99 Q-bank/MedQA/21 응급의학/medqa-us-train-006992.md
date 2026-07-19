---
type: qbank
schema_version: 1
id: medqa-us-train-006992
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6731f806914361f47063a802a2abb7f78d660429fe777a0d3aa12cb5ea3cf797
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "hemothorax"
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

호흡 곤란을 겪는 45세 남성이 응급실에 내원하였다. 그는 왼쪽 가슴에 자창(stab)을 입고 가장 가까운 병원으로 이송되었다. 환자는 창백해 보이며 중등도의 호흡 곤란을 겪고 있다. 산소 포화도는 94%이다. 왼쪽 폐는 타진 시 둔탁음(dullness)이 들린다. 흉부 X선 촬영을 시행하였고 진단 가능성이 높은 소견이 확인되었다. 혈압은 95/57 mm Hg, 호흡수는 분당 22회, 맥박은 분당 87회, 체온은 36.7°C이다. 흉부 X선 사진이 제시되었다. 이 환자의 치료를 위한 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 흉관 삽입(Chest tube insertion)
B. 동맥혈 가스 분석(ABG)
C. 개흉술(Thoracotomy)
D. CT 촬영

## 해설


흉부 X선에서 대량 혈액이 흉강에 고여 있는 소견이 보이면 혈흉(hemothorax)이다. 즉시 흉관 삽입으로 혈액을 배액해야 한다. 따라서 정답은 A이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006992
