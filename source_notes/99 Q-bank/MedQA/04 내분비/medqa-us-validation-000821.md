---
type: qbank
schema_version: 1
id: medqa-us-validation-000821
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0aa6c4ed0694c4546ec0660e9e72f719453adf5841bf8110bd498c1b3c39c29c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "원발성 부갑상선기능항진증"
  - "부갑상선 선종"
  - "고칼슘혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
question_type: diagnosis
difficulty: standard
answer: C
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

68세 여성의 혈청 칼슘이 11.5 mg/dL이고 부갑상선호르몬 상승, 인 감소, 24시간 소변 칼슘 증가가 확인되었다. 피로, 변비, 뼈 통증과 신장결석이 있다. 가장 가능성 높은 원인은?

## 선택지

A. 비타민 D 중독
B. 가족성 저칼슘뇨성 고칼슘혈증
C. 단일 부갑상선 선종
D. 갑상선중독증

## 해설


정답 C. 높은 Ca와 PTH, 낮은 인 및 높은 소변 Ca는 원발성 부갑상선기능항진을 지지한다. 가장 흔한 원인은 단일 부갑상선 선종이다. 가족성 저칼슘뇨성 고칼슘혈증은 대개 소변 Ca가 낮아 덜 부합하며 vitaminD 과다나 갑상선중독증이면 PTH가 억제된다. 실제 선종 위치/개수는 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000821 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고요소칼슘 오역을 고칼슘뇨로 교정; PHPT 가장 흔한 단일선종 C는 추정이지 국소화 확진 아님.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000821
