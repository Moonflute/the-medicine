---
type: qbank
schema_version: 1
id: medqa-us-train-001231
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6aaed227041de4482442369676309deb2c128dc488a4880c0decd4396a0ab027
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "breast engorgement"
  - "breastfeeding"
  - "vitamin D deficiency"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yCsOyaleq4sCDsnKDrsKkg7Jq47ZiIIChQdWVycGVyYWwgQnJlYXN0IEVuZ29yZ2VtZW50KS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv67mE7YOA66-8IEQg6rKw7ZWN7KadIChWaXRhbWluIEQgRGVmaWNpZW5jeSkubWQ
difficulty: standard
answer: B
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

출산 4일째 산모의 양쪽 유방이 팽팽하고 아기가 젖을 물기 어렵다. 열은 없고 국소 발적이나 덩이는 없다. 초기 유방 울혈을 완화할 방법은?

## 선택지

A. 수유를 며칠 중단해 유방을 쉬게 한다
B. 젖 물리기를 돕고 필요하면 유륜이 부드러워질 만큼만 손으로 짠 뒤 수유한다
C. 예방적 항생제를 바로 시작한다
D. 유즙이 더 나오지 않을 때까지 세게 마사지하며 유축한다

## 해설

수유 초기 양쪽 유방의 팽창과 젖 물리기 곤란은 울혈일 수 있다. 아기의 수유를 돕고 필요할 때만 손으로 소량을 짜서 유륜을 부드럽게 한다. 강한 마사지와 과도한 유축은 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 유방울혈을 모유 비타민D 부족 탓으로 연결한 오류 수정.
- https://www.cdc.gov/breastfeeding-special-circumstances/hcp/diet-micronutrients/vitamin-d.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001231
- https://pubmed.ncbi.nlm.nih.gov/35576513/
