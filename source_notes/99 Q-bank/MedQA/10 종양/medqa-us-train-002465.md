---
type: qbank
schema_version: 1
id: medqa-us-train-002465
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43395ac5ad24dc835f778abfedafa7c7305abb77651b7850aa129bb0a8a10eb7
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "solitary brain metastasis"
  - "breast cancer metastasis"
  - "surgical resection"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

58세 유방암 환자의 단일 뇌전이를 완전 절제했다. 절제 공동은 2.2 cm이고 정위치료가 가능한 위치다. 다른 뇌전이는 없고 전신 상태는 양호하다. 재발을 줄이면서 인지기능 손상을 줄일 국소 보조치료는?

## 선택지

A. 절제 공동에 정위 방사선치료
B. 전뇌 방사선치료를 우선 시행
C. 증상이 생길 때까지 국소치료 없이 기다린다
D. 수술 부위를 추가로 광범위 절제한다

## 해설


수술한 뇌전이가 소수이고 절제 공동에 정위치료가 가능하면 공동을 표적으로 치료한다. 단일 공동에서 전뇌 방사선 대신 국소 정위치료를 사용하면 인지기능 손상 위험을 줄일 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002465 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 뇌 종괴를 병리 확인 전 유방암 전이로 확정하거나 모든 전이에서 수술이 최고라는 일반화를 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8917399/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002465
- https://pubmed.ncbi.nlm.nih.gov/34932393/
