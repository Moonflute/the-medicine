---
type: qbank
schema_version: 1
id: medqa-us-train-000319
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3ce0fda514ae9eb836d11eb7be0853c0f5eb6623e57899d3d951bf3fb3e1ceaa
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Hereditary fructose intolerance"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

7개월 된 남아를 행동 변화로 인해 소아과에 데려왔습니다. 환아는 지금까지 모유 수유를 해왔으며 발달 이정표를 충족하고 있었습니다. 체중은 90백분위수, 키는 89백분위수입니다. 지난주부터 환아는 기면 상태를 보이고 구토를 하며 식사를 거부하고 있습니다. 부모는 오늘 아침 환아가 반응이 없고 사지를 비정상적으로 움직이는 발작을 보인 후 졸음이 이어지는 시기가 있었다고 말합니다. 환아의 과거력상 어깨 난산(shoulder dystocia)과 임신 중 제대로 관리되지 않은 산모의 당뇨병이 있습니다. 체온은 99.5°F(37.5°C), 혈압은 60/30 mmHg, 맥박은 120회/분, 호흡수는 17회/분, 실내 공기에서의 산소 포화도는 98%입니다. 신체 검진에서 숨에서 달콤한 냄새가 나는 기면 상태의 영아를 확인했습니다. 이 환아에게 가장 결핍되었을 가능성이 높은 것은 무엇입니까?

## 선택지

A. Aldolase B
B. Galactose-1-phosphate uridyltransferase
C. Glucose
D. Ornithine transcarbamolase

## 해설


신생아에서 저혈당, 구토, 발작, 달콤한 냄새는 알도올레이스 B 결핍에 의한 선천성 과당 불내증을 시사한다; 따라서 알도올레이스 B가 가장 결핍된 효소이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000319
