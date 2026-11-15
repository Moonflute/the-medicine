---
type: qbank
schema_version: 1
id: medqa-us-validation-001182
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0fd1ae87ca300aa25643b18bd34bec0f9d2279cc127d65d20b52f8839e89f2b6
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "각성제 사용"
  - "약물중독"
  - "동공확대"
question_type: investigation
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
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 청소년이 갑자기 심하게 불안해하며 땀을 많이 흘리고, 동공이 크고 맥박과 혈압이 높다. 발열과 저혈당 등 다른 응급 원인도 평가하고 있다. 교감신경 자극 물질 중독이 의심되는데 소변 선별검사는 음성이다. 적절한 해석은?

## 선택지

A. 선별검사가 음성이어도 노출을 배제할 수 없으므로 병력과 임상 상태에 따라 평가·처치한다
B. 검사가 음성이므로 중독 관련 감시는 중단한다
C. 선별검사가 음성이면 정신질환으로 확진한다
D. 검사 결과가 나올 때까지 활력 이상은 치료하지 않는다

## 해설

소변 선별검사에 포함되지 않은 물질이 있고 검출 시점에도 제한이 있다. 중독의 평가는 병력과 진찰을 바탕으로 하고, 현재의 체온·순환 등 위험 소견을 먼저 관리한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001182
- https://pubmed.ncbi.nlm.nih.gov/38669101/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 독성 선별검사를 확증으로 설명한 오류 교정. 원문 성위험·갑상선 가족력 복원해 다른 예방·감별 필요성도 보존.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.fda.gov/medical-devices/drugs-abuse-tests/drugs-abuse-home-use-test
