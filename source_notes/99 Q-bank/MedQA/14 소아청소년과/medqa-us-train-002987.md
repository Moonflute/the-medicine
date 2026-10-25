---
type: qbank
schema_version: 1
id: medqa-us-train-002987
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:df4263d49156ab5ac619821bf71fcfe30814d51fd81f2dc77a133eb5c2fe3947
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "preterm infant immunization"
  - "chronological age vaccination"
  - "DTaP vaccine"
  - "routine infant immunization"
question_type: prevention
related_disease_slugs: []
difficulty: complex
answer: D
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

임신 33주에 26세 여성(임신 2회, 출산 1회)이 1,800 g 남아를 분만했다. 아프가 점수는 1분 7점, 5분 8점이다. 임신은 철결핍성 빈혈로 합병되었고 산모에게 다른 중대한 질환은 없다. 10년 동안 하루 반 갑의 담배를 피우며 음주나 불법 약물 사용은 하지 않는다. 첫 임신과 분만은 전치태반으로 합병되었다. 예방접종은 모두 적절히 받았다. 아들의 예방접종에 대해 산모에게 다음 중 무엇을 권고하는 것이 가장 적절한가?

## 선택지

A. 생후 2개월(생활연령)에 첫 인플루엔자 백신 접종
B. 생후 2개월(생활연령)에 첫 수두 백신 접종
C. 생후 3개월(생활연령)에 첫 B형 헤모필루스 인플루엔자 백신 접종
D. 생후 2개월(생활연령)에 첫 디프테리아·파상풍 톡소이드·무세포 백일해(DTaP) 백신 접종

## 해설

임상적으로 안정된 미숙아는 대부분 교정 연령이 아니라 실제 생후 연령에 맞추어 예방접종한다. 따라서 생후 2개월의 DTaP(D)가 적절하다. 출생체중 2,000 g 미만의 B형간염 접종에는 예외 규칙이 있다. 수두 백신의 통상 첫 접종은 12–15개월이며 인플루엔자 백신은 생후 6개월부터 가능하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미숙아 예방접종의 실제 생후 연령 기준과 잘못된 수두 6개월 접종 설명을 교정.
- https://www.cdc.gov/vaccines/hcp/imz-best-practices/special-situations.html
- https://www.cdc.gov/chickenpox/hcp/vaccine-considerations/index.html
- https://www.cdc.gov/flu/hcp/vax-summary/seasonal-influenza-vaccines.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002987
