---
type: qbank
schema_version: 1
id: medqa-us-train-003150
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:72e1730f16ce660ed5a2a449563593c9dab4e441b9ded527926e6d8d8c9dbb46
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "anterior shoulder dislocation"
  - "axillary nerve injury"
  - "sensation over lateral shoulder"
  - "neurovascular examination"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-unkOy0iOyLoOqyvSDshpDsg4EubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

23세 남성의 전방 어깨 탈구가 확인됐다. 손목 맥박은 만져진다. 정복 전후 비교를 위해 반드시 확인할 신경학적 소견은?

## 선택지

A. 엄지와 검지를 맞대는 힘만
B. 종아리 피부 감각
C. 팔꿈치 뒤쪽 압통
D. 어깨 가쪽 피부 감각과 액와신경 기능

## 해설

전방 탈구에서는 액와신경이 늘어나 손상될 수 있다. 어깨 가쪽 감각 등을 포함해 신경혈관 상태를 정복 전후 기록한다. 손목 맥박이 있어도 신경 손상은 가능하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 액와신경 손상을 무조건 가장 위험한 합병증으로 부른 표현 수정. 신경손상 의심 여부와 관계없이 정복 전후 신경혈관 검사 기록 필요. 한국어 질문의 정복 전 평가로 유도한 추가 표현을 원문 next step에 맞춤. 원정답 C 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/dislocated-shoulder

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003150
