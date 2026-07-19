---
type: qbank
schema_version: 1
id: medqa-us-train-002024
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a9924b6c112421ade16cb7be3ccb649da9cb13f05d8cc2900dd8d7f7b1e9a280
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "preeclampsia"
  - "primigravida"
  - "risk factors"
question_type: risk_factor
difficulty: complex
answer: B
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

26세 초임부가 임신 35주에 새로 발생한 하지 부종으로 내원했다. 혈압은 145/90 mm Hg로 15분과 4시간 후에도 변하지 않고 소변검사에서 단백질 2+이다. 임신 전 BMI는 18.2 kg/m2 정도였고 어머니와 이모에게 고혈압 병력이 있다. 다음 중 이 환자 상태의 위험 요인은 무엇인가?

## 선택지

A. 임신 전 흡연
B. 초임부
C. 임신 전 BMI < 18.5 kg/m2
D. 고혈압 가족력

## 해설


초임부(primigravida)는 임신 고혈압 및 전자간증 발생 위험이 가장 높은 인구 집단이다. 다른 선택지는 위험을 크게 증가시키지 않는다. 따라서 위험 요인은 초임부이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002024
