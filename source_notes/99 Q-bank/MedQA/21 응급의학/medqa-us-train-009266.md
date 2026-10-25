---
type: qbank
schema_version: 1
id: medqa-us-train-009266
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bfe8f05d138e1fe9b8bcb6bf7d9071e1f329f14cd39960a8bf0961957b54e09f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "cardiac tamponade"
  - "심장압전"
  - "obstructive shock"
question_type: mechanism
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 남자가 구급대에 의해 응급실로 이송되었다. 교통사고 당시 안전벨트를 매지 않은 운전자였다. 외상 소생실 도착 시 GCS는 13이며 방향감각이 없고 지시를 따르지 못한다. 체온 98.9°F, 심박수 142회/분, 혈압 90/45 mmHg, 호흡수 20회/분으로 얕고 양쪽 호흡음은 들리며 실내 공기 산소포화도는 98%이다. 기관은 정중앙이고 경정맥이 뚜렷하게 팽창하며 심장 청진에서 심음이 멀리 들린다. 흉골 위에 큰 멍이 있다. 이 환자의 저혈압 생리를 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 출혈로 인한 저혈량증으로 전부하 감소
B. 분포성 쇼크로 인한 저혈량증과 혈관용량 혈관 내 혈액 저류
C. 좌심실 충만 장애로 인한 좌심실 1회 박출량 감소
D. 말초혈관 저항 증가로 인한 후부하 증가

## 해설

외상 후 저혈압, 경정맥 팽창과 멀리 들리는 심음은 심장압전을 의심하게 한다. 심낭 내 압력 상승으로 심장의 이완기 충만이 제한되고 좌심실 박출량이 감소하므로 C가 적절하다. 이는 대동맥 압전이라는 질환이 아니며, 현대 쇼크 분류에서는 심장압전에 의한 폐쇄성 쇼크에 해당한다. 양쪽 호흡음과 정중앙 기관도 긴장성 기흉보다 이 진단을 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 대동맥 압전이라는 잘못된 명칭을 심장압전으로 교정하고 폐쇄성 쇼크의 충만 장애 기전 C를 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009266
