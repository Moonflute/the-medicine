---
type: qbank
schema_version: 1
id: medqa-us-train-005846
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:38c99836e4acec97d2272d2daf27970fba99981c348eb0b6611f96a2ef761be1
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "샤르코-마리-투스병"
  - "유전성 말초신경병증"
  - "근전도 및 신경전도검사"
  - "Charcot-Marie-Tooth disease"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sg6TrpbTsvZQt66eI66asLe2IrOyKpOuzkSAoQ2hhcmNvdC1NYXJpZS1Ub290aCBEaXNlYXNlKS5tZA
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

29세 여성이 최근 반복되는 낙상으로 일차진료를 받으러 왔다. 지난 1년 동안 다섯 번 넘어졌으며 전조 증상은 없고 어지럼증, 현기증 또는 시야 변화를 부인한다. 그러나 양쪽 다리에 힘이 빠지는 느낌이 생겼고 맨발로 카펫을 밟으면 이상하게 느껴진다. 어머니와 할머니도 비슷한 문제가 있다. 신체검사에서 다리와 발 근육 위축, 양측 하지 전반의 근력 4/5, 중간 종아리까지의 촉각 및 통각 저하, 양측 발목반사 소실이 보인다. 다음 중 진단을 위한 다음 최선의 검사는 무엇인가?

## 선택지

A. 발목-상완 지수
B. 근전도검사(신경전도검사 포함)
C. 요추천자
D. 뇌 MRI

## 해설

정답은 B, 신경전도검사를 포함한 근전도검사이다. 세대에 걸친 유사 증상, 원위 하지 근위축과 근력저하, 양측 원위부 감각저하 및 발목반사 소실은 Charcot-Marie-Tooth병 같은 유전성 감각운동 말초신경병을 시사한다. 신경전도검사와 근전도검사는 말초신경 병변을 확인하고 탈수초성/축삭성 유형을 구분하는 데 도움이 되며, 이후 임상과 가족력에 맞춘 유전검사를 고려한다. 중추성 증상 없이 뇌 MRI나 요추천자를 우선할 근거는 부족하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 하이드록시우레아/겸상적혈구병 해설은 다른 증례. 가족성 원위 감각운동신경병의 EMG/NCS로 교체. 원정답 B 유지.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/disorders/charcot-marie-tooth-disease

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005846
