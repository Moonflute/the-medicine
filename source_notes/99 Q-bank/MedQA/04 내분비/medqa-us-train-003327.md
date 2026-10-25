---
type: qbank
schema_version: 1
id: medqa-us-train-003327
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fce5d6360ed52e0b8ff98933c0342f2c3e7f343ec92af27b97f54f0c0f8c0b34
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "methimazole-induced agranulocytosis"
  - "neutropenic fever"
  - "antithyroid drug adverse effect"
  - "Graves disease"
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
question_type: adverse_effect
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 여성이 발열과 권태감으로 내원했다. 이틀 동안 피로, 쇠약, 오한이 있었고 전날 밤 체온이 40.8°C까지 올랐다. 오늘 아침부터 삼키기 어려우며 최근 그레이브스병으로 진단받아 메티마졸을 시작했다. 체온 38.3°C, 맥박 95회/분, 혈압 134/74 mmHg이고 구인두는 삼출물 없이 홍반성이다. 백혈구 3,200/mm³, 호중구 9%이다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 골수생검
B. 메티마졸 중단
C. EBV, HIV, CMV 검사
D. 메티마졸 용량 감소

## 해설

Methimazole 시작 후 고열·인후통에 ANC≈3,200×0.09=288/mm³로 약물 유발 중증 호중구감소/무과립구증을 의심한다. 즉시 methimazole을 중단하는 B가 적절하며 단순 감량하지 않는다. 발열성 호중구감소증이므로 감염 평가와 신속한 치료를 병행해야 한다. 농양증이라는 기존 용어는 agranulocytosis의 번역이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ANC 약288의 약물 유발 무과립구증을 농양증으로 잘못 쓴 오류; methimazole 즉시중단 B와 감염 응급평가.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=26ce3ca1-f2f2-7102-e063-6394a90ae819

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003327
