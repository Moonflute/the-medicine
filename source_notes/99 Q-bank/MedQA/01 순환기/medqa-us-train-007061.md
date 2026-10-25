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
explanation_status: machine-generated
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

47세 남자가 보험 가입을 위한 건강평가의 일부로 정기 신체검사를 받으러 내원했다. 증상은 없고 심장질환이나 돌연심장사의 가족력도 없다. 혈압은 120/80 mmHg, 체온은 36.7°C(98.1°F), 맥박은 75회/분으로 규칙적이다. 신체검사에서 마른 체형이며 심첨박동은 정상이고 외측으로 이동하지 않았다. 청진에서 심첨부에 중수축기 클릭과 그 뒤를 잇는 수축기 후기 고음성 잡음이 들린다. 서 있을 때 클릭과 잡음이 수축기에서 더 일찍 나타나고 잡음의 강도가 증가한다. 쪼그려 앉으면 클릭과 잡음이 더 늦게 나타나며 잡음의 강도는 감소한다. 이 환자의 심초음파에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 이완기 동안 승모판 첨판이 돔 모양으로 변형됨
B. 대동맥판을 가로지르는 압력 차 증가
C. 수축기 동안 승모판 첨판이 판륜보다 2mm 이상 위로 탈출함
D. 난원와 중격 부위에서 기원한 좌심방 종괴

## 해설


청진에서 중수축기 클릭과 그 뒤의 수축기 후기 고음성 잡음이 체위에 따라 변하는 것은 승모판 탈출증을 시사한다. 심초음파에서 승모판이 수축기 동안 2 mm 이상 위로 탈출하는 소견이 가장 특징적이다. 따라서 수축기 동안 승모판이 2 mm 이상 위로 탈출함이 가장 가능성 높은 소견이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 체위따른 click/후기수축기잡음은 MVP의 수축기판륜위≥2mm 탈출 C와 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007061
