---
type: qbank
schema_version: 1
id: medqa-us-train-006958
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0024d2240e7b89529e5896f2659575600ebf7596c28226ba874e86202dcfd8ba
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "베르니케 뇌병증"
  - "코르사코프 증후군"
  - "티아민 결핍"
  - "전향성 기억상실"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uyoOultOuLiOy8gC3svZTrpbTsgqzsvZTtlIQg7Kad7ZuE6rWwIChXZXJuaWNrZS1Lb3JzYWtvZmYgU3luZHJvbWUpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsgqzsmqkg7J6l7JWgIChBbGNvaG9sIFVzZSBEaXNvcmRlcikubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

장기간 음주와 영양결핍이 있었던 환자의 혼돈, 안진과 보행장애가 정맥 티아민 치료 뒤 호전됐다. 수주 뒤에도 새로운 일을 기억하지 못하고 기억의 빈틈을 사실처럼 이야기한다. 이 경과를 가장 잘 설명하는 것은?

## 선택지

A. 급성 알코올 중독
B. 알코올 금단 섬망
C. 주요우울장애에 따른 집중 저하
D. 코르사코프 기억장애

## 해설

급성 베르니케 뇌병증에서 회복한 뒤에도 새 기억을 형성하기 어렵고 작화가 남는 경우 코르사코프 기억장애를 고려한다. 작화는 고의로 거짓말을 하는 것과 다르다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006958
- https://pubmed.ncbi.nlm.nih.gov/20642790/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 티아민이 기억력을 회복시킨다면서 전향성 기억상실은 절대 호전 안 된다는 모순과 선지 문자 참조 제거. 코르사코프 기억장애의 상대적 지속성으로 설명.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
