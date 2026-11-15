---
type: qbank
schema_version: 1
id: medqa-us-validation-001207
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:d3c9e90242c6f1ab4cd48a7467ab87cd25eccdff96c3701ca04993db1808a7b7
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "백반증"
  - "저색소성 반점"
  - "갑상선기능저하증"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseuwmOymnSAoVml0aWxpZ28pLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 환자에게 손가락과 손등에 경계가 뚜렷한 우윳빛 반점이 생겼다. 비늘이 없고 우드등을 비추면 탈색 부위가 더 또렷해진다. 가장 가능성 높은 진단은?

## 선택지

A. 어루러기
B. 염증 후 저색소침착
C. 백색잔비늘증
D. 백반증

## 해설

백반증은 색소가 완전히 소실된 경계 뚜렷한 반점을 만들 수 있다. 우드등은 탈색된 범위를 이해하는 데 도움이 되고 미세한 인설이 있는 어루러기와 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문에 없는 경계 명료 표현을 제거하고 인접 피부의 긁은 자국을 복원했다. 백반증 A를 지지하되 다른 색소질환은 모두 염증성이라는 잘못된 배제를 수정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001207
- https://pubmed.ncbi.nlm.nih.gov/37746876/
