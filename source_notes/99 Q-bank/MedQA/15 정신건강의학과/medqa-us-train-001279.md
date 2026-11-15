---
type: qbank
schema_version: 1
id: medqa-us-train-001279
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dd5e88be10f5dd7d2c2c37dc120c92922920c7035eac61f66ab1964e56d92dbd
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive disorder"
  - "smoking cessation"
  - "erectile dysfunction"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
  - MjAg67mE64eo6riw6rO8L-uwnOq4sOu2gOyghCAoRXJlY3RpbGUgRHlzZnVuY3Rpb24pLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaXJ0YXphcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9TZXJ0cmFsaW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 남성이 주요우울장애로 SSRI를 복용한 뒤 성기능 부작용이 지속되어 약을 바꾸고 싶어 한다. 금연도 원하며 발작·섭식장애 병력은 없다. 적절한 항우울제는?

## 선택지

A. 부프로피온
B. 파록세틴
C. 벤라팍신
D. 아미트립틸린

## 해설


부프로피온은 성기능 부작용 부담이 상대적으로 낮고 금연 치료에도 쓰인다. 발작이나 신경성 폭식증·식욕부진증 병력은 투약 전 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001279
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/020358s070lbl.pdf
- https://pubmed.ncbi.nlm.nih.gov/41139602/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영·한 원문과 모든 선지·정답 대조. 흡연·성기능 부작용 우려가 있는 우울증에서 부프로피온 선택과 설명 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
