---
type: qbank
schema_version: 1
id: medqa-us-train-000349
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eb67c82197e7f41baf898e4483c67fefa089e7496b63faf7c9c3d6d40893dbb4
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "conjunctivitis"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRXJ5dGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 환자가 하루 만에 심해진 충혈, 눈통증과 다량의 고름으로 왔다. 닦아도 곧 고름이 다시 차고 시력도 떨어졌다. 급성 임균성 결막염을 의심할 때 초기 조치는?

## 선택지

A. 국소 항균 연고만 쓰고 일주일 뒤 추적한다
B. 검체를 채취하고 전신 세프트리악손 치료와 응급 안과 평가를 진행한다
C. 배양 결과 전에는 치료하지 않는다
D. 항알레르기 점안제로 경과를 본다

## 해설

고름이 빠르게 다시 차는 급성 결막염은 임균성 질환을 의심한다. 각막을 빠르게 손상시킬 수 있어 전신 항균치료와 응급 안과 평가를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 약물 선지 중 topical erythromycin C는 유지하되 모든 경증 결막염에 항생제가 필수/단일 최상이라는 단정을 교정.
- 공식/학회 근거: https://www.aaojournal.org/article/S0161-6420(24)00009-5/fulltext

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000349
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm
- https://www.uti.or.kr/include/pdf/KOREAN_STI_GUIDELINES_2023.pdf
