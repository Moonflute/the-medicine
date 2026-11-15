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
answer: C
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

범불안장애로 진단받은 27세 환자가 불면과 집중 저하로 일에 지장을 받아 장기 약물치료를 원한다. 조증이나 약물 금기는 없다. 일차 약물로 적절한 것은?

## 선택지

A. 알프라졸람 장기 단독
B. 부스피론을 불안할 때만 복용
C. 에스시탈로프람
D. 올란자핀 단독

## 해설

국내 범불안장애 약물치료 권고는 에스시탈로프람 등 SSRI를 일차 약물로 고려한다. 부스피론의 효과는 즉시 나타나지 않으므로 필요할 때 한 번씩 복용하는 약이 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001051
- https://www.koreascience.or.kr/article/JAKO202434438188928.do
- https://www.nice.org.uk/guidance/cg113/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 부스피론 '1세대 항불안제' 오분류와 보편적 우선 단정 제거. 제시 선지 중 범불안장애 약물 선택으로 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://www.medicines.org.uk/emc/product/15285/smpc
