---
type: qbank
schema_version: 1
id: medqa-us-validation-001028
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:67425a62ce39b9a3b4f8cc262c4f21417d7ec42769e4b7c0e4260f6e02c2d0ba
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "난원공 개존"
  - "일시적 우좌단락"
  - "소아 심잡음"
  - "Patent foramen ovale"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius67CpIOykkeqyqSDqsrDshpAgKEF0cmlhbCBTZXB0YWwgRGVmZWN0KS5tZA
question_type: management
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19개월 여아가 건강검진을 받으러 왔다. 심장 청진에서 정상 S1과 흡기 시 분열되는 S2, 좌측 하흉골연에서 가장 크게 들리는 부드러운 2/6 수축기 중기 잡음이 있다. 조영 심초음파에서 기침할 때 나타나는 경한 일시적 좌우 심방 사이 우좌단락이 보인다. 가장 적절한 다음 처치는?

## 선택지

A. 중재하지 않음
B. 아스피린 치료
C. 외과적 폐쇄
D. 정기적인 심초음파

## 해설

기침할 때만 나타나는 경한 일시적 심방 간 우좌단락은 난원공개존(PFO)에 부합한다. 건강하고 무증상인 소아의 우연한 PFO에는 보통 A처럼 별도 중재가 필요하지 않다. 부드러운 수축기 잡음을 PFO 자체가 반드시 일으킨다고 보지는 않으며, ‘패터슨 샤크’라는 기존 표현은 적절한 질환명이나 기전이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 일시적 우좌단락을 가공의 명칭으로 설명한 해설을 무증상 난원공개존으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001028
