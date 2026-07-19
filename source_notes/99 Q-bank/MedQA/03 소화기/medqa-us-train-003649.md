---
type: qbank
schema_version: 1
id: medqa-us-train-003649
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1abeb64b065171eddb779d4b586c8a48f33d308a0bd4dac654975eeadc1f9895
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "alcoholic hepatitis"
  - "AST greater than ALT"
  - "gamma-glutamyl transferase"
  - "cirrhosis"
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

47세 남성이 술 냄새와 불명확한 말로 응급실에 왔다. 과음, 비만, 당뇨병, 베르니케 뇌병증의 병력이 있고 복수와 간비대가 있었다. 다음 중 예상되는 AST, ALT, GGT 값의 조합은?

## 선택지

A. AST 225, ALT 245, GGT 127
B. AST 255, ALT 130, GGT 114
C. AST 425, ALT 475, GGT 95
D. AST 455, ALT 410, GGT 115

## 해설


알코올성 간염에서는 AST가 ALT보다 약 2배 정도 높으며, GGT도 상승한다. 제시된 수치 중 AST 255, ALT 130, GGT 114가 이러한 패턴을 가장 잘 반영한다. 다른 선택지는 AST와 ALT이 거의 동일하거나 ALT가 더 높은 패턴을 보여 알코올성 간염과 맞지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003649
