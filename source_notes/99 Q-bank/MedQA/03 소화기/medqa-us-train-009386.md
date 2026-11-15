---
type: qbank
schema_version: 1
id: medqa-us-train-009386
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f0dc8ba06db985d1d13e01c5cfa4e63167aefbd1db2487c2e799469f0682c55
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute hepatitis A"
  - "급성 A형간염"
  - "anti-HAV IgM"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQe2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBBKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

13세 남아가 발열과 식욕부진을 보이다 짙은 소변과 황달이 생겼다. ALT가 상승했고 가정 내 A형간염 환자와 접촉한 일이 있다. 급성 A형간염을 확인하는 혈청검사는?

## 선택지

A. IgM 항-HAV 항체
B. IgG 항-HAV 항체
C. B형간염 표면항원
D. C형간염 항체

## 해설


급성 A형간염을 의심할 때 IgM 항-HAV를 확인한다. IgG 항-HAV 양성은 과거 감염 또는 예방접종으로 생긴 면역을 반영할 수 있어 급성 감염 근거로 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009386 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 HAV 확인은 IgM anti-HAV A; 임상 양상만의 확진과 가장 민감하다는 무조건 표현 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-a/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009386
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5533
