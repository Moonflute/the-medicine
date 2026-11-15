---
type: qbank
schema_version: 1
id: medqa-us-train-005447
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6087372dc1d0483c9b74ef94eace8c0e8dfe000d470b7cd0ea81cfaafa70703d
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신성 당뇨병"
  - "임신 중 고혈당"
  - "식이요법"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: A
answer_change_reason: "공복138 mg/dL·HbA1c7%는 명백한 당뇨 범위로 식이만 시작하는 원정답 A를 B로 교정."
---

# MedQA US 임상문제

## 문제

임신 26주에 임신성 당뇨병으로 진단된 산모가 식사·운동 치료를 제대로 시행했다. 그런데 1주 동안 공복 혈당은 103–112 mg/dL, 식후 1시간 혈당은 155–170 mg/dL로 반복됐다. 적절한 다음 단계는?

## 선택지

A. 임신 말까지 약을 쓰지 않고 식사요법만 유지
B. 혈당 패턴에 맞춰 인슐린을 시작한다
C. 시타글립틴을 1차 약으로 시작한다
D. 혈당 측정을 중단하고 당화혈색소만 추적한다

## 해설

공복 95 mg/dL 미만, 식후 1시간 140 mg/dL 미만 등 목표를 생활요법으로 달성하지 못하면 인슐린을 추가한다. 공복과 식후 중 어느 시점에 높은지 보고 처방을 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 공복138 mg/dL·HbA1c7%는 명백한 당뇨 범위로 식이만 시작하는 원정답 A를 B로 교정.
- https://www.nice.org.uk/guidance/ng3/chapter/Recommendations
- https://doi.org/10.2337/dc26-s002

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005447
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
