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
question_type: prevention
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
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


가족성 대장암 위험이 높은 경우 10년 전(40세)부터 5년 간격으로 대장내시경을 시작한다. 45세인 환자는 5년 후(50세) 대장내시경을 권고한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005104
