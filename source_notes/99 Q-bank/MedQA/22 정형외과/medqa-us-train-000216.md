---
type: qbank
schema_version: 1
id: medqa-us-train-000216
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:288a468d0de13762ecd69dc79c6ef06819e784c440daf955ada5549f5212f879
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "Posterior hip dislocation"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-yXieuNqeq0gOygiCDtg4jqtawgKEhpcCBEaXNsb2NhdGlvbikubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

교통사고 뒤 25세 환자의 한쪽 다리가 짧아 보이고 고관절이 굽혀진 채 안쪽으로 모여 돌아가 있다. 골반 X선에서 대퇴골두가 비구 뒤로 빠져 있다. 신경혈관을 확인한 뒤 가장 시급한 조치는?

## 선택지

A. 다리를 그대로 두고 일주일 관찰한다
B. 보조기로 고정하고 외래에서 재평가한다
C. 응급 고관절 정복을 준비한다
D. 먼저 물리치료로 가동 범위를 회복한다

## 해설

후방 고관절 탈구는 대퇴골두 혈류와 좌골신경을 위협할 수 있다. 동반 골절을 고려하며 숙련된 팀이 지체 없이 정복하고 신경혈관을 다시 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 후방 고관절탈구 D를 안전벨트 자체가 유발한다고 설명한 기전과 뒤차 안전벨트라는 오역을 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000216
