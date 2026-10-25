---
type: qbank
schema_version: 1
id: medqa-us-train-002968
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2a4ee46fdbc90978def2e7d5abb439433b9ed538e0fed06fe5d3869aa2b0a04e
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "infant developmental milestone"
  - "head control"
  - "gross motor development"
  - "2-month milestone"
question_type: other
related_disease_slugs: []
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

어머니가 정기 영유아 검진을 위해 아기를 소아과에 데려왔다. 발달검사 중 의사는 아기를 검사대에서 들어 올리려 할 때 아기가 머리를 위로 들고 의사를 바라보는 것을 관찰했다. 발달이 정상인 아동에서 이 소견이 나타나기 시작하는 것이 흔한 나이는?

## 선택지

A. 생후 2개월
B. 생후 6개월
C. 생후 9개월
D. 생후 12개월

## 해설

보기 중 머리 들기 시작에 가장 가까운 연령은 생후 2개월(A)이다. 머리 조절 능력은 이후에도 지속적으로 발달한다. 6개월 이후에는 이 행동이 사라진다는 뜻이 아니며, 원문의 관찰을 완전한 머리 가누기나 당겨 앉히기 검사로 바꾸어 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 머리 들기가 이후 연령에는 나타나지 않는다는 발달 설명 오류를 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002968
