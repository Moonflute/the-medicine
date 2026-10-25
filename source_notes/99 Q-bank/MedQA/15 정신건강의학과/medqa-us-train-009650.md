---
type: qbank
schema_version: 1
id: medqa-us-train-009650
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:91e3687cd66d51e23e6c304a95816293542b5af5a2e7b9e01714c74ddbd945da
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "schizophreniform disorder"
  - "조현양상장애"
  - "psychosis duration 1-6 months"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOyWkeyDgeyepeyVoCAoU2NoaXpvcGhyZW5pZm9ybSBkaXNvcmRlcikubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 볼링장 밖에서 소리치고 비명을 지르다 경찰에 의해 응급실로 왔다. 대마를 피우고 피자를 먹으며 ‘죽는다면 행복하게 죽겠다’고 말했다. 도착 후에는 협조적이지만 자신에게 오래전부터 기술이 이식되어 곧 죽을 것이라고 주장한다. 부모에 따르면 3개월 전 대학에 입학한 후 2개월 전부터 ‘기술’에 대해 말하고 무생물과 대화하기도 했다. 신경학적 진찰은 정상이고 원래 이야기에 집착하며 과거력과 약물에 대한 정보는 제공하지 않는다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 양극성장애
B. 단기 정신병적 장애
C. 정신병적 양상이 있는 주요우울장애
D. 조현양상장애

## 해설

망상과 환각을 시사하는 행동·와해가 약 2개월 지속되어 제시된 진단 중 조현병형 장애가 가장 가깝다. 경과는 1개월 이상 6개월 미만이며 이 진단을 조현병의 필연적 전구단계라고 부르지 않는다. 현재 대마 사용이 있어 물질 유발 원인도 확인해야 하고, 뚜렷한 주요 기분삽화가 제시되지 않아 양극성장애나 정신병적 우울증의 근거는 부족하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009650

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 증상2개월을 3개월 이상으로 잘못 설명하고 조현병형 장애를 필연적 전구단계로 부른 오류 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
