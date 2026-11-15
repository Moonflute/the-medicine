---
type: qbank
schema_version: 1
id: medqa-us-train-005191
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0c60f667fa06de86221064a21df0a794727388d017478eddf118c7c277e97471
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "극상근 파열"
  - "회전근개 손상"
  - "어깨 충돌 증후군"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-2ajOyghOq3vOqwnO2MjOyXtCAoUm90YXRvciBDdWZmIFRlYXIpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 넘어지며 어깨를 다쳤다. X선에 골절은 없고 수동으로는 팔이 끝까지 올라가지만 스스로 들면 약하다. 팔을 비스듬히 들어 올린 상태에서 아래로 누르는 힘을 버티지 못한다. 의심하는 힘줄은?

## 선택지

A. 위팔두갈래근 긴갈래
B. 어깨밑근
C. 극상근
D. 극하근

## 해설

능동 거상은 약하지만 수동 범위가 유지되고 극상근 저항 검사에서 힘이 떨어지면 극상근 파열을 고려한다. 영상으로 회전근개의 손상 범위를 확인할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 젊은 과사용 운동선수에서 극상근 파열이 항상 흔하다는 해설을 제한했다. 제시 선지 중 B가 가장 합당하지만 건병증과 파열을 검사만으로 확진하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005191
