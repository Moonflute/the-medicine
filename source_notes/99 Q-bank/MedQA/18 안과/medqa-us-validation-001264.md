---
type: qbank
schema_version: 1
id: medqa-us-validation-001264
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:81d3968b0c73f43715e946300f0cb7fe15ffdf6c36ceb19167ca8130fba54c3d
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "특발성 두개내 고혈압"
  - "시신경유두 부종"
  - "이소트레티노인"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tirnrsJzshLEg65GQ6rCc64K0IOqzoO2YiOyVlSAoSWRpb3BhdGhpYyBJbnRyYWNyYW5pYWwgSHlwZXJ0ZW5zaW9uKS5tZA
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

이소트레티노인을 복용하기 시작한 뒤 두통, 박동성 귀울림과 일시적인 시야 흐림이 생겼다. 안저에 양쪽 유두부종이 확인된다. 다음 조치는?

## 선택지

A. 체중에 의한 특발 두개내고혈압으로 단정하고 약은 그대로 쓴다
B. 두개내압 대신 안압만 추적한다
C. 진통제를 추가하고 다음 달까지 기다린다
D. 이소트레티노인을 중단하고 시기능과 두개내고혈압 원인을 신속히 평가한다

## 해설

이소트레티노인은 두개내고혈압을 유발할 수 있다. 유두부종이 확인되면 의심 약을 중단하고 시기능 손상과 정맥동혈전 등 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 약물 관련 두개내압 상승을 무조건 특발성으로 명명하지 않도록 교정; 원정답 B 유지.
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/021951s013lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001264
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c2917c3d-3499-48a0-ba53-120cb979195d
