---
type: qbank
schema_version: 1
id: medqa-us-train-009662
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef075bb13535fd434c5c63411e5ed99d43156bc056ca0d9c08e3a82f7168db52
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "sickle cell disease"
  - "겸상적혈구병"
  - "priapism"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: management
difficulty: standard
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

겸상적혈구병이 있는 17세 환자가 5시간 넘게 지속된 심한 통증성 발기로 왔다. 귀두에 비해 음경 해면체가 단단하고 허혈성 지속발기증이 확인됐다. 비뇨의학과와 신속히 할 처치는?

## 선택지

A. 수액만 주고 다음 날 다시 평가한다
B. 교환수혈을 마칠 때까지 국소 치료를 미룬다
C. 해면체 혈액 흡인과 해면체 내 페닐에프린 투여를 시행한다
D. 통증이 가라앉으면 처치 없이 귀가시킨다

## 해설


허혈성 지속발기증은 조직 손상을 예방하기 위해 신속히 감압한다. 겸상적혈구병이 있더라도 질환 특이 치료 때문에 흡인과 국소 약물치료를 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009662 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반복 관절통·빈혈성 잡음과 통증성 발기의 기저질환은 SCD A. 인종만이 아닌 동반 임상 단서와 혈관폐쇄 기전을 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009662
- https://www.auajournals.org/doi/10.1097/JU.0000000000002236
