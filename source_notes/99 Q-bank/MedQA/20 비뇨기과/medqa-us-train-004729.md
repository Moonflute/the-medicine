---
type: qbank
schema_version: 1
id: medqa-us-train-004729
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:efde903914bf0396e88fb907321d9fc17f01b1d0e6b7a7e3386bfb633d08306a
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "절박성 요실금"
  - "과민성 방광"
  - "요실금"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
difficulty: standard
answer: D
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

75세 여성이 밤에 소변을 자주 보느라 수면이 방해된다며 내원했다. 화장실에 제때 도착하지 못해 난처할 때가 많고 밤낮으로 소변이 샌다. 요역동학검사와 소변검사는 정상이다. 방광 조절을 향상하기 위한 행동 훈련을 하도록 교육받았다. 이 증상에 기여하는 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 범람성 요실금
B. 복압성 요실금
C. 완전 요실금
D. 절박성 요실금

## 해설

화장실에 도착하기 전에 누출되는 절박감·빈뇨의 양상은 D, 절박성 요실금에 가장 합당하다. 과활동방광은 임상적 증후군이므로 요역동학에서 배뇨근 과활동이 관찰되지 않아도 배제되지 않는다. 정상 요검사는 감염 가능성을 낮추며, 행동 훈련의 적절성은 증상·목표와 반응에 따라 판단하지 정상 검사만으로 무효라고 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정상 요역동학이면 행동 치료가 충분하지 않다는 잘못된 주장을 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004729
