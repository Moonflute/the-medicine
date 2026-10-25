---
type: qbank
schema_version: 1
id: medqa-us-train-001884
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ac688bf085e68b9441eabfa65060d5fdda86436a8649aadbe2970b8fd70e5109
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "RSV bronchiolitis"
  - "asthma risk"
  - "reactive airway disease"
question_type: prognosis
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IaM7JWEIOq4sOq0gOyngCDsspzsi50gKFBlZGlhdHJpYyBBc3RobWEpLm1k
difficulty: standard
answer: C
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

생후 6개월 남아가 정기진료를 위해 소아과에 왔다. 2개월 전 빈호흡과 천명으로 진료받아 중증 RSV 세기관지염으로 진단되었고 입원해 지지요법 후 회복했다. 향후 반응성 기도질환 가능성에 대해 다음 중 가장 정확한 설명은 무엇인가?

## 선택지

A. RSV와 천식 발생 사이에는 명확한 연관성이 없다
B. 천식이 생길 확률은 5% 미만이다
C. 천식이 생길 확률은 20%보다 높다
D. 천식 위험은 일반 인구보다 낮다

## 해설

입원할 정도의 영아 RSV 세기관지염은 이후 반복 천명·천식과 연관된다. 한 장기 코호트는 18세 천식/반복 천명 39%를 보고해 보기 중 C의 위험 증가 방향을 지지한다. 수치는 집단·진단 정의·추적기간에 따라 달라 개인의 확정 확률이나 RSV의 단독 인과효과로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 중증 RSV 이후 천명/천식 위험 증가 C의 취지 유지. 상대위험 20% 증가와 절대확률 혼동 및 모든 아이의 확률 단정 수정.
- https://pubmed.ncbi.nlm.nih.gov/20581410/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001884
