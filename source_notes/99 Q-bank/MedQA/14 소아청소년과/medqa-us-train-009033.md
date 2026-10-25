---
type: qbank
schema_version: 1
id: medqa-us-train-009033
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f290d2b06361441e2d7b42b3114b56c61ddca91f045f185393d57f50159d4ec3
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "WAGR syndrome"
  - "Wilms tumor"
  - "11p13 deletion"
question_type: mechanism
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JyM66aE7Iqk7KKF7JaRIChXaWxtcyBUdW1vcikubWQ
difficulty: simple
answer: B
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

신생아의 배를 입힐 때 부어 있는 것을 발견한 어머니가 소아과에 데려왔다. 압통 없는 상복부 종괴, 홍채 결여, 잠복고환이 보인다. 복부 MRI에서 신장 내 기원의 종괴가 확인되었다. 다음 중 어떤 유전질환이 이 신생아의 소견을 가장 잘 설명하는가?

## 선택지

A. WT1 미스센스 돌연변이
B. 11p13 결실
C. 11p15 결실
D. 11p15 중복

## 해설

신장 내 종괴(윌름스종양), 홍채 결여와 잠복고환은 WAGR 스펙트럼을 시사한다. 11p13 영역 결실(B)은 WT1과 PAX6 등을 포함해 신장 종양 위험·비뇨생식기 이상·무홍채증을 설명할 수 있다. 본문은 무릎 결손을 기술하지 않으며 WAGR의 G는 비뇨생식기 이상을 뜻한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: WAGR의 비뇨생식기 이상을 근거 없는 무릎 결손으로 설명한 오류를 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009033
