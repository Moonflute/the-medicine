---
type: qbank
schema_version: 1
id: medqa-us-train-006746
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cde7114a0a7ed03f6dc25e3b8ad3b616307f108f9ab8c4e2e5585229047e1cf6
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "에틸렌글리콜 중독"
  - "음이온 및 삼투차"
  - "옥살산칼슘 결정"
question_type: diagnosis
related_disease_slugs: []
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
---

# MedQA US 임상문제

## 문제

36세 남성이 의식 변화로 이웃에 의해 응급실에 이송되었다. 6시간 전 이웃집 덤불 사이를 비틀거리며 욕설을 외치는 모습이 발견되었고, 이웃이 집까지 데려다주었으나 한 시간 전 구토물 웅덩이에 쓰러진 채 다시 발견했다. 사람은 알아보지만 장소와 시간은 모른다. 체온은 36.9°C(98.5°F), 맥박은 분당 82회, 호흡수는 분당 28회, 혈압은 122/80 mm Hg이다. 심폐 진찰은 정상이며 신경학적 진찰에 협조하지 않는다. 팔과 턱에 근육경련이 보인다. 혈청 Na+ 140, K+ 5.5, Cl− 101, HCO3− 9 mEq/L, BUN 28 mg/dL, 크레아티닌 2.3 mg/dL, 포도당 75 mg/dL, 칼슘 7.2 mg/dL, 삼투질농도 320 mOsm/kg이다. 계산된 혈청 삼투질농도는 294 mOsm/kg이고 동맥혈 pH는 7.25, 젖산은 3.2 mmol/L(N≤1)이다. 소변에 옥살산염 결정이 있고 케톤은 없다. 다음 중 어떤 물질의 중독일 가능성이 가장 높은가?

## 선택지

A. 메탄올
B. 이소프로필알코올
C. 에탄올
D. 에틸렌글리콜

## 해설


혈청 삼투압과 계산된 삼투압 차이(30 mOsm/kg)와 저칼슘, 옥살산칼슘 결석은 에틸렌글리콜 대사산물인 옥살산이 축적된 것을 시사한다. 에틸렌글리콜 중독은 대사성 산증과 신부전을 동반한다. 따라서 가장 가능성 높은 물질은 에틸렌글리콜이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006746
