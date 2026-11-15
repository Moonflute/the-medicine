---
type: qbank
schema_version: 1
id: medqa-us-test-000072
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:49cc04c3f1bd293dd3626372d8b313551288b2321a29372e84bf74f1c2748508
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심장 타박상"
  - "둔상"
  - "트로포닌 상승"
  - "cardiac contusion"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 교통사고로 가슴을 핸들에 부딪쳤다. 혈압은 안정적이고 심전도는 동성빈맥 외에 이상이 없지만 트로포닌 I가 상승했다. 다른 응급 외상을 평가한 뒤 심장에 대해 적절한 조치는?

## 선택지

A. 심전도 감시가 가능한 곳에서 관찰하며 트로포닌을 추적한다
B. 심전도가 정상이므로 바로 퇴원시킨다
C. 심근경색으로 간주해 전신 섬유소용해를 한다
D. 모든 환자에게 폐동맥 카테터를 삽입한다

## 해설

흉부 둔상에서 초기 심전도가 정상이더라도 트로포닌이 상승하면 둔상성 심장손상을 배제할 수 없다. 감시하에 부정맥과 변화 양상을 확인한다. 혈역학적 불안정이나 지속 부정맥이 있으면 심초음파 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 심장타박상을 심근손상 없는 효소 상승이라고 한 모순 수정 및 37.5°F 오역을 99.5°F로 복원.
- https://www.east.org/education-resources/practice-management-guidelines/details/blunt-cardiac-injury%2C-screening-for

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000072
- EAST 둔상성 심장손상 선별 지침: https://www.east.org/mobile/practice-management-guideline/trauma/96
