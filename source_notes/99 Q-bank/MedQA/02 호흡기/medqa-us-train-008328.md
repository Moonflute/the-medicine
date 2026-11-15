---
type: qbank
schema_version: 1
id: medqa-us-train-008328
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6993a1823e96436bea155034d2988e6ce40b2817a1c0e14a837cfde24ca6096
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "asthma"
  - "bronchial hyperresponsiveness"
  - "methacholine challenge"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 도장 작업자가 일을 시작한 뒤 가슴이 답답하고 천명이 생기기 시작했다. 작업하는 주에 악화되고 며칠 쉬면 좋아진다. 안전하게 일상 활동이 가능하며 기존 천식은 폐기능검사로 확인됐다. 증상과 작업의 관련성을 객관적으로 확인할 방법은?

## 선택지

A. 흉부 CT 한 번으로 작업 관련성을 판정한다
B. 쉬는 날에만 최대호기유량을 한 번 측정한다
C. 일하는 날과 쉬는 날에 최대호기유량을 반복 측정해 비교한다
D. 피부단자검사의 양성 여부만으로 직업성 천식을 확진한다

## 해설

작업일과 휴무일에 최대호기유량을 일정하게 기록하면 일할 때 악화되는 기류제한을 확인하는 데 도움이 된다. 기존 천식이 업무로 악화되는 경우와 새로 생긴 직업성 천식은 전문 평가로 구분한다. 검사 목적으로 위험한 노출을 지속시키지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 이미 확진된 조절불량 천식이면 항상 유발검사가 필요하다는 설명을 객관적 진단 재확인으로 한정.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008328
- https://thorax.bmj.com/content/early/2022/03/21/thoraxjnl-2021-218597
