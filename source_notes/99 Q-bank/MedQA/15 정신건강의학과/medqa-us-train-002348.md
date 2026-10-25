---
type: qbank
schema_version: 1
id: medqa-us-train-002348
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9cdf739b1795a16715495ff0a3fafd66e737a410cce2825bdefc9f7ebadd5dc1
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "bulimia nervosa"
  - "eating disorder"
  - "postpartum depression"
question_type: risk_factor
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEse2PreyLneymnSAoQnVsaW1pYSBOZXJ2b3NhKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2PreyLneymnSAoQmluZ2UgRWF0aW5nIERpc29yZGVyKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

18세 여성이 임신 첫 달에 산과를 방문했다. 입덧 외에는 건강하다. 과거 체중 증가를 매우 두려워해 체중 감량을 위해 자주 하제를 사용했으며 치료 후 정상 체중을 회복했지만 가끔 질환과 씨름한다. 이 과거 질환은 임신에 어떤 영향을 줄 수 있는가?

## 선택지

A. 신생아 다운증후군
B. 산모의 산후우울증
C. 신생아 서맥
D. 신생아 빈혈

## 해설

체중 증가에 대한 심한 두려움과 감량 목적의 하제 사용, 치료 후에도 남아 있는 어려움은 섭식장애 병력을 시사한다. 섭식장애 병력은 임신·산후 정서적 어려움과 산후우울증(B)의 위험과 관련될 수 있다. 원문은 폭식이나 구토를 기술하지 않으므로 특정 폭식·제거 아형을 확정하거나 구토·설사 병력을 만들어 넣지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문에 없는 폭식·구토·설사를 추가하고 특정 섭식장애 아형으로 단정한 해설을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002348
