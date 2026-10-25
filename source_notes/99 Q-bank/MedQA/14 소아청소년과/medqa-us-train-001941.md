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
answer: C
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

15개월 여아가 2분간 리듬성 눈 깜박임과 전신의 통제되지 않는 떨림을 보인 직후 응급실에 왔다. 에피소드 중 반응이 없었고 며칠간 발열과 가벼운 코막힘이 있었다. 예방접종은 최신이며 acetaminophen 투여 후 진찰실에서 깨어 장난감을 가지고 놀고 신경학적 검사는 정상이다. 다음 중 가장 적절한 관리 단계는 무엇인가?

## 선택지

A. 두부 CT
B. 24시간 관찰
C. 퇴원시킨다
D. lorazepam 투여

## 해설

발열 중 2분 전신 발작 후 완전히 회복하고 신경학적 이상·수막자극 징후가 없으면 단순 열성경련에 합당하다. 발열 원인을 평가하고 보호자 교육·재내원 기준을 제공한 뒤 퇴원(C)을 고려한다. 본문에는 혈액검사 결과가 없으며 단순 열성경련만으로 CT나 지속 항경련제가 필요하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 회복된 단순 열성경련의 퇴원 C 유지. 시행되지 않은 정상 혈액검사를 창작한 설명 제거.
- https://www.rch.org.au/clinicalguide/guideline_index/Febrile_seizure/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001941
