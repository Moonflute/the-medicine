---
type: qbank
schema_version: 1
id: medqa-us-train-002425
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6ae5d4fc05d3e3056551a4a958c483daa6384123cf54956e791850c3e1b220e
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "rectocele"
  - "pelvic organ prolapse"
  - "rectovaginal fascia"
  - "Rectocele"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 여성이 배변할 때 변이 남는 느낌이 들고 질 뒤쪽 벽을 손가락으로 눌러야 변이 나온다고 한다. 힘을 주면 하부 후질벽만 돌출되고 질원개의 위치는 정상이다. 진단은?

## 선택지

A. 직장류
B. 방광류
C. 질원개 탈출
D. 직장이 항문으로 탈출한 상태

## 해설

직장류는 직장 앞벽이 질 하부 후벽 쪽으로 불룩해지는 골반장기탈출이다. 배변 시 질벽을 눌러 보조하는 증상이 단서다. 항문 밖으로 직장이 나오는 직장 탈출과 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 직장질근막을직장벽,직장류를항문직장탈출과혼동한해부오류교정. A유지.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002425
- https://pubmed.ncbi.nlm.nih.gov/41217465/
