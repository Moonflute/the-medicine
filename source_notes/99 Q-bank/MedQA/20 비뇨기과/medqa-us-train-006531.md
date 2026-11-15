---
type: qbank
schema_version: 1
id: medqa-us-train-006531
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:17f446fb09a4a11cb2cc2ef09293d7bb9549cc48d8c174422190c59abd91f86f
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "복압성 요실금"
  - "골반저근 운동 실패"
  - "요도 슬링"
  - "stress urinary incontinence"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 여성이 웃거나 일어설 때 소변이 샌다. 반복 진찰에서 복압성 요실금이 확인됐고 잔뇨는 적다. 3개월 이상 지도하 골반저근 훈련을 했으나 일상에 지장이 커 수술을 원한다. 상담할 수 있는 수술 선택지는?

## 선택지

A. 방광 내 보툴리눔 독소 주사
B. 경요도 전립선 절제술
C. 중부요도 슬링
D. 요관 재이식술

## 해설

보존 치료에도 불편한 복압성 요실금에서는 중부요도 슬링 등 수술을 고려할 수 있다. 인공 메시와 자가조직 등 선택지의 합병증과 장단점을 설명하고 환자와 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 보존치료 실패 SUI에서 sling D는 유지하되 수술 전 확인·공동결정과 다른 수술 선택 가능성을 보완.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng123/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006531
