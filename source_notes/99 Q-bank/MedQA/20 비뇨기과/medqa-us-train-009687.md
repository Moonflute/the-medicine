---
type: qbank
schema_version: 1
id: medqa-us-train-009687
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c4f833fba35af10ae0da71c03cc0c55282dae51e47898dc26ba61c066aa7c18
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "traumatic renal artery injury"
  - "외상성 신동맥 손상"
  - "renal ischemia"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2YiOq0gCDshpDsg4EubWQ
difficulty: standard
answer: B
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

교통사고 뒤 신장 주변에 큰 혈종이 생긴 27세 남성이다. CT에서 신동맥 손상과 진행 중인 조영제 유출이 보인다. 수혈과 소생에도 저혈압이 지속되고 혈관중재팀은 즉시 이용할 수 없다. 다음 처치는?

## 선택지

A. 추적 CT로 관찰한다
B. 응급 수술로 출혈을 통제한다
C. 일주일 뒤 혈관을 복원한다
D. 수액만 주며 소변량을 지켜본다

## 해설

소생에도 혈역학이 불안정하고 활동성 출혈이 계속되면 출혈 통제가 우선이다. 즉각 혈관중재가 불가능하면 응급 수술이 필요하다. 안정된 일측 신동맥 폐색과 같은 상황은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. A의 근거를 저혈압 동반 중증 혈관손상 평가·출혈 통제로 명확히 하고 일측 비조영 신장이면 반드시 전신 신부전/재건이라는 단정 제거.
- 공식/학회 근거: https://uroweb.org/guidelines/urological-trauma/chapter/urogenital-trauma-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009687
