---
type: qbank
schema_version: 1
id: medqa-us-train-003473
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:01b386807f9cd70a3a0994c357a677fdb65928c8d5f550ea890c7ca263fcad66
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "adjustment disorder"
  - "depressed mood"
  - "recent job loss"
  - "subthreshold depression"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yggeydkSDsnqXslaAgKEFkanVzdG1lbnQgRGlzb3JkZXIpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

24세 여성이 한 달간 슬픔과 짧게 반복되는 울음으로 내원했다. 아침마다 늦잠을 자고 침대에서 비디오게임을 하거나 책을 읽으며 대부분의 시간을 보낸다. 친구들과 어울리지 않지만 주간 독서모임에는 참석하고 가족 모임도 계획한다. 운동을 중단하고 더 많이 먹어 4주간 4 kg이 증가했다. 3개월 전 물리치료사 직장을 잃었고 3주 전부터 일주일에 몇 번 대마초를 피우기 시작했다. 자살사고는 없었다. 가장 가능성 높은 진단은?

## 선택지

A. 적응장애
B. 지속성 우울장애
C. 물질사용장애
D. 양극성장애

## 해설

실직이라는 스트레스 이후 나타난 우울·기능 저하가 다른 제시된 만성 기분장애나 조증, 물질사용장애의 기준을 뚜렷하게 충족하지 않아 보기 중 적응장애(A)가 가장 적절하다. DSM 기준에서 증상은 스트레스 시작 후 3개월 이내 발생하고, 스트레스/결과가 끝난 후 추가 6개월을 넘겨 지속되지 않는다는 조건을 구분한다. 증상이 경미해야 하거나 자살 위험이 없다는 진단은 아니며 별도 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 적응장애의 발생 시기를 6개월 이내라고 잘못 설명하고 자살 위험이 없다고 일반화한 해설을 교정했다.
- https://www.ncbi.nlm.nih.gov/books/NBK519704/table/ch3.t19/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003473
