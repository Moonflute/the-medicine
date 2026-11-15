---
type: qbank
schema_version: 1
id: medqa-us-train-009221
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e1872a25c5a67c1d7789fce8a9d2fbef2132d683bd1b6c59036b55b8940c842
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "tricyclic antidepressant"
  - "삼환계 항우울제"
  - "anticholinergic effects"
question_type: risk_factor
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: standard
answer: D
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaXJ0YXphcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남성이 우울증 약을 바꾼 뒤 입마름과 변비가 심해졌고, 방광 팽만을 동반한 요폐로 응급실에 왔다. 처치와 함께 원인으로 가장 먼저 확인할 약은?

## 선택지

A. 에스시탈로프람
B. 미르타자핀
C. 부프로피온
D. 아미트립틸린

## 해설

아미트립틸린은 항콜린 효과가 커 구강건조, 변비와 요폐를 유발할 수 있다. 고령층에서 특히 주의하며 급성 요폐의 다른 원인도 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009221
- https://pubmed.ncbi.nlm.nih.gov/37139824/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 정상 소변검사로 기능성 요폐라 확정하고 페넬진이 항우울제가 아니라고 한 오류 교정. 아미트립틸린 항콜린 정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7cc62309-cb23-4888-afba-bb774658a748&type=display
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=513a41d0-37d4-4355-8a6d-a2c643bce6fa
