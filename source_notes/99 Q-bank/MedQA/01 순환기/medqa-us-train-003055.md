---
type: qbank
schema_version: 1
id: medqa-us-train-003055
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ee416669c06d89d751afd2907974b961b74578349ca1142ec32a0fb1d9696c7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute decompensated heart failure"
  - "loop diuretic therapy"
  - "prerenal azotemia"
  - "hypokalemia"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrtoDsoIQgKEFjdXRlIEhlYXJ0IEZhaWx1cmUpLm1k
question_type: adverse_effect
difficulty: complex
answer: A
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

58세 남성이 울혈성 심부전으로 정맥 루프 이뇨제를 받은 뒤 하루 동안 체중이 3 kg 줄었다. 폐울혈은 줄었지만 일어설 때 어지럽고 혈압은 150/90에서 96/58 mmHg로 낮아졌다. 크레아티닌이 0.8에서 1.7 mg/dL로 오르고 칼륨은 3.2 mEq/L이다. 검사 변화의 가장 가능성 높은 원인은?

## 선택지

A. 과도한 이뇨에 따른 유효 순환혈액량 감소와 칼륨 손실
B. 요로 폐쇄
C. 신장 동맥의 콜레스테롤 색전
D. 치료 전에 시작된 사구체신염

## 해설

빠른 체중 감소와 저혈압이 이뇨 직후 생겼다면 혈관 내 용적 감소로 콩팥 관류가 떨어졌을 수 있다. 루프 이뇨제는 칼륨 배설도 늘린다. 크레아티닌만 보지 말고 남은 울혈과 관류를 함께 재평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 이뇨 후 BUN/Cr·저K A의 해설에서 신전성 빈혈이라는 오기 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003055
