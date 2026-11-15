---
type: qbank
schema_version: 1
id: medqa-us-train-000786
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:485b2564164a833daf3cb55b998bcb7b47f17547021ed4243d3abb7bc72cd7e2
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "hypercalcemia"
  - "kidney stones"
  - "parathyroidectomy"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvQ2FsY2l1bUdsdWNvbmF0ZS5tZA
---

# MedQA US 임상문제

## 문제

골병변을 동반한 중증 원발성 부갑상샘기능항진증으로 수술한 남성이 수술 3일째 저칼슘혈증을 보인다. 혈청 인과 마그네슘도 낮지만 PTH는 정상 상한이다. 저칼슘혈증을 가장 잘 설명하는 원인은?

## 선택지

A. 부갑상샘 기능저하로 인 배설이 감소한 상태
B. 대량 수혈에 사용된 시트르산의 일시적 영향
C. 저알부민혈증에 따른 가성 저칼슘혈증
D. 수술 뒤 뼈로 칼슘과 인이 이동하는 굶주린뼈증후군

## 해설


부갑상샘절제술 후 뼈 재광화가 급격히 늘면 칼슘·인·마그네슘이 함께 떨어질 수 있다. PTH가 낮고 인이 높아지는 수술 후 부갑상샘기능저하증과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000786 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 갑상선절제술로 잘못 연결한 수술명을 부갑상선절제술로 교정하고 증상성 저칼슘혈증 평가를 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8117371/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000786
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8789028/
