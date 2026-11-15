---
type: qbank
schema_version: 1
id: medqa-us-train-005263
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a0d37f3edd10107c7f6c6728e474598661e62c5ecb09b85c5937ee794b0f53c
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "임신 중 자궁경부 상피내종양"
  - "CIN III"
  - "출산 후 재평가"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gCDsg4HtlLzrgrQg7KKF7JaRIChDZXJ2aWNhbCBJbnRyYWVwaXRoZWxpYWwgTmVvcGxhc2lhKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 18주에 질확대경하 표적생검에서 CIN3가 확인됐다. 질확대경과 병리에서 침윤암은 의심되지 않는다. 관리는?

## 선택지

A. 임신 중 매 방문마다 자궁경관소파술
B. 즉시 고리전기절제술
C. 침윤암 예방을 위해 임신 중 자궁절제술
D. 임신 중 질확대경 추적을 계획하고 산후 재평가

## 해설

침윤 의심이 없는 임신 중 CIN3에는 일반적으로 즉시 절제하지 않는다. 임신 중 위험도에 맞춰 질확대경 추적을 하고, 병변이 악화되거나 침윤이 의심되면 재생검한다. 산후 질확대경은 분만 후 적어도 4주 뒤에 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신 CIN2/3의 산후 재평가 A 유지. 침윤 의심 없는 경우에 한하며 임신 중 감시를 보완.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7147428/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005263
- https://www.asccp.org/clinical-practice/practice-pearls/tips-for-best-practices-on-management-of-abnormal-cervical-cancer-screening-tests-in-pregnancy/
