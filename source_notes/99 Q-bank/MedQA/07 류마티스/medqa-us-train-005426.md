---
type: qbank
schema_version: 1
id: medqa-us-train-005426
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:809197b36183741e1f6c8bf1f9c8cf9238a49f1c437ba598b027973a1d8be021
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스관절염"
  - "펠티증후군"
  - "항CCP 항체"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

15년간 류마티스관절염이 있는 46세 여성에게 반복 감염이 생겼다. 비장이 커져 있고 절대호중구 수는 600/μL다. 최근 약 변경은 없고 약물 또는 혈액암에 대한 평가도 진행 중이다. 이 세 소견이 모이는 합병증은?

## 선택지

A. 펠티 증후군
B. 쇼그렌증후군
C. 항인지질증후군
D. 스틸병

## 해설


오래된 류마티스관절염, 호중구감소와 비장비대는 펠티 증후군의 고전적 조합이다. 약물과 T세포 큰과립림프구 백혈병 등도 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005426 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문의 간 span6cm를 간비대로 잘못 번역한 부분을 바로잡고 Felty 가능성을 구분했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005426
- https://doi.org/10.3389/fmed.2023.1238402
