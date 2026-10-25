---
type: qbank
schema_version: 1
id: medqa-us-train-000515
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5c1a7deff86e73afb77aa461c5b39d54f47d84a0e7a52290ffd1fd9670db76a2
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "laceration"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ywveyDgSDrsI8g7Je07IOBIChXb3VuZHMgYW5kIExhY2VyYXRpb25zKS5tZA
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

14세 소녀가 오늘 아침 어머니의 자수용 가위로 작업하다가 실수로 오른쪽 아래팔을 베어 병원에 내원했다. 심각한 질병을 앓은 과거력은 없다. 어머니는 아이가 외국에서 초등학교와 중학교를 다녔으며 모든 소아 예방접종을 받았는지 확실하지 않다고 말한다. 아이는 건강해 보인다. 체온은 37°C, 맥박은 분당 90회, 혈압은 102/68 mm Hg이다. 진찰 결과 오른쪽 아래팔에 2cm 크기의 깨끗한 열상이 있고 주변에 부종이 관찰된다. 발적이나 분비물은 없다. 상처는 물로 세척하고 비누로 씻어냈다. 다음 중 가장 적절한 다음 조치는 무엇인가?

## 선택지

A. DTaP만 투여한다
B. 정맥 내 메트로니다졸(metronidazole) 투여
C. Tdap만 투여한다
D. 추가 조치는 필요하지 않다

## 해설


깨끗하고 작은 열상이지만 파상풍 기초접종력이 불명확하므로 연령에 맞는 Tdap(C)을 투여한다. 14세에게 영유아용 DTaP를 사용하지 않는다. 깨끗한 경미한 상처에는 TIG가 필요하지 않고 파상풍 예방 목적의 항생제도 권장되지 않는다. 다만 Tdap 1회로 미완료 기초접종이 모두 완성되는 것은 아니므로 기록 확인 후 필요한 후속 catch-up 접종을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000515 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 깨끗한 상처에 파열 위험이 없다는 무관한 설명을 제거하고 Tdap 1회 뒤 추가 접종계획 필요성을 명시했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tetanus/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000515
