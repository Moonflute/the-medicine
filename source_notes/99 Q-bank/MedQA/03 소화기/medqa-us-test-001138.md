---
type: qbank
schema_version: 1
id: medqa-us-test-001138
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:94b80fc014874a5d3d8cc666fd3e3141776cd2dbc809644e8b46d0d6cc335d9c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "셀리악병"
  - "포진상 피부염"
  - "글루텐 제한식"
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
question_type: management
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성이 만성 설사와 체중 감소, 팔꿈치에 심하게 가려운 군집성 수포로 내원했다. 평가에서 셀리악병과 포진상 피부염이 확인됐다. 장 손상과 재발을 줄이는 장기 치료는?

## 선택지

A. 가려움이 있을 때만 덱사메타손을 복용한다
B. 유당만 평생 제한한다
C. 글루텐이 없는 식단을 지속한다
D. 지사제만 장기 복용한다

## 해설


확진된 셀리악병은 글루텐을 지속적으로 피하는 식이치료가 기본이다. 피부 증상의 치료와 영양 결핍 보충을 병행할 수 있지만, 그것들이 글루텐 제한을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 만성 지방변·체중 감소/빈혈과 군집 구진수포성 피부병변은 celiac/포진피부염 조합. 근본 식이치료 C와 해설 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001138
- https://pubmed.ncbi.nlm.nih.gov/36602836/
