---
type: qbank
schema_version: 1
id: medqa-us-validation-000705
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0da658e7c50bab52fa5d641a0d6ac4af2c0014fcae4b0af7f1f5a0c460327056
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경성 식욕부진증"
  - "무월경"
  - "골감소증"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
  - MTMg67aA7J246rO8L-ustOyblOqyvSAoQW1lbm9ycmhlYSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

신경성 식욕부진증으로 1년 넘게 저체중이 지속된 16세 청소년에게 무월경과 반복적인 뼈 통증이 있다. 영양·성장 평가를 하면서 장기 합병증을 확인하기 위해 고려할 검사는?

## 선택지

A. 원인 확인을 위한 뇌 MRI
B. 갑상샘 초음파
C. 반복 혈중 코르티솔 측정만 시행
D. 연령과 체격을 고려한 골밀도 검사

## 해설


영양 부족과 성호르몬 저하는 청소년기의 골량 증가를 방해한다. 소아청소년에서 저체중이 1년 지속되거나 뼈 통증·반복 골절이 있으면 골밀도 평가를 고려한다. 체중과 영양 회복이 기본 치료다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000705
- https://www.nice.org.uk/guidance/ng69/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 골절을 모든 섭식장애 합병증 중 최빈으로 단정한 문장을 선택지 범위의 위험 증가로 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
