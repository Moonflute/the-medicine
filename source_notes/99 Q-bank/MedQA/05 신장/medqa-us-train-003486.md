---
type: qbank
schema_version: 1
id: medqa-us-train-003486
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b333d147d5a6dc4985e667eccfa6e535547ba7e9d7ca059dc6d828bc61e59d1f
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "acute tubular necrosis"
  - "ischemic acute kidney injury"
  - "muddy brown casts"
  - "BUN creatinine ratio"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: diagnosis
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
---

# MedQA US 임상문제

## 문제

56세 남성이 왼팔과 턱으로 퍼지는 심한 흉통과 어지럼증으로 내원했다. 심전도에서 I, aVL, V5~6에 ST 분절 상승이 있었고 경피적 관상동맥 중재술로 성공적으로 재관류되었다. 중환자실 첫날 밤 소변량은 0.15 mL/kg/h였고 소변검사에서 진흙갈색 원주가 보였다. 이 환자의 상태에서 예상되는 소견은?

## 선택지

A. 소변 삼투질농도 900 mOsmol/kg
B. 소변 삼투질농도 550 mOsmol/kg
C. BUN:혈청 크레아티닌 비율 20:1 초과
D. BUN:혈청 크레아티닌 비율 15:1 미만

## 해설


심근경색 후 재관류된 환자에서 급성 신손상(급성 관상동맥 폐쇄성 신손상)은 BUN:크레아티닌 비율이 10:1~15:1 정도로 낮아진다. 이는 관류 감소에 의한 질소 재흡수가 감소한 결과이다. 따라서 예상되는 비율은 15:1 미만이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003486
