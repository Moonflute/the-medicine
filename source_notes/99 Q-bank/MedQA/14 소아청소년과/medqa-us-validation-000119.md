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
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IaM7JWEIOq4sOq0gOyngCDsspzsi50gKFBlZGlhdHJpYyBBc3RobWEpLm1k
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 천식 환자가 저용량 흡입 스테로이드 치료 중에도 주 4일 기침하고 밤에 자주 깬다. 현재 급성 악화는 없다. 유지 약의 단계를 올리기 전에 우선 확인할 것은?

## 선택지

A. 현재 약을 복용하는지 묻지 않고 경구 스테로이드 장기 투여
B. 기관지확장제만 늘리고 흡입 스테로이드는 중단
C. 야간 증상 횟수만으로 평생 중증 천식이라고 진단
D. 직접 흡입하는 모습을 보고 복약 이행과 악화 요인을 확인

## 해설

치료 중에도 증상이 지속되면 흡입기 사용법, 복약 이행, 자극 노출과 동반질환을 먼저 평가한다. 이를 교정한 뒤에도 조절되지 않으면 치료 단계 상향을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 과거 증상 기반 분류와 현행 치료반응 기반 중증도 평가를 구별.
- https://www.nhlbi.nih.gov/sites/default/files/publications/08-5846.pdf
- https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000119
- https://ginasthma.org/wp-content/uploads/2026/07/GINA-Summary-Guide-2026-WEB-WMS.pdf
