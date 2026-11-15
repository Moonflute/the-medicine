---
type: qbank
schema_version: 1
id: medqa-us-train-007604
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:696102a8a5e933992f415e63f631c1ec01a3949d04d98b67ad174041c5ff8e35
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "췌장 선암"
  - "폐쇄성 황달"
  - "CA 19-9"
  - "췌장 두부 종괴"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

48세 남성이 황달과 회색 변으로 내원했다. 초음파에서 췌장 두부 종괴가 의심되고 담관과 췌관이 함께 늘어나 있다. 신기능은 정상이다. 종괴와 주변 혈관 침범, 전이를 처음 평가할 영상은?

## 선택지

A. 비조영 복부 CT
B. 담관과 췌관만 촬영하는 MRCP
C. 전신 FDG PET/CT
D. 췌장 프로토콜 다중시기 조영증강 CT

## 해설


췌장 프로토콜 CT는 여러 조영 시기를 이용해 원발 종괴, 주요 혈관과의 관계 및 간 전이 등을 평가한다. PET/CT나 담관 영상만으로 초기 절제 가능성 평가를 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007604 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CA19-9가 보기 중 췌장암 연관표지 C인 것은 유지하되 질환특이적 확진검사라는 오류 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/pancreatic/hp/pancreatic-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007604
- https://pmc.ncbi.nlm.nih.gov/articles/8901981/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12546840/
