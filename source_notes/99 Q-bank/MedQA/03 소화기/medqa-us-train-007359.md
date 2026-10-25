---
type: qbank
schema_version: 1
id: medqa-us-train-007359
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ced53e285a90cfa40dd182c03b715a39d12a0380a03b7dc5074e03dcfff0e694
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "대장암"
  - "융모선종"
  - "철결핍성 빈혈"
  - "대장 용종"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Jqp7KKFIChDb2xvbmljIFBvbHlwKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: prognosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남자가 2개월 동안 진행하는 피로로 내원했다. 운동할 때 악화되고 휴식하면 호전되는 호흡곤란과 심계항진도 있다. 지난 3개월 동안 간헐적인 변비, 미열, 전신 근육통이 있었다. 식욕 변화 없이 지난 4개월 동안 체중이 10.4kg(23lb) 감소했다. 체온은 37°C(98.6°F), 맥박 108회/분, 호흡수 16회/분, 혈압 130/78 mmHg이다. 결막이 창백하다. 헤모글로빈은 9.1 g/dL, MCV는 70 μm³, 혈청 페리틴은 12 ng/mL이다. 대변 잠혈검사는 양성이고 대장내시경에서 상행결장에 1.7cm 너비의 외방성 궤양이 보이며 가장자리가 불규칙하고 출혈한다. 이 환자의 상태를 일으킬 위험을 가장 크게 높이는 생검 소견은 무엇인가?

## 선택지

A. 점막하 지방종성 용종
B. 융모성 선종성 용종
C. 톱니모양 과형성 용종
D. 관상 선종성 용종

## 해설

선종의 융모성 성분은 관상 성분보다 악성화 위험이 높으므로 제시된 선택지 중 B가 적합하다. 실제 위험에는 크기, 이형성 등급, 절제 상태도 관련된다. 모든 융모선종이 이미 출혈성 암의 모양을 보인다는 뜻은 아니며, 다른 톱니 병변의 분류와 위험도는 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Villous adenoma B의악성위험을이미발생한암의모양과혼동한설명교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007359
