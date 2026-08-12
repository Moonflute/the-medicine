---
type: qbank
schema_version: 1
id: medqa-us-train-001188
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6360a0f7db0844e65eb9dd950d87aaa09b0a24d853d905a2cf725bf834d0939
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "mitral stenosis"
  - "rheumatic heart disease"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDtmJHssKkgKE1pdHJhbCBTdGVub3NpcykubWQ
  - MDEg7Iic7ZmY6riwL-2MkOunieyniO2ZmC5tZA
question_type: prognosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 여성이 악화되는 피로감과 호흡곤란으로 내원하였다. 증상은 8개월 전 시작되었으며 그 이후로 점진적으로 악화되었다. 환자는 어린 시절 재발성 관절통과 발열을 겪은 적이 있다. 흡연이나 음주는 하지 않는다. 12세 때 부모님과 함께 콩고에서 이주해 왔다. 체온은 37.4°C, 맥박은 분당 90회로 규칙적이며, 호흡수는 분당 18회, 혈압은 140/90 mmHg이다. 좌측 제5늑간의 쇄골중앙선에서 개방음(opening snap)과 뒤이은 확장기 잡음이 들린다. 치료하지 않을 경우, 이 환자에게 가장 위험한 합병증은 무엇인가?

## 선택지

A. 식도 압박
B. 장 혈관이형성증으로 인한 출혈
C. 좌심실 비대
D. 심실 빈맥

## 해설


이 환자는 류마티스성 승모판 협착으로 좌심실 부하가 증가해 식도 압박 위험이 있다. 치료하지 않을 경우 식도 압박이 가장 위험한 합병증이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001188
