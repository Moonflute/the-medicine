---
type: qbank
schema_version: 1
id: medqa-us-train-007696
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6ffd38beacbdc57ac342c27ef4acbe984aae469b55da4ef79d3b108e514fd090
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "macrocytic anemia"
  - "folate deficiency"
  - "megaloblastic anemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

82세 여성이 이웃이 복도에서 넘어지는 것을 본 후 응급실에 왔다. 혼자 살며 최근 허약감을 느꼈다고 한다. 식사는 포장식품과 통조림 고기 위주이다. 체온 97.6°F(36.4°C), 혈압 133/83 mmHg, 맥박 95회/분, 호흡수 16회/분, 실내 공기 산소포화도 98%이다. 허약하고 쇠약하며 창백한 노인으로 보인다. 검사에서 헤모글로빈 9.1 g/dL, 헤마토크릿 30%, 백혈구 6,700/mm³(감별 정상), 혈소판 199,500/mm³, MCV 110 fL이다. 다음 중 가장 가능성 높은 결핍은?

## 선택지

A. 엽산
B. 티아민
C. 비타민 B12
D. 아연

## 해설


신선한 엽산 공급 식품이 부족한 식단과 거대적혈구성 빈혈은 선택지 중 folate A 부족을 의심하게 한다. 하지만 식단과 MCV만으로 확진할 수 없고 B12 부족·MDS·약물 등도 확인한다. Folate만 먼저 보충하여 동반 B12 신경병증을 가리는 일을 피하며 낙상의 원인도 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007696 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 육류 위주 식단·거대적혈구의 folate A 추론 유지; macrocytosis만으로 가장 흔하다고 확진하는 설명 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007696
