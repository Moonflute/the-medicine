---
type: qbank
schema_version: 1
id: medqa-us-train-006248
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f142432f5668b773c237b75765d866f7bfb76beb3921e940bd9f0d011e2c3bcc
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "급성 후두개염"
  - "세균성 후두개염"
  - "기도 폐쇄"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riJ7ISxIO2bhOuRkOqwnOyXvCAoQWN1dGUgRXBpZ2xvdHRpdGlzKS5tZA
difficulty: standard
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
---

# MedQA US 임상문제

## 문제

4세 남아가 열이 나고 침을 흘리며 목을 뒤로 펴는 것을 힘들어한다. 후인두벽이 부어 있고 몸을 앞으로 기댄 채 숨 쉬며 흡기성 협착음과 흉벽 함몰이 보인다. 가장 먼저 할 일은?

## 선택지

A. 소아 기도 전문팀을 호출해 기도 확보를 준비한다
B. 누운 자세로 경부 CT 먼저 찍는다
C. 혀누르개로 인두를 반복 확인한다
D. 혈액배양 결과가 나올 때까지 기다린다

## 해설

고열과 목의 움직임 제한, 후인두벽 팽윤은 후인두농양을 시사한다. 협착음과 흉벽 함몰이 있다면 검사나 인두 자극보다 기도 확보가 우선이다. 안정화 뒤 항생제와 배액 여부를 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 인두 뒤쪽 팽윤과 경부 강직은 후인두농양을 시사한다. 후두개염으로 잘못 연결한 설명을 교체하며 심한 상기도 폐쇄에서 기도 확보 우선이라는 A를 유지한다.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/Acute_upper_airway_obstruction/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006248
