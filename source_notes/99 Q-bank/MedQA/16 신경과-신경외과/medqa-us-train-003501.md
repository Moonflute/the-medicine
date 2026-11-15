---
type: qbank
schema_version: 1
id: medqa-us-train-003501
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:40f443dc356c6f3a1180a70c666b8262ca391516317562128b168f09a5e360bb
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "cortical laminar necrosis"
  - "status epilepticus"
  - "postictal neurologic deficit"
  - "hemiparesis"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64eM7KCE7KadIOyngOyGjeymnSAoU3RhdHVzIEVwaWxlcHRpY3VzKS5tZA
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 환자가 전신 경련을 계속한다. 기도·혈당을 평가했고 적절한 용량의 정맥 벤조디아제핀을 두 차례 투여했지만 경련이 멈추지 않았다. 다음 약물 단계는?

## 선택지

A. 라모트리진을 경구로 천천히 증량한다
B. 레베티라세탐 같은 2차 항발작약을 정맥으로 부하한다
C. 기도 감시만 하며 30분 더 기다린다
D. 경련이 지속되는 동안 정규용량 경구 약만 투여한다

## 해설

경련성 뇌전증지속상태가 초기 벤조디아제핀에 반응하지 않으면 정맥 2차 약물을 투여한다. 레베티라세탐, 포스페니토인 또는 발프로산 중 금기와 환자 상태를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 장시간 발작 후 피질 손상을 단순 전기적 손상이라고 부른 부정확한 기전을 에너지 요구 증가와 흥분독성 손상으로 교정했다. 지속되는 편측 피질 결손의 B를 유지한다.
- 공식/학회 근거: https://jnnp.bmj.com/content/jnnp/77/1/104.full.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003501
- https://pubmed.ncbi.nlm.nih.gov/26900382/
- https://www.nice.org.uk/guidance/ng217/chapter/treating-status-epilepticus-repeated-or-cluster-seizures-and-prolonged-seizures
