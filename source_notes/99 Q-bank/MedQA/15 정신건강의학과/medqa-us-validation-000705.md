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
question_type: prognosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
  - MTMg67aA7J246rO8L-ustOyblOqyvSAoQW1lbm9ycmhlYSkubWQ
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
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 여아가 4개월간 월경이 없고 BMI 16.5 kg/m²이며 체조 선수로 훈련 중이다. 피부가 노랗고 양쪽 턱 아래에 부드러운 대칭성 종괴가 있으며 오른손 피부가 두꺼워져 있다. 가장 가능성 높은 합병증은?

## 선택지

A. 반복 감염
B. 난소암
C. 골절
D. 갑상선기능항진증

## 해설


신경성 식욕부진증(AN)으로 인한 무월경과 저체중은 골밀도 감소를 초래해 골절 위험을 크게 높인다. 제시된 선택지 중 골절 위험 증가가 가장 적절하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000705

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 골절을 모든 섭식장애 합병증 중 최빈으로 단정한 문장을 선택지 범위의 위험 증가로 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
