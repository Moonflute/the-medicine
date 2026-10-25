---
type: qbank
schema_version: 1
id: medqa-us-train-000663
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:adf18b4285d0fbc923d7133b1e7af2bb0f00b01e80ed3c14921adffe4faf25df
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "rheumatoid arthritis"
  - "diabetes"
  - "hypertension"
  - "hyperlipidemia"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
---

# MedQA US 임상문제

## 문제

51세 여성이 2주간의 피로감과 전신 쇠약감을 주소로 내원하였다. 과거력상 당뇨병, 고혈압, 고지혈증이 있다. 최근 류마티스 관절염(rheumatoid arthritis)을 진단받고 질환 조절 항류마티스제(DMARDs) 치료를 시작하였다. 환자는 즐기던 활동을 하기 어렵고 아이들과 운동을 할 수 없다는 것에 죄책감을 느낀다고 말한다. 계통 문진상 가끔 화장지에 소량의 선홍색 혈변이 묻어난다는 점이 확인된다. 검사 결과는 다음과 같다. 혈색소(Hemoglobin): 12 g/dL, 헤마토크릿(Hematocrit): 36%, 백혈구 수(Leukocyte count): 7,700/mm^3(정상 감별 계산), 혈소판 수(Platelet count): 207,000/mm^3, 평균 적혈구 용적(MCV): 110 fL. 이 환자의 피로감에 대한 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 우울증
B. 철 결핍
C. 약물 부작용
D. 비타민 B12 결핍

## 해설


RA 질병조절 치료를 시작한 뒤 발생한 MCV110 fL는 methotrexate 같은 엽산 대사 관련 약물의 영향을 의심하게 하므로 C가 출제 의도에 부합한다. 실제 처방 약명과 엽산 보충 여부, B12/엽산·간기능·신기능 등을 확인해야 하며 정상 혈구 수와 Hb12 g/dL만으로 심한 골수억제를 확진할 수 없다. 약물 부작용을 가장 흔한 모든 원인으로 단정하지 않는다. 소량 혈변과 피로의 다른 원인도 별도로 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000663 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Hb12·MCV110만으로 골수억제성 빈혈이 확정됐다고 한 과도한 단정을 약물 관련 대적혈구증의 의심으로 수정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000663
