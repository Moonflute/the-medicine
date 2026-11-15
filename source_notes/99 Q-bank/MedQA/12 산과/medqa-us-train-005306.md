---
type: qbank
schema_version: 1
id: medqa-us-train-005306
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55d3bc5d7dfd0ebe6daf1e5906dd186785c03c8f32851b28d7b9ae0e6e476e9e
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "발프로산"
  - "신경관 결손"
  - "임신 중 항경련제"
  - "Neural tube defect"
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

뇌전증으로 발프로산을 복용하는 여성이 임신을 계획한다. 임신 초기 노출 위험에 대한 설명으로 옳은 것은?

## 선택지

A. 임신 초기 노출은 구조기형 위험과 관계가 없다
B. 임신반응이 양성이면 의료진과 상의하지 않고 바로 끊는다
C. 엽산만 추가하면 발프로산의 태아 위험이 모두 없어진다
D. 신경관결손 위험이 높아져 임신 전 발작 유형에 맞는 대체약을 전문의와 검토한다

## 해설

발프로산은 태아 신경관결손과 여러 발달 문제의 위험을 높인다. 가능하면 임신 전에 대체약을 검토하되 발작 악화를 막기 위해 임의 중단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 36주에 새로 신경관이 닫히는 것이 아닌 임신 초기 약물 노출 위험임을 교정.
- https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cef3e335-5891-412f-89c4-79fcd2f145b7

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005306
- https://pubmed.ncbi.nlm.nih.gov/38748979/
