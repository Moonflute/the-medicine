---
type: qbank
schema_version: 1
id: medqa-us-train-009914
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cdf89af4b47e641bd6ec14c7cacb061158550fd694141816fe5e71e48c218683
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "포진상 피부염"
  - "셀리악병"
  - "답손"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성이 5일 동안 양쪽 어깨와 팔꿈치에 생긴 피부 발진으로 내원했다. 심한 가려움과 화끈거림을 호소한다. 중대한 질환은 없지만 지난 3개월 동안 간헐적으로 설사와 복부 경련이 반복되었다. 변은 기름지고 악취가 난다고 한다. 흡연과 음주는 하지 않으며 불법 약물과 복용 약물도 없다. 키 180cm, 체중 60kg, BMI 18.5kg/m²이다. 체온 37°C, 맥박 분당 70회, 혈압 110/70 mmHg이다. 양쪽 어깨와 무릎에 대칭적인 발진이 있고 왼쪽 어깨 사진이 제시되어 있다. 병변을 문질러도 표피 상층이 하층에서 분리되지 않는다. 혈색소 10.2 g/dL, 평균적혈구용적 63.2 μm³, 혈소판 450,000/mm³이다. 이 피부 상태에 가장 적절한 약물치료는?

## 선택지

A. 경구 답손
B. 전신 프레드니손
C. 경구 아시클로버
D. 국소 퍼메트린

## 해설

정답은 A, 경구 답손이다. 지방변·복부경련·소구성빈혈 등 글루텐민감성 장질환을 시사하는 소견에 대칭적인 신전부의 심한 가려움과 작열감이 동반되어 포진피부염을 의심한다. 답손은 피부 증상을 빠르게 조절하지만 기저 장질환의 치료는 엄격한 글루텐 제한식이다. 사진은 현재 제공되지 않아 보이지 않는 수포의 형태를 추정하지 않았으며, 본문의 장질환·분포와 제시된 약제들로 원정답을 판단하였다. 확진에는 적절한 피부검사 등을 고려하고, 답손 사용 전후에는 빈혈·용혈과 메트헤모글로빈혈증 위험을 포함한 안전성 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 임신/AF 해설 오연결. 흡수장애·소구성빈혈 및 대칭 신전부 소양성 발진은 포진피부염을 지지하여 원정답 A 유지. 그림은 없지만 본문과 치료선지로 판단 가능.
- 공식/학회 근거: https://www.niddk.nih.gov/health-information/professionals/clinical-tools-patient-management/digestive-diseases/dermatitis-herpetiformis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009914
