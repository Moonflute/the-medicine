---
type: qbank
schema_version: 1
id: medqa-us-test-000616
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f545cf0dc60f197c0cd57cb582d71ff9aa8db2611fd111f7e4622b3a5dd459bc
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "급성 근긴장이상 반응"
  - "할로페리돌 부작용"
  - "추체외로 증상"
  - "Acute dystonia"
question_type: management
related_disease_slugs: []
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이틀 전 물질 유발 정신병으로 입원한 31세 남성이 8시간 동안 간헐적인 목 경직과 통증을 겪고 있다. 증상은 약 25분 지속되며 목이 오른쪽으로 돌아간다. 마지막 발작 중 턱을 가볍게 만지자 경직이 완화되었다. 입원 후 환각에 대해 할로페리돌을 6회 투여받았다. 불안해 보였고 체온 37.3°C(99.1°F), 맥박 108회/분, 혈압 128/86 mmHg였다. 진찰에서 목이 굽은 채 오른쪽으로 돌아가 있고 경직과 운동 범위 제한이 있었다. 다음 중 가장 적절한 치료는?

## 선택지

A. 벤즈트로핀
B. 물리치료
C. 단트롤렌
D. 바클로펜

## 해설

할로페리돌 투여 직후 발생한 통증성 사경과 국소 목 근육 수축은 급성 근긴장이상반응에 부합한다. 제시된 약물 중 항콜린제인 벤즈트로핀으로 치료한다. 고열·전신 강직·의식 변화 등이 특징인 신경이완제 악성증후군과는 구별해야 하며, 이 사례를 악성증후군이라고 부르지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000616

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 급성 국소 근긴장이상을 신경이완제 악성증후군과 동일시한 중대한 오류와 벤즈트로핀 오기 수정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.health.ny.gov/diseases/conditions/mimds/diagnosis.htm
