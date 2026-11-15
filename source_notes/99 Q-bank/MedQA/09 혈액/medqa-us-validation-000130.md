---
type: qbank
schema_version: 1
id: medqa-us-validation-000130
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a85a5bd5c60f5e454f8ce4e5fa1f919e83a7920f5b1d43eff659e4e7927c29a0
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "본태성 혈소판혈증"
  - "JAK2 돌연변이"
  - "고요산혈증"
  - "Essential thrombocythemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uzuO2DnOyEsSDtmIjshoztjJDspp3qsIDspp0gKEVUKSAoRXNzZW50aWFsIFRocm9tYm9jeXRoZW1pYSAoRVQpKS5tZA
question_type: management
difficulty: complex
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

본태성 혈소판혈증으로 확진된 50세 환자다. 혈소판은 85만/μL이고 이전에 심부정맥혈전증을 앓았다. 현재 항응고 등 혈전 관리와 별도로 재발 위험을 낮추기 위해 고려할 혈구감소 치료는?

## 선택지

A. 반복 사혈
B. 아나그렐리드와 하이드록시우레아의 일률적인 병합
C. 하이드록시우레아
D. 적혈구 교환수혈

## 해설


본태성 혈소판혈증에서 과거 혈전은 고위험 소견이다. 하이드록시우레아는 금기가 없는 환자의 대표적인 초기 혈구감소 약제이며, 동반질환과 환자 상황에 맞춰 다른 약도 선택할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000130 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈소판853k·혈전병력에서 ET/JAK2 A 의도는 적절하나 한국어가 thrombophlebitis 병력을 생략. 원문 복원 및 단일 혈소판수만으로 ET 확진하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000130
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7820646/
