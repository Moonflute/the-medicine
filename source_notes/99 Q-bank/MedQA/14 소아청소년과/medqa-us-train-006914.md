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
answer: D
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

11세 남아가 청소년기에 시행하는 Tdap 추가접종을 위해 부모와 함께 소아과에 내원했다. 의무기록을 보면 CDC 권고에 따라 예방접종을 받았지만 8세에 따라잡기 Tdap 접종을 받은 예외가 있다. 부모는 3년 전 동남아시아에서 이주했으며 아이가 디프테리아, 파상풍 및 백일해 예방접종을 받지 않아 8세에 따라잡기 접종을 했고 그때 Tdap 1차를 포함했다고 설명했다. 다음 중 소아과 의사가 예방접종 일정을 이어가기 위해 선택할 것은?

## 선택지

A. 지금 Tdap 1회
B. 18세에 Tdap 1회
C. 지금 Td 1회
D. 18세에 Td 1회

## 해설


8세에 첫 번째 Tdap를 맞은 경우, 이후 10년 간격(보통 10~12년)으로 Td(디프테리아·파상풍) 부스터를 시행한다. 11세에 추가 Tdap를 맞을 필요가 없으며, 18세에 Td 1회를 주는 것이 CDC 권고에 부합한다. 따라서 18세에 Td 1회를 선택한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006914
