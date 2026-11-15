---
type: qbank
schema_version: 1
id: medqa-us-validation-000079
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5c879470ffa79ac2d2133db9a2d5eb95d46a7395639560a88dff9340b7de7ff3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "췌장두부암"
  - "폐쇄성 황달"
  - "담도 폐쇄"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

64세 남성에게 체중 감소와 진행성 무통성 황달이 생겼다. 초음파에서 총담관과 췌관이 함께 확장되어 있다. 발열이나 저혈압은 없다. 췌장두부 종양과 절제 가능성을 처음 평가할 영상은?

## 선택지

A. 췌장 프로토콜 다중시기 조영 CT
B. 복부 비조영 CT
C. 전신 FDG PET-CT
D. 담낭 핵의학 검사

## 해설


체중 감소와 담관·췌관의 동시 확장은 췌장두부 등 원위부 폐쇄성 종양을 의심하는 단서다. 췌장 프로토콜 조영 CT로 병변, 혈관 침범, 전이를 평가한다. 관 확장만으로 암을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000079 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 직장성 황달/말기 폐쇄라는 오역 제거, double-duct·무통성 담낭 팽창의 악성 폐쇄 A를 진단 추론으로 한정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000079
- https://pubmed.ncbi.nlm.nih.gov/34148794/
