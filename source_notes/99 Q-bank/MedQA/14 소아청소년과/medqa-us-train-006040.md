---
type: qbank
schema_version: 1
id: medqa-us-train-006040
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b7aece5d9bde1171167b0aad45b6e3fea942a1dcac21da0af226eec3218e053f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "맥아들병"
  - "근육 포스포릴라아제 결핍"
  - "운동 유발 횡문근융해증"
question_type: diagnosis
related_disease_slugs:
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
difficulty: standard
answer: D
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

15세 아이가 달리기나 전력 질주를 시작하면 몇 분 안에 근경련이 생긴다. 잠깐 쉬거나 속도를 늦추면 다시 움직이기 쉬워지고, 심한 운동 다음 날 적갈색 소변을 본 적이 있다. 시사하는 질환은?

## 선택지

A. 폼페병
B. 듀센 근이영양증
C. 척수성 근위축증
D. 맥아들병

## 해설

운동 초기에 근육통이 생겼다가 강도를 낮추면 다시 움직이기 쉬워지는 ‘두 번째 바람’ 현상은 근육 글리코겐 인산분해효소 결핍인 맥아들병의 단서다. 격한 운동 후 횡문근융해가 생길 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 근육 포스포릴라아제를 직접 ATP 생성 효소로 잘못 정의한 해설을 글리코겐분해 단계로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006040
- https://www.ncbi.nlm.nih.gov/sites/books/NBK1344/
