---
type: qbank
schema_version: 1
id: medqa-us-train-005097
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6070a8343ea114ab408569410e9519a4f573e445be3bea82921accd873be90eb
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "고환 염전"
  - "크레마스터 반사 소실"
  - "응급 고환 고정술"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmOyXvOyghCAoVGVzdGljdWxhciB0b3JzaW9uKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 남아가 잠에서 깰 정도의 갑작스러운 하복부 통증과 구토로 내원했다. 복부 압통은 없지만 왼쪽 고환이 수평으로 높이 올라가 있고 압통이 심하다. 고환올림근반사가 없다. 가장 적절한 다음 조치는?

## 선택지

A. 먼저 복부 CT를 시행한다
B. 응급 비뇨의학과 평가와 수술적 탐색을 진행한다
C. 경구 항생제를 주고 다음 날 재진한다
D. 소변배양 결과를 기다린다

## 해설

청소년의 고환염전은 하복부 통증으로만 시작할 수 있다. 갑작스런 통증과 수평으로 높이 놓인 고환 등 의심 소견이 뚜렷하면 영상 대기로 수술을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 거고근반사를 손가락으로 고환이 움직이지 않는 것이라고 잘못 설명한 부분 교정.
- 공식/학회 근거: https://uroweb.org/guidelines/paediatric-urology/chapter/acute-scrotum

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005097
