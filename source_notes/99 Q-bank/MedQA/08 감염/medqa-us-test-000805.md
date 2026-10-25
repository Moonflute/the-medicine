---
type: qbank
schema_version: 1
id: medqa-us-test-000805
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:de19aa4c1118c237dba25d7b0db1913a12747cc22889e4d70d5c9af9746aceb4
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "식품매개 보툴리눔중독"
  - "보툴리눔 독소"
  - "신경근 접합부 마비"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uztO2ItOumrOuIlCDspJHrj4UgKEJvdHVsaXNtKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

45세 남성이 쇠약으로 응급실에 왔다. 어제 시작되어 점점 악화되었고 처음에는 흐린 시야와 말하기·삼키기 어려움이 감기 때문이라고 생각했다. 이후 안면근육 쇠약과 호흡곤란이 생겼다. 농부로 일하며 직접 재배한 음식을 수확하고 통조림으로 만든다. 최근 설사와 함께 쇠약 증상 전 기침이 있었다. 체온 97.9°F(36.6°C), 혈압 144/94 mmHg, 맥박 87회/분, 호흡 18회/분, 산소포화도 94%였다. 미소를 짓기 어렵고 구음장애가 있으며 얕고 약한 호흡을 했다. 상지 근력 3/5와 반사 감소가 있었고 이후 기관삽관을 했다. 가장 적절한 치료는?

## 선택지

A. 항독소
B. 네오스티그민
C. 혈장교환
D. 릴루졸

## 해설


식품 매개 보툴리눔 중독은 신경근 차단을 일으키며, 항독소(보툴리눔 항혈청)를 조기에 투여하는 것이 치료의 핵심이다. 다른 옵션은 효과가 없거나 보조적이다. 따라서 가장 적절한 치료는 항독소이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000805`와 직접 대조했다.
- 판정: 자가 통조림 섭취 가능성과 뇌신경 증상으로 시작한 하행 마비는 보툴리눔 중독. 항독소 A를 CDC 지침으로 확인; 불일치 플래그는 오연결 아님.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cdc.gov/mmwr/volumes/70/rr/rr7002a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000805
