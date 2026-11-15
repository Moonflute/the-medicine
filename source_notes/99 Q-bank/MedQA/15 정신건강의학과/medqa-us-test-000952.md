---
type: qbank
schema_version: 1
id: medqa-us-test-000952
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:fc469c4fdd3820a483e9fe56730275ddfbfac0bf05711c4ea1d31b1771c9b4ff
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "금연"
  - "니코틴 의존"
  - "바레니클린"
  - "Nicotine dependence"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 환자가 금연 보조약을 고르고 있다. 신경성 폭식증 치료를 받은 병력이 있다. 이 병력 때문에 발작 위험을 고려해 피해야 할 금연약은?

## 선택지

A. 부프로피온
B. 바레니클린
C. 니코틴 패치
D. 니코틴 껌

## 해설

신경성 폭식증의 현재 또는 과거 병력은 부프로피온 금기다. 환자 선호와 다른 금기를 확인해 바레니클린이나 니코틴 대체요법 등 대안을 검토하고 상담을 병행한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000952
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=200702571
- https://pubmed.ncbi.nlm.nih.gov/41084884/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 바레니클린을 단순 니코틴 수용체 차단제로 설명하고 패치를 일반적으로 배제한 오류 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2f86bb7b-c6a6-4915-8ba1-17251540971c
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=2563ea9f-6e29-2747-e054-00144ff88e88&type=display
