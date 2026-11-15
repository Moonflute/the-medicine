---
type: qbank
schema_version: 1
id: medqa-us-test-000016
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f90c580b0144f8ec5c36dcd912f21cdd59a844bdc332a1c3c40faec771a2ebe8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "담낭암"
  - "석회화 담낭 종괴"
  - "담석증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ri7Trgq3slZQgKEdhbGxibGFkZGVyIENhbmNlcikubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 여성의 조영증강 CT에서 담낭벽이 불규칙하게 두꺼워져 종괴를 만들고, 담낭과 인접 간의 경계가 끊기며 침윤이 의심된다. 석회화가 일부 보이지만 총담관에 결석은 없다. 우선 평가해야 할 진단은?

## 선택지

A. 단순 담도산통
B. 담낭암
C. 단순 총담관결석
D. 급성 췌장염

## 해설

불규칙한 종괴형 담낭벽 비후와 인접 간 침범은 담낭암을 의심할 소견이다. 석회화만으로 악성을 판단하지 않으며 추가 영상과 수술 가능성 평가를 진행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 석회화 종괴가 곧 흔한 암 소견이라고 단정한 설명을 담낭 주변 종괴의 악성 감별 필요로 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000016
- https://doi.org/10.3348/kjr.2024.0914
