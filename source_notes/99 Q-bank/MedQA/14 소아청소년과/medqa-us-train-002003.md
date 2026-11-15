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
question_type: management
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

아이가 가정용 세정제를 마신 뒤 침을 흘리고 목이 아파 삼키지 못한다. 응급 평가에서 부식성 식도 손상이 의심된다. 가장 적절한 초기 조치는?

## 선택지

A. 기도를 먼저 평가하고 금식시키며 소아 전문팀에 신속히 연락한다
B. 마신 물질을 빼내도록 구토를 유도한다
C. 산성인지 알칼리성인지 추정해 반대 성질의 음료로 중화한다
D. 활성탄을 먹이고 증상이 사라지는지 본다

## 해설

삼킴 곤란과 침 흘림은 기도나 상부 소화관 손상의 경고 신호다. 기도 평가와 금식을 우선하고, 안정화한 뒤 전문팀이 내시경 필요성을 판단한다. 구토 유도나 중화는 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 부식성 물질을 강산에만 한정한 해설을 산·알칼리 화학 손상으로 바로잡았다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002003
- https://www.esge.com/assets/downloads/pdfs/guidelines/2016_s_0042_111002.pdf
