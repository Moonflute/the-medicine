---
type: qbank
schema_version: 1
id: medqa-us-train-005389
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:73cb067c30807dfe94df47a56041af2c9f3572d688f708a755c79eb49816462f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "전기경련치료"
  - "역행성 기억상실"
  - "우울장애"
  - "Major depressive disorder"
question_type: adverse_effect
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: simple
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

29세 남자가 손목을 자른 뒤 병원에서 관찰 중이다. 장기간 단극성 우울장애가 있고 여러 항우울제를 시도했으며 자살 의도를 부인하지 않는다. 전기경련치료를 제안하려 한다. 다음 중 이 치료 후 이 환자에게 발생할 위험이 가장 높은 합병증은?

## 선택지

A. 두개내 출혈
B. 기억상실성 실어증
C. 급성 관상동맥증후군
D. 역행성 기억상실

## 해설

제시된 선택지 중 전기경련치료 후 발생할 가능성이 상대적으로 높은 것은 역행성 기억상실이다. 치료 전후의 기억과 새로운 기억 형성에 영향을 줄 수 있다. 질문은 가장 치명적인 합병증이 아니라 이 환자에게 가장 발생하기 쉬운 합병증을 묻는다. 심혈관 부작용 위험도 실제 시술 전 평가하지만 기저 신체질환이 없는 이 환자에서 제시된 급성 관상동맥증후군이나 두개내 출혈보다 기억 장애가 적절한 답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005389

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영문 at greatest risk를 가장 심각/위험한 합병증으로 오역한 질문과 해설 수정. 역행성 기억상실 답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
