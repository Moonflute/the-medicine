---
type: qbank
schema_version: 1
id: medqa-us-train-003868
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:46e5bfcaa82d989acd1d9722294b78d21d93f9c53405ba22e9c2977f23e685d8
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "doxorubicin cardiotoxicity"
  - "anthracycline therapy"
  - "left ventricular ejection fraction"
  - "echocardiography"
  - "Anthracycline cardiotoxicity"
related_disease_slugs: []
question_type: monitoring
difficulty: simple
answer: C
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

침윤성 유방암으로 수술과 방사선치료 후 사이클로포스파미드와 독소루비신 보조항암요법을 시작하는 54세 여성에서 치료를 모니터링하기 위해 정기적으로 시행해야 하는 검사는?

## 선택지

A. 심장 MRI
B. 심전도
C. 심초음파
D. 정기 모니터링이 필요하지 않다

## 해설


독소루비신은 용량 의존적 심근독성을 일으키며, 좌심실 구획 감소를 조기에 발견하기 위해 정기적인 심초음파 검사가 권장된다. 심전도나 MRI는 초기 선별에 충분히 민감하지 않다. 따라서 가장 적절한 모니터링 검사는 심초음파이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003868
