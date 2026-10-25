---
type: qbank
schema_version: 1
id: medqa-us-validation-001256
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:81a4f61d95e109911b9d1e244a185fa4c3991ebe3f60c7cb2079d24628041a90
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "바이러스성 수막염"
  - "콕사키바이러스"
  - "무균성 수막염"
  - "Coxsackievirus infection"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67CU7J2065-s7Iqk7ISxIOuHjOyImOunieyXvCAoVmlyYWwgTWVuaW5naXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: D
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

26세 남성이 4일간 고열, 피로, 구역과 두통으로 진료를 받으러 왔다. 두통은 머리를 띠로 조이는 듯 지속되고 밝은 빛을 보면 눈이 아프다. 목을 굽히면 무릎과 고관절이 굽혀진다. 뇌척수액에서 림프구 우세 백혈구 증가, 정상 포도당과 경한 단백질 상승이 보인다. 가장 가능성 높은 원인 병원체는?

## 선택지

A. 보렐리아 부르그도르페리
B. 결핵균
C. 단순포진바이러스 1형
D. 콕사키바이러스

## 해설


밝은 빛에 눈이 아프고 뇌척수액에 림프구 우위가 있는 급성 무균성 수막염은 콕사키바이러스가 가장 흔한 원인이다. 따라서 콕사키바이러스가 정답이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001256 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 명료의식 수막자극·림프구 우세/정상 glucose CSF는 enteroviral aseptic meningitis와 coxsackie D. HSV1뇌염·TB·신경보렐리아와 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001256
