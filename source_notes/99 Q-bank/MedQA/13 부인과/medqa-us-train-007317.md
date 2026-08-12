---
type: qbank
schema_version: 1
id: medqa-us-train-007317
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d235578d7c992f6f537893ebfc6d3239c1278e88d95dfb03d962223d42f56c24
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ASC-US"
  - "고위험 HPV"
  - "질확대경검사"
  - "자궁경부암 선별"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

31세 여자가 정기 자궁경부 세포검사를 위해 산부인과에 내원했다. 3년 전 자궁경부 세포검사는 정상이었다. 이번 검사에서 의미불명 비정형 편평세포(ASC-US)가 발견되었고 반사 HPV 검사에서 양성이다. 다음 중 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 3년 후 자궁경부 세포검사 반복
B. 1년 후 자궁경부 세포검사 반복
C. 질확대경검사
D. 고리 전기절제술(LEEP)

## 해설


ASC-US와 고위험 HPV 양성인 경우, 즉시 질확대경 검사를 통해 병변을 확인한다. 추적 검사나 즉시 LEEP은 과다 치료가 될 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007317
