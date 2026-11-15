---
type: qbank
schema_version: 1
id: medqa-us-test-000176
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b009c4ba11ee99e02920ee30b0d07358ffa369982e5e04adb3763b11b71e6386
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "긴장성 기흉"
  - "외상성 기흉"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4tOyepeyEsSDquLDtnYkgKFRlbnNpb24gUG5ldW1vdGhvcmF4KS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

흉부 외상 뒤 23세 환자의 숨이 차고 혈압이 76/45 mmHg로 떨어진다. 왼쪽 호흡음이 거의 없고 타진에서 과공명이 들린다. 긴장성 기흉이 의심될 때 우선 조치는?

## 선택지

A. 흉부 X선으로 확인한다
B. 기관지경을 준비한다
C. 소생을 마친 뒤 CT를 찍는다
D. 영상 확인을 기다리지 않고 즉시 흉강을 감압한다

## 해설

한쪽 호흡음 소실과 진행하는 저혈압은 긴장성 기흉의 경고다. 불안정하면 영상으로 확인하느라 감압을 늦추지 않고 확실한 배액으로 이어간다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 불안정 긴장성기흉 D를 유지하되 needle을 항상 최종·유일 치료처럼 설명하지 않는다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000176
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/
