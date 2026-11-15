---
type: qbank
schema_version: 1
id: medqa-us-train-007382
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:172e3108a26ede790454cfeb4c89eb5b89d0479b1a97c4de7a75677c4dde3385
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "이차 매독"
  - "콘딜로마 라타"
  - "성매개감염 동시 검사"
  - "매독"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unpOuPhSAoU3lwaGlsaXMpLm1k
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

손바닥·발바닥 발진과 넓적한 항문 주위 구진이 있는 환자가 혈청검사로 이차 매독을 진단받았다. 청력, 시력이나 신경 증상은 없다. 매독을 치료하면서 확인할 검사는?

## 선택지

A. 흉부 CT 혈관조영술
B. 신경매독 확인을 위한 일률적인 요추천자
C. HIV 항원·항체 검사
D. 병변의 일반 세균배양

## 해설


매독이 진단되면 HIV 검사를 시행하고 노출 부위와 위험에 따라 다른 성매개감염도 확인한다. 증상이 없고 신경학적 진찰이 정상이면 요추천자를 일률적으로 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007382 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 이미 매독이 확인된 환자에서 동시 매독검사가 필요하다는 순환 설명을 다른 STI 동반 검사로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/syphilis.htm
- https://www.cdc.gov/std/treatment-guidelines/hiv.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007382
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10925736/
