---
type: qbank
schema_version: 1
id: medqa-us-train-001221
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:137f5b03fed8ac080d8d3ad09299cf9e748d2fa565dd2e29326348baf591b2bc
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "Meniere disease"
question_type: diagnosis
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

45세 남성이 어지럼증을 주소로 일차 진료 의사를 방문하였다. 환자는 3개월 전부터 시작되어 한 번에 수 시간씩 지속되는, 한 달에 약 2~3회 발생하는 회전성 어지럼증을 호소한다. 문진 결과, 환자는 우측 청력 저하, 이명, 그리고 귀가 꽉 찬 느낌(ear fullness)을 함께 보고하였다. 체온은 99 deg F(37.2 deg C), 맥박 70회/분, 호흡 12회/분, 혈압 130/85 mmHg, SpO2 99%이다. 청력 검사(audiometric evaluation)를 시행하기로 결정하였다. 청력 검사에서 가장 가능성이 높은 소견은 무엇인가?

## 선택지

A. 저주파 감각신경성 난청
B. 고주파 감각신경성 난청
C. 저주파 전음성 난청
D. 정상 청력 검사 결과

## 해설


이명·청력 저하·귀 충만감·돌발 회전성 현기증은 메니에르병의 전형적인 삼중증상이다. 메니에르병에서는 저주파 감각신경성 난청이 먼저 나타난다. 따라서 가장 가능성 높은 청력 검사 소견은 저주파 감각신경성 난청이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001221
