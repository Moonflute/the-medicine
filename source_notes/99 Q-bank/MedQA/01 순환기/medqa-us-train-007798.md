---
type: qbank
schema_version: 1
id: medqa-us-train-007798
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:277cd242d8a9cfdb836d4da1c0e316795ad89f2db5180a6d0e62af20d0516eaa
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "cardiac tamponade"
  - "pericardial effusion"
  - "pulsus paradoxus"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
question_type: management
difficulty: complex
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

그 밖에는 건강한 57세 남자가 5일 동안 점점 심해지는 호흡곤란과 운동 내성 저하로 응급실에 왔다. 최근 여행이나 불법 약물 사용은 없다. 체온 36.7°C(98.1°F), 혈압 88/57 mm Hg, 맥박 102회/분이다. 흡기 시 요골 맥박이 매우 약해진다. 양측 발에 1+ 부종, 경정맥압 13 cm, 약한 심음이 관찰된다. 경흉부 심초음파에서 호흡에 따른 양측 심실 유입의 상호 변화와 심실 이완기 허탈이 보인다. 다음 중 이 환자 상태의 가장 적절한 다음 처치는?

## 선택지

A. 심장 카테터 삽입
B. 심낭절제술
C. 심낭 배액
D. 심장 MRI

## 해설

저혈압, 경정맥압 상승, 약한 심음, 기이맥과 심초음파의 이완기 심실 허탈은 심낭압전을 시사한다. 불안정한 환자에서는 C의 긴급 심낭 배액이 필요하다. 심낭액이 반드시 혈액이라고 제시된 것은 아니며, 원인 평가를 위해 배액을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 심낭압전은 확인되지만 삼출액이 혈액이라는 근거는 없어 원인 단정을 제거.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007798
