---
type: qbank
schema_version: 1
id: medqa-us-validation-000006
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:61ad84343eecd2e8d95318d8a6eebc57e58a631f35c54a8dcacb55ffba64b616
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철결핍성 빈혈"
  - "소구성 빈혈"
  - "저색소성 빈혈"
question_type: diagnosis
difficulty: complex
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

41세 여성이 피로와 쇠약으로 진료를 받으러 왔다. 혈전이나 출혈 병력은 없고 혈구검사에서 헤마토크릿 27.1%, MCV 79 fL, 망상적혈구 2.0%로 빈혈을 진단받았다. 가장 가능성 높은 원인은?

## 선택지

A. 비타민 B12 결핍
B. 엽산 결핍
C. 철 결핍
D. 혈관내 용혈

## 해설


MCV 79 fL와 저색소성 빈혈은 철 결핍성 빈혈을 시사한다. 철 결핍은 소량 적혈구와 저색소성 적혈구를 만들며, 망상적혈구는 약간 증가할 수 있다. 따라서 가장 가능성 높은 원인은 철 결핍이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000006
