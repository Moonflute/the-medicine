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
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

20세 대학 배구 선수가 5일 전 경기 후 시작된 왼쪽 어깨 통증과 팔을 올리기 어려운 증상으로 내원했다. 통증은 팔을 베개 아래 두고 자거나 팔을 들어 올리고 벌릴 때 심하다. 능동적 외전은 70°로 제한되지만 수동적 외전은 정상 범위에서 통증이 유발되고 왼쪽 어깨 근력은 4/5이다. 가장 가능성 높은 원인은?

## 선택지

A. C4-5 경추 추간판 돌출
B. 극상근 파열
C. 관절 내 상완골 골절
D. 어깨관절 탈구

## 해설

머리 위 동작 후 어깨 통증, 능동 외전 제한과 근력저하에 비해 보존된 수동 운동범위는 회전근개, 특히 극상근 손상을 시사한다. 선지 중 극상근 파열(B)이 가장 합당하다. 다만 20세 과사용 운동선수에서 완전 파열이 흔하다고 일반화할 수 없으며 통증에 의한 힘 억제·건병증과 실제 파열은 추가 평가로 구별한다. 탈구나 관절내 골절을 시사하는 변형·뚜렷한 외상은 없고 감각·반사 보존은 경추 신경근병증보다 어깨 국소 문제를 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 젊은 과사용 운동선수에서 극상근 파열이 항상 흔하다는 해설을 제한했다. 제시 선지 중 B가 가장 합당하지만 건병증과 파열을 검사만으로 확진하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005191
