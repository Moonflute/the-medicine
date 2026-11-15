---
type: qbank
schema_version: 1
id: medqa-us-train-006989
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f9280bdc6002f775ea3961b86dd1131b498e5592e9909bff2cdea5c40cf1db79
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "모유 수유 평가"
  - "신생아 체중 감소"
  - "수유 자세와 젖물림"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만삭으로 태어난 생후 15일 영아가 모유만 먹는다. 출생 2,790 g, 지난주 2,590 g, 오늘 2,720 g이고 젖은 기저귀는 하루 4개다. 활력과 관류는 안정적이다. 지금 필요한 조치는?

## 선택지

A. 출생 체중에 가깝기만 하면 한 달 뒤까지 추적하지 않는다
B. 산모의 음식만 제한한다
C. 젖물림과 삼킴을 직접 관찰하고 수분·섭취량을 평가해 가까운 시일 내 체중을 다시 확인
D. 수유 평가 없이 모유를 바로 영구 중단한다

## 해설

출생 체중을 아직 회복하지 못했고 소변도 적으므로 실제 젖 전달량을 확인한다. 체중과 수분 상태를 가까운 간격으로 추적하고, 충분히 먹지 못하면 보충 수유를 개별적으로 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 수유 관찰 A 유지하되 생후15일 출생체중 미회복과 섭취평가 필요를 명시. 대부분 추가평가 불필요라는 무조건적 안심 제거.
- https://www.healthychildren.org/English/ages-stages/baby/Pages/First-Month-Physical-Appearance-and-Growth.aspx

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006989
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9206473/
