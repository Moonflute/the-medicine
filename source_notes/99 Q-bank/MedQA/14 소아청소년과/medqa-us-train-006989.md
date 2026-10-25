---
type: qbank
schema_version: 1
id: medqa-us-train-006989
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f9280bdc6002f775ea3961b86dd1131b498e5592e9909bff2cdea5c40cf1db79
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "모유 수유 평가"
  - "신생아 체중 감소"
  - "수유 자세와 젖물림"
question_type: management
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 15일 된 여아가 정기 영유아 검진을 위해 소아과에 내원했다. 어머니는 출생 이후 완전 모유 수유를 하고 있다고 말한다. 아이는 1~2시간마다 원할 때 수유하며 양쪽 유방에서 각각 10~15분씩 먹는다. 하루 한두 번은 3시간 정도 더 오래 자는데, 그때 깨워 수유해야 하는지 궁금해한다. 수유 후에도 유방이 완전히 비워지지 않는 것처럼 느껴질 때가 있다고 한다. 아이는 하루 소변 4~5회, 대변 2~3회를 본다. 생후 첫 주에는 기저귀에서 붉은 줄무늬를 가끔 보았다. 임신 39주에 질식분만으로 태어났고 출생 체중은 2787 g(6 lb 2 oz, 16백분위수)이었다. 일주일 전 체중은 2588 g(5 lb 11 oz, 8백분위수), 오늘은 2720 g(6 lb, 8백분위수)이다. 체온은 98.7°F(37.1°C), 혈압은 52/41 mmHg, 맥박은 177회/분, 호흡수는 32회/분이다. 심음은 정상이고 복부는 부드러우며 압통과 팽만이 없다.

다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 수유하는 모습을 관찰한다
B. 어머니의 식단을 조절하도록 권고한다
C. 아이를 깨워 수유하도록 권고한다
D. 모유 수유에 일반 분유를 보충한다

## 해설

생후 15일에도 출생체중에 도달하지 않았고 수유 후 유방이 비워지지 않는 느낌이 있어, 수유 장면을 직접 관찰해 자세·젖물림·삼킴과 모유 전달을 평가하는 A가 가장 적합하다. 체중 변화, 수분 상태와 배뇨·배변도 함께 확인하고 가까운 시일 내 체중을 재평가한다. 엄마 식단 변경이나 분유 보충을 일률적으로 시작하기 전에 실제 섭취 문제를 확인하되, 탈수·질환 또는 불충분 섭취가 확인되면 추가 검사와 보충 계획을 지체하지 않는다. 단순히 ‘대부분 추가검사가 필요 없다’고 안심시키는 해설은 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 수유 관찰 A 유지하되 생후15일 출생체중 미회복과 섭취평가 필요를 명시. 대부분 추가평가 불필요라는 무조건적 안심 제거.
- https://www.healthychildren.org/English/ages-stages/baby/Pages/First-Month-Physical-Appearance-and-Growth.aspx

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006989
