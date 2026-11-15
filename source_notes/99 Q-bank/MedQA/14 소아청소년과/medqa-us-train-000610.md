---
type: qbank
schema_version: 1
id: medqa-us-train-000610
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:70a75e8fb123218006d0572e525823eed8ffefb296e6e554f2f5685980450db6
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "varicella"
question_type: prevention
related_disease_slugs:
  - MTIg7IKw6rO8L-yImOuRkCAoVmFyaWNlbGxhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IiY65GQIChWYXJpY2VsbGEpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

수두가 확인된 6세 아이가 열은 내렸지만 몸통에 아직 물집이 있고 일부에만 딱지가 앉았다. 언제 등교할 수 있을까?

## 선택지

A. 열이 내렸으면 오늘부터 가능하다
B. 아직은 쉬고 모든 물집에 딱지가 생긴 뒤 등교한다
C. 새 물집이 많아져도 발진 시작 48시간 뒤 등교한다
D. 항바이러스제를 한 번 먹으면 당일 등교한다

## 해설

물집이 생기는 수두는 모든 피부 병변이 가피로 바뀔 때까지 전파 가능성이 있어 등교를 미룬다. 열이 내린 것만으로는 기준을 충족하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 건강한 6세 수두의 증상 완화 D 유지. 두피를 점막으로 둔 표현 교정.
- https://www.cdc.gov/chickenpox/treatment/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000610
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6679
- https://www.kdca.go.kr/bbs/kdca/42/238305/download.do
