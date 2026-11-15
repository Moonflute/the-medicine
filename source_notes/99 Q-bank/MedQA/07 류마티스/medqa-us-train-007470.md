---
type: qbank
schema_version: 1
id: medqa-us-train-007470
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fde95a593238c22a51fd52de0b3ef0283d3d29b6901be304dc1901bfdd1ed4c2
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "전신홍반루푸스"
  - "루푸스 신염"
  - "항dsDNA 항체"
  - "질병 활성도"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTTEUpIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzIChTTEUpKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
  - MDUg7Iug7J6lL-ujqO2RuOyKpCDsvantjKXsl7wgKEx1cHVzIE5lcGhyaXRpcykubWQ
question_type: monitoring
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

루푸스신염으로 치료받은 29세 여성이 정기 추적 중이다. 최근 증상은 안정적이고 항dsDNA가 약간 상승했다. 신장 질환의 재활성 여부를 판단하는 데 함께 우선 볼 지표는?

## 선택지

A. 항핵항체 역가만 반복 측정
B. 소변 단백/크레아티닌 비, 요침사와 혈청 크레아티닌
C. 류마티스인자 역가
D. 혈청 항CCP 항체

## 해설


루푸스신염의 추적에는 단백뇨와 요침사, 신기능 변화가 중요하다. 항dsDNA와 보체는 보조 지표이며, 항체 수치만으로 치료를 증량하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007470 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: anti-dsDNA B는 SLE 활동성 추적의 일부이며 신염 진행을 단독으로 가장 잘 반영·확정한다는 과장 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.1093/rheumatology/keag223

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007470
- https://kdigo.org/guidelines/lupus-nephritis/
