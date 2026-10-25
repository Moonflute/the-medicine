---
type: qbank
schema_version: 1
id: medqa-us-train-007859
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c76d26913d211b89e48905d3e055f7e9f5753695703029aefdbe22c94abd83db
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "essential hypertension"
  - "lifestyle modification"
  - "weight loss"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: management
difficulty: complex
answer: "D"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 체중 자료 없이 체중감량을 강제한 정답을 반복 2기 고혈압 치료로 교정."
curation_status: "revised"
curation_reason: "체중 자료 없이 체중감량을 강제한 정답을 반복 2기 고혈압 치료로 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

55세 남자가 건강검진을 위해 일차 진료를 받으러 왔다. 전반적으로 건강하고 현재 불편감은 없다. 술을 자주 마시고 고염식이를 하며 운동을 하지 않는다. 체온 97.5°F(36.4°C), 혈압 167/108 mmHg, 맥박 90회/분, 호흡수 15회/분, 산소포화도 99%이다. 이전 두 번의 진료에서도 혈압이 각각 159/100 mmHg와 162/99 mmHg였다. 의사는 혈압 조절을 위해 개입하려 한다. 다음 중 이 환자의 고혈압에 가장 효과적인 치료는?

## 선택지

A. DASH 식이만 시행하고 약물치료는 하지 않는다
B. 절주만 시행하고 약물치료는 하지 않는다
C. 염분 제한만 시행하고 약물치료는 하지 않는다
D. 항고혈압제 치료를 시작하면서 DASH 식이·절주·염분 제한·운동을 함께 시행한다

## 해설

여러 번의 진료에서 160/100 mmHg 안팎의 높은 혈압이 반복되어 생활습관 한 가지만으로 치료를 미룰 상황이 아니다. 정확한 측정과 동반질환 평가를 바탕으로 항고혈압제와 생활습관 교정을 함께 시작한다. 현행 지침은 2기 고혈압에서 서로 다른 일차약 두 가지의 초기 병합을 권고한다. 체중·BMI 정보가 없는데 비만을 가정해 체중감량만을 정답으로 삼지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 체중 자료 없이 체중감량을 강제한 정답을 반복 2기 고혈압 치료로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007859

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
