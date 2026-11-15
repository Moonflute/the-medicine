---
type: qbank
schema_version: 1
id: medqa-us-train-004094
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9f1bfee921f054161cdad65c0ebb445a71392c8fbb2e5d0a5c5f9f2e8755b1b7
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "수유성 유방염"
  - "유방 농양"
  - "모유 수유"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqSDrho3slpEgKEJyZWFzdCBBYnNjZXNzKS5tZA
difficulty: complex
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

수유 중인 여성이 유방염으로 치료받는 중 발열과 통증성 종괴가 지속된다. 초음파에서 3 cm 액체 저류가 확인된다. 처치는?

## 선택지

A. 경구 항생제만 바꾸고 배액하지 않는다
B. 수유를 즉시 중단하고 종괴를 강하게 마사지한다
C. 세침 세포검사만 하고 항생제를 중단한다
D. 초음파 유도 배액과 배양을 하고 항생제를 조정한다

## 해설

액체가 고인 유방 농양은 흡인이나 카테터로 배액하고 배양 결과에 따라 수유 가능한 항생제를 선택한다. 아기가 고름이나 감염 조직에 닿지 않으면 수유를 대개 이어갈 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 파동성 2 cm 농양의 바늘 흡인·항생제 C 유지. 고형 종괴 오표현을 교정.
- https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004094
- https://pubmed.ncbi.nlm.nih.gov/35576513/
