---
type: qbank
schema_version: 1
id: medqa-us-train-007061
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c5290b76176b4e1343c901c35ef171e053174f58a780a8204ca2234f5c71fab
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "승모판 탈출증"
  - "중수축기 클릭"
  - "수축기 후기 잡음"
  - "Mitral valve prolapse"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDsnbztg4jspp0gKE1pdHJhbCBWYWx2ZSBQcm9sYXBzZSkubWQ
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 남성의 심첨부에서 중수축기 클릭과 그 뒤 늦은 수축기 잡음이 들린다. 일어서면 클릭과 잡음이 더 일찍 시작하고, 쪼그려 앉으면 늦어진다. 심초음파에서 예상되는 소견은?

## 선택지

A. 이완기 승모판 판엽의 돔 모양 변형
B. 수축기 대동맥판의 압력차 증가
C. 수축기에 승모판 판엽이 좌심방 쪽으로 돌출
D. 심방중격에 부착된 좌심방 종괴

## 해설


심장이 작게 차는 자세에서 클릭이 수축기 앞쪽으로 이동하는 것은 승모판 탈출증의 특징이다. 수축기에 승모판 판엽이 판륜을 넘어 좌심방 쪽으로 돌출한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 체위따른 click/후기수축기잡음은 MVP의 수축기판륜위≥2mm 탈출 C와 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007061
