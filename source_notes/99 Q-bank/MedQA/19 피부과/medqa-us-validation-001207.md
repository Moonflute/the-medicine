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
answer: A
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

33세 남성이 양손의 흰 반점으로 진료를 받으러 왔다. 반점은 수개월 동안 커졌고 통증이나 궤양은 없다. 과거력에 갑상선기능저하증이 있다. 양손과 등·어깨에 저색소성 반점이 있고 인접 피부에는 긁은 자국이 있다. 병변은 우드등에서 형광을 보이며 염증 소견은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 백반증
B. 어루러기
C. 백색잔비늘증
D. 후광모반

## 해설

수개월 동안 커지는 무통성 백색 반점과 양손 침범, 갑상선기능저하증 병력은 백반증(A)을 지지한다. 우드등은 탈색소 부위를 뚜렷하게 보이도록 할 수 있으나 본문에는 형광색이 제시되지 않아 특정 색을 만들어 설명하지 않는다. 어루러기는 보통 몸통의 미세한 인설, 백색잔비늘증은 저색소성 습진성 병변, 후광모반은 중심 모반 주변의 탈색소 테두리가 단서다. 이 질환들이 모두 뚜렷한 염증을 동반해야 하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문에 없는 경계 명료 표현을 제거하고 인접 피부의 긁은 자국을 복원했다. 백반증 A를 지지하되 다른 색소질환은 모두 염증성이라는 잘못된 배제를 수정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001207
