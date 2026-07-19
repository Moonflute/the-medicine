---
type: qbank
schema_version: 1
id: medqa-us-train-005471
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3066ccccfaf4f0b5847fb096bf9bcfb4381364585b6e22e304f1afb3316183a7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "우각차단"
  - "실신 전 증상"
  - "전도장애"
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

77세 남자가 실신할 것 같은 어지럼으로 내원했다. 고혈압으로 캅토프릴을 복용하며 앉은 혈압 133/91 mmHg, 누운 혈압 134/92 mmHg, 선 혈압 127/88 mmHg로 기립성 변화는 없다. 심전도 리듬띠가 제시되어 있다. 실신 전 증상의 가능성 높은 원인은?

## 선택지

A. 캅토프릴
B. 고혈압
C. 좌각차단
D. 우각차단

## 해설


심전도에서 우각 차단(우방실 차단) 파형이 보이며, 이는 심실성 실신을 일으킬 수 있는 전도 지연이다. 우각 차단은 심실 수축 동기화를 방해해 일시적 혈류 감소를 초래한다. 따라서 실신 전 증상의 가장 가능성 높은 원인은 우각 차단이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005471
