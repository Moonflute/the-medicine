---
type: qbank
schema_version: 1
id: medqa-us-validation-000946
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:545f4cb39d5c38e8337e24dc7a0d52f7089c375006e4bf4bf51778643fed3f8c
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "회전근개 손상"
  - "극상근 힘줄"
  - "빈 캔 검사"
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-2ajOyghOq3vOqwnO2MjOyXtCAoUm90YXRvciBDdWZmIFRlYXIpLm1k
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

건설업에 종사하는 50세 백인 남성이 몇 달 동안 지속되고 머리 위로 물건을 들어 올릴 때 악화되는 상완 통증으로 진료를 받으러 왔다. 최근 뻗은 손으로 넘어져 통증이 더 심해졌다. 팔의 내회전·외회전과 리프트오프 검사에서는 통증이 없지만 빈 캔 검사와 팔 떨어뜨리기 검사에서 심한 통증이 있다. 가장 가능성 높은 손상 구조는?

## 선택지

A. 대흉근 힘줄
B. 삼각근
C. 극상근 힘줄
D. 견갑하근 힘줄

## 해설


머리 위 작업 시 통증과 empty-can/drop-arm 검사 통증은 극상근 힘줄(C)을 포함한 회전근개 손상을 시사한다. Lift-off가 통증 없이 가능하면 주로 견갑하근 손상을 덜 지지한다. 회전 검사에서 통증이 없다는 것이 전체 어깨 통증이 없다는 뜻은 아니고, 통증성 검사만으로 완전 파열을 확진하지 않는다. 정확한 병변은 근력·운동범위와 필요시 영상으로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000946 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Empty-can/drop-arm의 극상근 연관을 유지하되 모든 검사 소견을 파열 확진으로 과장하지 않았다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000946
