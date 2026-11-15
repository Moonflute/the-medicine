---
type: qbank
schema_version: 1
id: medqa-us-train-007492
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16660358ad21c77b1ecef9a6cbf49298e840c20bb28ddc8902403cf018b270e5
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "난소 예비력 감소"
  - "난임"
  - "고령 임신"
  - "클라미디아 병력"
  - "Diminished ovarian reserve"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 규칙적으로 월경하며 피임 없이 3개월간 임신을 시도했으나 임신되지 않았다. 배우자에게 자녀가 있지만 현재 정액검사는 하지 않았다. 평가를 언제 시작할까?

## 선택지

A. 이전 자녀가 있으므로 남성 평가는 하지 않는다
B. AMH가 낮게 나온 경우에만 난임 평가를 시작한다
C. 반드시 12개월이 될 때까지 기다린다
D. 지금 부부의 요인을 함께 평가하도록 의뢰한다

## 해설

40세를 넘는 경우 난임 평가를 미루지 않는 편이 적절하다. 월경이 규칙적이어도 난관과 남성 요인은 별도로 확인하며 이전 임신이나 출산력이 현재 난임을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 이전 자녀가 있는 남편의 정자와 정상 골반 진찰로 보이지 않는 난관을 정상이라고 단정한 해설을 교정했다.
- https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2021/
- https://www.asrm.org/practice-guidance/practice-committee-documents/testing-and-interpreting-measures-of-ovarian-reserve-a-committee-opinion-2020/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007492
- https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2026
