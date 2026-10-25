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

5세 남아가 점점 쉰 목소리, 침흘림과 호흡곤란으로 응급실에 왔다. 기침은 없고 목을 과신전한 채 앞으로 기대어 앉아 있다. 체온 39.5°C, 흡기성 협착음과 공기 유입 감소가 있다. 다음 중 가장 적절한 처치는?

## 선택지

A. 알부테롤 네뷸라이저
B. 인두경검사
C. 정맥 항생제 투여
D. 비기관삽관

## 해설

고열·침흘림·삼각대 자세와 공기 유입 감소는 후두개염에 의한 기도 폐쇄 위험을 시사한다. 우선 숙련된 마취·이비인후과 팀이 통제된 환경에서 기도를 확보해야 하므로 보기 중 D가 기도 확보에 해당한다. 비기관삽관은 비강 경로이며 경구 삽관과 같은 용어가 아니다. 맹목적 비강 삽관이나 일반 진찰실에서 인두를 자극하는 검사를 권하는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 비기관삽관을 경구 삽관으로 동일시한 오역을 삭제하고 숙련팀의 통제된 기도 확보를 강조.
- https://www.rch.org.au/clinicalguide/guideline_index/Acute_upper_airway_obstruction/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005489
