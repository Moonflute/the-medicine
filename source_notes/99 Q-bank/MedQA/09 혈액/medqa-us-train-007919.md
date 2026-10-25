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
answer: B
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

65세 남자가 한 달간 지속된 피로, 간헐적 발열, 쇠약감으로 입원했다. 말초혈액도말에서 급성 골수성 백혈병이 의심되었고 골수흡인과 세포유전학 검사로 진단이 확정되었다. 의사는 조용한 사무실에서 면담 시간을 따로 마련해 진단과 치료 선택지를 설명하기로 했다. 환자는 원하면 누군가를 동반해도 된다는 안내를 받았고 딸과 함께 약속된 시간에 왔다. 편안해 보이며 정동도 풍부하다. 이 상황에서 가장 적절한 첫 말은?

## 선택지

A. “검사 결과 급성 골수성 백혈병으로 나타났습니다.”
B. “골수흡인과 세포유전학 검사를 시행한 이유를 어떻게 이해하고 계신가요?”
C. “진단의 모든 세부사항을 알고 싶으신가요, 아니면 치료 선택지만 설명해 드릴까요?”
D. “검사 결과가 궁금하고 불안하실 것 같습니다.”

## 해설


먼저 골수흡인/세포유전학 검사를 왜 시행했는지 환자가 어떻게 이해하고 있는지 묻는 B가 적절하다. 환자의 인식·걱정·정보 선호를 확인한 뒤 진단을 단계적으로 전달한다. 이는 아직 알려주지 않은 진단/치료 내용을 이미 이해하는지 묻는 다른 문장으로 바꾸어서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007919 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 선택지 B의 원래 질문을 정답 해설에서 다른 문장으로 바꾼 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007919
