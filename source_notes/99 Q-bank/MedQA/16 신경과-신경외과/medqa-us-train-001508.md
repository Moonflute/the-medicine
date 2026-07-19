---
type: qbank
schema_version: 1
id: medqa-us-train-001508
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e6000831e4d62bcff4d95ccba8a707af7d7cba29f62455094971c494752bdd7b
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Friedreich ataxia"
  - "GAA repeat expansion"
  - "spinocerebellar ataxia"
question_type: diagnosis
difficulty: standard
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

11세 남아가 걷기 어려워 어머니와 함께 소아과에 내원했다. 약 1년 전까지 정상적으로 걷다가 다리에 힘이 빠지기 시작했다. 발이 전보다 불안정하고 집에서 두 번 넘어졌다. 그 전에는 걷는 데 문제가 없었고 학교 축구팀에서 활동적이었다. 다른 병력이나 가족력은 없다. 신체검사에서 말이 약간 어눌하고, 넓은 기반 보행과 양쪽 하지의 대칭적 쇠약 및 감각 저하가 있다. 그림 A와 B의 소견도 보인다. 다음 중 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 그람음성 막대균 감염
B. X염색체의 삼핵산(CGG) 반복 확장
C. 19번 염색체의 삼핵산(CTG) 반복 확장
D. 9번 염색체의 삼핵산(GAA) 반복 확장

## 해설


보행 불안정, 광범위 근력 저하, 감각 저하와 함께 MRI에서 특이적인 뇌변화가 보이면 프리드리히 운동실조증이 의심된다. 이 질환은 9번 염색체에 GAA 삼핵산 반복이 확대된 것이 원인이다. 따라서 9번 염색체 GAA 반복 확대가 가장 가능성 높은 원인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001508
