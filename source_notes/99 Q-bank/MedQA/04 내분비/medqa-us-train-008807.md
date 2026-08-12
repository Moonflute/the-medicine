---
type: qbank
schema_version: 1
id: medqa-us-train-008807
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b004f1422f3fc0126551236d27dc6287325ec0642f77c15a81abd2176ff621e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "loop diuretic adverse effect"
  - "hypokalemic metabolic alkalosis"
  - "ventricular tachycardia"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyLpCDruYjrp6UgKFZlbnRyaWN1bGFyIFRhY2h5Y2FyZGlhKS5tZA
  - MDEg7Iic7ZmY6riwL-uwnOyekeyEsSDsg4Hsi6zsi6TshLEg67mI66elIChQYXJveHlzbWFsIFN1cHJhdmVudHJpY3VsYXIgVGFjaHljYXJkaWEgKFBTVlQpLm1k
question_type: mechanism
difficulty: complex
answer: B
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

54세 여성이 복부 팽만과 경미한 광범위 복부 불편감으로 내원했다. 오심, 구토, 발열, 오한은 없다. 2년 전 알코올성 간경변으로 진단받았다. 복부가 돌출되고 팽만되어 타진 시 둔탁하며 이동성 액체파가 양성이다. 초음파에서 경도에서 중등도의 복수가 보인다. 적절한 치료를 시작한 지 4일 후 집에서 두근거림과 흉통이 발생했다. 응급실에서 체온 37.3°C(99.1°F), 맥박 182회/분, 호흡수 18회/분, 혈압 82/50mmHg이며 심전도에서 심실빈맥이 보인다. 혈청 Na⁺ 131mEq/L, K⁺ 2.9mEq/L, Cl⁻ 92mEq/L, HCO₃⁻ 34mEq/L, BUN 42mg/dL, 크레아티닌 4.8mg/dL, 포도당 90mg/dL, Ca²⁺ 8.1mg/dL, Mg²⁺ 1.5mg/dL, 인 4.7mg/dL이다. 동맥혈가스 pH 7.52, pCO₂ 45mmHg, pO₂ 90.2mmHg이다. 정상 동율동으로 심율동전환에 성공했다. 다음 중 환자 상태를 일으킨 치료는 무엇인가?

## 선택지

A. 히드로클로로티아지드
B. 푸로세미드
C. 리시노프릴
D. 만니톨

## 해설


환자는 루프 이뇨제(푸로세미드) 사용 후 저칼륨성 대사성 알칼리증을 보이며, 이는 심실성 빈맥을 유발할 수 있다. 다른 약물들은 이러한 전해질 이상을 일으키지 않는다. 따라서 푸로세미드가 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008807
