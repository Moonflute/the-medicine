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

55세 남자가 자동차 배터리에서 화학물질이 얼굴과 눈에 튀어 왼쪽 눈이 화끈거린다며 응급실에 왔다. 눈이 충혈되고 눈물이 난다. 다음 중 가장 적절한 처치는?

## 선택지

A. 안와 CT
B. 눈 세척
C. 수술적 변연절제
D. 시력검사

## 해설

화학물질의 안구 노출 직후에는 B, 즉각적이고 충분한 세척으로 노출 시간을 줄인다. 적절한 관류액을 구하거나 시력검사·CT를 시행하느라 시작을 늦추지 않는다. 이후 안구표면 pH, 잔류 물질, 각막·결막 손상과 시력 등을 평가하고 안과 처치를 진행해야 하므로 다른 검사가 전혀 필요 없다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 즉시 관류 B는 유지하되 이후 검사가 불필요하다는 위험한 표현을 교정.
- 공식/학회 근거: https://eyewiki.aao.org/Chemical_%28Alkali_and_Acid%29_Injury_of_the_Conjunctiva_and_Cornea

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005401
