---
type: qbank
schema_version: 1
id: medqa-us-train-009228
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a1fb2ce20610a9192b454c146975fdf0d756600a23a74f627635e0bf00da37c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "duodenal peptic ulcer"
  - "십이지장 소화성 궤양"
  - "peptic ulcer disease"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si63snbTsp4DsnqUg6rak7JaRIChEdW9kZW5hbCBVbGNlcikubWQ
question_type: management
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

55세 여성이 무릎 통증으로 나프록센을 매일 먹던 중 명치 통증이 생겼다. 내시경에서 출혈 소견이 없는 십이지장 궤양이 확인됐다. PPI·항생제를 쓰기 전 헬리코박터 검사는 음성이고 나프록센을 계속 써야 할 이유는 없다. 어떤 치료가 적절한가?

## 선택지

A. 나프록센을 그대로 두고 제산제만 복용
B. 나프록센을 다른 비선택적 NSAID로 바꾸고 궤양 치료 없이 관찰
C. 나프록센을 중단하고 PPI로 궤양 치료
D. 헬리코박터 치료만 하고 나프록센은 계속 복용

## 해설


NSAID 관련 궤양에서는 가능한 한 원인 약을 중단하고 PPI로 치유를 돕는다. 헬리코박터가 확인되지 않았다면 제균 항생제를 일률적으로 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009228 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 식후 수시간·야간 통증과 빈혈을 보이는 소화성 궤양 사례에서 십이지장궤양 C가 선택지상 가장 부합함을 원문 대조. 실제 출혈 확진이나 치료 지침까지 승인한 것은 아님.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009228
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7667931/
