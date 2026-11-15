---
type: qbank
schema_version: 1
id: medqa-us-train-003096
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68ed38f03789bb7365e562da9f9d427ab2ad64e15a210fa813132b2e55113d40
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "functional asplenia"
  - "sickle cell disease"
  - "Howell-Jolly bodies"
  - "splenic dysfunction"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: management
difficulty: simple
answer: A
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

겸상적혈구병으로 비장이 제대로 기능하지 않는 12세 아이가 39°C의 열로 응급실에 왔다. 지금 혈압은 정상이고 뚜렷한 감염 부위가 없다. 다음 조치는?

## 선택지

A. 혈액배양을 신속히 채취하고 경험적 비경구 항생제를 투여한다
B. 열 이외에는 괜찮으므로 해열제만 복용하고 귀가한다
C. 혈액배양이 양성일 때까지 항생제를 미룬다
D. 예방접종 이력이 있으므로 세균 감염을 배제한다

## 해설


겸상적혈구병의 기능적 무비증은 침습 세균 감염 위험을 높인다. 열이 나면 안정적으로 보여도 신속히 평가해 배양을 채취하고 필요 항생제를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003096 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 기능적 저비장증에서 핵 잔여물 Howell-Jolly body C가 남는 기초 병리를 확인.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003096
- https://publications.aap.org/pediatrics/article/154/2/e2024066842/197803/Health-Supervision-for-Children-and-Adolescents
