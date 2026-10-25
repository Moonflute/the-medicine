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
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
difficulty: simple
answer: D
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

50세 백인 남성이 정기 검진을 위해 내원하였다. 현재 특별한 호소 증상은 없다. 건강하며 복용 중인 약물은 없다. 지난 10년간 하루 10~15개비의 담배를 피워왔다. 가족력상 위장관 질환은 없다. 미국 예방의학 서비스 태스크포스(USPSTF) 권고에 따라 이 환자에게 권장되는 선별 검사는 무엇인가?

## 선택지

A. 전립선암 선별을 위한 전립선 특이 항원(PSA) 검사
B. 대장암 선별을 위한 암태아성 항원(CEA) 검사
C. 복부 대동맥류 선별을 위한 복부 초음파 검사
D. 대장암 선별을 위한 대장내시경 검사

## 해설

평균위험 성인은 45~75세에 대장암 선별검사가 권고되므로 50세의 이 환자에게 선지 중 대장내시경(D)이 적절하다. 정상 결과의 고품질 대장내시경은 보통 10년 간격인 여러 선별 전략 중 하나이며 FIT 등 다른 선택지도 있다. 흡연 10년 여부가 선별 시작의 필수 조건은 아니다. CEA는 평균위험 무증상자의 대장암 선별검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CRC 선별 D는 맞지만 10년 흡연 때문에 권고된다는 인과와 대장내시경만을 유일 권고검사로 설명한 오류를 수정한다.
- 공식/학회 근거: https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000542
