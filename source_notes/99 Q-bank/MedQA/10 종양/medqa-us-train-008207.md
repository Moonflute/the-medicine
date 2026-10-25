---
type: qbank
schema_version: 1
id: medqa-us-train-008207
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a889e221071bd3d0d27982ede1a44f9c1e1b2aedb777f579579bdb7099bf9f5
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "breast mass"
  - "fibroadenoma"
  - "ultrasound evaluation"
related_disease_slugs:
  - MTMg67aA7J246rO8L-yErOycoOyEoOyihSAoRmlicm9hZGVub21hKS5tZA
question_type: investigation
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

28세 여성이 2주 전 자가 유방검사에서 발견한 좌측 유방의 통증 없는 종괴로 내원했다. 이전 유방 종괴 병력은 없고 전반적으로 건강하다. 약물, 흡연, 음주, 유방암 가족력은 없다. 활력징후는 정상이며 좌측 유방 외측에 1~2 cm의 단단한 종괴가 있지만 피부 변화, 유두 분비나 함몰, 액와 림프절병증은 없다. 가장 적절한 다음 검사는?

## 선택지

A. 초음파
B. 유방촬영술
C. 유방 MRI
D. 초음파 유도 중심부 생검

## 해설


환자는28세로30세미만이며 새로운 만져지는 유방종괴의 초기 영상은 표적초음파 A가 적절하다. 피부·림프절 소견이 없거나 젊다는 이유로 fibroadenoma를 확진할 수는 없다. 초음파와 임상 의심도에 따라 diagnostic mammography 및 core biopsy 등을 추가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008207 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 28세를30대라고설명한연령오류교정; 초기US A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.radiologyinfo.org/en/info/acs-palpable-breast-masses

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008207
