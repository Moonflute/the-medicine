---
type: qbank
schema_version: 1
id: medqa-us-train-007512
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:57810376d6723bef1063a74e7171cf6171873e5735d1c4449b78b7af8660feaa
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "두혈종"
  - "진공분만"
  - "신생아 황달"
  - "관찰"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

진공 보조 분만 2시간 뒤 신생아 두피가 넓게 출렁이며 부종이 봉합선을 넘어 퍼진다. 머리둘레가 늘고 창백하며 빈맥이 있다. 즉시 고려할 진단은?

## 선택지

A. 두혈종
B. 모상건막하 출혈
C. 산류
D. 영아 혈관종

## 해설

빠르게 커지고 봉합선을 넘는 출렁이는 부종에 순환 이상이 있으면 모상건막하 출혈을 의심한다. 대량 출혈로 이어질 수 있어 긴급 소생과 혈액검사·감시가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 두혈종이 크면 절개/신경외과 감압을 한다는 부적절한 일반화를 교정.
- https://www.seslhd.health.nsw.gov.au/sites/default/files/documents/SESLHDPR%20414%20-%20Observation%20of%20the%20neonate%20following%20instrumental%20delivery.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007512
- https://ranzcog.edu.au/wp-content/uploads/2022/05/Prevention-detection-and-management-of-subgaleal-haemorrhage-in-the-newborn.pdf
