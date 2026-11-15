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
question_type: management
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

32세 여성이 보행 시 호흡곤란으로 왔다. 심초음파에서 류마티스성 승모판협착(판막 면적 0.9 cm²), 판막 교련 융합과 시술에 적합한 형태가 확인됐다. 승모판 역류는 경미하고 경식도 심초음파에서 좌심방 혈전은 없다. 증상을 개선하기 위한 판막 치료는?

## 선택지

A. 경피적 승모판 교련절개술
B. 경피적 승모판 가장자리접합술
C. 경피적 대동맥판막삽입술
D. 인공판막 치환술을 일차로 시행

## 해설

증상이 있는 중증 류마티스성 승모판협착에서 판막 형태가 적합하고 좌심방 혈전이나 경도 초과의 승모판 역류가 없으면 경피적 승모판 교련절개술을 우선 고려한다. 혈전이나 의미 있는 역류가 있으면 시술 여부가 달라진다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MS에서 식도를 누르는 방은 LV가 아니라 확장된 LA. 가장 위험하다는 번역도 보기 중 발생 위험을 묻는 뜻으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001188
- https://academic.oup.com/eurheartj/article/46/44/4635/8234488
