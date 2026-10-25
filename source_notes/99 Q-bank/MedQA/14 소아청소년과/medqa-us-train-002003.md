---
type: qbank
schema_version: 1
id: medqa-us-train-002003
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6e3560f479502f143c526cbe6f68c89fbd9d93a7e3b7b88a7d4869179448d83d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "caustic ingestion"
  - "oropharyngeal injury"
  - "drooling"
question_type: diagnosis
related_disease_slugs:
  - MTEg7Jm46rO8L-qyveu2gOyZuOyDgSAoQ2VydmljYWwgVHJhdW1hKS5tZA
difficulty: complex
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

11세 남아가 침을 많이 흘리고 삼킬 수 없어 응급실에 왔다. 체온 99.1°F (37.3°C), 혈압 107/58 mmHg, 맥박 119/min, 호흡 14/min, 산소포화도 98%이며 혀가 비정상적으로 커지고 붉어져 있다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 부식성 물질 섭취
B. Diphenhydramine 섭취
C. 살충제 노출
D. 철분 과다복용

## 해설

심한 구강 통증, 혀의 홍반·부종과 침흘림/삼킴 불가는 부식성 물질 섭취(A)를 시사한다. 산과 알칼리 모두 구강·상부 소화관을 손상할 수 있으며 본문은 실제 물질을 확인하지 않아 강산이라고 확정할 수 없다. 정상 산소포화도만으로 잠재적 상기도 손상이 배제되는 것도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 부식성 물질을 강산에만 한정한 해설을 산·알칼리 화학 손상으로 바로잡았다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002003
