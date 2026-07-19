---
type: qbank
schema_version: 1
id: medqa-us-train-008900
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f021d78acc98ebd4eded03cb5c17f8cb2f16199d39ddb2fb854357d391e52a75
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "prostate cancer screening"
  - "PSA discussion"
  - "shared decision making"
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

60세 남성이 정기 건강유지검사를 위해 내원했다. 건강하다고 느낀다. 5년 전 대장내시경은 정상이었다. 10세 때 연쇄상구균 감염 후 사구체신염을 앓은 것 외에는 중대한 질환이 없다. 아버지는 55세에 방광암으로 사망했다. 고무 공장에서 일하고 25년 동안 하루 한 갑을 피웠다. 매일 맥주 1~2캔을 마시며 약물은 복용하지 않는다. 폐렴구균 예방접종을 받은 적은 없다. 직장수지검사에서 종괴 없이 전립선이 약간 대칭적으로 커져 있다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 환자와 PSA 검사에 대해 상의한다
B. 폐렴구균 결합 백신을 투여한다
C. CT 요로조영술을 시행한다
D. 신장 초음파를 시행한다

## 해설


50대 남성의 전립선 비대와 가족력 등을 고려할 때 PSA 검사는 전립선암 선별에 대한 공유결정이 필요하다. 따라서 PSA 검사에 대해 상의하는 것이 적절하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008900
