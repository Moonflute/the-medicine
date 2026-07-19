---
type: qbank
schema_version: 1
id: medqa-us-train-008076
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a890a4bdebed900acaa9d78d2e23c23a1575ec4fa4d85f08fa05601df2d3e96a
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "breast cancer screening"
  - "average-risk woman"
  - "mammography"
question_type: prevention
difficulty: complex
answer: C
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

49세 여성이 20년 만에 처음으로 일차 진료를 받으러 왔다. 그동안 건강했고 29세에 유방 보형물 삽입술을 받은 것 외에는 수술력이 없다. 친구가 최근 유방암을 진단받아 자신의 위험을 걱정한다. 활력징후와 신체검사는 정상이다. 이 환자의 유방암에 대한 가장 적절한 검진은?

## 선택지

A. BRCA 유전자검사
B. 유방촬영술
C. 현재는 중재가 필요하지 않음
D. 초음파

## 해설


평균 위험 여성(40세 미만, 가족력 없음)에게는 40세부터 연 1회 유방촬영술이 권고된다. 현재는 검진이 필요하지 않으며, 조기 검진은 권장되지 않는다. 따라서 현재는 중재가 필요하지 않다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008076
