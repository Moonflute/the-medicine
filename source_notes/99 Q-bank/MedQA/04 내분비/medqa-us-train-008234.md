---
type: qbank
schema_version: 1
id: medqa-us-train-008234
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:af090ebcb2bfb0b8887f1d17c36f590e6660bf7e2860c14b5765d4dc9776cc6c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Leydig cell tumor"
  - "precocious puberty"
  - "testicular tumor"
related_disease_slugs:
  - MTMg67aA7J246rO8L-yEuOultO2GqOumrC3rnbzsnbTrlJTtnogg7IS47Y-sIOyiheyWkSAoU2VydG9saS1MZXlkaWcgQ2VsbCBUdW1vcikubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
question_type: investigation
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9UZXN0b3N0ZXJvbmUubWQ
---

# MedQA US 임상문제

## 문제

6세 남아에게 수개월 사이 거친 음모와 음경 비대가 생겼다. 왼쪽 고환에서 단단한 결절이 만져지지만 오른쪽 고환은 사춘기 전 크기다. 테스토스테론은 높고 LH·FSH는 억제되어 있다. 고환의 원인 병변을 확인할 첫 영상검사는?

## 선택지

A. 고해상도 음낭 도플러 초음파
B. 뇌하수체 MRI
C. 부신 CT
D. 손과 손목의 골연령 촬영

## 해설


한쪽 고환에 종괴가 있고 성선자극호르몬이 억제되어 있으면, 레이디히세포 종양 등 테스토스테론을 만드는 고환 병변을 의심한다. 음낭 초음파로 고환 내 병변을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008234 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 조기 virilization과 일측 고환 비대·정상hCG/AFP는 Leydig 종양 A의 androgen 생성에 부합.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008234
- https://uroweb.org/guidelines/paediatric-urology/chapter/testicular-tumours-in-prepubertal-boys
