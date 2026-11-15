---
type: qbank
schema_version: 1
id: medqa-us-train-000436
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86446749723553f56b72897f0aa3035a206874c7bf12b339b6704fd33d13fc9e
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "atypical glandular cells"
question_type: investigation
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

37세 비임신 여성의 자궁경부 세포검사에서 비정형 선세포(AGC)가 확인됐다. 고위험 HPV 검사는 음성이다. 다음 평가는?

## 선택지

A. 질확대경검사와 자궁경관 검체 채취, 자궁내막 생검
B. 12개월 뒤 세포검사만 반복
C. 질확대경만 하고 추가 검체는 채취하지 않음
D. HPV가 음성이므로 검진 간격대로 추적

## 해설


AGC는 HPV 음성이어도 질확대경검사와 자궁경관 평가가 필요하다. 35세 이상 비임신 환자에서는 자궁내막 선병변을 배제하기 위해 내막 검체도 채취한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000436
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7147428/
