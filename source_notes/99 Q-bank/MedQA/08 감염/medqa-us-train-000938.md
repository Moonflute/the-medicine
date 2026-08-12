---
type: qbank
schema_version: 1
id: medqa-us-train-000938
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:83ef24fc79de259a1a792f0781884c0f2951b1322ef80d8a115f2bd56247e8f8
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "pleural effusion"
  - "consolidation"
  - "air bronchogram"
  - "loculated pleural effusion"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yVheyEsSDtnYnsiJggKE1hbGlnbmFudCBQbGV1cmFsIEVmZnVzaW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
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

49세 남성이 10일간 지속된 기침과 악화되는 호흡곤란으로 병원에 왔다. 그는 흡기 시와 기침 시 악화되는 날카로운 우측 흉통을 호소한다. 2주 전, 환자는 알코올 중독으로 길에서 의식을 잃어 병원에 입원했으나 의학적 권고를 무시하고 퇴원했다. 그는 관상동맥질환과 고혈압이 있으며, 복용 중인 약물은 없다. 매일 맥주 4캔을 마시고 20년 동안 하루 2갑씩 흡연했다. 체온은 38.5°C, 맥박은 110회/분, 호흡수는 29회/분, 혈압은 110/65 mmHg이다. 신체 검진상 치아 상태가 불량하다. 우측 폐 기저부에서 타진 시 둔탁음이 들린다. 우측 중엽 및 하엽 폐야에서 수포음(crackles)과 현저히 감소된 호흡음이 들린다. 흉부 X-선 검사상 우측의 국소화된 흉수(loculated pleural effusion)와 공기기관지조영술(air bronchogram)이 보이는 주변 폐의 경화가 관찰되며, 늑골 골절은 없다. 흉강천자를 시행하였다. 이 환자의 흉수 검사에서 가장 가능성이 높은 소견은 무엇인가?

## 선택지

A. 아밀라아제 200 U/L
B. 90% 이상의 림프구증가증
C. 흉수 LDH/혈청 LDH 비율 0.5
D. 포도당 30 mg/dL

## 해설


구역성 흉수는 일반적으로 저포도당, 고LDH, 고단백을 보이며, 감염성 흉수는 포도당이 60 mg/dL 이하로 감소한다. 환자는 알코올 중독과 구강 위생 불량으로 구강 무균성 흉수 가능성이 높으며, 저포도당이 가장 특징적인 소견이다. 따라서 포도당 30 mg/dL가 가장 가능성 높은 결과이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000938
