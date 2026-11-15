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

44세 여성이 대장암 검진을 상담하러 왔다. 증상은 없지만 아버지가 51세에 대장암을 진단받았다. 본인은 대장내시경을 받은 적이 없다. 이 환자의 가족력을 반영한 검진 방법은?

## 선택지

A. 지금 대장내시경검사를 받도록 권한다
B. 50세가 될 때까지 아무 검진도 하지 않는다
C. 복부 CT를 정기적으로 촬영한다
D. 분변잠혈검사만 음성이면 대장내시경은 필요 없다

## 해설


직계가족의 비교적 이른 대장암 병력이 있는 경우 평균위험군 국가검진 일정만 적용하지 않는다. 국립암센터·대한대장항문학회가 제시한 고위험군 권고에서 부모가 55세 이전에 대장암을 진단받은 이 환자는 대장내시경 대상이다. 가족 내 암 발생 양상을 더 확인해 유전성 고위험 여부도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005104 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 25세를45세로 바꾼 해설의 연령 오류 교정. 부친40세 CRC이면10년 전인30세 즉5년 후 대장내시경 A.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gastro.org/clinical-guidance/risk-stratification-for-colorectal-cancer-screening-and-surveillance/
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005104
- 국립암센터·대한대장항문학회, 대장암 고위험군 검진 권고: https://www.cancer.go.kr/lay1/program/S1T211C214/cancer/view.do?cancer_seq=3797&menu_seq=3806
