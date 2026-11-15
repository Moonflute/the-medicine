---
type: qbank
schema_version: 1
id: medqa-us-train-000254
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3015c8228fbc72a1e8088cb8356901bf7b7d6c1c8ad9d26494c65f44709a7387
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "lymphoma"
  - "hypertension"
  - "kidney transplant"
  - "lymphadenopathy"
  - "splenomegaly"
  - "Non-Hodgkin’s lymphoma"
related_disease_slugs:
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDkg7ZiI7JWhL-u5hO2YuOyngO2CqCDrprztlITsooUgKE5vbi1Ib2Rna2luIEx5bXBob21hKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

신장이식 후 면역억제제를 복용하는 65세 남성에게 흠뻑 젖는 야간발한, 6 kg 체중감소, 여러 부위 림프절 비대가 생겼다. 영상에서는 비장도 커져 있다. 이식 병력과 함께 특히 의심해 림프절 생검으로 확인할 질환은?

## 선택지

A. 이식 후 림프증식질환(PTLD)
B. 타크로리무스 신독성
C. 이식신의 급성 세포매개 거부반응
D. 단클론 감마병증(MGUS)

## 해설


이식 후 면역억제 환자의 전신 림프절 비대와 전신 증상은 PTLD의 단서다. 확진과 아형 판정에는 조직이 필요하며 EBV 검사만으로 배제하거나 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000254 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 이식후 장기 면역억제·B증상·전신 림프절병증의 PTLD/NHL 맥락 D가 부합. 원문 비교; 구체적 조직형/치료 확진 아님.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000254
- https://pubmed.ncbi.nlm.nih.gov/31230381/
