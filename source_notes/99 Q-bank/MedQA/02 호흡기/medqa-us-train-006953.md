---
type: qbank
schema_version: 1
id: medqa-us-train-006953
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b394c6b2a601c97a19c710a047ce5c403844499d25ec2cba4cf69ec5d27c6bf
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성 폐쇄성 폐질환"
  - "만성 호흡성 산증"
  - "고탄산혈증"
question_type: diagnosis
difficulty: simple
answer: B
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

35세 남자가 우측 폐절제술 전 수술 평가를 위해 폐기능 클리닉에 내원했다. 실내 공기에서 측정한 동맥혈가스는 다음과 같다.

pH: 7.34
PaCO2: 68 mmHg
PaO2: 56 mmHg
염기 과잉: +1
산소포화도: 89%

이 소견을 가장 잘 설명하는 기저 질환은 무엇인가?

## 선택지

A. 급성 호흡곤란 증후군
B. 만성 폐쇄성 폐질환
C. 낭성 섬유증
D. 비만

## 해설


동맥혈가스에서 PaCO₂가 68 mmHg로 고탄산혈증, PaO₂가 56 mmHg로 저산소혈증, pH 7.34로 경미한 호산성이 나타난다. 이는 만성 폐쇄성 폐질환(COPD)에서 흔히 보이는 만성 호흡성 산증이다. 따라서 정답은 B이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006953
