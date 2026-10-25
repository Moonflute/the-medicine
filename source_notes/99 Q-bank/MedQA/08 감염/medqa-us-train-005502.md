---
type: qbank
schema_version: 1
id: medqa-us-train-005502
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e8a80dbc863844c3bbbff5f4646e55607d3603eea765906a7431d14d8224bf51
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "장티푸스"
  - "Salmonella Typhi"
  - "장미진"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yepe2LsO2RuOyKpCAoVHlwaG9pZCBGZXZlcikubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64-M67Cc7KeEIChFeGFudGhlbSBTdWJpdHVtKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

42세 남자가 10일 동안 발열, 비혈성 설사, 두통, 식욕부진과 복통으로 내원했다. 인도 여행 후 가슴과 몸통에 압박으로 창백해지는 발진이 생겼고 백혈구 수가 3,400/mm³이다. 가장 가능성 높은 진단은?

## 선택지

A. 장티푸스
B. 렙토스피라증
C. 말라리아
D. 비장티푸스성 살모넬라증

## 해설


인도 여행 후 고열, 장기간 설사, 발진, 백혈구 감소는 장티푸스(Salmonella Typhi) 감염을 시사한다. 다른 감염은 주로 간헐적 발열이나 혈구 이상이 다르다. 따라서 가장 가능성 높은 진단은 장티푸스이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005502 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 인도 여행·지속 고열·서맥성 반응·발진·백혈구감소의 enteric fever A를 원문 대조 유지. 없는 그림의 rose spot 형태를 추가하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005502
