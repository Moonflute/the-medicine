---
type: qbank
schema_version: 1
id: medqa-us-validation-000600
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:d5495e93ec5987b4884b3118005e5fe002b71afe0b679718c759a848c42eb51c
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "상염색체 우성 다낭성 신장질환"
  - "간낭종"
  - "양측 신장 종대"
related_disease_slugs:
  - MDUg7Iug7J6lL-uLpOuCreyEsSDsvantjKUg7KeI7ZmYIChQb2x5Y3lzdGljIEtpZG5leSBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "retained"
curation_reason: "영문·번역·해설 대조: 가족력과 양측 신장 종괴의 ADPKD에서 다발성 간낭종 연관성이 타당."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
---

# MedQA US 임상문제

## 문제

42세 여성에게 상염색체우성 다낭성 신장질환이 있다. 어머니는 뇌동맥류 파열로 인한 지주막하출혈을 겪었다. 환자에게 두통이나 신경학적 증상은 없고, 선별검사에서 동맥류가 발견되면 치료를 고려할 수 있다. 적절한 선별 영상은?

## 선택지

A. 비조영 뇌 CT
B. 비조영 뇌 자기공명혈관조영술
C. 경동맥 도플러 초음파
D. 조영 뇌 MRI 실질 영상만 촬영

## 해설


다낭성 신장질환에 뇌동맥류나 지주막하출혈의 가족력이 있으면 선별검사를 권고한다. 비조영 time-of-flight 자기공명혈관조영술이 우선 선택지다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000600
- https://kdigo.org/guidelines/autosomal-dominant-polycystic-kidney-disease-adpkd/

## 검수 근거

- 검수일: 2026-10-25
- 판정: 영문·번역·해설 대조: 가족력과 양측 신장 종괴의 ADPKD에서 다발성 간낭종 연관성이 타당.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
