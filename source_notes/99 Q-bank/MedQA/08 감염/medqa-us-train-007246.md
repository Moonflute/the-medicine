---
type: qbank
schema_version: 1
id: medqa-us-train-007246
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0216943b871d7391ba0bd9d0041997965480cb916214bdf39b31a0569d1fd60e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "뇌농양"
  - "비리단스 연쇄상구균"
  - "치성 감염"
  - "고리 조영 병변"
related_disease_slugs:
  - MDgg6rCQ7Je8L-y5mOyEsSDqsJDsl7wgKE9kb250b2dlbmljIEluZmVjdGlvbikubWQ
question_type: investigation
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

치성 감염 치료를 미뤄 온 46세 환자가 발열, 처음 발생한 발작, 왼팔 위약으로 왔다. 비조영 CT에서 주변 부종을 동반한 우측 전두엽 병변이 보인다. 뇌농양을 확인하기 위한 우선 검사는?

## 선택지

A. 요추천자로 뇌척수액 검사
B. 조영증강 뇌 MRI와 확산강조영상
C. 뇌파검사
D. 뇌 CT 혈관조영술

## 해설


국소 결손·발작과 종괴성 병변이 있는 환자에서 확산강조영상을 포함한 조영 MRI가 뇌농양 평가에 적합하다. 종괴 효과가 의심되면 요추천자는 초기 검사로 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007246 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 치과 기원 뇌농양의 viridans D 유지; 비조영 CT 조영증강이라는 원문 모순을 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007246
- https://doi.org/10.1016/j.cmi.2023.08.016
