---
type: qbank
schema_version: 1
id: medqa-us-train-000869
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c85da72a2977da48b7c151f118a211e284ebf9e337537350b5813ca4026e8d78
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "shortness of breath"
  - "acute myocardial infarction"
  - "hyperlipidemia"
  - "left ventricular ejection fraction"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: management
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

78세 남성이 안정 시 및 운동 시 호흡곤란을 주소로 내원하였다. 환자는 또한 누웠을 때 숨쉬기 힘들다고 호소한다. 또한 수면 중 깜짝 놀라 깨며 질식할 것 같은 느낌이 든다고 걱정하고 있다. 이러한 증상은 지난 몇 주간 지속되었으며 점점 악화되고 있다. 발열은 없으며 알려진 감염원과의 접촉력도 없다. 6개월 전 급성 심근경색을 앓았으나 회복되었고 최근까지 건강하게 지냈다. 고지혈증 병력이 있어 아토르바스타틴(atorvastatin)을 복용 중이다. 체온은 37.0°C, 맥박은 85회/분, 호흡수는 14회/분, 혈압은 110/75 mm Hg이다. 신체 검진상 심박동은 규칙적이다. 양측 폐에서 수포음(crackles)이 들린다. 심초음파 검사 결과 좌심실 박출률(left ventricular ejection fraction)은 33%이다. 어떤 약물을 시작해야 하는가?

## 선택지

A. 캡토프릴(Captopril)
B. 베라파밀(Verapamil)
C. 레보플록사신(Levofloxacin)
D. 니트로글리세린(Nitroglycerin)

## 해설


좌심실 EF 33%와 호흡곤란, 발작성 저산소증은 심부전 증상이며, ACE 억제제인 캡토프릴이 사구체 혈류와 후부하를 감소시켜 증상을 개선한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000869
