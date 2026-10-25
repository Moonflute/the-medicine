---
type: qbank
schema_version: 1
id: medqa-us-train-006737
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6fd6f91d52e30d6f924e37a2cb2013d510d2143dfc3d38d9f455dc6d0bcf3980
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "불면장애"
  - "수면 유지 장애"
  - "졸피뎀"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-u2iOuptCDsnqXslaAgKEluc29tbmlhIERpc29yZGVyKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9ab2xwaWRlbS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 밤에 여러 번 깨고 아침에 너무 일찍 일어나는 증상으로 노인의학 전문의를 방문했다. 7개월 동안 악화되었고 아침에 개운하지 않고 피곤하다. 고혈압과 양성 전립선비대증 병력이 있으며 흡연 경험은 없다. 취침 전 술이나 카페인은 마시지 않는다. 체온은 36.6°C(97.8°F), 혈압은 130/80 mm Hg, 심박수는 분당 77회이고 신체진찰은 정상이다. 수면위생을 상담한 후 이 상태의 관리에서 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 졸피뎀
B. 트리아졸람
C. 수면다원검사
D. 광선치료

## 해설

7개월간 지속된 수면 유지 불면에 대해 제시된 약물 중 원문은 졸피뎀을 선택한다. 그러나 만성 불면의 초기 치료는 수면위생 교육만이 아니라 CBT-I이며, 그것이 선택지에 누락되어 있다. 약물치료를 고려한다면 단기간의 이득·위험을 상담해야 하고 졸피뎀을 고령층에 무조건 안전한 일차 약으로 설명하지 않는다. 낙상·다음날 기능 저하와 수면 중 운전 등 복합 수면행동 위험이 있으며, 이런 행동의 과거력이 있으면 사용하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006737

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 졸피뎀을 노인에게 비교적 안전한 보편적 1차라 한 해설 교정. 만성 불면의 CBT-I 우선과 약물 사용 위험을 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://doi.org/10.7326/M15-2175
- https://www.fda.gov/consumers/consumer-updates/taking-z-drugs-insomnia-know-risks
