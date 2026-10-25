---
type: qbank
schema_version: 1
id: medqa-us-train-005599
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c62348812082c2d4d0b1d8a9116dab6f9bbb48203fab87306257005d5789f365
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "가와사키병"
  - "관상동맥류 예방"
  - "고용량 아스피린"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCA7JmA7IKs7YKk67ORIChLYXdhc2FraSBEaXNlYXNlKS5tZA
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTmFmY2lsbGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 여아가 6일 동안 지속된 발열과 보챔으로 아버지와 함께 응급실에 왔다. 아버지에 따르면 열은 101~104°F(38.3~40°C)까지 올랐고 이부프로펜을 먹였지만 열은 호전되지 않았다. 3일 전 발진이 생겼고, 신발이 꽉 끼는 느낌이 든다며 신발을 신으려 하지 않았다. 어릴 때 귀 감염을 두 번 앓은 것 외에는 건강했다. 예방접종은 최신 상태이나 4~6세에 예정된 추가접종은 받지 않았다. 체온은 103.5°F(39.7°C), 혈압은 110/67 mmHg, 맥박은 분당 115회, 호흡수는 분당 19회, 실내 공기에서 산소포화도는 98%이다. 신체검사에서 양측 결막염, 만져지는 경부 림프절, 전신의 홍역양 발진, 손바닥과 발바닥의 표피 박리 및 손발 부종이 관찰된다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 고용량 아스피린
B. 나프실린
C. 페니실린 V
D. 비타민 A

## 해설

지속 발열과 결막·림프절·발진·사지 변화는 가와사키병에 부합한다. 제시된 약제 중 aspirin(A)은 급성 치료에 쓰이지만, 핵심 치료는 신속한 IVIG와 심장 평가이며 aspirin 단독으로 대체하지 않는다. 고용량 aspirin 자체가 관상동맥류 예방을 보장하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 아스피린 단독이 관상동맥류를 예방한다는 설명을 IVIG 중심 급성 치료로 교정.
- https://www.heart.org/en/health-topics/kawasaki-disease
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001295

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005599
