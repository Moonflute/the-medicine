---
type: qbank
schema_version: 1
id: medqa-us-validation-000251
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:70b71419cdbc2364db2d52728251c1f7a76a42fc4fe954ffa919f997ae4d42dc
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "원형탈모증"
  - "비흉터성 탈모"
  - "양성 모발 당김 검사"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-ybkO2YlSDtg4jrqqjspp0gKEFsb3BlY2lhIEFyZWF0YSkubWQ
difficulty: standard
answer: A
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

40세 여성이 탈모로 진료를 받으러 왔다. 이달 초까지 건강했으나 아침 베개에 빠진 머리카락이 점점 많아지기 시작했고, 이후 계속 악화되어 아침에 샴푸할 때 머리카락이 한 움큼씩 빠진다고 한다. 다른 증상은 없고 과거력도 특이사항이 없다. 진찰에서 두피에 매끈하고 둥근 비흉터성 탈모반이 여러 개 보인다. 머리카락 다발을 힘껏 당기면 거의 모두 뽑힌다. 가장 가능성 높은 진단은?

## 선택지

A. 원형탈모증
B. 이차 매독
C. 두부백선
D. 발모벽

## 해설

매끈하고 둥근 비흉터성 탈모반은 원형탈모증(A)에 합당하다. 진행 중인 탈모반의 가장자리에서는 모발당김검사가 양성일 수 있으나 모든 원형탈모에서 항상 양성인 것은 아니다. 두부백선은 인설·부러진 모발 등이, 발모벽은 길이가 불규칙한 부러진 모발이 단서가 되며, 이차 매독에서는 좀먹은 듯한 탈모가 나타날 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Secondary syphilis 선지의 오역을 이차 매독으로 교정하고, 원형탈모의 모발당김검사 양성이 항상 나타나는 특징인 듯한 일반화를 제한했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000251
