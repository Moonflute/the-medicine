---
type: qbank
schema_version: 1
id: medqa-us-train-000315
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:87a09836cdf2f38bba349e0e153f3cb3d5e9167ce3b60201b63bbfb8e8155b63
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertension"
  - "atrial fibrillation"
  - "stable angina pectoris"
  - "dehydration"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yViOyglSDtmJHsi6zspp0gKFN0YWJsZSBBbmdpbmEpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug7IOd7JWEIOydvOyLnOyXtCAoTmVvbmF0YWwgVHJhbnNpZW50IEZldmVyKS5tZA
question_type: diagnosis
difficulty: standard
answer: B
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

82세 여성이 요양원에서 의식을 잃은 후 응급실로 이송되었다. 환자는 몇 시간 동안 TV를 시청하다가 화장실을 가려고 일어나는 도중 쓰러졌으며 수 초간 의식을 잃었다. 쓰러지기 직전에 어지러움을 느꼈다. 두통이나 다른 통증은 없다. 고혈압, 간헐적 심방세동, 안정형 협심증의 병력이 있다. 현재 복용 중인 약물은 와파린(warfarin), 아스피린(aspirin), 하이드로클로로티아자이드(hydrochlorothiazide), 필요 시 사용하는 니트로글리세린(nitroglycerin) 스프레이이다. 체온은 36.7°C, 맥박은 분당 100회로 규칙적이며, 혈압은 102/56 mm Hg이다. 신체 검진상 혀가 건조하다. 손등의 피부를 집었다 놓았을 때 2초 후에 원래대로 돌아온다. 심폐 검진상 이상 소견은 없다. 이 환자에 대한 추가 평가에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. 심전도상 P파 소실
B. 혈중 요소질소(BUN) 농도 상승
C. 머리 CT 검사상 저밀도 병변
D. 혈청 크레아틴 키나아제(creatine kinase) 농도 상승

## 해설


환자는 저혈압과 건조한 점막, 피부 탄력 저하가 탈수 소견이며, 탈수 시 혈중 BUN이 상승하는 것이 가장 흔한 실험실 변화이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000315
