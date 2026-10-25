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

17세 남아가 1시간 전 의식을 잃은 후 응급실에 왔다. 스케이트보드를 타다 넘어져 전신 경련과 입에서 피가 났고 경련은 1분 후 멈췄지만 몇 분간 의식이 없었다. 이전 발작은 없었으며 도착 시 혼란스럽고 사람과 장소에만 지남력이 있다. 혀 왼쪽에 작은 상처가 있고 혈액검사, 전해질, 독성검사, 심전도는 정상이다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 로라제팜 치료
B. 요추천자
C. 머리 CT
D. 뇌파검사

## 해설

첫전신발작과 낙상후 두통·지속혼란이 있어 급성구조병변/출혈을 평가할 두부CT(C)가 적절하다. 본문환자는 사람·장소만인지하므로 완전히회복해 정상이라고 설명하면 안 된다. 발작이이미멈춘상태에서 lorazepam을 일률적으로추가하지 않으며, 이후원인검사/EEG도 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 여전히혼란/불완전지남력인데 의식완전회복/정상진찰로 설명한 오류교정. C CT 유지.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng232/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002583
