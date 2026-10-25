---
type: qbank
schema_version: 1
id: medqa-us-train-005104
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8964cfe802b075d9fdb64780cd6ebeb1ff7c8a93f7a6c9cfe63a7546285a627c
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "가족성 대장암 위험"
  - "조기 대장암 선별검사"
  - "대장내시경"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: prevention
difficulty: standard
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
---

# MedQA US 임상문제

## 문제

25세 여자가 새 환자 건강검진을 받으러 왔다. 어머니는 당뇨병과 관상동맥질환이 있고 아버지는 40세에 대장암을 진단받아 45세에 사망했다. 환자는 증상이 없고 예방접종과 월경은 정상이다. 다음 중 가장 적절한 권고는?

## 선택지

A. 5년 후 대장내시경
B. 10년 후 대장내시경
C. 지금 자궁경부세포검사와 HPV DNA 검사
D. 5년 후 자궁경부세포검사

## 해설


첫째 친족이 40세에 대장암을 진단받았으므로 가족력에 따른 선별검사는 40세 또는 가장 이른 진단보다 10년 전 중 빠른 시기인 30세에 시작한다. 현재 25세이므로 보기 A의 5년 후 대장내시경이 이에 맞는다. 기존 해설의 환자45세·50세 시작은 본문과 다르다. 자궁경부 선별은 별도로 필요할 수 있으나 USPSTF는 21–29세에 cytology 단독 3년 간격을 권고하며, 보기 C의 일률적인 Pap+HPV 동시검사를 뜻하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005104 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 25세를45세로 바꾼 해설의 연령 오류 교정. 부친40세 CRC이면10년 전인30세 즉5년 후 대장내시경 A.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gastro.org/clinical-guidance/risk-stratification-for-colorectal-cancer-screening-and-surveillance/
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005104
