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
explanation_status: machine-generated
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

32세 백인 여성이 8개월간 복통, 악취 나는 부피 큰 지방변, 체중 감소, 거대적아구성 빈혈로 위장관 전문의에게 의뢰되었다. 팔, 몸통, 복부에 군집성 홍반성 구진수포 병변이 있었다. 가장 적절한 관리 방법은?

## 선택지

A. 아미트립틸린
B. 옥트레오타이드
C. 글루텐 제한식
D. 메티세르지드 말레산염

## 해설


복통·지방변·거대적아구성 빈혈·피부 병변은 셀리악병을 시사하고, 치료의 핵심은 글루텐을 완전히 배제하는 식이요법이다. 따라서 가장 적절한 관리 방법은 글루텐 제한식이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 만성 지방변·체중 감소/빈혈과 군집 구진수포성 피부병변은 celiac/포진피부염 조합. 근본 식이치료 C와 해설 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001138
