---
type: qbank
schema_version: 1
id: medqa-us-train-008914
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e405e149ca9783acffff17186f054c50fd549c269f72981e67b3851c5c1efc7f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "alcoholic cardiomyopathy"
  - "heart failure"
  - "alcohol abstinence"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOq3vOuzkeymnSAoQ2FyZGlvbXlvcGF0aHkpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 남성이 오랫동안 과음해 왔다. 숨참과 하지부종으로 검사받았고 심초음파에서 좌심실 확장과 전반적인 수축력 감소가 확인됐다. 평가 후 알코올 관련 확장성 심근병증으로 진단했다. 심부전 약물치료와 함께 원인을 줄이는 핵심 조치는?

## 선택지

A. 금주를 지원하고 필요하면 금단을 의료진이 관리한다
B. 식이 철만 제한한다
C. 수분을 줄이는 것만으로 원인 치료를 한다
D. 갑상샘 기능이 정상이어도 레보티록신을 보충한다

## 해설


장기간 과음에 의한 심근 독성에서 금주는 원인 교정의 핵심이다. 의존이 있는 환자는 금단 위험을 평가해 안전하게 치료를 연계한다. 심부전 표준 치료도 계속한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 본문·4선지·A 정답·해설 및 영어 원문 대조. 장기간 과음과 확장성 심부전 징후에서 원인 교정은 금주라는 출제 의도와 일치. 약물/용량 또는 심부전 관리 전반을 검증한 것은 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008914
