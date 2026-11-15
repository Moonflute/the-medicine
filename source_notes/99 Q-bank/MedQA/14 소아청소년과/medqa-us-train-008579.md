---
type: qbank
schema_version: 1
id: medqa-us-train-008579
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ee90e6cb4d8d8afeae240b637f56399a0109d62b73e51b336cac72bbad4f5e5d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "measles"
  - "measles-specific IgM"
  - "maculopapular exanthem"
question_type: prevention
related_disease_slugs:
  - MTIg7IKw6rO8L-2ZjeyXrSAoTWVhc2xlcykubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZmN7JetIChNZWFzbGVzKS5tZA
difficulty: standard
answer: D
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

MMR을 맞지 않은 건강한 6세 아이가 36시간 전 같은 교실의 홍역 확진자에게 노출됐다. 증상은 없고 생백신 금기도 없다. 보건소와 접촉자 관리 계획을 세우면서 할 조치는?

## 선택지

A. 발진이 나타난 뒤 MMR을 접종한다
B. 노출 1주 뒤에 MMR을 접종한다
C. 모든 소아 접촉자에게 백신 대신 면역글로불린만 투여한다
D. 노출 후 72시간 이내에 MMR을 접종한다

## 해설

면역이 없고 생백신을 맞을 수 있는 접촉자는 처음 노출된 뒤 72시간 이내에 MMR을 접종한다. 면역저하자 등은 노출 후 예방 방법이 다를 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: RPR=독감, Tzanck=결핵 등 전혀 다른 검사 연결과 IgM 최고 정확도 주장을 교체.
- https://www.cdc.gov/measles/hcp/clinical-overview/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008579
- https://www.kdca.go.kr/kdca/2861/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGa2RjYSUyRjU1JTJGMzExMDMxJTJGYXJ0Y2xWaWV3LmRvJTNG
- https://kdca.go.kr/bbs/kdca/55/307391/download.do
