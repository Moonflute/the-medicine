---
type: qbank
schema_version: 1
id: medqa-us-train-006738
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0fa1afbc68d8ea1f34fb73e9e50c55c6f97f51c8a35cbf36fc008f003efd5404
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "임신 중 유방암"
  - "침윤성 소엽암"
  - "HER2 양성 유방암"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
  - MTMg67aA7J246rO8L-y5qOycpOyEsSDsnKDrsKnslZQgKEludmFzaXZlIEJyZWFzdCBDYW5jZXIpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

임신 21주 환자의 HER2 양성 침윤성 유방암에 수술과 항암치료가 필요하다. 원격전이는 없고 임신 유지를 원한다. 임신 중 시행할 치료와 출산 이후로 미룰 치료의 구분으로 적절한 것은?

## 선택지

A. 임신 중 트라스투주맙을 우선 시작하고 수술은 출산 뒤에 한다
B. 임신 중에는 치료가 불가능해 출산까지 모든 치료를 미룬다
C. 방사선치료와 트라스투주맙을 임신 중 먼저 하고 수술은 미룬다
D. 필요한 수술과 가능한 항암치료는 임신 중 시행하고 방사선과 항-HER2 치료는 출산 뒤로 미룬다

## 해설


임신 2·3삼분기에는 적응증이 있으면 수술과 일부 항암치료가 가능하다. 트라스투주맙과 유방 방사선치료는 태아 위험 때문에 출산 후로 미루고 치료와 분만 시점을 다학제로 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006738 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 임신20주 유방암에 수술+임신중기 허용 화학요법 B 및 임신 중 방사선/HER2 표적치료 회피 설명을 현행 NCI와 대조 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/hp/pregnancy-breast-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006738
- https://doi.org/10.1200/JCO-25-02115
