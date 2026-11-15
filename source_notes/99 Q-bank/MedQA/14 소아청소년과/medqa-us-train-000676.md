---
type: qbank
schema_version: 1
id: medqa-us-train-000676
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fdca2d24b26ecfa9a4ca087cc5ecb49b3a7181b80661c661c030625a2ca01d96
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "neonatal conjunctivitis"
  - "Chlamydia trachomatis"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRXJ5dGhyb215Y2luLm1k
---

# MedQA US 임상문제

## 문제

생후 14일 신생아에게 점액농성 결막염이 생겼고 결막 검체에서 클라미디아가 확인됐다. 항생제 투여 방법으로 적절한 것은?

## 선택지

A. 항생제 안약만 사용한다
B. 경구 마크롤라이드로 전신 치료하고 추적한다
C. 눈을 생리식염수로 씻어 주고 관찰한다
D. 경구 독시사이클린을 첫 약으로 투여한다

## 해설


신생아 클라미디아 결막염은 코인두 등에도 감염이 있을 수 있어 국소 치료만으로는 부족하다. 경구 마크롤라이드를 쓰고 치료 반응을 확인한다. 생후 초기에는 분출성 구토가 생기는지도 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000676
- https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm
