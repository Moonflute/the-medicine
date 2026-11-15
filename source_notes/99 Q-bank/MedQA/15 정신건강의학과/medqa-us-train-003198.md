---
type: qbank
schema_version: 1
id: medqa-us-train-003198
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9724470674690a32fabe0e699ad5c3f310ccec198ce959a58f4e8eeb836aa9b7
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive disorder"
  - "mirtazapine"
  - "increased appetite and weight gain"
  - "anorexia nervosa history"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaXJ0YXphcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 주요우울장애로 항우울제를 시작하려 한다. 불면과 식욕 저하로 한 달 사이 3 kg 빠졌고, 진찰에서 조증이나 섭식장애의 단서는 없다. 우울증을 치료하면서 불면과 식욕 저하도 고려한 약은?

## 선택지

A. 플루옥세틴
B. 미르타자핀
C. 부프로피온
D. 둘록세틴

## 해설


미르타자핀은 항우울 효과가 있고 졸림·식욕 증가가 흔하다. 불면이나 식욕 저하가 두드러질 때 선택에 도움이 되지만, 대사 위험과 주간 졸림도 따져야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003198
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=200603875

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 미르타자핀의 'α2-항히스타민'이라는 수용체 분류 오류를 α2 길항과 H1 차단으로 정정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.cancer.gov/publications/dictionaries/cancer-drug/def/mirtazapine
