---
type: qbank
schema_version: 1
id: medqa-us-train-009734
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b54797bd1819771423534477c6a248dba83003129d3c62144cb37ef1b8bc249
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "respiratory syncytial virus"
  - "호흡기세포융합바이러스"
  - "bronchiolitis"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riJ7ISxIOyEuOq4sOq0gOyngOyXvCAoQWN1dGUgQnJvbmNoaW9saXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

이전에 건강하던 생후 6주 여아가 24시간 동안 발열, 피로, 마른기침으로 응급실에 왔다. 수유가 감소하고 코가 막혔으며 젖병을 잘 물지 못한다. 평소보다 젖은 기저귀 수가 줄었다. 임신 42주에 합병증 없이 질식분만했고 어머니는 낭성섬유증 보인자이다. 체온 38.2°C, 호흡수 64회/분, 실내 공기 산소포화도 92%이며 기침, 코벌렁거림, 점막 건조, 늑간·쇄골상부 함몰, 호기성 천명이 있다. 가장 가능성 높은 원인균은 무엇인가?

## 선택지

A. 파라인플루엔자바이러스
B. 호흡기세포융합바이러스
C. 라이노바이러스
D. B군 연쇄구균

## 해설


6주 영아의 급성 호흡기 증상, 빠른 호흡, 청진에서 호흡음이 들리며, RSV는 영아에서 가장 흔한 원인이다. RSV는 호흡기세포융합바이러스(RSV)로 분류된다. 따라서 RSV가 가장 가능성 높은 원인균이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 6주 영아의 급성 상기도 증상 후 천명·함몰·수유 저하는 세기관지염을 시사하며 대표 병원체는 RSV B.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009734
