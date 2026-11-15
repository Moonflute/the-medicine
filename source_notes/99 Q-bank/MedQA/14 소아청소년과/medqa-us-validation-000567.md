---
type: qbank
schema_version: 1
id: medqa-us-validation-000567
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a09d8e22673782989edc1591c3495ec4e43033f24511a76a20d9692ac12fe4bc
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "백일해"
  - "Bordetella pertussis"
  - "발작성 기침"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cx7J287ZW0IChQZXJ0dXNzaXMpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 3주 영아가 발작적으로 기침하고 무호흡을 보인다. 동거 가족에게 백일해가 확인됐고 비인두 검체를 채취했다. 입원 및 호흡 감시와 함께 우선 사용할 항생제는?

## 선택지

A. 에리트로마이신을 아지트로마이신보다 우선 사용
B. 트리메토프림–설파메톡사졸
C. 아지트로마이신
D. 세프트리악손

## 해설

생후 1개월 미만 백일해에는 중증 감염 치료의 이득이 위해보다 커 아지트로마이신이 우선이다. 치료 뒤 분출성 구토 등 비후성 유문협착증의 신호를 관찰한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 2세 사례를1세 이하로 바꾼 오류와 macrolide 선택·내성 일반화를 교정.
- https://www.cdc.gov/pertussis/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000567
