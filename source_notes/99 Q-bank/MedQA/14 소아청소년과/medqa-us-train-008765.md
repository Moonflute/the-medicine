---
type: qbank
schema_version: 1
id: medqa-us-train-008765
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e34c414ec33ccd5b4d911c3ae94735c98540f1609d8cc96b15458e464c87ca0f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "congenital toxoplasmosis"
  - "chorioretinitis"
  - "hydrocephalus"
question_type: diagnosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

산전 관리와 선별검사를 거의 받지 못한 26세 여성이 진통으로 응급실에 내원했다. 곧 여아를 출산했고 신생아에서 맥락망막염 증상이 관찰되었다. 산후 문진에서 어머니 집에 고양이가 여러 마리 있다는 것 외에는 특이사항이 없었다. 신생아 뇌 MRI에서 수두증, 여러 개의 점상 두개내 석회화, 피질하 고리형 조영증강 병변 2개가 보였다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 톡소플라스마증
B. 풍진
C. 단순포진바이러스 감염
D. 매독

## 해설


신생아의 망막염, 뇌 MRI에서 점상 석회화와 뇌실 확대는 선천성 톡소플라스마증의 전형적인 소견이다. 고양이와의 접촉이 위험 요인이다. 따라서 톡소플라스마증이 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008765
