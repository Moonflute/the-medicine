---
type: qbank
schema_version: 1
id: medqa-us-train-006170
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9749b4738cfdfce62723beb6b49367c11ff923ad3e5def09c968e8dddd04e8c8
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "위 선암"
  - "위암 병기설정"
  - "복부 및 골반 CT"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITslZQgKEdhc3RyaWMgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

위내시경 조직검사에서 진행성 위선암이 확인됐다. 아직 원격전이나 절제 가능성을 평가하지 않았다. 우선 시행할 병기 검사는?

## 선택지

A. 위내시경 초음파만 사용해 원격전이 평가
B. 복부 단순촬영
C. 혈청 CEA만 측정해 병기를 확정
D. 흉부와 복부·골반의 조영증강 CT

## 해설


위암의 초기 병기 검사는 장기와 림프절 전이 등을 평가하는 조영 CT가 기본이다. 내시경 초음파와 병기복강경은 국소 병기나 복막 전이 위험에 따라 보완한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006170 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 위암 CT 병기평가 A 유지하되 복부골반 CT가 모든 병기평가를 완결한다는 오해를 방지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng83/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006170
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11739648/
