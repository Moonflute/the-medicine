---
type: qbank
schema_version: 1
id: medqa-us-train-005542
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a17a60ba7d05372959802fb0d47dfb225eee6c279d3b1402791ba2bc29d20015
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "대퇴동맥 관통상"
  - "혈관 손상"
  - "외상성 출혈"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2YiOq0gCDshpDsg4EubWQ
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

35세 남자가 왼쪽 서혜인대 근처 허벅지에 자상을 입고 응급실에 왔다. FAST는 정상이고 상처를 압박해 출혈을 조절하고 있으나 이전에 맥박성으로 혈액이 분출되었다. 혈압 100/50 mmHg, 맥박 110회/분이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 하지 CT
B. 하지 방사선촬영
C. 응고검사와 혈액형·교차시험
D. 근위 하지에 지혈대 적용

## 해설

현재 직접 압박으로 출혈이 조절되고 있어 응고검사와 혈액형/교차시험(C)으로 소생·수술을 준비하는 것이 보기 중 적합하다. 맥동성 출혈은 동맥 손상의 강한 단서이므로 신속한 혈관외과 평가와 확정 출혈조절을 병행한다. 검사 결과를 기다리며 출혈 처치를 지연해서는 안 된다. 서혜부 인접 접합부 상처는 일반 지혈대를 적용할 충분한 근위 공간이 없을 수도 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수혈 준비 C는 출혈 조절과 동시 시행할 단계이며 동맥 손상 처치를 검사 때문에 지연하지 않음을 보완.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005542
