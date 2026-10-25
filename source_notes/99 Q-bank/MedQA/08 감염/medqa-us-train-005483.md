---
type: qbank
schema_version: 1
id: medqa-us-train-005483
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d0d0508a8965fe35f7fc327c2b1fed64e5d6d1ebc701986bbe00f7238b334367
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "성홍열"
  - "A군 연쇄상구균"
  - "연쇄상구균 감염 후 사구체신염"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISx7ZmN7Je0IChTY2FybGV0IEZldmVyKS5tZA
  - MDUg7Iug7J6lL-yXsOyHhOyDgeq1rOq3oCDqsJDsl7wg7ZuEIOyCrOq1rOyytOyLoOyXvCAoUFNHTikgKFBvc3QtU3RyZXB0b2NvY2NhbCBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: prognosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

10세 남아가 발열, 인후통과 전신의 비가려운 발진으로 내원했다. 얼굴이 붉고 입 주변은 창백하며 몸통에 압박으로 창백해지는 반점구진성 홍반성 발진과 액와 점상출혈의 융합, 딸기혀가 있다. 다음 중 이 질환의 가장 가능성 높은 후유증은?

## 선택지

A. 관상동맥류
B. 용혈성 빈혈
C. 호지킨 림프종
D. 연쇄상구균 감염 후 사구체신염

## 해설


인두염·딸기혀·입주위 창백·압박 시 옅어지는 발진과 주름 부위 점상출혈은 성홍열을 시사한다. 연쇄상구균 감염 뒤 면역성 사구체신염 D가 발생할 수 있다. 제시된 후유증 중의 선택이지 대부분의 성홍열이 신염으로 진행하거나 이것이 모든 합병증 중 반드시 가장 흔하다는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005483 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 성홍열 후 PSGN D는 가능한 선택지이나 모든 사례의 가장 흔한 후유증이라는 빈도 과장 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005483
