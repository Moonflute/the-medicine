---
type: qbank
schema_version: 1
id: medqa-us-train-004425
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9039ac5dab8b8a3e7e73eebc263b4de68eb7adfdd8732b19966e933634de9ef7
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "급성 정신병"
  - "환청"
  - "피해망상"
  - "Schizophrenia"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 남성이 지난 48시간 동안 '이상한' 행동을 보여 룸메이트와 함께 응급실에 왔다. 환자는 목소리가 들리며, 그 목소리가 자신에게 비밀 메시지와 수행해야 할 지시를 말한다고 한다. FBI가 자신을 따라다니며 대화를 엿듣고 있다고 믿는다. 그들이 이 메시지를 듣고 자신의 비밀을 알아낼까 봐 걱정한다. 친구는 이 증상 전에 환자가 어떤 물질이나 기분전환용 약물을 복용했다고 생각하지 않는다. 약물 선별검사는 음성이었다. 신체검사에서 이상은 없다. 다음 중 이 환자의 증상을 가장 잘 겨냥할 수 있는 치료는 무엇인가?

## 선택지

A. 설트랄린
B. 리스페리돈
C. 클로르프로마진
D. 정신치료

## 해설

환청과 피해망상은 급성 정신병적 증상이며 제시된 선택지 중 2세대 항정신병약인 리스페리돈이 원문 선택이다. 48시간 경과만으로 조현병을 확정하지 않으며, 약물 선별검사 음성도 모든 물질 원인을 완전히 배제하지 않는다. 클로르프로마진은 1세대 항정신병약으로 급성 정신병에도 효과가 있지만 진정·기립저혈압 등 부작용을 고려한다. 장기에만 효과가 있어 배제한다는 기존 설명은 잘못이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004425

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 리스페리돈 1세대 오분류, 클로르프로마진은 장기만 효과라는 오류, 48시간 증상으로 조현병 확정 및 피해망상 오기 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
