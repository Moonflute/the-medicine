---
type: qbank
schema_version: 1
id: medqa-us-train-000290
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8bc3701281146ecdcf484fde775294db492084a207c842c4874914d8bb35bc2c
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "Abruptio placentae"
  - "Vasa previa"
  - "Uterine rupture"
  - "Uterine inertia"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2ge2MjOyXtCAoVXRlcmluZSBSdXB0dXJlKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 38주, 임신 2회, 출산 1회인 32세 여성이 지난 1시간 동안 발생한 질 출혈로 응급실에 내원했다. 환자는 출혈이 시작되기 전에 진통을 느꼈으나 출혈이 시작된 후 진통이 멈췄다고 보고했다. 또한 심한 복통을 호소한다. 첫째 아이는 태아 심박수 이상으로 하부 자궁 분절 횡절개 제왕절개술을 통해 분만했다. 맥박은 분당 110회, 호흡은 분당 17회, 혈압은 90/60 mm Hg이다. 진찰 결과 반동 압통이나 근육 방어(guarding)는 없는 미만성 복부 압통이 관찰되며, 진통은 느껴지지 않는다. 태아 심박수는 반복적인 가변성 하강(variable decelerations)을 보인다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 태반 조기 박리(Abruptio placentae)
B. 전치 혈관(Vasa previa)
C. 자궁 파열(Uterine rupture)
D. 자궁 무력증(Uterine inertia)

## 해설


진통이 멈추고 출혈이 시작된 상황에서 태아 심박수 감소와 복통은 자궁 파열을 시사한다. 이는 이전 제왕절개 흉터 부위에서 발생할 수 있는 급성 상황이다. 따라서 가장 가능성 높은 진단은 자궁 파열이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000290
