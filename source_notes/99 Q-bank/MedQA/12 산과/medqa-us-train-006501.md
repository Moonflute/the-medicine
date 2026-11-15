---
type: qbank
schema_version: 1
id: medqa-us-train-006501
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b03baa279375bd4935072695a766cb8480979939ba09ed97cd5766eb9a0632e0
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "수유성 유선염"
  - "산후 유방 감염"
  - "모유수유 지속"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yCsOyaleq4sCDsnKDrsKnsl7wgKFB1ZXJwZXJhbCBNYXN0aXRpcykubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

출산 3주 된 여성이 수유 중 한쪽 유방의 붉고 아픈 부위와 38.6°C 발열이 이틀째 지속된다. 안정적이고 파동성 종괴는 없다. 세균성 유선염으로 판단했을 때 관리는?

## 선택지

A. 아기의 평소 수유에 맞춰 수유를 계속하면서 적절한 항생제를 쓴다
B. 항생제를 시작하면 해당 유방의 수유를 반드시 중단한다
C. 통증이 가라앉을 때까지 세게 마사지하고 과도하게 유축한다
D. 농양이 확인되지 않아도 바로 절개·배농한다

## 해설

세균성 수유성 유선염에는 항생제를 쓰면서 대부분 수유를 계속할 수 있다. 과도한 유축과 깊은 마사지는 피한다. 호전하지 않거나 파동성 종괴가 생기면 농양 등으로 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문 나이36을35로 오역; 세균성 유선염 치료와 정상 수유 지속·과도한 배출 회피.
- https://www.bfmed.org/assets/ABM%20Protocol%20%2336.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006501
- https://pubmed.ncbi.nlm.nih.gov/35576513/
