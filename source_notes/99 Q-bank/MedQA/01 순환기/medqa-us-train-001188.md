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
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성이 악화되는 피로감과 호흡곤란으로 내원하였다. 증상은 8개월 전 시작되었으며 그 이후로 점진적으로 악화되었다. 환자는 어린 시절 재발성 관절통과 발열을 겪은 적이 있다. 흡연이나 음주는 하지 않는다. 12세 때 부모님과 함께 콩고에서 이주해 왔다. 체온은 37.4°C, 맥박은 분당 90회로 규칙적이며, 호흡수는 분당 18회, 혈압은 140/90 mmHg이다. 좌측 제5늑간의 쇄골중앙선에서 개방음(opening snap)과 뒤이은 확장기 잡음이 들린다. 치료하지 않을 경우, 이 환자에게 발생할 위험이 가장 높은 합병증은 다음 중 무엇인가?

## 선택지

A. 식도 압박
B. 장 혈관이형성증으로 인한 출혈
C. 좌심실 비대
D. 심실 빈맥

## 해설

정답은 A이다. 류마티스성 승모판 협착의 opening snap과 이완기 잡음이 있다. 만성적으로 좌심방압이 상승하여 좌심방이 크게 늘어나면 바로 뒤의 식도를 압박할 수 있어 제시된 보기 중 A가 적합하다. 좌심실 부담/비대가 압박의 기전은 아니다. AF·색전/뇌졸중·폐고혈압 등 다른 중요 합병증이 없다는 뜻이나 식도 압박이 전반적으로 가장 위험하다는 뜻도 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MS에서 식도를 누르는 방은 LV가 아니라 확장된 LA. 가장 위험하다는 번역도 보기 중 발생 위험을 묻는 뜻으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001188
