---
type: qbank
schema_version: 1
id: medqa-us-validation-000295
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b5a5a56f7a29e919675e32cf1826eb8994ebbfc0a7f51c8737240fcf7d217136
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "파르보바이러스 B19"
  - "바이러스성 관절염"
  - "대칭성 다발관절통"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: diagnosis
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

초등학교 교사가 반 아이들의 전염성 홍반 유행 2주 뒤 미열과 양쪽 손목·손가락의 대칭성 통증을 겪었다. 관절 증상은 치료 없이 수 주 내 호전됐다. 가장 가능성 높은 원인은?

## 선택지

A. 파종성 임균 감염
B. 류마티스관절염
C. 파르보바이러스 B19 감염
D. 요로감염 뒤 반응성 관절염

## 해설


파르보바이러스 B19에 감염된 성인에게는 소아의 전형적인 얼굴 발진 없이 손과 손목의 대칭성 관절 증상이 나타날 수 있다. 노출과 수 주 내 호전되는 경과가 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000295 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 교사 노출·급성 대칭 소관절통과 자연호전은 B19 B. 본문에 없는 인후통을 덧붙이지 않고 호전 기간을 1–2주로 고정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000295
- https://www.cdc.gov/parvovirus-b19/about/
