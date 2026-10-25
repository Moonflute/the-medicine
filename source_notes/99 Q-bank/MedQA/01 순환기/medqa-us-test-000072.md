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
question_type: diagnosis
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

27세 남성이 자동차 충돌 후 응급실에 내원했다. 안전벨트를 매지 않은 앞좌석 운전자로 정면 충돌했다. 심전도는 동성 빈맥 외에는 특이사항이 없다. 체온 99.5°F(37.5°C), 혈압 107/58 mmHg, 맥박 분당 120회, 호흡수 분당 17회, 실내 공기 산소포화도 98%이다. 링거액 2L와 모르핀을 투여했고 폐모세혈관 쐐기압과 트로포닌이 상승했다. 흉통을 호소하며 흉벽에 멍이 있다. 가장 가능성 높은 진단은?

## 선택지

A. 심장 타박상
B. 출혈
C. 폐 타박상
D. 타코츠보 심근병증

## 해설

안전벨트 없이 정면 충돌한 뒤 흉벽 멍과 흉통, 트로포닌 상승이 나타나 심장 타박상(둔상성 심장손상, A)을 의심한다. 트로포닌 상승은 심근손상의 단서이며 '심근손상 없이 효소만 상승한다'는 뜻이 아니다. 쐐기압 상승은 심기능 장애와 양립한다. 심전도가 동성 빈맥 외 특이하지 않더라도 상승한 트로포닌을 무시할 수 없다. 다른 흉부 손상이나 출혈도 함께 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 심장타박상을 심근손상 없는 효소 상승이라고 한 모순 수정 및 37.5°F 오역을 99.5°F로 복원.
- https://www.east.org/education-resources/practice-management-guidelines/details/blunt-cardiac-injury%2C-screening-for

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000072
