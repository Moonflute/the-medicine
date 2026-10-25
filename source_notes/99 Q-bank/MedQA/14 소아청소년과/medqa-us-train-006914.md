---
type: qbank
schema_version: 1
id: medqa-us-train-006914
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ebddae66a99aa5d316360c5db491ab4441f12c01c1a50e9f463c18dadc06fd99
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "예방접종 따라잡기"
  - "Tdap"
  - "Td 추가접종"
question_type: prevention
related_disease_slugs: []
difficulty: standard
answer: A
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
original_answer: D
answer_change_reason: "8세 catch-up Tdap 후 11–12세 추가접종이 필요하므로 구식 D를 A로 변경."
---

# MedQA US 임상문제

## 문제

11세 남아가 청소년기에 시행하는 Tdap 추가접종을 위해 부모와 함께 소아과에 내원했다. 의무기록을 보면 CDC 권고에 따라 예방접종을 받았지만 8세에 따라잡기 Tdap 접종을 받은 예외가 있다. 부모는 3년 전 동남아시아에서 이주했으며 아이가 디프테리아, 파상풍 및 백일해 예방접종을 받지 않아 8세에 따라잡기 접종을 했고 그때 Tdap 1차를 포함했다고 설명했다. 다음 중 소아과 의사가 예방접종 일정을 이어가기 위해 선택할 것은?

## 선택지

A. 지금 Tdap 1회
B. 18세에 Tdap 1회
C. 지금 Td 1회
D. 18세에 Td 1회

## 해설

7–9세에 Tdap 따라잡기 접종을 받은 아동은 11–12세에 통상 청소년 Tdap을 추가로 접종한다. 따라서 현재 11세인 이 환자는 Tdap 1회(A)가 적절하다. 8세 접종 후 18세까지 기다리라는 기존 설명은 현행 CDC 일정과 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 8세 catch-up Tdap 후 11–12세 추가접종이 필요하므로 구식 D를 A로 변경.
- https://www.cdc.gov/vaccines/schedules/downloads/child/0-18yrs-child-combined-schedule.pdf
- https://www.cdc.gov/tetanus/hcp/vaccine-recommendations/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006914
