---
type: qbank
schema_version: 1
id: medqa-us-train-007950
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8903729dcd186b6a156bc8e351b6d29ed48920b89daae92ac27084d450989d59
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "fourth heart sound"
  - "left ventricular hypertrophy"
  - "uncontrolled hypertension"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

69세 남자가 건강검진을 위해 내원했다. 현재 증상은 없다. 제2형 당뇨병, 고혈압, 우울증, 비만, 7년 전 심근경색 병력이 있다. 메토프롤롤, 아스피린, 리시노프릴, 히드로클로로티아지드, 플루옥세틴, 메트포르민, 인슐린을 처방받았지만 약을 규칙적으로 받지 않고 무엇을 복용하는지도 기억하지 못한다. 체온 99.5°F(37.5°C), 맥박 96회/분, 혈압 180/120 mmHg, 호흡수 18회/분, 산소포화도 97%이다. 신체검사에서 예상되는 심장 소견은?

## 선택지

A. 정상 S1과 S2
B. S1 전에 들리는 심음
C. S2 후에 들리는 심음
D. 심첨부의 전수축기 잡음

## 해설

오래된 고혈압과 심근경색 병력은 좌심실의 순응도 저하를 시사한다. 심방이 뻣뻣한 심실로 혈액을 밀어 넣을 때 S1 직전에 S4가 들릴 수 있어 B가 적합하다. 혈압 수치 하나만으로 모든 환자에서 S4가 반드시 들리는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 장기 고혈압·허혈성 심질환에서 S4의 생리를 설명하되 단일 혈압값만으로 필연적으로 생긴다고 단정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007950
