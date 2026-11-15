---
type: qbank
schema_version: 1
id: medqa-us-train-005823
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95795339e2236ed8dcdc2e87358e60082cb08b6b7e11da3391dfccb23e1fb8ba
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "침윤성 유관암"
  - "유방보존술"
  - "감시 림프절 생검"
related_disease_slugs:
  - MTMg67aA7J246rO8L-y5qOycpOyEsSDsnKDrsKnslZQgKEludmFzaXZlIEJyZWFzdCBDYW5jZXIpLm1k
question_type: management
difficulty: complex
answer: A
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
---

# MedQA US 임상문제

## 문제

47세 폐경 전 여성이 1.2 cm 침윤성 유방암으로 유방보존술을 받는다. 종양은 ER 양성·HER2 음성이고 액와 진찰과 초음파에서 림프절 전이 소견은 없다. 수술 시 적절한 액와 병기 평가 방법은?

## 선택지

A. 감시림프절 생검
B. 처음부터 액와 림프절 곽청술
C. FDG PET/CT로 액와 병기 확정
D. 액와 병기 평가 생략

## 해설


수술로 치료하는 임상적 림프절 음성 침윤암에서 감시림프절 생검은 표준적인 액와 병기 평가다. 일부 저위험 폐경 후 환자에서는 생략할 수 있지만 이 환자는 그 생략 기준에 해당하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005823 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 감시림프절생검을 신경절 절제로 잘못 설명하고 촉진음성을 병리음성으로 둔갑한 오류 교정. D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/hp/breast-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005823
- https://pubmed.ncbi.nlm.nih.gov/40209128/
