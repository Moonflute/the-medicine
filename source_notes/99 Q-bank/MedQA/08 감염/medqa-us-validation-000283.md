---
type: qbank
schema_version: 1
id: medqa-us-validation-000283
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2a06246a55fa1ee0f44632af614fd0a926f0242a11ac487386fe9d3b8a16cd86
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV 직업적 노출"
  - "노출 후 예방요법"
  - "혈액 매개 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-q4ieyEsSBISVYg6rCQ7Je8IChBY3V0ZSBISVYgSW5mZWN0aW9uKS5tZA
question_type: prevention
difficulty: standard
answer: A
publication_status: "withheld"
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

채혈 중 환자의 혈액이 간호사의 눈에 튀었다. 즉시 물로 씻고 30분 만에 진료를 받았다. 혈액을 제공한 환자는 HIV 감염이 확인되었고 치료를 받지 않고 있다. 기본 검사와 감염내과 평가를 진행하면서 가장 먼저 할 조치는?

## 선택지

A. HIV 노출 후 예방요법을 즉시 시작한다
B. 노출자의 초기 HIV 항체검사가 양성으로 바뀔 때까지 기다린다
C. 눈을 씻었으므로 약은 투여하지 않는다
D. 노출 후 72시간이 지난 뒤 예방요법을 시작한다

## 해설


치료받지 않은 HIV 감염 환자의 혈액이 결막에 닿은 것은 직업적 점막 노출이다. 노출 후 예방요법은 검사 결과를 기다리며 늦추지 말고 가능한 한 빨리 시작한다. 통상 72시간 이내 시작해 28일 치료하며, 신장기능·상호작용과 출처 환자의 정보를 확인해 요법을 선택한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000283 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 점막 혈액 노출의 3제 PEP A 유지. Raltegravir 조합은 효능 부정이 아니라 pill burden 때문에 현재 우선 권고에서 빠진 대체 가능 옵션임을 2025 직업노출 지침으로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://stacks.cdc.gov/view/cdc/258795/cdc_258795_DS1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000283
- 미국 공중보건서비스 2025 직업적 HIV 노출 지침: https://pmc.ncbi.nlm.nih.gov/articles/PMC12616222/
