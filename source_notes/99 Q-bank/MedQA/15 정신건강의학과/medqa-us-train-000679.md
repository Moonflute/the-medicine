---
type: qbank
schema_version: 1
id: medqa-us-train-000679
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:75e7bc0b413ce635895a0251c24f85730450cfcc13a171c2e301fac025fe3d80
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive episode"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MaXRoaXVtLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 남성이 지난 2년 사이 일상 기능을 떨어뜨린 주요우울삽화를 세 번 겪었다. 이번 삽화는 항우울제로 관해에 들어갔고, 부작용은 없다. 재발 예방 계획은?

## 선택지

A. 기분이 좋아졌으므로 이번 주에 중단한다
B. 관해 6개월에 맞춰 재발 위험과 무관하게 중단한다
C. 효과가 있었던 용량을 장기 유지하는 방안을 함께 결정하고 정기 재평가한다
D. 장기 유지 효과를 높이기 위해 반응한 약을 다른 계열로 바꾼다

## 해설

짧은 기간에 여러 삽화가 있었고 기능 저하가 컸다면 재발 위험이 높다. 효과가 있었던 약의 장기 유지와 정기 재평가를 고려하되 유지 기간은 개별화한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000679
- https://pubmed.ncbi.nlm.nih.gov/41139602/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 유지 2년 정답 유지. '6개월 호전이면 모두 2년' 오류 대신 반복 삽화와 기능저하에 따른 재발 위험을 근거로 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng222/chapter/Recommendations
