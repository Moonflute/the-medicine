---
type: qbank
schema_version: 1
id: medqa-us-train-007744
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d6d51cf1b5c7d59b5e180ee731724e586d160be97aa1a88d4a9f4c5241111f64
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "pancreatic cancer"
  - "truth disclosure"
  - "medical interpreter"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: communication
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

73세 남성이 황달로 입원했고 영상에서 췌장 종괴가 확인됐다. 의사결정능력이 있는 환자에게 아직 결과를 설명하지 않았다. 자녀가 환자에게 알리지 말아 달라고 한다. 첫 대응으로 적절한 것은?

## 선택지

A. 가족의 요청대로 환자에게 결과를 숨긴다
B. 가족에게 우려를 듣고, 환자 본인이 원하는 정보와 가족 참여 범위를 확인한다
C. 환자를 만나지 않고 보호자에게만 진단과 치료 결정을 맡긴다
D. 환자의 의사를 확인하지 않고 가족 앞에서 모든 세부 정보를 공개한다

## 해설


가족의 우려를 존중하면서도 의사결정능력이 있는 환자 본인이 결과를 어느 정도 어떻게 듣고 싶은지 확인한다. 환자가 원하는 방식과 정보 공유 범위에 맞추어 설명한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007744 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 가족의 비고지 요청 이유를 먼저 탐색하는 B는 환자의 최종 정보선호·자율성을 존중하기 위한 초기 대화임을 원문 대조 확인. 영구적 비고지 승인 아님.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007744
- https://pubmed.ncbi.nlm.nih.gov/41805420/
