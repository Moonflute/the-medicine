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

활동성 결핵 환자와 접촉한 7세 여아의 IGRA가 양성이다. 증상은 없고 흉부 X선 등 평가에서 활동성 결핵은 배제됐다. 다음 조치는?

## 선택지

A. IGRA를 다시 검사할 때까지 치료 보류
B. 잠복결핵감염 치료 시작
C. 예방 목적으로 BCG 재접종
D. 활동성 결핵의 표준 4제 치료 시작

## 해설


활동성 결핵을 배제한 접촉자에서 IGRA가 양성이면 잠복결핵감염 치료를 고려한다. 구체적인 요법은 연령, 접촉한 환자의 약제 감수성, 병용약과 국내 진료지침을 바탕으로 정한다. IGRA 양성만으로 활동성 결핵의 4제 치료를 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000138 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 무증상·IGRA 양성·정상 흉부영상 LTBI에서 INH B는 여전히 가능한 대안. 현재는 짧은 rifamycin 요법을 선호하며 INH만 유일 권고라는 표현 수정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/mmwr/volumes/69/rr/rr6901a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000138
- 질병관리청·대한결핵및호흡기학회, 결핵 진료지침 제5판: https://tbzero.kdca.go.kr/tbzero/contents.do?leftMenuId=8&paramBoardId=C00059&paramMenuId=81
