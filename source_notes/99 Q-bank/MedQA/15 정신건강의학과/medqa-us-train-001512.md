---
type: qbank
schema_version: 1
id: medqa-us-train-001512
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ee9948900276ab2d3a7a5d43b113803c00747bf86cf437d0fd6339c816bb9ca0
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive disorder"
  - "SSRI perioperative management"
  - "suicidal ideation"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

30세 남성이 2개월 추적진료를 위해 내원했다. 10년간 함께한 남성 파트너와 최근 헤어졌고 새 스타트업 회사의 업무를 감당하며 체중을 유지하기 어려워했다. 처음 방문에서 에스시탈로프람을 처방받았다. 2주 후 더 우울해졌지만 계속 복용하라고 했다. 자살 생각을 실행하려는 욕구가 커져 단기간 입원했다. 이번에 훨씬 나아졌지만 주말에 선택적 서혜부 탈장수술이 예정되어 있다. 외과의가 수술 전 아무것도 먹지 말라고 했고 매일 에스시탈로프람을 복용할 필요가 없다고 느낀다. 가장 적절한 답변은 무엇인가?

## 선택지

A. 수술 당일 에스시탈로프람을 계속 복용하고 이후 4개월 더 복용한다
B. 에스시탈로프람을 중단한다
C. 수술 전날 중단하고 이후 4개월 더 복용한다
D. 수술 당일 중단하고 이후 4개월 더 복용한다

## 해설


SSRI는 수술 전후에 중단하면 급성 금단 및 우울 악화를 초래할 수 있다. 수술 당일에도 지속 복용이 안전하며, 수술 후 최소 4개월까지 유지하는 것이 권고된다. 따라서 수술 당일에도 에스시탈로프람을 계속 복용하고 이후 4개월 더 복용한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001512
