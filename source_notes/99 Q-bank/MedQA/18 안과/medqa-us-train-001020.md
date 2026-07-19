---
type: qbank
schema_version: 1
id: medqa-us-train-001020
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:46a8a84410efff4c7067660857e14688bb07b77f010424263bf6e5e5056de4ec
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "Choroidal melanoma"
  - "Macular degeneration"
  - "Open-angle glaucoma"
  - "Retinal detachment"
question_type: diagnosis
difficulty: simple
answer: B
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

75세 남성이 지난 1년간 점진적으로 독서에 어려움을 겪어 내원하였다. 현재 그는 도로 표지판을 읽는 데 어려움이 있어 운전을 피하고 있다. 심각한 질환의 과거력은 없으며 복용 중인 약물은 없다. 안저 검사에서 국소적인 망막 거상과 드루젠(drusen)이 관찰된다. 암슬러 격자(Amsler grid) 검사상 환자의 시야에 대한 설명이 제시되어 있다. 형광안저혈관조영술(fluorescein angiography)에서 초기 과형광(early hyperfluorescence)이 관찰된다. 이 환자의 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 맥락막 흑색종(Choroidal melanoma)
B. 황반변성(Macular degeneration)
C. 개방각 녹내장(Open-angle glaucoma)
D. 망막 박리(Retinal detachment)

## 해설


중심 시야 변형, 초기 과형광, 드루젠은 습성 황반변성을 특징짓는다. 따라서 가장 가능성 높은 진단은 황반변성이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001020
