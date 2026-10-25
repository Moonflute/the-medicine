---
type: qbank
schema_version: 1
id: medqa-us-test-000551
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0abb87321e96f61b92016ae160000fd11d2636d2165c234014207a04cf3f6b4d
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "무통성 혈뇨"
  - "방광암"
  - "요로 종양"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyVlCAoQmxhZGRlciBjYW5jZXIpLm1k
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 65세 남성이 한 달 동안 소변이 붉게 보이는 증상으로 일차 진료를 받으러 왔다. 배뇨통은 없고 신체진찰에서 늑골척추각 압통도 없었다. 이 환자 혈뇨의 가장 가능성 높은 원인은?

## 선택지

A. 방광 종양
B. 신세포암
C. 비트 섭취로 인한 적뇨
D. 요로감염

## 해설

정답은 A, 방광 종양이다. 고령자의 한 달간 지속되는 무통성 붉은 소변은 방광암을 포함한 요로 악성종양을 배제해야 하는 증상이다. 신세포암도 무통성 혈뇨를 일으킬 수 있으나 제시된 선택지와 임상 양상에서는 방광 종양이 가장 가능성이 높다. 소변색만으로 혈뇨를 확진하지 않고 요검사와 적절한 요로 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 선택지 중 무통성 육안혈뇨의 방광종양 A는 타당. 모든 고령자 혈뇨의 가장 흔한 원인 또는 RCC는 통증이 있어야 한다는 일반화 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000551
