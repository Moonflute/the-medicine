---
type: qbank
schema_version: 1
id: medqa-us-train-000542
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d39e9016c92ebade1edbea3c0157e527018253cf378f680db8dbedb9d9d001a6
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "prostate cancer"
  - "colorectal cancer"
  - "abdominal aortic aneurysm"
question_type: prevention
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

증상과 대장암 가족력이 없는 52세 남성이 국내 국가암검진을 받으러 왔다. 이 사업에서 대장암에 대해 기본으로 먼저 하는 검사는?

## 선택지

A. 분변잠혈검사
B. 혈청 암배아항원(CEA)
C. 복부 CT
D. 복부 초음파

## 해설

국내 국가암검진사업은 50세 이상에서 매년 분변잠혈검사를 시행한다. 양성이면 대장내시경으로 평가한다. 증상이 있거나 고위험군이면 진단·추적 전략이 다를 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CRC 선별 D는 맞지만 10년 흡연 때문에 권고된다는 인과와 대장내시경만을 유일 권고검사로 설명한 오류를 수정한다.
- 공식/학회 근거: https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000542
- https://cancer.go.kr/lay1/S1T261C262/contents.do
- 국가암정보센터, 국가암검진 사업: https://www.cancer.go.kr/lay1/S1T261C262/contents.do
