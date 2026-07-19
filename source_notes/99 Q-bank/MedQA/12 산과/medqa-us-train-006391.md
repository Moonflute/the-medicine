---
type: qbank
schema_version: 1
id: medqa-us-train-006391
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:07c083d63f413b9ac83c75d117ccf7c13f872657ec4601716be8c2489edff03f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 질출혈"
  - "Rh 동종면역 예방"
  - "로감"
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 32주인 29세 여성(Gravida 1, Para 0)이 질출혈로 응급실에 내원했다. 지금까지 산전 진찰은 임신 가정용 검사 양성 후 산과에서 처음 한 번 받은 것뿐이다. 오늘 일찍 소량의 점상출혈을 발견했으나 점점 출혈량이 많아졌고 약 30mL의 출혈이 있었다고 추정한다. 경련, 통증 또는 수축은 없으며 태아의 움직임은 계속 느껴진다. 초음파와 태아 심박수 모니터링에서 합병증이 없고 건강한 태아가 확인되었다. 산과 의사는 산모와 환자를 병원에 데려온 아버지의 Rh 상태를 검사하도록 지시했다. 다음 중 이 상황에서 가장 적절한 관리 전략은?

## 선택지

A. 산모가 Rh 음성이고 아버지가 Rh 양성이면 로감 투여
B. 산모가 Rh 양성이고 아버지가 Rh 음성이면 로감 투여
C. 산모가 Rh 음성이고 아버지가 Rh 양성이어도 로감은 필요 없음
D. 임신 28주 이후에는 로감 투여의 이득이 없음

## 해설


Rh 음성 산모가 Rh 양성 태아(또는 아버지)와 접촉하면 태아 적혈구가 모체에 노출돼 Rh 감작이 일어나며, 재임신 시 심각한 용혈성 질환을 초래한다. 감작을 예방하기 위해 Rh 음성 산모에게는 태아/신생아 혈액이 섞인 경우 즉시 Rh 면역글로불린(로감)을 투여한다. 따라서 산모가 Rh 음성이고 아버지가 Rh 양성인 경우 로감 투여가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006391
