---
type: qbank
schema_version: 1
id: medqa-us-train-008470
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f01e304638497f7619a381d49a75396c9d1f63016a1dc41549857a72dd66f144
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "Turner syndrome"
  - "45,X"
  - "cystic hygroma"
  - "hydrops fetalis"
question_type: diagnosis
difficulty: simple
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

36세 G4P0A3 여성이 임신 18주에 예정된 태아 기형 선별검사를 위해 산전진단센터에 내원했다. 과거력에서 자연유산이 반복되었다. 첫째, 둘째, 셋째 임신 손실은 각각 임신 8주, 10주, 12주에 발생했다. 초음파에서 낭성 림프관종(4×5cm)과 태아수종이 있는 여아 태아가 확인되었다. 다음 중 태아가 가질 가능성이 가장 높은 핵형은 무엇인가?

## 선택지

A. 21번 삼염색체증
B. 18번 단염색체증
C. 13번 삼염색체증
D. 45,X0

## 해설


태아의 낭성 림프관종·수종은 태아 부종과 연관된 45,X0(터너 증후군)에서 흔히 나타난다. 따라서 가장 가능성 높은 핵형은 45,X0이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008470
