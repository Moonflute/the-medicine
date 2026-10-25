---
type: qbank
schema_version: 1
id: medqa-us-train-001790
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4d28117a334e8b015a02289ffffd34d596f89ec7d841baacf97712a3151a2c88
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "aortic regurgitation"
  - "bicuspid aortic valve"
  - "early diastolic murmur"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
question_type: diagnosis
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

32세 남성이 초진을 위해 내원했다. 건강하지만 지난 5년간 운동능력이 감소하고 호흡곤란이 증가했다고 한다. 노화 때문이라고 생각해 10년 동안 의사를 찾지 않았다. 청진에서 왼쪽 흉골연을 따라 방사되는 초기 이완기 감쇠성 잡음이 들린다. 미국에서 이 환자 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 매독
B. 결합조직질환
C. 점액종성 변성
D. 선천성 이첨판 대동맥판

## 해설


조기 이완기 감쇠성 잡음은 대동맥 역류를 의미하며, 선천성 이첨판 대동맥판이 가장 흔한 원인이다. 미국에서 이 질환이 가장 흔히 발견된다. 다른 선택지는 이 잡음과 연관성이 낮다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 32세의 초기 이완기 감쇠성잡음/진행 운동호흡곤란은 AR. 제시된 원인 중 선천 이첨판 D가 연령에 합당.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001790
