---
type: qbank
schema_version: 1
id: medqa-us-validation-000809
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2529b16cbb41c3d184df26c5343aa65dc2b853ebad0311d435c936ed08ad94e2
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "시스틴뇨증"
  - "시스틴 결석"
  - "육각형 결정"
related_disease_slugs:
  - MDUg7Iug7J6lL-yalOuhnOqysOyEnSAoVXJvbGl0aGlhc2lzKS5tZA
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "retained"
curation_reason: "반복 신산통·cyanide nitroprusside 양성과 cystinuria 육각형 결정의 연결이 원문·한글·해설에서 일치."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
---

# MedQA US 임상문제

## 문제

16세 남아가 여러 차례 재발한 요로결석으로 진료받는다. 소변침사에 무색의 육각형 결정이 반복해서 보인다. 결석의 유형을 확인하기 위해 우선 조사할 질환은?

## 선택지

A. 장성 고옥살산뇨증
B. 원발성 고요산뇨증
C. 감염성 인산마그네슘암모늄 결석
D. 시스틴뇨증

## 해설


어린 나이의 재발성 결석과 육각형 요결정은 시스틴뇨증을 시사한다. 결석 성분 분석과 요중 시스틴 측정으로 확인할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000809
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10330415/
- https://uroweb.org/guidelines/paediatric-urology/chapter/urinary-stone-disease

## 검수 근거

- 검수일: 2026-10-25
- 판정: 반복 신산통·cyanide nitroprusside 양성과 cystinuria 육각형 결정의 연결이 원문·한글·해설에서 일치.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
