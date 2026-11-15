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
answer: B
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

50세 남성이 팔을 뻗은 채 넘어졌다. 어깨 수동 운동범위는 보존되지만 팔을 들어 저항을 버티는 빈 캔 검사에서 힘이 빠진다. 등 뒤로 손을 떼는 검사와 외회전 근력은 정상이다. 가장 의심되는 힘줄 손상은?

## 선택지

A. 견갑하근 힘줄
B. 극상근 힘줄
C. 극하근 힘줄
D. 소원근 힘줄

## 해설


빈 캔 검사의 근력 저하는 극상근을 포함한 회전근개 손상을 시사한다. 견갑하근은 등 뒤에서 손을 들어 떼는 검사로, 극하근·소원근은 주로 외회전 근력으로 평가한다. 필요하면 영상으로 손상 범위를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000946 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Empty-can/drop-arm의 극상근 연관을 유지하되 모든 검사 소견을 파열 확진으로 과장하지 않았다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000946
- https://orthoinfo.aaos.org/en/diseases--conditions/rotator-cuff-tears/
