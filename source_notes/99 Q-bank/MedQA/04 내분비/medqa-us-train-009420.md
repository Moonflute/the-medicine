---
type: qbank
schema_version: 1
id: medqa-us-train-009420
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dc0437085ed4e0ed478b9394691a38a297262bc47779259501e8fbd80dc275ee
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "vitamin D toxicity"
  - "비타민 D 독성"
  - "hypercalcemia"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: mechanism
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
---

# MedQA US 임상문제

## 문제

33세 여성이 2개월 동안 지속된 변비, 복통, 식욕저하로 내원했다. 체중 감량을 위해 수개월째 새 식단과 하루 2시간 운동을 하고 있다. 고혈압과 갑상선기능저하증이 있고 히드로클로로티아지드, 종합비타민, 레보티록신을 복용한다. 최근 매 식사와 함께 일반의약품 보충제를 복용하기 시작했다. 체온 36.2°C, 맥박 92회/분, 혈압 102/78 mmHg이며 점막이 건조하다. 복부는 부드럽고 장음이 감소되어 있다. 혈청 칼슘 12.8 mg/dL, 인 4.6 mg/dL, 중탄산염 22 mEq/L, 알부민 4 g/dL, PTH 180 pg/mL, TSH 9 μU/mL, 유리 T4 5 μg/dL이다. 증상의 가장 가능성 높은 근본 원인은 무엇인가?

## 선택지

A. 일차성 갑상선기능저하증
B. 일차성 부갑상선기능항진증
C. 탄산칼슘 과다 섭취
D. 비타민 D 독성

## 해설


구강 보충제 복용으로 비타민 D 과다 섭취가 발생했으며, 비타민 D 독성은 장골형성 억제와 장칼슘 흡수 증가로 혈청 칼슘을 12 mg/dL 이상으로 상승시킨다. PTH는 저칼슘에 대한 반응으로 상승하지만, 비타민 D 독성에서는 PTH가 정상~경미하게 상승한다. 따라서 가장 가능성 높은 근본 원인은 비타민 D 독성이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009420
