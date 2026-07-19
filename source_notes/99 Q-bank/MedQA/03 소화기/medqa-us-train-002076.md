---
type: qbank
schema_version: 1
id: medqa-us-train-002076
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:33acd2c465d4cb28c2238719245fd6de2923ab3cac591fa9d8ff1b291be0a46b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "alcoholic hepatitis"
  - "alcohol-associated liver disease"
  - "AST/ALT ratio"
question_type: diagnosis
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

45세 남성이 한 달 정도 지속된 피부와 눈의 황달, 식욕부진, 심한 오심으로 내원했다. 매일 맥주 2~3병, 주말에는 5~6병을 마신다. 일반의약품은 복용하지 않는다. 지난 20년간 매일 담배 한 갑을 피웠지만 불법 약물은 사용하지 않는다. 구토, 복통, 배변 습관 변화 또는 의도하지 않은 체중 감소는 없었다. 체온 37°C(98.6°F), 혈압 135/85 mmHg, 맥박 78회/분, 호흡 14회/분, BMI 19 kg/m²이다. 피부와 공막은 황달을 보이고 복부는 압통이 있으며 간이 약간 커져 있다. 혈액검사에서 혈색소 11 g/dL, MCV 105 µm³, 백혈구 14,000/mm³, 혈소판 110,000/mm³이다. 다음 중 이 환자에서 예상되는 간기능검사 결과는?

## 선택지

A. ALT 1,500 / AST 1,089 / AST/ALT 0.73
B. ALT 120 / AST 256 / AST/ALT 2.1
C. ALT 83 / AST 72 / AST/ALT 0.87
D. ALT 2,521 / AST 2,222 / AST/ALT 0.88

## 해설


알코올성 간염에서는 AST가 ALT보다 2배 이상 높고, AST/ALT 비율이 2~5 사이인 것이 특징이다. 제시된 수치는 AST 256, ALT 120, 비율 2.1로 전형적인 패턴이다. 따라서 정답은 B이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002076
