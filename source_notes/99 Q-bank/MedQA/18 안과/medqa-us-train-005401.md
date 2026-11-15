---
type: qbank
schema_version: 1
id: medqa-us-train-005401
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c27a8b78ac078150eeb1412303eac12bda50ae1067bdecbaf0cd29445115f0ce
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "화학적 안구 화상"
  - "안구 세척"
  - "각막 손상"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-yViOq1rCDsmbjsg4EubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

작업 중 액체 세정제가 눈에 튀었다. 눈이 따갑고 충혈돼 있으며 아직 아무 처치도 하지 않았다. 가장 먼저 할 일은?

## 선택지

A. 시력과 안압 결과를 본 뒤 세척한다
B. 즉시 충분한 물이나 적절한 관류액으로 세척을 시작한다
C. 안와 CT를 먼저 찍는다
D. 안대를 덮고 안과에 도착할 때까지 기다린다

## 해설

화학물질이 눈에 닿으면 시력검사나 관류액 준비로 지연하지 않고 즉시 세척한다. 이후 안구표면의 산도와 남은 물질을 확인하고 손상을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 즉시 관류 B는 유지하되 이후 검사가 불필요하다는 위험한 표현을 교정.
- 공식/학회 근거: https://eyewiki.aao.org/Chemical_%28Alkali_and_Acid%29_Injury_of_the_Conjunctiva_and_Cornea

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005401
- https://www.aao.org/eyenet/article/treating-acute-chemical-injuries-of-cornea
