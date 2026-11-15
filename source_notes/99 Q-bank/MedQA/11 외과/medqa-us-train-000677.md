---
type: qbank
schema_version: 1
id: medqa-us-train-000677
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd060f9588581cfda261d07f1b3c5440dba60d81cdc072729045a51798a551d1
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "urinary retention"
related_disease_slugs: []
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
---

# MedQA US 임상문제

## 문제

40세 여성이 충수절제술 다음 날 소변을 보지 못하고 치골 위가 아프다. 방광 스캔으로 450 mL가 확인됐다. 요도 손상이나 도뇨 금기는 없다. 즉시 할 처치는?

## 선택지

A. 간헐적 도뇨로 방광을 비운다
B. 정맥 수액을 추가하고 배뇨를 기다린다
C. 정맥 푸로세미드를 투여한다
D. 경구 약제만 투여하고 팽창이 가라앉길 기다린다

## 해설


통증이 있는 급성 요폐와 방광 팽창은 먼저 도뇨로 해소한다. 첫 회에는 간헐적 도뇨를 고려하고 재발하면 잔뇨, 약물과 배뇨 기능을 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000677 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수술 후 통증성 방광 팽만과 450mL 잔뇨에서 도뇨 D가 적절하고 원문·해설이 일치한다. bethanechol이나 이뇨제로 급성 배액을 대체하지 않는다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/-/media/Files/Urologic-Diseases/UrinaryRetention_508.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000677
- https://pubmed.ncbi.nlm.nih.gov/39012634/
