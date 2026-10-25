---
type: qbank
schema_version: 1
id: medqa-us-validation-001051
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1e64b7800992bab3087ec802424aaa58b265ca1b8bd57379e984e4c22bf06f8a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "범불안장애"
  - "과도한 걱정"
  - "부스피론"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uylCDrtojslYgg7J6l7JWgIChHZW5lcmFsaXplZCBBbnhpZXR5IERpc29yZGVyKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaXJ0YXphcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여성이 7개월간 지속된 피로, 두통, 집중력 저하로 진료를 받으러 왔다. 잠들고 수면을 유지하기 어렵고 근육통과 안절부절못하는 느낌이 있으며, 생활비와 부모의 진로 평가, 직장 동료와 상사가 자신의 업무를 어떻게 생각하는지 지나치게 걱정한다. 가장 적절한 약물치료는?

## 선택지

A. 부스피론
B. 미르타자핀
C. 올란자핀
D. 트라조돈

## 해설

7개월간 여러 영역의 통제하기 어려운 걱정에 불면·근긴장·피로·집중 저하가 동반되어 범불안장애를 시사한다. 제시된 약물 중 부스피론이 적절하며 비벤조디아제핀성 세로토닌 5-HT1A 부분 작용제로 설명한다. '1세대 항불안제'라는 분류는 맞지 않고 SSRI나 CBT보다 항상 먼저라는 뜻은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001051

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 부스피론 '1세대 항불안제' 오분류와 보편적 우선 단정 제거. 제시 선지 중 범불안장애 약물 선택으로 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://www.medicines.org.uk/emc/product/15285/smpc
