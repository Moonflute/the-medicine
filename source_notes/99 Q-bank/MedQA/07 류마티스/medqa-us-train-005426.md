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
question_type: investigation
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

46세 여자가 4개월 동안 기면과 15년간의 관절통으로 내원했다. 양쪽 팔꿈치에 압통 없는 피하결절, 손가락의 백조목 변형, 간 span은6cm이고 비장 끝이 왼쪽 늑골 아래4cm에서 만져진다. 백혈구 1,800/mm³, 혈소판 130,000/mm³이며 다음 중 이 상태에 가장 특이적인 항체는?

## 선택지

A. 항CCP 항체
B. 항Sm 항체
C. 류마티스인자
D. 항U1-RNP 항체

## 해설


오래된 관절염·류마티스결절·백조목변형은 RA를 지지하며 선택지 중 anti-CCP(A)가 가장 특이적이다. 비장비대와 ANC 약630/mm³는 Felty 증후군도 고려하게 한다. 간 span6cm는 간비대라고 번역하지 않으며 항체 양성만으로 Felty나 다른 혈액질환 감별을 종결하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005426 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문의 간 span6cm를 간비대로 잘못 번역한 부분을 바로잡고 Felty 가능성을 구분했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005426
