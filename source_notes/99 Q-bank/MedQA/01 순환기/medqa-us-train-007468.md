---
type: qbank
schema_version: 1
id: medqa-us-train-007468
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ee28e5dc062481fbb19c319393f63b4ca408fa921fbf005e28fc8b0ada588ac0
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "암로디핀 유발 말초부종"
  - "고혈압"
  - "칼슘통로차단제"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 혈압약을 새로 시작한 한 달 뒤 양쪽 발목이 붓는다고 한다. 저녁에 더 심하고 아침에는 가라앉는다. 숨참이나 체중 증가는 없고 경정맥압, 폐 청진과 신장기능은 정상이다. 가장 가능성 높은 원인 약제는?

## 선택지

A. 로사르탄
B. 프라조신
C. 프로프라놀롤
D. 암로디핀

## 해설

암로디핀은 소동맥을 상대적으로 더 많이 확장해 모세혈관 정수압을 올리고 양측 발목 부종을 일으킬 수 있다. 심부전처럼 몸 전체의 체액량이 늘어서 생기는 부종과는 기전이 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 암로디핀의 의존성 말초부종을 ‘전이성’으로 잘못 표현한 해설을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007468
