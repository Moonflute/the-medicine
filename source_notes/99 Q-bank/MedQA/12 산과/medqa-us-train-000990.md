---
type: qbank
schema_version: 1
id: medqa-us-train-000990
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a2dfdeac340eb3fd6ea3da1e3d16ac6814f33521b6c3d6b679f03e8ed5941a45
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "ectopic pregnancy"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신반응이 양성인 23세 여성이 한쪽 골반 통증과 소량 질출혈로 왔다. 혈압·맥박은 정상이고 복막 자극 징후는 없다. 임신 위치와 부속기를 바로 확인할 검사는?

## 선택지

A. 임신 위치를 확인하지 않고 메토트렉세이트 투여
B. 복부 조영 CT부터 시행
C. 자궁내용물 흡인부터 시행
D. 질식 초음파

## 해설

임신 초기 통증·출혈에서 질식 초음파로 자궁내 임신 여부와 양쪽 부속기를 평가한다. 결과가 불확실하면 정량 β-hCG와 추적 영상을 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 우측 통증을 양측으로 바꾼 오류 수정 및 파열 응급성 보강.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/ectopic-pregnancy/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000990
- https://www.nice.org.uk/guidance/ng126/chapter/diagnosis-of-viable-intrauterine-pregnancy-and-of-tubal-ectopic-pregnancy
