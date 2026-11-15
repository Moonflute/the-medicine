---
type: qbank
schema_version: 1
id: medqa-us-train-002583
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2388f7b977f44f17c1b0e30beb5e3c101c0c46fca4e4db5a7d7795fe23435d5d
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "first unprovoked seizure"
  - "postictal state"
  - "electroencephalography"
  - "Generalized tonic-clonic seizure"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 환자가 스케이트보드를 타다 머리를 부딪친 뒤 전신 경련을 했다. 경련은 멈췄고 혈당과 활력은 정상이지만 한 시간 뒤에도 혼란이 남아 있다. 다음 검사는?

## 선택지

A. 외래 수면 뇌파검사만 예약한다
B. 요추천자를 먼저 한다
C. 응급 비조영 두부 CT를 시행한다
D. 항발작약 혈중 농도만 측정한다

## 해설

외상 뒤 발작과 지속되는 의식 변화가 있으면 두개내출혈이나 급성 손상을 우선 확인해야 한다. 초기 응급 영상으로 비조영 CT를 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 여전히혼란/불완전지남력인데 의식완전회복/정상진찰로 설명한 오류교정. C CT 유지.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng232/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002583
- https://www.nice.org.uk/guidance/ng232/chapter/recommendations
