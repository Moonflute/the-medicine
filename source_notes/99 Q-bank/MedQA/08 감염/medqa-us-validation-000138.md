---
type: qbank
schema_version: 1
id: medqa-us-validation-000138
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f533c949b925fe25bee278312f4878c7c258d1a1dc32a3d15700d91033eee6d6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "잠복결핵감염"
  - "인터페론감마 방출검사"
  - "이소니아지드"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yeoOuztSDqsrDtlbUgKOyEseyduCkgKExhdGVudCBUdWJlcmN1bG9zaXMgKEFkdWx0KSkubWQ
question_type: management
difficulty: complex
answer: B
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRXRoYW1idXRvbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
---

# MedQA US 임상문제

## 문제

인도에서 이주한 7세 여아가 건강검진을 받으러 왔다. B형간염 항원은 음성, 항체와 인터페론감마 방출검사는 양성이며 흉부 X선은 정상이었다. 가장 적절한 처치는?

## 선택지

A. 유도 객담 항산균 염색
B. 이소니아지드 투여
C. 투베르쿨린 피부반응검사
D. 이소니아지드, 리팜핀, 에탐부톨, 피라진아미드 투여

## 해설


무증상이고 IGRA 양성·흉부 X선 정상이라 잠복결핵 감염에 부합한다. 활동성 결핵이 배제되면 예방 치료가 필요하고, 선택지 중 isoniazid(B)는 유효한 대안이다. 현재는 적격 환자에서 짧은 rifamycin 기반 요법을 우선 권고하며 6–9개월 INH는 상호작용·접근성 등 상황에 따른 대안이므로 유일한 표준으로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000138 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 무증상·IGRA 양성·정상 흉부영상 LTBI에서 INH B는 여전히 가능한 대안. 현재는 짧은 rifamycin 요법을 선호하며 INH만 유일 권고라는 표현 수정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/mmwr/volumes/69/rr/rr6901a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000138
