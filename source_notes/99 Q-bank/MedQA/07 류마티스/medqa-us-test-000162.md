---
type: qbank
schema_version: 1
id: medqa-us-test-000162
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:6f4b0fd5fc49d8599493881c5d1634e8d7c47ebabcda0dfb153ed1fbf8807d48
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "쇼그렌증후군"
  - "비호지킨 림프종"
  - "항-Ro 항체"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yHvOq3uOugjCDspp3tm4TqtbAgKFNqw7ZncmVuJ3MgU3luZHJvbWUpLm1k
  - MDkg7ZiI7JWhL-u5hO2YuOyngO2CqCDrprztlITsooUgKE5vbi1Ib2Rna2luIEx5bXBob21hKS5tZA
question_type: prognosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
---

# MedQA US 임상문제

## 문제

51세 여성이 수개월 동안 지속된 구강건조와 안구건조로 내원했다. 너무 심해 음식을 삼키기 어렵다. 고혈압으로 히드로클로로티아지드를 복용하지만 다른 질환은 없고, 할머니가 전신홍반루푸스를 앓았다. 양측 귀밑샘 압통과 건조한 점막이 있으며 혈청 항-Ro 및 항-La 자가항체 역가가 높다. 주진단 외에 향후 발생 위험이 가장 높은 질환은?

## 선택지

A. 위암
B. 비호지킨 림프종
C. 침윤성 유관 유방암
D. 폐 선암

## 해설


쇼그렌 증후군 환자는 항-Ro/La 양성, 구강·안구 건조가 특징이며, 비호지킨 림프종으로의 진행 위험이 증가한다. 다른 선택지는 해당 질환과 연관성이 낮다. 따라서 가장 높은 위험은 비호지킨 림프종이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-000162` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 안구·구강 건조와 anti-Ro/La 양성의 쇼그렌, 림프종 위험 증가 B의 연결이 원문·해설과 일치. 치료 최신성 평가 아님.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000162
