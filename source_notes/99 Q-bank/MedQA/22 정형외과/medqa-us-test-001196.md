---
type: qbank
schema_version: 1
id: medqa-us-test-001196
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:76364505a42e2e305766220b42e802635be34a6448ba78f2e09bcaaca255a81f
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "주상골 골절"
  - "해부학적 코담배갑 압통"
  - "손목 방사선촬영"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yjvOyDgeqzqCDqs6jsoIggKFNjYXBob2lkIEZyYWN0dXJlKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

14세 남아가 스케이트보드에서 넘어져 손 통증으로 응급실에 왔다. 손을 뻗은 채 넘어졌고 얼음찜질을 하고 이부프로펜을 복용했지만 호전되지 않았다. 손등과 손목이 약간 붓고 장무지신근과 단무지신근 사이 해부학적 코담배갑 부위에 압통이 있었다. 가장 적절한 다음 처치는?

## 선택지

A. 손목 방사선촬영
B. 손목 MRI
C. 엄지 스피카 석고고정
D. 요골측 홈 석고고정

## 해설

손을 짚고 넘어진 뒤 해부학적 코담배갑 압통은 주상골골절을 의심하게 한다. 선지 중 초기 손목 방사선촬영(A)이 적절하며 필요하면 주상골 전용 영상을 포함한다. 초기 X선이 정상이더라도 임상 의심이 높으면 고정하고 추적 또는 추가 영상을 시행한다. 원위요골골절이 흔하다는 일반론으로 이 문항의 국소 압통을 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 초기 손목 X선 A는 맞으나 주상골 단서를 원위요골골절로 잘못 연결한 설명과 원문 하루를 며칠로 바꾼 문장을 교정한다.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/fractures/Scaphoid_Fractures_%E2%80%93_Emergency_Management/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001196
