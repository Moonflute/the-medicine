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

17세 여아가 두피, 눈썹과 속눈썹에 수개월 전부터 군데군데 탈모가 생겨 진료를 받으러 왔다. 대학 진학 준비와 성적 때문에 스트레스가 심하고, 숙제를 완벽하게 하려고 반복해서 다시 쓴다. 두피에 길이가 서로 다른 모발이 불규칙하게 섞여 있으며 뚜렷한 탈모 패턴은 없다. 가장 좋은 치료는?

## 선택지

A. 인지행동치료
B. 병변 내 스테로이드
C. 경구 그리세오풀빈
D. 전신 스테로이드

## 해설

불규칙한 분포의 탈모와 길이가 다양한 모발, 눈썹·속눈썹 침범은 반복적인 모발 뽑기인 발모광을 시사한다. 제시된 치료 중 습관반전훈련을 포함한 CBT가 적절하다. 스트레스가 악화 요인일 수 있지만 모든 원인이 스트레스나 강박장애로 확정된다는 뜻은 아니며 두피 질환 등도 감별한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001243

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 발모광을 스트레스·강박이 확정 원인인 것으로 설명한 문구를 반복 모발 뽑기와 습관반전 행동치료로 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
