---
type: qbank
schema_version: 1
id: medqa-us-train-009557
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9b62242a291f60d42399500048bd4ba7d1b459e6594d741c9afd3c219ff3da21
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "mumps"
  - "유행성이하선염"
  - "orchitis and infertility"
question_type: prevention
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67O86rGw66asIChNdW1wcykubWQ
  - MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k
difficulty: complex
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

중학생이 발열과 양쪽 이하선 부종으로 진료받아 유행성이하선염이 확인됐다. 이하선 부종은 어제 시작했다. 국내 등교 중지 기준은?

## 선택지

A. 오늘 해열되면 내일부터 등교한다
B. 이하선 부종 시작 뒤 24시간만 쉰다
C. 이하선염 증상이 시작된 날부터 5일이 지날 때까지 등교하지 않는다
D. 부종이 완전히 없어질 때까지 기간에 관계없이 격리한다

## 해설

국내 기준은 이하선염 증상 발생일부터 5일 뒤까지 격리하는 것이다. 해열 시점이나 부종이 완전히 없어지는 시점만으로 등교를 결정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 볼거리 고환염이 영구 불임을 흔히 초래한다는 과장을 생식능력 감소 가능성으로 교정.
- https://www.cdc.gov/mumps/hcp/clinical-signs/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009557
- https://www.kdca.go.kr/bbs/kdca/42/238305/download.do
