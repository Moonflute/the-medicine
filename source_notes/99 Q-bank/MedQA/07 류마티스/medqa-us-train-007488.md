---
type: qbank
schema_version: 1
id: medqa-us-train-007488
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cb93edeae5e9dce7f048363ccaff7ddba07346757ec0ed800219f0c35d725d56
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "메토트렉세이트 독성"
  - "엽산 결핍"
  - "거대적아구성 빈혈"
  - "폴린산"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
question_type: prevention
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
---

# MedQA US 임상문제

## 문제

52세 여성이 류마티스관절염의 첫 질병조절제로 주 1회 저용량 메토트렉세이트를 시작한다. 구내염과 위장관 부작용을 줄이기 위해 함께 처방할 것은?

## 선택지

A. 고용량 비타민 B12
B. 철분
C. 엽산
D. 프레드니솔론 장기 유지

## 해설


저용량 메토트렉세이트에 엽산을 보충하면 구내염이나 위장관 증상 등 일부 독성을 줄일 수 있다. 적정 투여 빈도를 교육하고 혈구·간·신장 기능은 별도로 모니터링한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007488 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MTX 복용·구내증상·저망상적혈구 빈혈·정상MMA/상승homocysteine은 엽산경로 장애를 지지하여 folinic acid C 유지. 이미지 없이도 제공된 생화학 자료로 선택 가능.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/9273041/
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/008085s072lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007488
- https://doi.org/10.1016/j.ard.2026.01.023
