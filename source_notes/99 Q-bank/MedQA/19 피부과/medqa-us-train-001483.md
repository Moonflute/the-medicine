---
type: qbank
schema_version: 1
id: medqa-us-train-001483
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:25e7a78f49b8b830d044cda8f4deba802b2a0f332b9888a0b6e239be974b5ea7
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "pemphigus vulgaris"
  - "Nikolsky sign"
  - "mucosal blistering"
  - "Pemphigus vulgaris"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: C
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

50세 여성이 수개월간 낫지 않는 통증성 구강 미란에 이어 팔과 몸통에 쉽게 터지는 이완성 수포가 생겨 내원했다. 주변 피부를 가볍게 밀면 표피가 벗겨진다. 가장 가능성 높은 진단은?

## 선택지

A. 수포성 유사천포창
B. 포진피부염
C. 심상성 천포창
D. 다형홍반

## 해설

구강 미란이 먼저 생긴 뒤 이완성 수포와 양성 니콜스키 징후가 동반되면 심상성 천포창을 의심한다. 수포성 유사천포창은 수포가 팽팽하고 점막을 덜 침범한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 점막 침범·이완성 수포의 PV D는 맞지만 본문 10%를 10% 미만으로 바꾸고 면적을 PV 진단 기준으로 사용한 오류를 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001483
