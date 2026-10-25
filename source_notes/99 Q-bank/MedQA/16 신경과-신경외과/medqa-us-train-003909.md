---
type: qbank
schema_version: 1
id: medqa-us-train-003909
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:11ba61d3cd3ff90125b8eac3e93fb0bd159ad8e6d40a727db1466262416e6fc9
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "lateral medullary syndrome"
  - "Wallenberg syndrome"
  - "crossed sensory loss"
  - "medulla"
question_type: diagnosis
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
difficulty: standard
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

72세 여성이 식사 중 질식할 것처럼 보인 뒤 오른쪽 얼굴의 통각·온도 감각 소실, 왼쪽 몸의 동일한 감각 소실, 보행 불안정, 오른쪽 안검하수를 보였다. 다음 중 신경학적 병변의 가장 가능성 높은 위치는?

## 선택지

A. 내낭
B. 중뇌
C. 교뇌
D. 연수

## 해설

오른쪽 안면 통각·온도감각 저하는 동측 척수삼차신경핵/로, 왼쪽 몸 통각·온도감각 저하는 동측 척수시상로, 불안정 보행은 소뇌 연결로, 오른쪽 눈꺼풀처짐은 하행 교감신경 경로 침범을 시사한다. 이들이 함께 위치하는 외측 연수(D), 즉 Wallenberg 증후군이 가장 합당하다. 연하곤란도 의문핵 침범으로 설명할 수 있으나 안면 운동마비가 제시된 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 본문에 없는 안면마비를 추가한 해설을 교차 통각온도감각 소실·연수 외측 구조로 교정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003909
