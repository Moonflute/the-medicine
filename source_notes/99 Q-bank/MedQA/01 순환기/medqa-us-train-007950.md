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
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
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


고혈압이 180/120 mmHg인 경우 좌심실 비대가 진행되어 제4심음(S4)이 들린다. 따라서 예상되는 심음은 S1 전에 들리는 심음이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007950
