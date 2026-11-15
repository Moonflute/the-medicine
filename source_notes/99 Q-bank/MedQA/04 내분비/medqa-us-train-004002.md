---
type: qbank
schema_version: 1
id: medqa-us-train-004002
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:567631ef817969d922c353fdeaf1623d1b0343b31a209ed934665db5c35cd339
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "중증 저칼륨혈증"
  - "저염소성 대사성 알칼리증"
  - "체액량 감소"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: investigation
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
original_answer: C
answer_change_reason: "ERC2025는 K<3.0에서 12유도ECG와 심장리듬 감시를 권고. K2.2의 중증저K에서 ECG평가가 필요하며 원답 C의 생리식염수만으로 K를 신속교정한다는 근거는 없어 A로 수정."
---

# MedQA US 임상문제

## 문제

티아지드를 시작한 48세 여성이 근쇠약과 두근거림을 호소한다. 칼륨 2.2 mmol/L, 중탄산염 33 mmol/L다. 칼륨 보충을 준비하면서 부정맥 위험을 즉시 평가할 검사는?

## 선택지

A. 12유도 심전도
B. 24시간 소변 칼륨
C. 신장 초음파
D. 혈청 알도스테론과 레닌

## 해설

증상을 동반한 중증 저칼륨혈증은 부정맥 위험이 높다. 심전도와 감시를 준비하면서 칼륨·마그네슘과 신장기능을 확인하고 교정을 지체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: K2.2의 중증저K에서 ECG/감시 A가 즉시 필요. 식염수1L가 가장 빠른K교정이라는 C 해설은 잘못.
- https://www.erc.edu/media/wwufbysp/gl2025-06-spec-circ-e.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004002
