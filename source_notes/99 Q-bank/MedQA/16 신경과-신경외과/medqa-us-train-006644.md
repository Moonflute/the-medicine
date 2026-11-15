---
type: qbank
schema_version: 1
id: medqa-us-train-006644
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5893c5d74bf4343e6c8ae0f21859db7bf4b7d973f9fe7cf8708891519f3df6b
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "베르니케 실어증"
  - "좌측 측두엽 뇌졸중"
  - "유창성 실어증"
  - "Wernicke aphasia"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: C
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

급성 뇌졸중 환자가 말은 유창하게 하지만 문장의 뜻이 통하지 않고, 간단한 지시를 이해하지 못한다. 짧은 문장도 정확히 따라 말하지 못한다. 가장 가능성 높은 실어증은?

## 선택지

A. 브로카 실어증
B. 전도 실어증
C. 베르니케 실어증
D. 초피질감각 실어증

## 해설

유창한 발화에 이해와 반복 장애가 동반되면 베르니케 실어증에 맞는다. 초피질감각 실어증도 이해가 저하되지만 반복은 상대적으로 보존된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 유창성·이해저하·반복보존을 대조. 우측 Wernicke 영역 및 정상 족저반사로 국소화한 해설 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006644
- https://www.nidcd.nih.gov/health/aphasia
