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
explanation_status: "manual-reviewed"
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

21세 환자가 15세에 급성 류마티스열을 앓았다. 이후 4주마다 벤자틴 페니실린 G 근육주사를 받고 있으며, 심초음파에서 류마티스성 승모판 손상이 남아 있다. 증상이 없어져 주사를 중단해도 되는지 묻는다. 적절한 답은?

## 선택지

A. 마지막 발열 이후 1년이 지났으니 바로 중단한다
B. 투여 간격을 임의로 두 달마다로 늘린다
C. 심내막염 예방을 위해 발치할 때만 투여한다
D. 류마티스열 재발 예방을 위해 정기 주사를 계속하고 종료 시점을 개별 평가한다

## 해설


류마티스열 이후 판막질환이 남은 환자에게는 류마티스열 재발과 추가 판막 손상을 막기 위한 장기 이차예방이 필요하다. 벤자틴 페니실린 G 근육주사가 우선이며 기간은 나이, 마지막 발병 시점, 남은 판막 손상 등에 따라 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 잔여 승모판병변이 있는 류마티스심장병에서 기존 정기 penicillin 이차예방 D 지속. 단순 편의 때문에 간격 연장/cefotaxime 교체하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001201
- https://www.who.int/publications/i/item/9789240100077
