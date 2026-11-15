---
type: qbank
schema_version: 1
id: medqa-us-train-000127
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2fd798c6d8139e41505aebc78a8920d22af6fd5a7bf6291cc02019b9bcd6b04f
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "endometrial cancer"
  - "breast cancer"
  - "obesity"
  - "diabetes mellitus type 2"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nslZQgKEVuZG9tZXRyaWFsIENhbmNlcikubWQ
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
difficulty: standard
answer: A
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

폐경한 58세 여성이 자궁내막 생검에서 저등급 자궁내막양암으로 진단됐다. 영상에서 자궁 밖 병변은 없고 수술이 가능하다. 기본 수술은?

## 선택지

A. 전자궁절제술 및 양측 난관난소절제술, 병기 평가에 따라 감시림프절 평가
B. 자궁내막 소작술 단독
C. 자궁경부 원추절제술 단독
D. 자궁을 보존한 양측 난관난소절제술

## 해설

임신 보존을 고려하지 않는 초기 자궁내막암에는 자궁과 양측 부속기를 제거하는 수술이 기본이다. 림프절 평가는 위험도에 맞추며, 감시림프절 평가를 활용할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 분유 수유한 환자에게 수유의 보호 효과를 사실상 부여한 설명을 분리하고 다산의 장기 위험 감소 연관성을 명확히 했다.
- https://www.cancer.gov/about-cancer/causes-prevention/risk/hormones/reproductive-history-fact-sheet

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000127
- https://www.ejgo.org/DOIx.php?id=10.3802%2Fjgo.2024.35.e45
