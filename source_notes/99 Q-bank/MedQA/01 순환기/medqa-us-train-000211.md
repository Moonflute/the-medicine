---
type: qbank
schema_version: 1
id: medqa-us-train-000211
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ccaa7cd7c3e89fe4c6e4c572306fedb0b4d615f6002ddf60791013653f0c874f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "type 2 diabetes"
  - "hypertension"
  - "myocardial infarction"
question_type: diagnosis
difficulty: standard
answer: D
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

48세 남성이 이른 아침 흉부 작열감으로 응급실에 내원했다. 환자는 흉골 아래가 짓눌리는 듯한 느낌과 왼쪽 목 통증을 호소한다. 또한 호흡 곤란을 호소한다. 어젯밤 늦게 귀가하여 TV를 보며 라자냐 한 판을 혼자 다 먹었다고 한다. 과거력상 제2형 당뇨병과 조절되지 않는 고혈압이 있다. 환자는 약 복용을 자주 거르고 권장된 식단을 따르지 않았음을 인정한다. 현재 복용 중인 약물은 아스피린, 메트포르민, 캡토프릴이다. 진찰 결과, 과체중인 남성이 고통스러워하며 식은땀을 많이 흘리고 있다. 청진 시 가장 나타날 가능성이 높은 소견은 무엇인가?

## 선택지

A. 박출성 수축기 잡음
B. 호기 시 천명음
C. 제2심음의 고정 분열
D. 제4심음

## 해설


전형적인 급성 심근경색은 흉통, 식은땀, 심장소리 변화 중 제4심음(심실 충만음)이 나타날 수 있다. 박출성 잡음, 호기 천명음, 고정 분열은 해당 상황과 일치하지 않는다. 따라서 제4심음이 가장 가능성 높은 소견이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000211
