---
type: qbank
schema_version: 1
id: medqa-us-train-000199
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ee9fe699c628759b4616f777ea2af93b1a987a8ab6d0f90bd709d8c7212e98a
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "anemia"
  - "polyhydramnios"
  - "pleural effusion"
  - "peritoneal effusion"
  - "fetal subcutaneous edema"
question_type: prognosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
  - MTIg7IKw6rO8L-yWkeyImCDqs7zri6Tspp0gKEh5ZHJhbW5pb3MpLm1k
  - MDIg7Zi47Z2h6riwL-yVheyEsSDtnYnsiJggKE1hbGlnbmFudCBQbGV1cmFsIEVmZnVzaW9uKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 임산부(임신 2회, 출산 1회)가 임신 18주 차에 첫 산전 진찰을 위해 내원하였다. 환자는 태국에서 최근 이주하였다. 과거력상 어린 시절부터 빈혈이 있었으나 치료를 받은 적은 없다. 어머니와 남편도 빈혈이 있다. 심각한 질환의 과거력은 없으며 복용 중인 약물은 없다. 활력 징후는 정상 범위 내에 있다. 자궁저부 높이는 22주로 측정된다. 초음파상 태아의 양수과다증(polyhydramnios), 흉수 및 복수, 그리고 태아 피하 부종이 관찰된다. 이 태아의 가장 가능성 있는 임상 경과는 무엇인가?

## 선택지

A. 무증상 빈혈
B. 보인자 상태
C. 자궁 내 태아 사망
D. 신생아 사망

## 해설

태국 출신 부모의 경한 빈혈 병력과 태아의 흉수·복수·피하부종은 Hb Bart 태아수종 증후군(알파글로빈 4개 유전자 기능 소실)을 시사한다. 심한 빈혈로 인한 태아수종(hydrops fetalis)이며 수두증(hydrocephalus)이 아니다. 치료하지 않으면 자궁내 태아 사망(C)이 예상된다. 전문 태아 치료로 생존하는 경우도 있어 필연적 사망으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 태아수종을 수두증으로 오역하고 중증 알파지중해빈혈 맥락 누락.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000199
