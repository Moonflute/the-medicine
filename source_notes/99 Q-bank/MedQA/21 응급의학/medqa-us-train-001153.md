---
type: qbank
schema_version: 1
id: medqa-us-train-001153
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6710937ceb69f94bb0a7dd2b9359a0f85f5f4df96b9abbd94c83954e791ad10
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "dental avulsion"
  - "Dental avulsion"
question_type: management
related_disease_slugs: []
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

자전거에서 넘어진 27세 남성의 영구 앞니가 완전히 빠졌다. 현장에서 바로 다시 넣을 수 없어 치과로 가져가려 한다. 치아를 말리지 않고 보존할 방법은?

## 선택지

A. 치근을 솔로 문지른 뒤 말린다
B. 치관을 잡고 우유에 담아 가져간다
C. 마른 거즈로 단단히 감싼다
D. 소독용 알코올에 담근다

## 해설

빠진 영구치는 가능하면 조기에 재식한다. 즉시 재식할 수 없다면 치관을 잡아 우유 등 적절한 매질에 넣고 신속히 치과 평가를 받는다. 치근을 문지르지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 탈락 치아 보관을 저산성 환경으로 설명한 오류를 치주인대세포의 적절한 삼투압·pH와 건조 방지로 교정했다. 운반 선지 A는 유지한다.
- 공식/학회 근거: https://costr.ilcor.org/document/storage-of-an-avulsed-permanent-tooth-prior-to-reimplantation-task-force-systematic-review

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001153
- https://pubmed.ncbi.nlm.nih.gov/32460393/
