---
type: qbank
schema_version: 1
id: medqa-us-train-010122
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:13b9d0407c08dd0d99945a776c5fce405bfef87e3f63f4f344e48f13bb0e979f
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "심한 여드름"
  - "이소트레티노인"
  - "임신 검사"
question_type: prevention
related_disease_slugs: []
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
---

# MedQA US 임상문제

## 문제

표준 치료에도 깊은 결절과 흉터가 지속되는 19세 환자가 이소트레티노인을 고려한다. 임신 가능성이 있다. 국내 허가사항에 맞는 시작 전 준비는?

## 선택지

A. 임신만 아니라고 말하면 오늘부터 복용한다
B. 임신검사 결과를 확인하고 복용 전·중·후의 피임 계획을 먼저 세운다
C. 피임은 할 필요 없고 체중과 혈압만 확인한다
D. 첫 처방을 마친 뒤 임신 여부를 확인한다

## 해설


이소트레티노인은 강한 기형 유발 위험이 있어 임신 중 사용할 수 없다. 국내 허가사항에 따라 시작 전 임신을 배제하고 치료 한 달 전부터 종료 한 달 뒤까지 피임 등 임신예방 절차를 적용한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010122
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=200301825
