---
type: qbank
schema_version: 1
id: medqa-us-train-006507
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d5cb694af116bbb55319d3abd7505669050a60edb4f0d945bafff4c0c6bb247f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "분리불안장애"
  - "학교 거부"
  - "신체화 증상"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-u2iOyViCDsnqXslaAgKEFueGlldHkgRGlzb3JkZXJzKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 아이가 6주째 등교할 때 복통을 호소한다. 학교가 싫은 것은 아니지만 보호자와 떨어져 있는 동안 사고가 날까 반복해서 걱정한다. 또래 평가나 발표가 무서운 것은 아니고 신체 평가에 이상은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 사회불안장애
B. 분리불안장애
C. 광장공포증
D. 품행장애

## 해설


발달 수준에 비해 과도한 분리 두려움이 4주 이상 지속돼 등교에 지장이 있으면 소아 분리불안장애를 고려한다. 또래 평가나 장소에서 벗어나기 어려운 것이 두려움의 핵심은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 분리불안 해설에 섞인 비한국어 표현을 교정했다. 어머니와의 분리 두려움이 핵심인 정답 B는 유지한다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006507
- https://pubmed.ncbi.nlm.nih.gov/32439401/
