---
type: qbank
schema_version: 1
id: medqa-us-train-003022
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:624402b0c89d1ff6ce3cb82c55d88df3874fae9ba785a6faa2e0233b035158ed
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "newly diagnosed hypertension"
  - "baseline ECG"
  - "hypertension evaluation"
  - "target-organ assessment"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: investigation
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

46세 여성이 진료실과 가정에서 모두 혈압이 높아 고혈압으로 진단됐다. 전해질, 크레아티닌, 공복혈당, 지질과 소변 검사는 정상이고 흉통, 심잡음, 심부전 소견이 없다. 기본 평가에서 부정맥과 좌심실비대 단서를 확인하기 위해 추가할 검사는?

## 선택지

A. 12유도 심전도
B. 수면다원검사
C. 경식도 심초음파
D. 신동맥 CT 혈관조영술

## 해설


새로 진단된 고혈압에서는 12유도 심전도로 좌심실비대나 부정맥 등 심장 이상 단서를 확인한다. 심초음파나 신동맥 영상은 초기 결과와 증상, 이차성 고혈압을 의심하는 소견에 따라 추가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 현재 본문·4선지·정답 A·해설 및 영어 원문 대조. 반복 진료실/가정 혈압 상승과 정상 기본검사에서 ECG를 포함한 고혈압 표적장기 손상 평가가 적절하며 불일치 플래그는 실제 타질환 해설이 아님.
- https://www.nice.org.uk/guidance/ng136/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003022
- https://koreanhypertension.org/reference/guide?idno=10446&mode=read
- https://academic.oup.com/eurheartj/article/45/38/3912/7741010
