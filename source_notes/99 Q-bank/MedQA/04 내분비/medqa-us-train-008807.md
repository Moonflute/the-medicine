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
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
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


정답 B. 복수 치료 후 저칼륨·저마그네슘혈증과 대사성 알칼리증, 급성 신기능 악화는 과도한 이뇨에 부합하며 선택지 중 furosemide가 임상 맥락에 가장 적합하다. 전해질 소실은 심실성 부정맥에 기여할 수 있다. Hydrochlorothiazide도 저칼륨성 알칼리증을 유발할 수 있으므로 다른 모든 약물에서 이런 이상이 불가능하다고 설명하지 않는다. 실제 처방과 체액 상태를 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008807 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 복수 치료 loop 이뇨제 B의 K/Mg 소실 기전 유지; thiazide도 저K 알칼리증을 만들 수 없다는 잘못된 배제 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=341e29d9-a6f1-4c77-ae44-9b2c423ea6b4

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008807
