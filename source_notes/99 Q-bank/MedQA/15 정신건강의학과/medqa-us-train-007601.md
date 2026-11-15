---
type: qbank
schema_version: 1
id: medqa-us-train-007601
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c7d4fe73a607a5b90da5f0d0da183ef48823d1c71f79fae4f50fb3877c0cd71f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조현병형 장애"
  - "정신병적 증상"
  - "음성 증상"
  - "망상"
  - "Schizophrenia"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 환자가 이전까지 일상생활을 잘했으나 3개월 전부터 환청, 피해망상, 와해된 말과 기능 저하가 계속된다. 뚜렷한 기분 삽화는 없고 신체질환과 물질 노출을 평가했다. DSM 기준에 따라 현재 경과에 맞는 진단은?

## 선택지

A. 단기 정신병적 장애
B. 조현병형 장애
C. 조현병
D. 망상장애

## 해설

조현병형 장애는 특징적인 정신병 증상이 1개월 이상 6개월 미만 이어진 경우다. 경과가 아직 끝나지 않았다면 잠정적으로 진단하고 치료와 추적을 지속한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007601
- https://www.ncbi.nlm.nih.gov/books/NBK546677/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 망상이 본문에 있는데 '망상·환각 부재'라고 한 해설 오류 교정. 조현병형 장애의 기간은 1~6개월로 명시.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
