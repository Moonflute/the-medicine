---
type: qbank
schema_version: 1
id: medqa-us-train-000257
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:54ff25086dca196baae54e3b061fca15c7e585958c2b7af0beef91a90dc7187e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "hypertension"
  - "hyperlipidemia"
  - "temporal arteritis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

72세 남성이 피로감, 경미한 두통, 약 1주간 지속된 씹을 때의 불편감을 주소로 일차 진료의를 방문했습니다. 이전에는 전반적으로 건강했지만, 현재는 이러한 증상으로 인해 상당히 괴로워하고 있습니다. 그의 병력은 고혈압과 고지혈증으로 조절되고 있습니다. 진찰 시 그는 불편해 보이지만 독성이 없어 보입니다. 오른쪽 측두 동맥을 촉진 시 경미한 압통이 있지만, 그 외 진찰 소견은 특이하지 않습니다. 신속한 인지와 치료는 다음 중 어떤 합병증을 예방할 수 있습니까:

## 선택지

A. 신부전
B. 실명
C. 폐섬유증
D. 인지 장애

## 해설


고령의 새 두통·턱 파행과 측두동맥 압통은 GCA를 의심하게 한다. 안동맥 계통, 특히 후섬모체동맥 침범에 의한 동맥염성 전부 허혈시신경병증 등으로 비가역적 시력 소실이 생길 수 있어 신속한 인지·치료가 예방하려는 합병증은 실명(B)이다. 이는 관상동맥염에 의한 시신경 손상이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000257 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: GCA의 시신경허혈을 관상동맥염 때문이라고 한 해부학적 오류를 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000257
