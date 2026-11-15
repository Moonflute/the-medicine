---
type: qbank
schema_version: 1
id: medqa-us-train-004863
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d0f2cd904f5593f7588cb7a3fd3447bac27587ba232ee1db46e1b0a0d640c4aa
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Rh 부적합"
  - "태아-모체 출혈"
  - "로제트 검사"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

감작되지 않은 RhD 음성 산모가 RhD 양성 신생아를 분만했다. 태반 수동 제거 뒤 대량 태아–모체 출혈이 의심된다. 표준 산후 항-D 투여를 지연하지 않으면서 추가 용량을 계산할 검사는?

## 선택지

A. 신생아 직접항글로불린검사
B. 산모 혈액의 태아 적혈구를 정량하는 유세포분석
C. 산모 혈청 항-D의 정성검사만 시행
D. 로제트 선별검사 결과만으로 출혈량을 계산

## 해설

태아 적혈구를 정량하면 표준 항-D 외에 추가가 필요한지 판단할 수 있다. 유세포분석이나 검사실 여건에 따른 산 용출 검사를 사용하며, 로제트 검사는 정량이 아니라 선별이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 로제트 B는 감작 항체검사가 아니라 태아모체출혈 선별검사이다. 2–4주 항체 전환 설명 삭제.
- https://professionaleducation.blood.ca/en/transfusion/clinical-guide/hemolytic-disease-fetus-and-newborn-and-perinatal-immune

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004863
- https://doi.org/10.1111/tme.70076
