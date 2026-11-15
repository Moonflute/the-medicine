---
type: qbank
schema_version: 1
id: medqa-us-train-005016
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5cd48cf8abd11131c3f8708de60e66bec8371f6961282a78b455bebbaf30acdd
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "전이성 대장직장암"
  - "간 전이"
  - "간 종괴"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

결장 선암이 있는 환자의 영상에서 간에만 전이가 확인됐다. 전신 상태가 좋고 영상상 모든 간 병변의 절제가 가능해 보인다. 최선의 치료 계획을 세우기 위한 다음 조치는?

## 선택지

A. 간전이가 있으므로 근치 가능성을 검토하지 않는다
B. 종양내과·외과·영상의학과가 함께 간전이 절제와 전신치료 순서를 검토한다
C. 간전이 영상 추적 없이 평생 완화치료만 시행한다
D. 결장 병변만 수술하고 간 병변은 평가하지 않는다

## 해설


간에만 절제 가능한 대장암 전이가 있는 일부 환자는 근치 목적의 치료를 고려할 수 있다. 다학제 평가로 절제 가능성, 간 기능과 전신치료 순서를 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005016 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 실제 제공되지 않은 CT의 다발결절을 창작하지 않고 배변변화·잠혈양성·간 결절의 임상 근거로 설명. 원문 여행력·발열·간검사 복구.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005016
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11082542/
