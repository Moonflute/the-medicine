---
type: qbank
schema_version: 1
id: medqa-us-train-005489
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:805859c220a197c69aff17f3c3f03f542f71c21d69a14cc7663d3a94430da77b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "급성 후두개염"
  - "기도 폐쇄"
  - "비기관삽관"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riJ7ISxIO2bhOuRkOqwnOyXvCAoQWN1dGUgRXBpZ2xvdHRpdGlzKS5tZA
difficulty: standard
answer: C
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

5세 아이에게 39.5℃ 고열, 침 흘림과 흡기성 협착음이 있다. 목을 펴고 앞으로 기대어 숨 쉬며 공기 유입이 줄었다. 후두개염이 의심될 때 우선 조치는?

## 선택지

A. 혀누르개로 후두개를 바로 확인
B. 네뷸라이저 치료 뒤 아이를 눕혀 관찰
C. 자극을 최소화하며 마취·이비인후과팀과 통제된 환경에서 기도를 확보
D. 목 X선부터 찍은 뒤 기도 확보 여부를 결정

## 해설

고열·침 흘림·삼각대 자세와 호흡곤란은 치명적 상기도 폐쇄의 경고 신호다. 목 진찰이나 영상 때문에 기도 확보를 늦추지 않고, 안정화 뒤 항생제를 투여한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 비기관삽관을 경구 삽관으로 동일시한 오역을 삭제하고 숙련팀의 통제된 기도 확보를 강조.
- https://www.rch.org.au/clinicalguide/guideline_index/Acute_upper_airway_obstruction/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005489
