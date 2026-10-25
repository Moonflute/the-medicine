---
type: qbank
schema_version: 1
id: medqa-us-train-008096
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:044c0e8b1c56889cc747a7b4a6f74ac3b2f43955f688e5090a9b43545b0bc0a1
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "intrauterine fetal demise"
  - "second-trimester fetal death"
  - "labor induction"
  - "Intrauterine fetal death"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 28주인 30세 여성(G3P0)이 산전 진찰을 위해 내원했다. 최근 몇 주 동안 태동을 세지 않았지만 간헐적으로 느꼈다. 출혈, 양수 누출, 자궁수축은 없다. 이전 임신은 12주와 14주에 자연유산되었다. 신체검사에서 태아 심음이 들리지 않고 초음파에서 임신 24주 태아 사망이 확인되었다. 환자는 태아 부검을 원하며 태아가 “가능한 자연스럽게” 나오기를 바란다. 가장 적절한 다음 처치는?

## 선택지

A. 제왕절개 분만
B. 자궁경부 확장 및 소파술
C. 자궁경부 확장 및 흡인술
D. 즉시 분만 유도

## 해설

자궁내 태아사망 후 부검을 원하고 태아가 온전하게 나오기를 바라는 환자에게 유도분만(D)이 적절하다. D&E는 수술적 배출로 유도분만과 다른 방법이며 부검의 완전성을 제한할 수 있다. 산모 안정화와 검사·정서적 지지 및 환자 선호에 따른 시기·방법 상담이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 유도분만과 D&E를 혼동한 해설 수정.
- https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2020/03/management-of-stillbirth

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008096
