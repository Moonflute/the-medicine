---
type: qbank
schema_version: 1
id: medqa-us-train-008278
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0534efdd9a558d4ca8379df0523f69ab108542ed876cec21234ea82194717cdd
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertension"
  - "Raynaud phenomenon"
  - "ACE inhibitor"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 여성이 정기 검진을 위해 내원했다. 건강하고 혼자 살며 은행원으로 일한다. 하루 담배 한 개비와 매일 밤 술 두 잔을 마신다. 손이 빨갛게 변했다가 하얗고 파랗게 변한 후 정상으로 돌아오는 대칭적인 통증이 간헐적으로 있다. 혈압 177/118 mmHg로 고혈압 치료를 시작했고 2주 후 팔과 다리에 체중 증가와 부종이 생겼다. 가장 적절한 다음 처치는?

## 선택지

A. 압박 스타킹
B. 푸로세미드
C. 현재 약물 용량 증량
D. 리시노프릴

## 해설

레이노 현상과 고혈압 때문에 디히드로피리딘계 칼슘통로차단제를 사용한 뒤 말초부종이 발생했을 가능성이 있다. D의 리시노프릴은 ACE억제제이며 ARB가 아니다. 원인 약물을 조정하거나 ACE억제제를 활용하여 혈압과 부종을 함께 관리할 수 있다. 약물명이 실제 제시되지는 않았으므로 추정임을 구별하고, 단순 체액과다로 간주하여 이뇨제만 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 리시노프릴을 ARB로 분류하고 ACE억제제 대신 ACE억제제를 쓴다는 자기모순을 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008278
