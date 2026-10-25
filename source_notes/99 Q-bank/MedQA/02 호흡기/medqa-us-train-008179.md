---
type: qbank
schema_version: 1
id: medqa-us-train-008179
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d77d001b05caf64fbc09d07b617f775e8df9bfd5150aa0f9e81b6497a8ac56f4
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "childhood asthma"
  - "spirometry"
  - "atopy"
  - "Asthma"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
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

6세 남아가 2개월 동안 지속된 기침, 코막힘, 간헐적 천명으로 내원했다. 습진 병력이 있고 출생 이후 상기도 감염 세 번과 항생제 치료를 받은 급성 중이염 한 번이 있었다. 가족이 3개월 전 저렴한 주택으로 이사했다. 체온 37.2°C(98.9°F), 맥박 120회/분, 호흡수 28회/분, 혈압 90/60 mmHg이며 폐 진찰에서 산발적 천명음이 들린다. 가장 적절한 다음 처치는?

## 선택지

A. 폐활량측정
B. 피부단자검사
C. 인후 배양
D. 디하이드로로다민 123 검사

## 해설


지속성 기침·천명·아토피 병력은 소아 천식 의심을 높인다. 천식 진단에 가장 중요한 객관적 증거는 폐활량측정(스파이로메트리)으로 폐기능 저하와 가역성을 확인하는 것이다. 따라서 폐활량측정이 가장 적절한 다음 처치이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 6세의 지속 기침·천명과 아토피 배경에서 객관적 가역성 평가를 위한 폐활량측정 A가 적합.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008179
