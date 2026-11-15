---
type: qbank
schema_version: 1
id: medqa-us-validation-000274
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6adc660523976cfdae3f6159df31b6f247ddc7ce0d1b6ad574992c524e27e348
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "대동맥판막 협착증"
  - "운동 시 실신"
  - "지연된 맥박"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

59세 남성이 이삿짐을 옮기던 중 잠깐 실신했다. 최근 운동할 때 가슴이 조이고 숨이 차다가 쉬면 좋아졌다. 오른쪽 위 흉골연에서 목으로 퍼지는 수축기 박출 잡음이 들리고 경동맥 맥박은 느리게 상승한다. 의심되는 판막질환의 중증도를 평가할 첫 검사는?

## 선택지

A. 관상동맥 CT 조영술
B. 도플러 경흉부 심초음파
C. 운동부하검사
D. 뇌파검사

## 해설


운동 중 실신, 경동맥으로 방사되는 박출잡음과 느린 경동맥 상승은 대동맥판 협착을 시사한다. 경흉부 도플러 심초음파로 판막 구조, 최대 유속 및 압력차를 확인한다. 증상이 있는 중증 협착이 의심되면 운동부하검사를 우선하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 운동 실신·호흡곤란과 지연된 동맥 맥박은 AS를 시사하며 판막과 압력차 확인용 심초음파 B가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000274
