---
type: qbank
schema_version: 1
id: medqa-us-validation-000845
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f30a14c1b94b692a30b4836afa4d86904463595993d1f3ed2e60b304e4448433
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "삼투성 탈수초화 증후군"
  - "중심교뇌수초용해"
  - "급속 교정 저나트륨혈증"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: diagnosis
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

폐 편평세포암으로 나트륨 118 mEq/L와 의식변화가 있던 65세 남성이 3% 식염수를 투여받아 6시간 뒤 나트륨이 129로 상승했다. 3일 후 사지마비와 구음장애가 발생했다. 치료 후 증상의 원인은?

## 선택지

A. 외측연수증후군
B. 내측연수증후군
C. 삼투성 탈수초화 증후군
D. 고칼슘혈증

## 해설


혈청 Na가 6시간 만에 118에서 129mEq/L로 급상승한 뒤 수일 후 사지마비와 구음장애가 생겨 삼투성 탈수초화 증후군(C)에 부합한다. 낮은 삼투압에 적응한 뇌에서 급격한 세포외 삼투압 상승이 수분 이동·세포 탈수를 일으켜 교세포와 수초를 손상시키는 것이 핵심이다. 단순히 뇌세포 외액이 증가해서 생기는 현상이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000845 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Na118→129의 6시간 과속 교정 뒤 지연 신경증상은 ODS C. 세포외액 증가가 아니라 삼투 변화·세포 탈수로 설명하고 누락된 6시간 복원.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000845
