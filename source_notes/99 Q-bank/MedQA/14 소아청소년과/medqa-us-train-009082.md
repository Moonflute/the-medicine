---
type: qbank
schema_version: 1
id: medqa-us-train-009082
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c18202492e98e6520970751230b6e964108bac40b2c84e7afa63d587178beb9
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "neonatal clavicle fracture"
  - "birth trauma"
  - "immobilization"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4,670g(10파운드 5온스) 남아 신생아가 26세 산모에게 난산 후 만삭으로 태어났다. Apgar 점수는 1분과 5분 모두 9점이다. 분만실 검사에서 왼쪽 쇄골에 부종, 압통, 염발음이 있고 왼쪽 상지를 덜 움직인다. 손과 손목 운동은 정상이고 양손 파악반사도 정상이나 Moro 반사는 비대칭이다. X선에서 진단이 확인되었다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 물리치료
B. 소매를 셔츠에 고정
C. 팔 부목 고정
D. 쇄골 MRI

## 해설

출산 관련 쇄골 골절로 통증 때문에 팔을 덜 움직이지만 손목·파악 기능은 보존되어 있다. 대부분 보존적으로 치유되며 불편감이 있으면 소매를 셔츠에 고정해 부드럽게 지지(B)할 수 있다. 별도 단단한 팔 부목이 반드시 필요한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 단순 셔츠 소매 고정과 별도 팔 부목을 혼동한 설명 교정.
- https://medlineplus.gov/ency/article/001588.htm
- https://www.rch.org.au/clinicalguide/guideline_index/fractures/Clavicle_fractures_Emergency_Department/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009082
