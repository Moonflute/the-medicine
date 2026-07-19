---
type: qbank
schema_version: 1
id: medqa-us-train-008570
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7ccc06695155af15be145fd785d8ef6d708700a6bdb8f481eb4d22527ac90301
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Hashimoto thyroiditis"
  - "hypothyroidism"
  - "thyroid lymphoma"
question_type: prognosis
difficulty: complex
answer: D
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

30세 여성이 불규칙하고 양이 많은 월경으로 일차진료를 받으러 왔다. 최근 피로, 관절통, 변비도 호소한다. 신체검사에서 눈썹이 얇아지고 최근 체중이 증가했다. 체온 98.0°F(36.7°C), 혈압 140/90mmHg, 맥박 51회/분, 호흡수 19회/분이다.

검사 결과:
혈청 Na⁺ 141mEq/L, K⁺ 4.3mEq/L, Cl⁻ 102mEq/L, BUN 15mg/dL, 포도당 115mg/dL, 크레아티닌 1.0mg/dL, 갑상선자극호르몬 11.2µU/mL, 총 T4 2µg/dL, 갑상선글로불린 항체 양성, 항갑상선 과산화효소 항체 양성

다음 중 이 환자가 향후 위험이 증가하는 질환은 무엇인가?

## 선택지

A. 유두상 갑상선암
B. 부갑상선 선종
C. 아급성 갑상선염
D. 갑상선 림프종

## 해설


Hashimoto 갑상선염은 갑상선 림프종(비호지킨 림프종) 위험을 증가시킨다. 환자는 갑상선 기능저하와 항갑상선 항체 양성으로 이 질환에 해당한다. 유두상 갑상선암은 갑상선 결절과 관련되고, 부갑상선 선종은 칼슘 대사와 연관된다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008570
