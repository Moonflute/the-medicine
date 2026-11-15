---
type: qbank
schema_version: 1
id: medqa-us-train-004500
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5799ba6bff4969d5f1137b7e0d4501fa5eb9a777a8228d9176995aa7320a66bc
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "종양용해증후군"
  - "급성 신손상"
  - "고요산혈증"
related_disease_slugs:
  - MTAg7KKF7JaRL-yiheyWkSDsmqntlbQg7Kad7ZuE6rWwIChUdW1vciBMeXNpcyBTeW5kcm9tZSkubWQ
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: management
difficulty: complex
answer: D
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

버킷 림프종으로 항암치료를 시작한 7세 남아의 소변량이 줄고 크레아티닌이 급격히 상승했다. K 6.5 mmol/L, 인 7.5 mg/dL, 칼슘 6.6 mg/dL, 요산 12 mg/dL이다. 종양용해증후군의 응급 전해질 치료와 병행해 이미 증가한 요산을 빠르게 낮출 약은? G6PD 결핍은 배제됐다.

## 선택지

A. 알로푸리놀 단독
B. 페북소스타트 단독
C. 프로베네시드
D. 라스부리카제

## 해설


라스부리카제는 이미 생성된 요산을 분해한다. 알로푸리놀은 새 요산 생성을 줄이지만 기존 요산을 신속히 제거하지 않으며 라스부리카제는 G6PD 결핍에서 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 화학요법후 고요산·고K·저Ca·AKI는 TLS의 urate nephropathy D를 지지. Calcium phosphate도 AKI에 기여 가능함을 배제하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004500
- https://www.eviq.org.au/clinical-resources/side-effect-and-toxicity-management/prophylaxis-and-treatment/108-prevention-of-tumour-lysis-syndrome
