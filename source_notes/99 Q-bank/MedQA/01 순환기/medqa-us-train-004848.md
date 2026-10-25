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

71세 남자가 호흡곤란과 피로를 호소한다. 최근 상기도 감염 후 소변이 짙어졌고, 경동맥으로 방사되는 4/6등급의 수축기 잡음이 들린다. 혈액검사에서 빈혈과 낮은 합토글로빈이 확인되며 직접 항글로불린검사는 음성이다. 심초음파에서 대동맥판막을 통과하는 최고 유속은 4.2 m/s, 평균 압력차는 46 mmHg이다. 빈혈을 치료하기 위한 가장 적절한 다음 처치는?

## 선택지

A. 하이드록시유레아 투여
B. 철분 보충
C. 대동맥판막 치환술
D. 복용 중인 약물 중단

## 해설

고속 혈류를 동반한 중증 증상성 대동맥판협착과 낮은 haptoglobin·Coombs 음성 빈혈은 기계적 전단력에 의한 용혈 가능성을 시사한다. 원문은 이 빈혈의 치료를 묻고 있으므로 원인 판막질환을 교정하는 C의 대동맥판치환술이 선택지 중 적절하다. 다른 빈혈 원인도 실제 진료에서는 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문의 빈혈 치료 목적을 복원하고 중증 AS의 전단력성 용혈과 판막치환 C를 연결.
- https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_VHD.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004848
