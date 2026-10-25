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
answer: A
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

27세 남자가 1시간 전 교통사고 후 구급차로 응급실에 왔다. 초조해 보이며 혈압 85/60 mmHg, 맥박 110회/분, 호흡수 19회/분이다. 왼쪽 옆구리 멍과 하부 흉추 골절이 있고 침상안정과 정맥 수액을 시작했다. 소변검사에서 적혈구가 많고 조영 CT에서 오른쪽 신장은 정상 조영되지만 왼쪽 신동맥은 근위부만 보이며 주변에 소량의 혈액이 있고 왼쪽 신장은 조영되지 않는다. 비장은 정상이다. 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 즉시 수술적 탐색
B. 관찰 후 지연 복원
C. 신동맥 색전술
D. 신동맥 색전술 후 지연 신절제술

## 해설

저혈압을 동반한 외상 후 신동맥 단절/혈관 손상과 관류 소실이 의심되어 A, 즉각적 외과 평가·탐색이 적절하다. 혈역학적으로 불안정한 중증 신혈관 손상은 신속한 출혈 통제가 필요하다. 다만 안정화된 일측 신동맥 폐색과 정상 반대 신장의 경우에는 비수술적 관리가 가능한 상황도 있으므로 비조영 신장만으로 무조건 재관류 수술이라고 일반화하지 않는다. 수술 목표·재건 가능성은 출혈, 손상 형태와 허혈 시간에 따라 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. A의 근거를 저혈압 동반 중증 혈관손상 평가·출혈 통제로 명확히 하고 일측 비조영 신장이면 반드시 전신 신부전/재건이라는 단정 제거.
- 공식/학회 근거: https://uroweb.org/guidelines/urological-trauma/chapter/urogenital-trauma-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009687
