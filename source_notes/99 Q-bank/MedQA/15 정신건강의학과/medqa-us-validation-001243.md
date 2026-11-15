---
type: qbank
schema_version: 1
id: medqa-us-validation-001243
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:18ce59d0712582449c702eb296a03d8cee5fa84d0526a76d2cfd95f17c29491a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "발모광"
  - "강박장애"
  - "인지행동치료"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qwleuwlSDsnqXslaAgKE9ic2Vzc2l2ZS1Db21wdWxzaXZlIERpc29yZGVyLCBPQ0QpLm1k
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
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 환자의 두피에 길이가 다른 모발이 섞인 불규칙한 탈모반이 있고 인설은 없다. 긴장할 때 머리카락을 반복해서 뽑고 그만두려 해도 어렵다고 한다. 두피 질환을 감별한 뒤 우선 권할 치료는?

## 선택지

A. 습관반전훈련을 포함한 행동치료
B. 병변 내 코르티코스테로이드 주사
C. 경구 항진균제
D. 노출 및 반응방지 없는 항우울제 단독 치료

## 해설

발모광에는 뽑으려는 신호를 알아차리고 그 대신 할 행동을 연습하는 습관반전훈련이 도움이 된다. 발모 행동을 비난하거나 외모에만 초점을 맞추지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001243
- https://pubmed.ncbi.nlm.nih.gov/28005403/
- https://pubmed.ncbi.nlm.nih.gov/39528294/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 발모광을 스트레스·강박이 확정 원인인 것으로 설명한 문구를 반복 모발 뽑기와 습관반전 행동치료로 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
