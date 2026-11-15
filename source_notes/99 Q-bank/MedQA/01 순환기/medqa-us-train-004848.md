---
type: qbank
schema_version: 1
id: medqa-us-train-004848
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6c4be8b15a78e5a5d1af3002aff6e1fea558d7dcd3651108ccf6c78356b54787
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "중증 대동맥판막 협착"
  - "혈관 내 용혈"
  - "대동맥판막 치환술"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
  - MDkg7ZiI7JWhL-2YiOq0gCDrgrQg7Jqp7ZiIIChJbnRyYXZhc2N1bGFyIEhlbW9seXNpcykubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

71세 남성이 최근 심해진 운동 시 호흡곤란과 어지럼으로 내원했다. 우측 흉골연의 거친 수축기 잡음이 양쪽 목으로 전달된다. 심초음파에서 대동맥판 최고 유속 4.2 m/s, 평균 압력차 46 mmHg이다. 증상을 일으키는 판막질환에 대한 근본 치료는?

## 선택지

A. 하이드록시유레아 투여
B. 철분 보충
C. 대동맥판막 치환술
D. 약물 조절만 하고 정기 추적

## 해설

최고 유속과 평균 압력차는 중증 고압력차 대동맥판 협착에 해당하고 운동 시 호흡곤란·어지럼이 동반된다. 증상이 있는 중증 대동맥판 협착의 근본 치료는 판막치환이다. 수술 또는 경피적 접근은 해부학적 조건과 위험도를 평가해 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문의 빈혈 치료 목적을 복원하고 중증 AS의 전단력성 용혈과 판막치환 C를 연결.
- https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_VHD.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004848
