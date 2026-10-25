---
type: qbank
schema_version: 1
id: medqa-us-train-001201
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:548be549b753e142160d1ec526a94a90110a1a691957684168524f61322e938b
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "rheumatic heart disease"
  - "rheumatic fever"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2MkOunieyniO2ZmC5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQmVuenlscGVuaWNpbGxpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

류마티스 심장질환(rheumatic heart disease) 병력이 있는 21세 캄보디아 환자가 정기 검진을 위해 일차 진료 의사를 방문했다. 환자는 15세에 류마티스 열(rheumatic fever)을 진단받은 이후 매달 페니실린 G(penicillin G) 주사를 잘 맞고 있다고 보고했다. 환자는 매달 병원까지 이동하는 불편함을 제외하고는 치료로 인한 주요 부작용은 없다고 했다. 신체 검진에서 제1심음이 크게 들리고 심첨부(apex)에서 가장 잘 들리는 중기 이완기 잡음(mid-diastolic rumble)이 확인되었다. 다음 중 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 4년 후에 페니실린 치료를 중단한다
B. 주사 빈도를 격월로 줄인다
C. 부작용이 더 적은 근육주사용 세포탁심(cefotaxime)으로 변경한다
D. 근육주사용 페니실린 치료를 지속한다

## 해설


류마티스 심장질환 환자는 재발성 연쇄상구균 감염을 예방하기 위해 매달 근육주사 페니실린을 지속해야 한다. 치료를 중단하거나 간격을 늘리면 재발 위험이 증가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 잔여 승모판병변이 있는 류마티스심장병에서 기존 정기 penicillin 이차예방 D 지속. 단순 편의 때문에 간격 연장/cefotaxime 교체하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001201
