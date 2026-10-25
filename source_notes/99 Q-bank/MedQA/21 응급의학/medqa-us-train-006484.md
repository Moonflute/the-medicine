---
type: qbank
schema_version: 1
id: medqa-us-train-006484
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4dbeada3c63255aed48203d65319e7b4020127d286375b211777d9e75a67a954
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "저혈당"
  - "교감신경 활성화 증상"
  - "심계항진"
question_type: investigation
related_disease_slugs:
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 간호사가 심계항진, 발한 및 불안정한 떨림으로 응급실에 내원했다. 흉통, 호흡곤란 또는 최근 질환은 부인한다. 심계항진이 발생하기 전에 팔과 다리에 힘이 빠지고 손가락이 저린 느낌이 있었다고 한다. 과거 병력과 수술력은 특이사항이 없다. 어머니는 그레이브스병이 있다. 비슷한 증상으로 응급실을 여러 차례 방문했지만 적절한 치료 후 퇴원했다. 오늘 체온은 37°C(98.6°F), 혈압은 128/84 mm Hg, 맥박은 규칙적으로 분당 102회, 호흡수는 분당 10회이다. 땀을 흘리며 불안해 보이고 동공은 5mm로 산동되어 있다. 그 외 진찰은 정상이다. 소변 독성검사와 β-hCG 결과를 기다리는 중이다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. TSH 농도 측정
B. 소변 메타네프린 측정
C. 손가락 채혈 혈당 측정
D. 심초음파

## 해설

반복되는 발한, 떨림, 두근거림과 쇠약은 저혈당 때 나타날 수 있으므로 증상이 있을 때 손끝 혈당을 신속하게 측정하는 것(C)이 우선이다. 저혈당이 확인되면 즉시 교정하고 원인을 평가한다. 간호사라는 직업만으로 고의적 약물 사용을 단정할 수는 없다. 혈당이 정상이거나 증상이 지속된다면 갑상샘 질환, 부정맥 등 다른 원인에 대한 평가도 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 발한·두근거림·쇠약에서 즉시 교정 가능한 저혈당을 확인하는 C를 유지하되 다른 감별 검사를 영구적으로 불필요하다고 단정하지 않는다.
- 공식/학회 근거: https://aci.health.nsw.gov.au/__data/assets/pdf_file/0007/196639/ACI-NSW-Adult-subcutaneous-insulin-prescribing-chart-user-guide.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006484
