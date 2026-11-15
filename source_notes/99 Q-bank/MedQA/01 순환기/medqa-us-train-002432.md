---
type: qbank
schema_version: 1
id: medqa-us-train-002432
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:597f341a9bc7bc54a407082dc9ae2e834026c35e44904aca9ff52d113d37dfa7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "sarcoidosis"
  - "cardiac sarcoidosis"
  - "hilar lymphadenopathy"
  - "atrioventricular block"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ycoOycoeyiheymnSAoU2FyY29pZG9zaXMpLm1k
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 반복되는 어지럼과 실신 직전 증상으로 왔다. 맥박은 43회/분이고 심전도는 2:1 방실차단과 좌각차단을 보인다. 수개월간 마른기침이 있었고 흉부 CT에서 양측 폐문과 종격동 림프절이 커져 있다. 이 검사 소견을 함께 설명할 수 있는 질환은?

## 선택지

A. 미주신경성 실신
B. 경동맥협착
C. 원발성 동기능부전
D. 심장 침범을 동반한 사르코이드증

## 해설

젊은 환자의 설명되지 않는 고도 방실차단에 폐문 림프절 비대가 함께 있으면 심장 사르코이드증을 의심한다. 심장 영상과 조직검사를 검토하면서 결핵 등 다른 육아종성 질환을 감별하고, 증상이 있는 방실차단은 신속히 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Sarcoidosis의 비육아성 육아종증이라는 모순을 비건락성 육아종으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002432
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001240
