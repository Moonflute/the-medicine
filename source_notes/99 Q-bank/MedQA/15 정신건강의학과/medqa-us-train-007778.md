---
type: qbank
schema_version: 1
id: medqa-us-train-007778
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:842e2b9125ac385166ff2f655b8ad7f298fc6376d9c9c9f12404b85a66a558df
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "normal aging"
  - "mild cognitive impairment"
  - "Alzheimer disease"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qyveuPhCDsnbjsp4Ag7J6l7JWgIChNaWxkIENvZ25pdGl2ZSBJbXBhaXJtZW50KS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy4oO2VmOydtOuouCDsuZjrp6QgKEFsemhlaW1lcidzIERpc2Vhc2UpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

71세 남성이 1년 전보다 새 약속을 자주 잊는다. 표준화 인지검사에서 연령·교육 수준에 비해 지연회상이 떨어진다. 수첩을 쓰지만 약 복용, 요리, 금전 관리는 혼자 한다. 의식 변동과 우울 증상은 없다. 가장 가능성 높은 인지 상태는?

## 선택지

A. 정상 노화
B. 알츠하이머 치매
C. 경도인지장애
D. 저활동형 섬망

## 해설

연령 기대치를 벗어난 객관적 인지 저하가 있으나 일상생활의 독립성이 보존되면 경도인지장애에 부합한다. 원인을 평가하고 경과를 추적한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007778
- https://www.nia.nih.gov/health/memory-loss-and-forgetfulness/what-mild-cognitive-impairment

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 딸의 어머니(환자의 아내) 알츠하이머 병력을 환자의 어머니로 오역한 부분 교정. 정상 노화를 MCI 또는 혈관성 퇴행질환과 혼동하지 않도록 설명.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
