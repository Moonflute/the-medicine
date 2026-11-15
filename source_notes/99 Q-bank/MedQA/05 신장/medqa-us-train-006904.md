---
type: qbank
schema_version: 1
id: medqa-us-train-006904
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:90f4dd2222cf4810cdcb1cab006c9a5ee74bf1177fa98a6878a07900b40ed8d3
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "다낭성 신장질환"
  - "중증 고칼륨혈증"
  - "응급 혈액투석"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDUg7Iug7J6lL-uLpOuCreyEsSDsvantjKUg7KeI7ZmYIChQb2x5Y3lzdGljIEtpZG5leSBEaXNlYXNlKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
curation_status: "revised"
curation_reason: "모든 중증 고K에 자동 투석이라는 일반화를 제거하고 제시된 선택지의 칼륨 제거 의미를 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

진행된 다낭성 신장질환 환자가 소변이 거의 나오지 않으며 혈청 K 7.0 mmol/L와 QRS 연장이 있다. 정맥 칼슘과 인슐린·포도당을 투여했지만 고칼륨혈증이 지속된다. 칼륨을 몸 밖으로 신속히 제거할 치료는?

## 선택지

A. 응급 혈액투석
B. 정맥 칼슘 투여만 반복
C. 저칼륨 식이만 시작
D. 정맥 인슐린 단독으로 유지

## 해설

칼슘은 심근을 안정화하고 인슐린은 칼륨을 세포 안으로 이동시킨다. 심전도 변화가 동반된 중증 고칼륨혈증이 초기 치료에도 지속되고 소변이 거의 없으면 응급 투석으로 칼륨을 제거한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006904
- https://guidelines.ukkidney.org/hyperkalaemia/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 모든 중증 고K에 자동 투석이라는 일반화를 제거하고 제시된 선택지의 칼륨 제거 의미를 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
