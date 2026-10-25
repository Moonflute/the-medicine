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
answer: A
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

33세 간호사가 PPD 피부검사에서 17mm 경결을 보여 감염내과로 의뢰되었다. 최근 수개월 동안 기침, 호흡곤란, 객혈, 체중 감소, 피로, 발열, 야간 발한은 없었다. 체온 36.1°C(97.0°F), 혈압 120/81 mmHg, 맥박 분당 82회, 호흡수 분당 15회, 산소포화도 98%이며 초기 흉부 방사선촬영은 정상이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 이소니아지드
B. 치료 필요 없음
C. 1주 후 PPD 반복
D. 리팜핀, 이소니아지드, 피라진아미드, 에탐부톨

## 해설


양성 TST와 증상·흉부사진상 활동성 결핵 근거 부재는 잠복결핵감염을 시사한다. 선지 중 이소니아지드(A)는 유효한 치료 대안이다. 다만 현행 지침은 가능한 경우 단기 rifamycin 기반 요법을 선호하며 이소니아지드 단독이 항상 최우선은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000126 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 36.1°C를 36.1°F로 옮긴 단위 오류 교정. LTBI 치료 A는 유효한 대안이나 현행 선호 단기 rifamycin 요법과 구별.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/mmwr/volumes/69/rr/rr6901a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000126
