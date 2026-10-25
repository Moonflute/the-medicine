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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여자가 임신 양성으로 내원했다. 자궁경부세포검사에서 고등급 편평상피내병변이 보이고 질확대경검사에서 CIN II와 III가 확인되었다. 임신 5주이며 신체검사는 정상이다. 다음 중 가장 적절한 관리 방법은?

## 선택지

A. 출산 6주 후 세포검사와 질확대경검사로 재평가
B. 자궁경관내 소파술
C. 고리 전기절제술
D. 진단적 절제술

## 해설

임신 중 CIN2/3이고 침윤암이 의심되지 않으면 절제치료를 미루고 감시한다. 산후 질확대경은 최소 4주 이후 시행하므로 6주 재평가 A가 보기 중 적절하다. 임신 중 추적 간격은 개별화하며 병변 악화·암 의심 시 생검한다. 자궁경관내 소파술은 금기이고 절제술은 암 의심 때만 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신 CIN2/3의 산후 재평가 A 유지. 침윤 의심 없는 경우에 한하며 임신 중 감시를 보완.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7147428/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005263
