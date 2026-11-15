---
type: qbank
schema_version: 1
id: medqa-us-train-006173
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fcd434d42f3b1db68d56e13ecdd625a3c3a690df0b4c98abd1f52e4924415ac4
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "로타바이러스 감염"
  - "소아 급성 위장염"
  - "예방접종 미시행"
question_type: prevention
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISk7IKsIChEaWFycmhlYSkubWQ
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

생후 10주 영아가 접종하러 왔다. 2주 전 장중첩증을 공기 관장으로 정복받아 지금은 건강하다. 로타바이러스 백신 접종에 맞는 계획은?

## 선택지

A. 접종 약제를 바꿔 예정대로 로타바이러스 백신을 투여
B. 절반 용량만 투여
C. 장중첩증 병력으로 로타바이러스 백신은 투여하지 않고 다른 접종은 검토
D. 이 병력 때문에 모든 영아 백신을 중단

## 해설

장중첩증 병력은 로타바이러스 백신의 금기다. 이는 로타바이러스 백신에 대한 판단이며 다른 백신을 일률적으로 미룰 이유는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 4세·7일의 사례를 영아·3–5일로 바꾼 설명을 교정.
- https://www.cdc.gov/rotavirus/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006173
- https://www.kdca.go.kr/bbs/kdca/55/305179/download.do
- https://www.cdc.gov/rotavirus/hcp/vaccine-considerations/index.html
