---
type: qbank
schema_version: 1
id: medqa-us-train-007419
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:879d3ee03f8d3c68c6774c2d4939cb9a36f715d8f1cef378fc87b108760620d8
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "상행 대동맥 박리"
  - "스탠퍼드 A형 대동맥 박리"
  - "베타차단제"
  - "혈압 조절"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 갑자기 등으로 뻗치는 극심한 가슴 통증으로 내원했다. 양팔 혈압 차이가 있고 CT 혈관조영에서 상행 대동맥부터 내막판이 보인다. 진통과 감시하 정맥 항충격 치료를 시작했다. 동시에 준비할 근본 치료는?

## 선택지

A. 심장혈관외과에 즉시 의뢰해 응급 수술
B. 혈압약만 투여하고 수 주 뒤 재촬영
C. 대동맥에 대한 처치 없이 전신 섬유소용해
D. 퇴원 후 외래 추적

## 해설

상행 대동맥이 침범된 스탠퍼드 A형 박리는 약물치료와 동시에 응급 수술을 준비한다. 베타차단 등 초기 치료는 대동맥 벽 스트레스를 줄이기 위한 것이며 수술을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TypeA박리의초기IV beta차단 A를응급수술의대체가아닌병행조치로명시.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007419
- ACC/AHA 대동맥질환 진료지침: https://professional.heart.org/en/science-news/2022-guideline-for-the-diagnosis-and-management-of-aortic-disease
