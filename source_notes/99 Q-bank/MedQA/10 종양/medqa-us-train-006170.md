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
answer: A
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

71세 남성이 3주 동안 지속된 피로, 체중 감소 및 조기 포만감으로 내원했다. 이전에는 건강했으나 과거 흡연력이 있다. 진찰에서 피곤하고 마른 모습이며 대변잠혈검사가 양성이다. 위십이지장내시경에서 위 전정부에 종괴가 보이고 병리검사에서 선암이 확인되었다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 복부 및 골반 CT
B. PET-CT
C. 복부 및 골반 MRI
D. 내시경 초음파(EUS)

## 해설


내시경생검으로 위 선암이 확인되면 절제 가능성 및 원격전이를 평가하기 위한 CT가 필요하여 보기 중 A가 적절하다. 실제 병기평가는 흉부도 포함하는 CT 등으로 시행하고 잠재적 근치 대상은 staging laparoscopy를 고려한다. EUS는 국소 병기를 알아야 치료 결정이 달라지는 경우에 보완적으로 사용하며 전신 전이평가를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006170 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 위암 CT 병기평가 A 유지하되 복부골반 CT가 모든 병기평가를 완결한다는 오해를 방지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng83/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006170
