---
type: qbank
schema_version: 1
id: medqa-us-test-000372
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:cca27e00d9a32b4a6dda826cbb405aec1d5c8a0c4ab082d993e619e1ec4e02c6
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "털세포백혈병"
  - "범혈구감소증"
  - "비장비대"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwse2YiOuzkSAoTGV1a2VtaWEpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

55세 환자가 비장비대와 범혈구감소로 치료가 필요하다. 유세포검사와 BRAF V600E 검사로 고전형 털세포백혈병이 확인됐고 활동성 감염은 없다. 초기 치료에 사용할 대표적인 퓨린 유사체는?

## 선택지

A. 이마티닙
B. 브렌툭시맙 베도틴
C. 클라드리빈
D. 레날리도마이드

## 해설


클라드리빈은 고전형 털세포백혈병의 초기 치료에 쓰이는 퓨린 유사체다. 치료 전 감염 여부를 확인하며, 리툭시맙 병용 여부를 환자 상태에 따라 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000372 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 돌기 림프구·비장비대·범혈구감소·dry tap·CD25의 털세포백혈병과 cladribine A가 부합. 현행 NCI의 표준 선택 중 하나임 확인.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/leukemia/hp/hairy-cell-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000372
- https://pubmed.ncbi.nlm.nih.gov/41980020/
