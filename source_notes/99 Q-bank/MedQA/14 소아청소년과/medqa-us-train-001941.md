---
type: qbank
schema_version: 1
id: medqa-us-train-001941
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e08dc2b1d63f5cbcd20652e2ea0e6d2b349f548170ec82e0f67b9b1f2f9ed984
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "simple febrile seizure"
  - "febrile convulsion"
  - "discharge criteria"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Je07ISxIOqyveugqCAoRmVicmlsZSBDb252dWxzaW9uKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15개월 아이가 39℃ 발열 중 2분간 전신 경련을 했다. 발작은 한 번뿐이고 지금은 평소처럼 논다. 신경학적 이상이나 수막 자극 소견은 없다. 적절한 조치는?

## 선택지

A. 뇌 CT를 먼저 시행한다
B. 발열 원인을 평가하고, 일률적인 뇌 영상 없이 재진 기준을 안내한다
C. 퇴원 전에 매일 복용할 항경련제를 시작한다
D. 이미 경련이 멎었어도 즉시 정맥 로라제팜을 투여한다

## 해설

짧은 전신 발작 뒤 평소 상태로 돌아온 단순 열성경련은 보통 뇌 영상이나 장기 항경련 치료가 필요 없다. 발열 원인을 확인하고, 발작이 오래 지속되거나 반복되면 즉시 진료받도록 안내한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 회복된 단순 열성경련의 퇴원 C 유지. 시행되지 않은 정상 혈액검사를 창작한 설명 제거.
- https://www.rch.org.au/clinicalguide/guideline_index/Febrile_seizure/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001941
