---
type: qbank
schema_version: 1
id: medqa-us-train-006135
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:316f6efdad5b7aed8bb4b12058313b6c6ee921b8e77b09e45a1af829143929a8
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구 혈관폐쇄성 위기"
  - "미세혈관 폐쇄"
  - "통증 발작"
  - "Sickle cell disease"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

겸상적혈구병이 있는 환자가 양쪽 허벅지와 허리의 심한 통증으로 응급실에 왔다. 이전 통증 위기와 같다고 한다. 산소포화도는 98%이고 아직 흉통·호흡기 증상은 없다. 합병증을 평가하는 동안 우선 할 처치는?

## 선택지

A. 혈액검사가 모두 끝날 때까지 진통을 보류한다
B. 산소포화도가 정상이어도 고농도 산소만 우선 투여한다
C. 이전 효과와 통증 강도를 고려한 진통제를 신속히 투여하고 반응을 반복 평가한다
D. 통증이 심하면 적혈구 교환수혈을 일률적으로 시행한다

## 해설


혈관폐쇄성 통증 위기는 합병증 평가와 병행해 신속히 진통하고 자주 재평가한다. 단순 통증 위기에서 정상 산소포화도에 대한 일률적 산소나 교환수혈이 초기 진통을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006135 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반복 급성 통증·빈혈의 혈관폐쇄 위기에서 선택지 D 미세혈관 폐쇄 기전을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006135
- https://doi.org/10.1182/bloodadvances.2020001851
