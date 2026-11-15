---
type: qbank
schema_version: 1
id: medqa-us-train-005716
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:502d4e7ae2b5eedc005a70d8a9a5495146ca7b8d5df9512d92983f3fb1b4e2ae
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "자간증"
  - "고혈압성 뇌교출혈"
  - "임신 중 뇌졸중"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOqwhOymnSAoRWNsYW1wc2lhKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 37주 산모가 중증 고혈압과 경련으로 치료 중이다. 경련은 멈췄지만 20분이 지나도 새 우측 편마비와 안구운동 장애가 남아 있다. 혈압·기도를 안정시키면서 우선 할 검사는?

## 선택지

A. 응급 비조영 뇌 CT
B. 발작 후 증상으로 단정하고 영상검사는 분만 뒤로 미룬다
C. 척수천자를 먼저 시행한다
D. 뇌파검사로만 뇌출혈을 배제한다

## 해설

자간증이 의심돼도 지속되는 국소 신경 결손은 뇌출혈·뇌경색 등 별도의 응급 평가가 필요하다. 임신 자체를 이유로 필요한 신속한 뇌 영상을 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 교뇌출혈이 자간증에서 가장 흔하다는 근거 없는 주장 삭제; 교차 신경징후로 국소화.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005716
- https://pubmed.ncbi.nlm.nih.gov/41603019/
