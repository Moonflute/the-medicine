---
type: qbank
schema_version: 1
id: medqa-us-train-009659
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bdb889719e4262aeab0591abe1c1cae059d98ab2b877d666f0010311bbdf7045
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "stress urinary incontinence"
  - "복압성 요실금"
  - "pelvic floor exercise"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
difficulty: complex
answer: A
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

62세 여성이 2개월 동안 재채기, 웃음, 기침할 때 발생하는 소변 누출로 내원했다. 11년 전 폐경했고 세 자녀가 있다. 활력징후는 정상이며 소변검사에서 감염 소견이 없다. 이 환자의 초기 치료로 가장 적절한 것은 무엇인가?

## 선택지

A. 케겔 운동
B. 카테터 삽입
C. 요도고정술
D. 페사리 삽입

## 해설

기침·웃음·재채기 때 누출되고 요로감염 소견이 없으면 복압성 요실금이다. 골반저근 운동(A)이 적절한 초기 보존치료다. 페사리도 비수술 선택지이며 수술은 선호·반응에 따라 고려한다. 단순 도뇨관은 복압성 요실금의 일반적인 2차 치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 복압성 요실금 초기 케겔 A 유지. 카테터를 2차 치료로 분류한 오류와 페사리의 일률적 후순위 규정 수정.
- https://www.acog.org/womens-health/faqs/surgery-for-stress-urinary-incontinence

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009659
