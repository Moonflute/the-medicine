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
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

23세 남성이 미식축구 중 태클을 당한 후 30분 동안 지속된 심한 오른쪽 어깨 통증과 움직이지 못하는 증상으로 응급실에 왔다. 오심은 있지만 구토하지 않았다. 오른쪽 상지는 외회전되고 약간 외전되어 있으며 어깨 관절은 압통과 빈 관절오목이 있고 상완골두가 오훼돌기 아래에서 만져진다. 양측 요골맥박은 만져진다. 다음 중 가장 적절한 다음 관리 단계는?

## 선택지

A. 니어 충돌검사
B. 폐쇄 정복
C. 어깨 외측 피부 감각검사
D. 팔 떨어뜨리기 검사

## 해설

정답은 C, 어깨 외측 피부 감각검사이다. 외회전·경한 외전 자세와 오훼돌기 아래에서 만져지는 상완골두는 전방 견관절 탈구를 시사한다. 정복 전에는 손상 기준 상태를 기록하기 위해 액와신경이 담당하는 어깨 외측 감각을 포함한 신경혈관 검사를 시행하고, 정복 후에도 반복한다. 요골맥박이 만져진다고 신경손상이 배제되지는 않는다. 액와신경 손상은 중요한 합병증이지만 모든 경우에 '가장 위험한 합병증'이라고 단정할 수 없고 혈관 손상 등도 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 액와신경 손상을 무조건 가장 위험한 합병증으로 부른 표현 수정. 신경손상 의심 여부와 관계없이 정복 전후 신경혈관 검사 기록 필요. 한국어 질문의 정복 전 평가로 유도한 추가 표현을 원문 next step에 맞춤. 원정답 C 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/dislocated-shoulder

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003150
