---
type: qbank
schema_version: 1
id: medqa-us-train-002987
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:df4263d49156ab5ac619821bf71fcfe30814d51fd81f2dc77a133eb5c2fe3947
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "preterm infant immunization"
  - "chronological age vaccination"
  - "DTaP vaccine"
  - "routine infant immunization"
question_type: prevention
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

재태 33주에 1.8kg으로 태어난 영아가 출생 후 두 달째다. 교정연령은 약 2주이고 건강하게 자라고 있으며 접종 금기는 없다. 국내 DTaP 1차 접종 시기는?

## 선택지

A. 실제 생후 2개월인 지금
B. 교정연령이 2개월이 되는 날
C. 실제 생후 6개월이 되는 날
D. 만삭으로 태어난 아이와 체중이 같아질 때

## 해설

안정적인 미숙아의 DTaP 접종은 교정연령이 아닌 출생일부터 센 실제 연령에 맞춘다. 저체중 출생아의 B형간염 백신은 별도 지침을 따른다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미숙아 예방접종의 실제 생후 연령 기준과 잘못된 수두 6개월 접종 설명을 교정.
- https://www.cdc.gov/vaccines/hcp/imz-best-practices/special-situations.html
- https://www.cdc.gov/chickenpox/hcp/vaccine-considerations/index.html
- https://www.cdc.gov/flu/hcp/vax-summary/seasonal-influenza-vaccines.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002987
- https://www.kdca.go.kr/bbs/kdca/55/310052/download.do
