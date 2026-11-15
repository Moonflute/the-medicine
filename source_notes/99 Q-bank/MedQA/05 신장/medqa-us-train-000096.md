---
type: qbank
schema_version: 1
id: medqa-us-train-000096
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:be2b84fd6e40163f3b399c8b571b29463e0262e091bce600e62cca27b1b63340
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "systemic lupus erythematosus"
  - "hydroxychloroquine"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
  - MDYg7JWM66CI66W06riwL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTTEUpIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzIChTTEUpKS5tZA
question_type: investigation
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

전신홍반루푸스가 있는 40세 여성이 새로 생긴 고혈압과 다리 부종으로 내원했다. 요침사에 적혈구 원주가 있고, 소변 단백/크레아티닌 비는 0.9 g/g이다. 크레아티닌이 상승했으며 다른 뚜렷한 원인은 없다. 치료를 선택하기 위해 필요한 다음 검사는?

## 선택지

A. 24시간 소변 소금 배설만 측정
B. 하지정맥 도플러 초음파만 시행
C. 혈청 요산만 추적
D. 신장 생검

## 해설


새로운 단백뇨, 활동성 요침사와 신기능 저하는 루푸스신염을 의심할 근거다. 생검으로 조직형과 활동성·만성도를 확인해 원인 치료를 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: SLE에서 이형적혈구/적혈구원주와 고혈압·부종은 신염성 Na/수분 저류 D. 단백 1+만으로 심한 저알부민성 부종을 가정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000096
- https://kdigo.org/guidelines/lupus-nephritis/
