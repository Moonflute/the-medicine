---
type: qbank
schema_version: 1
id: medqa-us-train-006218
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8953094674ba77ea15ee8119b2ef77c4e9462a67d5cac219f710f8313f19d10a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "습성 각기병"
  - "티아민 결핍"
  - "알코올성 심근병증과 말초신경병증"
  - "Thiamine deficiency"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsgqzsmqkg7J6l7JWgIChBbGNvaG9sIFVzZSBEaXNvcmRlcikubWQ
  - MDgg6rCQ7Je8L-yImOuRkC3rjIDsg4Htj6zsp4Qg67CU7J2065-s7IqkIOqwkOyXvCAoVmFyaWNlbGxhLVpvc3RlciBWaXJ1cyBJbmZlY3Rpb24pLm1k
question_type: management
difficulty: complex
answer: A
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

55세 남성이 오랜 과음과 영양 부족 상태에서 부종과 호흡곤란이 생겼다. 손발 감각이 둔하고, 빈혈이나 갑상샘기능항진은 없다. 심부전 소견에도 사지는 따뜻하고 심박출량이 높다. 즉시 보충을 고려할 영양소는?

## 선택지

A. 티아민(비타민 B1)
B. 리보플라빈(비타민 B2)
C. 나이아신(비타민 B3)
D. 코발라민(비타민 B12)

## 해설


뚜렷한 영양 부족에 고박출성 심부전과 말초신경 증상이 동반되면 습성 각기병을 의심한다. 티아민을 보충하면서 울혈과 영양 상태 및 다른 고박출 원인도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 장기음주·말초신경병증·울혈심부전은 thiamine B1 A 결핍의 wet beriberi 연결과 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006218
