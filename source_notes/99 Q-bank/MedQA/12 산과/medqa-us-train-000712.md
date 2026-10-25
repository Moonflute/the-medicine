---
type: qbank
schema_version: 1
id: medqa-us-train-000712
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f2ebe8551960699e69b39a104f45425e4eafa5199b1c5fa4076023604c16cb06
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "placenta previa"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOy5mO2DnOuwmCAoUGxhY2VudGEgUHJldmlhKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 백인 임신 1회(G1) 여성이 임신 35주에 경미한 질 출혈을 주소로 내원하였다. 복통이나 자궁 수축은 없다고 보고하였다. 여행 중이었기 때문에 임신 20주 이후 산전 진찰을 받지 않았다. 현재 임신 전에는 경구 피임약을 복용하였다. 22세에 자궁경부 용종 절제술을 받은 적이 있다. 5갑년(pack-year)의 흡연력이 있다. 혈압은 115/70 mmHg, 심박수는 분당 88회, 호흡수는 분당 14회, 체온은 36.7℃이다. 복부 촉진상 자궁 압통이나 수축은 없다. 자궁저부는 배꼽과 검상돌기 사이에서 촉진된다. 초음파 검사상 태반이 자궁경부 내구(internal cervical os)를 덮고 있는 것이 확인되었다. 이 환자에게 존재하는 요인 중 이 질환의 위험 인자는 무엇인가?

## 선택지

A. 경구 피임약 복용
B. 미산부(Nulliparity)
C. 흡연
D. 백인 인종

## 해설

자궁경부 내구를 덮는 태반과 통증 없는 임신 후기 출혈은 전치태반에 부합한다. 제시된 요인 중 흡연(C)은 전치태반의 위험인자이다. 경구피임약 과거 복용, 미산부, 백인 인종보다 흡연이 이 문항의 위험인자에 해당한다. 경추 외상이나 척수 MRI에 관한 기존 해설은 이 사례와 무관하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/placenta-praevia-placenta-accreta-and-vasa-praevia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000712
