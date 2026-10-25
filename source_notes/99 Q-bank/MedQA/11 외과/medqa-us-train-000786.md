---
type: qbank
schema_version: 1
id: medqa-us-train-000786
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:485b2564164a833daf3cb55b998bcb7b47f17547021ed4243d3abb7bc72cd7e2
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "hypercalcemia"
  - "kidney stones"
  - "parathyroidectomy"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQ2FsY2l1bUdsdWNvbmF0ZS5tZA
---

# MedQA US 임상문제

## 문제

45세 남성이 부갑상선호르몬(PTH) 수치 상승으로 인한 고칼슘혈증으로 반복적인 탈수와 신장 결석이 발생하여 부갑상선절제술을 받았다. 수술 후 3일째 되는 날 병동에서 회복 중이다. 체온은 97.6°F(36.4°C), 혈압은 122/81 mmHg, 맥박은 84회/분, 호흡수는 12회/분, 실내 공기에서 산소 포화도는 98%이다. 환자는 현재 입 주위 저림을 호소하고 있다. 이 환자에 대한 가장 적절한 처치는 무엇인가?

## 선택지

A. 글루콘산 칼슘(Calcium gluconate)
B. 관찰
C. 칼륨(Potassium)
D. 비타민 D

## 해설


부갑상선절제술 3일 뒤 입 주위 저림은 수술 후 저칼슘혈증을 의심하게 한다. 일시적 PTH 저하나 hungry bone 현상이 원인이 될 수 있다. 즉시 혈중 이온화/보정 칼슘, 마그네슘과 심전도를 평가하며, 급성 증상성 저칼슘혈증에는 모니터링하에 글루콘산 칼슘을 투여하는 A가 선택지 중 적절하다. 장기 보충은 원인과 정도에 따라 칼슘·활성 비타민 D 등을 조절한다. 본문의 수술은 갑상선절제술이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000786 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 갑상선절제술로 잘못 연결한 수술명을 부갑상선절제술로 교정하고 증상성 저칼슘혈증 평가를 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8117371/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000786
