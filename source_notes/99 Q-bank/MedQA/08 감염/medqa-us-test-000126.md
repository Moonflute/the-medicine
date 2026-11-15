---
type: qbank
schema_version: 1
id: medqa-us-test-000126
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0a9fec01f68ff3faff65ccac366f72cb283a86ba57fac8fab668aead14a58016
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "잠복결핵감염"
  - "양성 PPD"
  - "이소니아지드"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yeoOuztSDqsrDtlbUgKOyEseyduCkgKExhdGVudCBUdWJlcmN1bG9zaXMgKEFkdWx0KSkubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRXRoYW1idXRvbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
---

# MedQA US 임상문제

## 문제

약제 감수성 폐결핵 환자와 동거하는 33세 성인이 IGRA 양성이다. 무증상이며 영상 등 평가에서 활동성 결핵을 배제했다. 리팜핀 금기나 상호작용이 없을 때 국내 지침에서 우선 고려할 치료는?

## 선택지

A. 활동성 결핵과 같은 표준 4제 치료
B. 이소니아지드 1개월
C. 에탐부톨 4개월
D. 리팜핀 4개월

## 해설


활동성 결핵을 배제한 약제 감수성 환자의 접촉자에서는 리팜핀 4개월 또는 이소니아지드·리팜핀 3개월 등 단기 리팜핀 기반 요법이 우선이다. 이소니아지드 장기 단독요법은 리팜핀을 쓰기 어려울 때 대안이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000126 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 36.1°C를 36.1°F로 옮긴 단위 오류 교정. LTBI 치료 A는 유효한 대안이나 현행 선호 단기 rifamycin 요법과 구별.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/mmwr/volumes/69/rr/rr6901a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000126
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11704725/
