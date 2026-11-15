---
type: qbank
schema_version: 1
id: medqa-us-train-010146
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eb276f922bf432f4836b84bffddc12dcf297388f5f3c04d5c6f65067f321fba6
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "홍역"
  - "아급성 경화성 범뇌염"
  - "코플릭 반점"
question_type: prevention
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ZmN7JetIChNZWFzbGVzKS5tZA
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

홍역 예방접종 기록이 없는 11세 아이에게 고열, 기침, 콧물, 결막염이 생겼다. 볼 점막에 희끄무레한 반점이 있고 얼굴에서 시작한 발진이 몸통으로 퍼진다. 검사 결과를 기다리기 전 가장 먼저 해야 할 조치는?

## 선택지

A. 일반 대기실에서 혈액검사 순서를 기다린다
B. 일반 외래에서 진료하되 접촉주의만 적용한다
C. 공기주의로 즉시 분리하고 관할 보건소에 의심 환자로 신고한다
D. 홍역 검사에서 양성이면 그때 격리와 신고를 시작한다

## 해설

홍역이 의심되면 확진을 기다리지 않고 공기주의를 적용해 다른 환자와 분리한다. 관할 보건소에 신고하고 검사와 접촉자 평가를 연계한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: SSPE를 면역매개 합병증으로만 설명한 오류를 지속 홍역바이러스 감염으로 교정.
- https://www.cdc.gov/mmwr/volumes/65/wr/mm6501a3.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010146
- https://www.kdca.go.kr/kdca/2861/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGa2RjYSUyRjU1JTJGMzExMDMxJTJGYXJ0Y2xWaWV3LmRvJTNG
