---
type: qbank
schema_version: 1
id: medqa-us-train-009785
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aaae4d8948289e7ce5757e714a0816347e0ad05a770dcd48c59df10750497b1e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "승모판 협착"
  - "류마티스성 심장질환"
  - "심방세동"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDtmJHssKkgKE1pdHJhbCBTdGVub3NpcykubWQ
  - MDEg7Iic7ZmY6riwL-2MkOunieyniO2ZmC5tZA
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

45세 여성이 최근 심해진 기좌호흡과 피 섞인 가래로 내원했다. 어릴 때 류마티스열을 앓았다. 심박동은 불규칙하고 심첨부에서 개방음에 이어 낮은 음의 이완기 잡음이 들린다. 양쪽 폐기저부에서 수포음이 들린다. 가장 가능성 높은 판막질환은?

## 선택지

A. 대동맥판 협착
B. 폐동맥판 협착
C. 승모판 협착
D. 대동맥판 역류

## 해설

류마티스열 병력, 심첨부 개방음과 저음의 이완기 잡음은 승모판 협착의 단서다. 좌심방압 상승으로 폐울혈·기좌호흡·객혈이 생길 수 있으며, 심방세동이 흔히 동반된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C와 달리 폐동맥판 협착을 주장한 해설을 해당 류마티스성 승모판 협착 사례에 맞게 교체.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009785
