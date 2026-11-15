---
type: qbank
schema_version: 1
id: medqa-us-train-000035
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b97c6feaf5b1946553fdf7d07eec28624fc19b44666533a94f02454f4fcf5c98
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경이완제 악성 증후군"
  - "비정상적인 행동"
  - "망상"
  - "공격성"
  - "발열"
  - "혼돈"
  - "급성 신손상"
  - "횡문근융해증"
question_type: management
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveydtOyZhOygnCDslYXshLEg7Kad7ZuE6rWwIChOZXVyb2xlcHRpYyBNYWxpZ25hbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QYXJhY2V0YW1vbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

리스페리돈을 시작한 지 사흘 된 환자에게 고열, 전신의 심한 근육 강직과 의식 저하가 나타났다. 크레아틴키나아제는 9,800U/L이고 크레아티닌이 상승 중이다. 가장 적절한 초기 조치는?

## 선택지

A. 용량을 그대로 유지하고 해열제로만 치료한다
B. 같은 날 다른 항정신병약으로 바꿔 바로 시작한다
C. 세로토닌 독성으로 판단해 시프로헵타딘만 투여한다
D. 리스페리돈을 즉시 중단하고 냉각·수액 등 집중 지지치료를 시작한다

## 해설

도파민 차단제 시작 뒤 심한 강직, 고열, 의식 변화와 근육 손상은 신경이완제 악성증후군을 시사한다. 원인 약을 중단하고 체온, 순환, 신기능과 전해질을 적극적으로 관리한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000035
- https://pubmed.ncbi.nlm.nih.gov/39776346/
- https://pubmed.ncbi.nlm.nih.gov/27423483/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 NMS의 약물 중단 정답 유지. 비표준 '악성 신경근증후군' 명칭 교정 및 수액 등 동시 응급 지지치료 필요성 명시.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
