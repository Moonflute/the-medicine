---
type: qbank
schema_version: 1
id: medqa-us-train-000647
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b7d3e72db050747a8b320b02ac5b643ca6a0948f5ff8a92c364351880a7f52b2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "nicotine dependence"
  - "Nicotine dependence"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByZW5vcnBoaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Ub3BpcmFtYXRlLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

하루 한 갑을 피우던 환자가 금연하면서 니코틴 패치를 제대로 사용하고 있다. 특정 상황에서 갑자기 강한 흡연 욕구가 생긴다. 패치를 유지하며 추가할 금연 방법은?

## 선택지

A. 갈망이 올 때 속효성 니코틴 껌을 사용한다
B. 갈망이 올 때 패치를 잠깐 붙였다 떼는 방식으로 바꾼다
C. 금단이 올 때만 바레니클린을 복용한다
D. 금단이 올 때만 부프로피온을 복용한다

## 해설

패치로 기본 니코틴 농도를 유지하면서 껌이나 로젠지로 돌발 갈망을 다룰 수 있다. 국내 금연 진료지침에서도 병합 니코틴 대체요법을 다룬다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000647
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12518755/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 니코틴 대체제를 '비니코틴 약물'로 묶은 분류 오류 제거. 원문 2차 클로니딘 정답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
