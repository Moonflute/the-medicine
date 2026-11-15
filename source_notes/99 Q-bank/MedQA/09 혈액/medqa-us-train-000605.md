---
type: qbank
schema_version: 1
id: medqa-us-train-000605
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a3f7456db36c446dde22c85ba5258dcd1e27359c7b9c80c90b992d723735fa63
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "sickle cell trait"
  - "sickle cell disease"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

혈색소 분석에서 HbA 55%, HbS 43%로 겸상적혈구 보인자가 확인된 17세 환자에게 육안적 혈뇨가 처음 생겼다. 혈색소는 정상이다. 혈뇨에 대한 적절한 판단은?

## 선택지

A. 보인자로 인한 흔한 증상이므로 추가 평가 없이 관찰한다
B. 신유두 괴사 가능성을 포함해 혈뇨 원인을 평가하고 다른 원인을 배제하기 전 보인자 탓으로 단정하지 않는다
C. 겸상적혈구병으로 진행한 것으로 보고 교환수혈한다
D. 보인자 소견만으로 신세포암을 확진한다

## 해설


겸상적혈구 보인자에서도 신유두 괴사 등으로 혈뇨가 생길 수 있다. 하지만 요로 감염·결석과 다른 신장·요로 질환을 검토한 뒤 연관성을 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000605 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Sickle trait의 신유두 괴사를 신우피질 괴사로 오역한 부분을 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000605
- https://stacks.cdc.gov/view/cdc/110642
