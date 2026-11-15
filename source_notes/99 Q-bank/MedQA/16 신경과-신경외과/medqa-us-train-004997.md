---
type: qbank
schema_version: 1
id: medqa-us-train-004997
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd54188ea8b8a65742291e016e48e592e16675714f963f840096951feb809fbf
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "프리드라이히 운동실조"
  - "척수소뇌성 운동실조"
  - "프라탁신 유전자"
  - "Friedreich ataxia"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 아이에게 진행성 보행실조와 구음장애가 있다. 발목반사는 없지만 바빈스키 징후가 양성이고, 발의 진동·위치감각도 떨어졌다. 형에게도 유사 증상이 있고 심초음파에 심근 비대가 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 샤르코–마리–투스병
B. 프리드라이히 운동실조
C. 운동실조–모세혈관확장증
D. 근긴장성 이영양증

## 해설

프리드라이히 운동실조에서는 소아기 진행성 실조에 말초 감각저하와 피라미드로 징후가 함께 나타난다. 심근병증과 당대사 이상을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 프라탁신 유전자를 ATXN2로 오기한 핵심 오류를 FXN으로 바로잡았다. 프리드라이히 운동실조 C의 척수로·심장 연관을 설명하고 원문 고혈당 단서를 복원했다.
- 공식/학회 근거: https://medlineplus.gov/download/genetics/condition/friedreich-ataxia.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004997
- https://www.ncbi.nlm.nih.gov/books/NBK1281/
