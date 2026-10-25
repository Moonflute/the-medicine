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
question_type: 임상증례 객관식
difficulty: complex
answer: D
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

29세 남자가 정기 건강검진을 위해 내원했다. 심각한 질환 병력은 없고 어머니는 고혈압, 아버지는 51세에 고환암으로 사망했다. 흡연과 음주는 하지 않으며 성생활을 하고 콘돔을 일관되게 사용한다. 예방접종 기록은 없다. 2주 후 멕시코시티로 출장을 간다. 체온 36.7°C, 맥박 78회/분, 혈압 122/78 mmHg이다. 헤모글로빈 13.4 g/dL, 백혈구 9,800/mm³, 혈소판 168,000/mm³, 포도당 113 mg/dL, 크레아티닌 1.1 mg/dL이다. 현재 가장 적절한 권고는 무엇인가?

## 선택지

A. 말라리아 화학예방
B. 광견병 백신
C. 황열 백신
D. A형 간염 백신

## 해설


접종 기록 없는 멕시코 여행자에게 A형간염 백신 D가 권고된다. 멕시코시티만 방문하는 일반 출장에서 malaria 화학예방이나 황열 백신을 일률 적용하지 않는다. 광견병은 여행 전체의 동물노출·체류/의료접근성에 따라 평가하는 문제이므로 멕시코에서 위험이 전혀 없다고 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004326 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 멕시코시티 출장의 HAV 백신 D 유지; 광견병 위험 자체가 없다는 일반화는 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://wwwnc.cdc.gov/travel/destinations/traveler/vfr/mexico

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004326
