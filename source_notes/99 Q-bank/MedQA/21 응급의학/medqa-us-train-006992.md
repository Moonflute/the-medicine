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
  - "Hemothorax"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-qwiOu5hOu8iCDqs6jsoIggKFJpYiBGcmFjdHVyZSkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
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

관통성 흉부외상 뒤 한쪽 호흡음 감소와 타진 둔탁은 혈흉을 의심하게 한다. 보기 중 흉관 삽입(A)은 흉막강 혈액을 배액하고 출혈량을 평가하는 초기 처치로 적합하다. 동시에 출혈성 쇼크를 평가하여 소생과 외상외과 협진을 진행한다. 누락된 영상만으로 혈흉의 양을 만들어 단정할 수는 없다. 순환 불안정이나 지속적인 대량 출혈이 있으면 흉관만으로 끝내지 않고 응급 수술을 고려해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 일측 타진 둔탁과 호흡음 감소를 혈흉의 임상 단서로 사용하되 누락된 X선에서 대량 혈흉을 보았다고 단정하지 않는다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006992
