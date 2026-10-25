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

23세 남자가 지난 한 달 동안 점점 심해지는 호흡곤란으로 내원했다. 소아기에 천식을 진단받아 벤톨린 흡입기로 조절했지만 지난 1년 동안 일주일에 여러 번 숨이 차고 주 1회 이상 야간에 깬다. 주간 축구 경기 중에도 호흡곤란이 발생해 흡입기를 사용해야 한다. 5개월 전 집 페인트칠 일을 시작했다. 신체검사는 정상이고 폐활량검사에서 최대호기유량은 정상의 약 85%이다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 동맥혈가스
B. 첩포검사
C. 메타콜린 기관지유발검사
D. 2개월 후 폐활량검사 반복

## 해설

과거 천식 진단은 있지만 현재 제시된 최대호기유량만으로 가변적 기류제한이 객관적으로 확인되지는 않았다. 기초 폐기능이 거의 정상일 때 C의 메타콜린 유발검사는 기도 과민성을 확인하는 데 도움이 된다. 이미 객관적으로 확진된 조절불량 천식에서 항상 필요한 검사는 아니며, 흡입기 사용법과 ICS 포함 치료, 새 직장의 도료 노출 및 작업 관련 증상도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 이미 확진된 조절불량 천식이면 항상 유발검사가 필요하다는 설명을 객관적 진단 재확인으로 한정.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008328
