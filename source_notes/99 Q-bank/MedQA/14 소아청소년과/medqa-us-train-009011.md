---
type: qbank
schema_version: 1
id: medqa-us-train-009011
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7ad4870368e17a4c6d0024d0ccc4d6dc42c7d9abb2a1a50707ec955ceccf7420
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "acute otitis media"
  - "Streptococcus pneumoniae"
  - "amoxicillin"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KSR7J207Je8IChPdGl0aXMgTWVkaWEpLm1k
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 남아가 최근 시작된 발열과 귀 통증으로 내원했다. 3일 전부터 귀를 잡아당기고 아프다고 했으며 오늘 아침 체온 37.8°C(100.0°F), 식욕 감소가 있었다. 현재 체온 38.6°C(101.4°F)이다. 이비인후과 검사에서 오른쪽 고막의 홍반과 운동성 감소가 보인다. 다음 중 가장 적절한 약물은 무엇인가?

## 선택지

A. 아목시실린
B. 아지스로마이신
C. 세프트리악손
D. 시프로플록사신

## 해설

급성 중이염이 확인되고 항생제를 선택하는 경우, 최근 amoxicillin 사용·화농성 결막염·페니실린 알레르기 등이 없다면 보기 중 amoxicillin(A)이 일차 선택이다. 고막 발적만으로 진단하지 않고 중이 삼출·고막 팽륜 등 소견을 함께 확인한다. 경증 일부는 관찰이 가능하지만 이 사례는 이통이 3일 지속되었다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 급성 중이염 약물 선택과 진단기준·관찰 대상을 구별.
- https://www.cdc.gov/antibiotic-use/hcp/clinical-care/pediatric-outpatient.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009011
