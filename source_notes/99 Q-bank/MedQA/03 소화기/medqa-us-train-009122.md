---
type: qbank
schema_version: 1
id: medqa-us-train-009122
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9378e61b42c8d728637ce7ff7427d4e5099365211d3130dcddb4fd79e1ec86f9
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute pancreatitis"
  - "급성 췌장염"
  - "Ranson criteria"
question_type: prognosis
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

57세 남자가 10시간 전부터 갑자기 시작되어 등으로 방사되는 복통, 오심 및 여러 차례의 구토로 응급실에 입원했다. 특별한 과거력은 없지만 매일 밤 술을 마신다고 한다. 체온 37.5°C, 호흡수 20회/분, 맥박 120회/분, 혈압 120/76 mmHg이다. 창백해 보이고 눈이 움푹 들어가 있으며 심한 상복부 압통과 옆구리 변색이 있다. 초기 검사에서 백혈구 10,000/mm³, 혈소판 140,000/mm³, 혈당 160 mg/dL, 혈청 LDH 500 IU/L, AST 400 IU/dL, 아밀라아제 500 IU/L, 리파아제 300 IU/L이다. 다음 조합 중 이 환자의 중증도를 가장 잘 예측하는 것은 무엇인가?

## 선택지

A. 혈당, LDH, AST
B. 나이, LDH, AST
C. 백혈구 수, 혈소판 수, AST
D. AST, 아밀라아제, 리파아제

## 해설


급성 췌장염 중증도는 Ranson 기준으로 나이, LDH, AST를 포함한다. 이 세 항목은 입원 48시간 내에 평가되는 주요 예후 인자이다. 따라서 나이·LDH·AST 조합이 중증도 예측에 가장 적합하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009122
