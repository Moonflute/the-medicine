---
type: qbank
schema_version: 1
id: medqa-us-train-000113
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:02a03caec940df1350b9672e1cc50e63d0c3c060c721c724ee06dc473e73edc3
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertension"
  - "atenolol"
  - "lisinopril"
  - "atorvastatin"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: diagnosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

고혈압을 앓고 있는 65세 남성이 정기 건강 검진을 위해 의사를 찾았습니다. 현재 복용 중인 약물은 아테놀롤, 리시노프릴, 아토르바스타틴입니다. 맥박은 86회/분, 호흡은 18회/분, 혈압은 145/95 mm Hg입니다. 심장 검진 결과는 다음과 같습니다. 이 신체 검진 소견의 가장 가능성 있는 원인은 무엇입니까?

## 선택지

A. 좌심실의 순응도 감소
B. 승모판의 점액종성 변성
C. 심낭의 염증
D. 대동맥근부의 확장

## 해설


고혈압과 약물 복용으로 좌심실 순응도가 감소하면 이완기 압력이 상승하고, 심음에서 S4(심방 수축기)음이 나타난다. 이는 다른 선택지보다 더 흔한 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000113
