---
type: qbank
schema_version: 1
id: medqa-us-train-008686
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8018c9f61a4d38e60059da4ae52f752c9956d8d682983c4fc5fc9692dd3bcd4
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "carpal tunnel syndrome"
  - "median neuropathy"
  - "nerve conduction study"
question_type: management
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yImOq3vOq0gCDspp3tm4TqtbAgKENhcnBhbCBUdW5uZWwgU3luZHJvbWUpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 여성이 밤마다 엄지와 검지·중지가 저리다. 야간 부목에도 점차 엄지 힘이 약해지고 무지구가 위축됐다. 검사로 수근관에서 정중신경의 중증 압박이 확인됐다. 다음 조치는?

## 선택지

A. 같은 부목만 계속 착용하며 악화를 기다린다
B. 수근관 감압수술을 평가한다
C. 척골신경 전방전위를 계획한다
D. 비타민을 먼저 수개월 복용한다

## 해설

감각 증상에 진행성 무지구 위축과 운동약화가 동반되면 정중신경 손상이 진행 중일 수 있다. 수근관 감압을 위해 수부 전문 진료를 앞당긴다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전기진단 선지 C를 유지하며 엄지두덩 감각 보존의 해부학적 이유와 EMG/NCS 용어를 구별했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008686
- https://www.aaos.org/quality/quality-programs/carpal-tunnel-syndrome/
