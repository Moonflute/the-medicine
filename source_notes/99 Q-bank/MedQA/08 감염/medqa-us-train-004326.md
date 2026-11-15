---
type: qbank
schema_version: 1
id: medqa-us-train-004326
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5abbf9127802735f9b14985ca909b27235c9e23dae1669d8ab090d1efbfc538f
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "여행자 예방접종"
  - "A형 간염 예방"
  - "멕시코 여행"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQe2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBBKS5tZA
question_type: prevention
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

A형간염 백신을 맞은 적이 없고 면역이 확인되지 않은 28세 환자가 2주 뒤 멕시코시티로 출장을 간다. 일반적인 도시 체류 일정이다. 출국 전 우선 추가할 백신은?

## 선택지

A. 황열 백신
B. A형간염 백신
C. 일본뇌염 백신
D. 수막구균 백신

## 해설


A형간염 면역이 없는 멕시코 여행자는 출국 전 예방접종을 시작하고 정해진 간격에 맞춰 나머지 접종을 마친다. 일반적인 도시 체류만으로 황열·일본뇌염·수막구균 백신을 일률적으로 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004326 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 멕시코시티 출장의 HAV 백신 D 유지; 광견병 위험 자체가 없다는 일반화는 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://wwwnc.cdc.gov/travel/destinations/traveler/vfr/mexico

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004326
- https://wwwnc.cdc.gov/travel/destinations/traveler/none/mexico
