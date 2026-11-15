---
type: qbank
schema_version: 1
id: medqa-us-test-000826
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b9f1a4895c814c9dd883c39aa8335259b75c6003a0a60cc2da06318c0f289243
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유방 섬유선종"
  - "섬유선종"
  - "청소년 유방 종괴"
related_disease_slugs:
  - MTMg67aA7J246rO8L-yErOycoOyEoOyihSAoRmlicm9hZGVub21hKS5tZA
question_type: investigation
difficulty: complex
answer: C
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

16세 청소년이 최근 만져지는 유방 종괴로 진료받는다. 부드럽고 가동성이 있는 2.5cm 종괴이며 피부 변화나 유두 분비는 없다. 구조를 확인할 초기 영상은?

## 선택지

A. 진단용 유방 CT
B. 조영증강 유방 MRI
C. 표적 유방 초음파
D. 유방 영상 대신 유전자 검사부터 시행

## 해설


청소년의 촉지 종괴는 초음파를 우선 시행해 고형인지 낭성인지 확인한다. 전형적 양성 소견이라도 빠른 성장이나 영상·진찰 불일치가 있으면 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000826 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 청소년 가동성 유방종괴의 fibroadenoma와 C 유지. 모두 대부분 자연 소실한다는 과도한 빈도 표현을 퇴축 가능성으로 제한.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/childhood

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000826
- https://pubmed.ncbi.nlm.nih.gov/37236740/
