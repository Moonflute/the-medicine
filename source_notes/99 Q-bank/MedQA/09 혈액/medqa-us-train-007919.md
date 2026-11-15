---
type: qbank
schema_version: 1
id: medqa-us-train-007919
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ee2e68978f425ec4ebf496fe6ce60da6c8e8d7043f615391664915d01b6be0f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "acute myeloid leukemia"
  - "breaking bad news"
  - "patient understanding"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
question_type: ethics
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

급성 골수성 백혈병이 확진된 65세 환자가 본인이 선택한 가족과 함께 검사 결과를 들으러 왔다. 아직 의료진은 진단을 설명하지 않았다. 환자의 이해 수준과 설명 선호를 확인하며 면담을 시작할 말은?

## 선택지

A. “가족분에게 먼저 설명할 테니 잠시 밖에서 기다려 주세요.”
B. “결과를 자세히 말하면 힘드실 테니 치료 방법부터 정하겠습니다.”
C. “검사를 왜 받으셨다고 이해하고 계신가요? 오늘 결과를 어떤 방식으로 듣고 싶으세요?”
D. “모든 결과를 한 번에 설명하겠습니다. 질문은 끝에 해 주세요.”

## 해설


환자가 이미 아는 내용과 원하는 설명 수준을 먼저 확인하면 진단을 환자에게 맞춰 전달할 수 있다. 가족의 참여 범위도 환자의 뜻을 따른다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007919 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 선택지 B의 원래 질문을 정답 해설에서 다른 문장으로 바꾼 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007919
- https://ascopubs.org/doi/10.1200/JCO-26-00118
