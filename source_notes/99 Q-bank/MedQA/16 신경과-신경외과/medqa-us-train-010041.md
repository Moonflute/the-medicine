---
type: qbank
schema_version: 1
id: medqa-us-train-010041
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b831c9c0432b6f4acf161a0a978fc153a1e81b7e1d03297c23e297deede6a3d7
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "하지불안증후군"
  - "철결핍"
  - "철분 검사"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2VmOyngCDrtojslYgg7Kad7ZuE6rWwIChSZXN0bGVzcyBMZWcgU3luZHJvbWUpLm1k
difficulty: complex
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 환자가 저녁에 앉거나 누우면 다리를 움직이고 싶고 걸으면 편해진다고 한다. 하지불안증후군으로 진단했다. 철 보충이 필요한지 확인하는 초기 검사는?

## 선택지

A. 혈색소만 확인
B. 혈청 칼슘과 인
C. 혈청 크레아틴키나아제
D. 혈청 페리틴과 트랜스페린 포화도

## 해설

하지불안증후군에서는 빈혈이 없더라도 철 저장과 이용 상태를 평가한다. 페리틴과 트랜스페린 포화도를 함께 확인해 철 보충을 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 철 검사 C 유지하며 ferritin/TSAT 평가를 명시. 화씨 온도 오역 복원.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC11701286/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010041
- https://pubmed.ncbi.nlm.nih.gov/39324694/
