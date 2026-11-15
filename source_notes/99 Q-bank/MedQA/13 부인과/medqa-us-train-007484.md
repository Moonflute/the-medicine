---
type: qbank
schema_version: 1
id: medqa-us-train-007484
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:00e9889cbd74383d132309502a5b81d2a94617f302af03de04c5f3e31f9f6b4e
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "BRCA 유전자"
  - "유전성 유방난소암"
  - "젊은 여성 유방 종괴"
  - "유방 초음파"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
difficulty: complex
answer: C
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

증상 없는 26세 여성의 어머니가 난소암으로 사망했고, 살아 있는 언니는 37세에 유방암과 난소암을 진단받았다. 가족 내 유전성 암 위험을 평가하려 할 때 가장 유용한 첫 단계는?

## 선택지

A. 본인에게 CA-125를 반복하고 가족 검사는 하지 않는다
B. 무증상인 본인의 유방 초음파 결과로 유전 위험을 판정한다
C. 유전 상담을 하고 가능하면 암이 발생한 언니부터 생식세포 검사를 한다
D. 본인에게 알려진 가족 변이 없이 단일 BRCA 변이만 검사하고 음성이면 유전 위험을 배제한다

## 해설

암이 발생한 가족부터 검사하면 가족 내 병적 변이를 찾을 가능성이 높다. 변이가 확인되면 다른 가족에게 해당 변이 검사를 제공하고, 환자가 검사를 받을 수 없으면 무증상 가족의 검사 한계를 상담한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 강한 유방/난소암 가족력의 유전평가와 27세 유방종괴 초음파 A 유지. 유전상담 선행 및 두 번째 환자 진단 평가를 명확히 함.
- https://www.uspreventiveservicestaskforce.org/uspstf/document/RecommendationStatementFinal/brca-related-cancer-risk-assessment-genetic-counseling-and-genetic-testing
- https://www.acr.org/-/media/ACR/Files/Practice-Parameters/Breast-US.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007484
- https://www.cancer.gov/about-cancer/causes-prevention/genetics/brca-fact-sheet
