---
type: qbank
schema_version: 1
id: medqa-us-train-005277
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cf75d1b990b07ceabd4204e7ada7d821e45c11adb260bdcd9f8620027460dbf2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "치료저항성 조현병"
  - "클로자핀"
  - "지속성 피해망상"
  - "Treatment-resistant schizophrenia"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남자가 지하철에서 소리를 지르다 경찰에 의해 응급실로 왔다. 작은 사람들이 자신을 죽이려 해 방어했다고 주장하며 과거 대마와 정맥주사 약물 사용, 여러 자살 시도가 있다. 할로페리돌과 디펜히드라민을 투여하고 일주일 동안 할로페리돌을 유지했으나 종이접시와 플라스틱 식기로 갑옷을 만들며 피해망상을 지속한다. 리스페리돈으로 교체한 다음 1주에도 피해망상과 물건 수집이 지속되어 중단했다. 현재 노숙 중이다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 플루페나진
B. 티오리다진
C. 올란자핀
D. 클로자핀

## 해설

지속되는 정신병과 반복 자살시도 병력에서 원문은 클로자핀을 다음 약물로 선택한다. 클로자핀은 치료저항성 조현병뿐 아니라 조현병/조현정동장애에서 지속적인 자살행동 위험을 낮추는 적응증이 있다. 다만 할로페리돌 1주와 리스페리돈 1주만으로 적정 기간의 두 치료 실패가 확인됐다고 말할 수 없으므로 이 정보만으로 치료저항성을 확정하지 않는다. 실제로는 진단·복약·투여량과 기간, 물질 요인, 현재 자살위험과 혈액검사 추적 가능성을 확인해야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005277

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 리스페리돈 1주 투여에도 지속된 증상과 노숙 맥락 복원. 각 1주 치료만으로 치료저항성 확정한 해설을 교정, 반복 자살시도에서 클로자핀 선택 가능성으로 제한.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7c748f8a-73ce-4bd3-aa30-9c66657f06ec&version=6
