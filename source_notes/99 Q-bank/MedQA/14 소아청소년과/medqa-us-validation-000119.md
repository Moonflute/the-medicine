---
type: qbank
schema_version: 1
id: medqa-us-validation-000119
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f90e1050bec872090674c1f42204683f514d340d5ca04aad3e1c6bb85e7650c6
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "소아 천식"
  - "중등도 지속성 천식"
  - "FEV1"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IaM7JWEIOq4sOq0gOyngCDsspzsi50gKFBlZGlhdHJpYyBBc3RobWEpLm1k
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 여아가 천식 추적 진료를 받으러 왔다. 거의 매일 호흡곤란이 있고 야외 활동 시 악화되며 일주일에 세 번 이상 흡입기를 사용하려고 잠에서 깬다. 흡입 플루티카손과 지속성 β작용제를 시작한 후 일부 호전되었고 FEV1은 예측치의 70%였다. 증상의 중증도 분류는?

## 선택지

A. 경도 간헐성
B. 경도 지속성
C. 중등도 지속성
D. 중증 지속성

## 해설

전통적 증상·폐기능 분류에서 거의 매일 증상, 매일 밤은 아닌 빈번한 야간 각성 및 FEV1 70%는 중등도 지속성(C)에 부합한다. 다만 GINA의 현행 중증도는 충분한 기간의 최적화 치료 후 조절에 필요한 치료 강도로 후향 평가한다. 한 달의 ICS/LABA 사용만으로 현재 중증도를 영구 확정하지 않으며 조절 상태·흡입법·순응도를 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 과거 증상 기반 분류와 현행 치료반응 기반 중증도 평가를 구별.
- https://www.nhlbi.nih.gov/sites/default/files/publications/08-5846.pdf
- https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000119
