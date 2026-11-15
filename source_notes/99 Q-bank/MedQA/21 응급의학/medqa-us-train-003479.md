---
type: qbank
schema_version: 1
id: medqa-us-train-003479
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a082f64e97ed44783157d8efe9460d24e8aaea66c670be263f1cc72fb23615a
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "penetrating chest trauma"
  - "retained knife"
  - "thoracic injury"
  - "endotracheal intubation"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2dieu2gCDsmbjsg4EubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: B
answer_change_reason: "원문에서도 정상 기도·산소화·대칭 호흡음으로 즉시 삽관 적응증이 제시되지 않았다. 현행 안정 관통 흉부외상 영상 권고에 따라 B에서 D로 교정."
---

# MedQA US 임상문제

## 문제

가슴을 다친 뒤 외부 물체가 흉벽을 지나 꽂혀 있다. 환자의 혈압·산소화는 안정적이다. 외상팀이 영상과 수술 가능성을 평가하는 동안 응급실에서 물체를 어떻게 해야 할까?

## 선택지

A. 당장 뽑고 피부를 봉합한다
B. 물체가 움직이지 않게 지지하고 통제된 환경에서 제거할 계획을 세운다
C. 통증을 줄이기 위해 물체를 안쪽으로 민다
D. 외래까지 아무 조치 없이 기다린다

## 해설

꽂힌 물체를 현장이나 응급실에서 임의 제거하면 출혈이 급격히 악화할 수 있다. 움직이지 않게 지지하고, 안정적이면 영상으로 손상 범위를 평가해 수술 여건이 확보된 곳에서 제거한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문에서도 정상 기도·산소화·대칭 호흡음으로 즉시 삽관 적응증이 제시되지 않았다. 현행 안정 관통 흉부외상 영상 권고에 따라 B에서 D로 교정.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003479
