---
type: qbank
schema_version: 1
id: medqa-us-train-008355
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a84e2f3e0ecd72ab132e1695056e7739af4c2da2793a861285e05843e927d459
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "patient identification error"
  - "two patient identifiers"
  - "healthcare safety"
related_disease_slugs: []
question_type: prevention
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

동명이인인 두 환자가 같은 병동에 입원해 있다. 협진 의사가 잘못된 환자의 기록을 열어 진료할 뻔했다. 진료를 시작하기 전 어떤 확인 절차가 적절한가?

## 선택지

A. 환자에게 이름만 말하게 한 뒤 기록을 연다
B. 병실·침상 번호가 맞으면 기록을 사용한다
C. 의뢰한 의료진이 확인했으면 협진에서는 생략한다
D. 환자의 이름과 생년월일 등 서로 다른 두 가지 정보를 기록과 대조한다

## 해설


동명이인 오류를 막으려면 이름과 생년월일 또는 등록번호처럼 서로 다른 두 환자 식별정보를 확인해 기록과 맞춰야 한다. 병실·침상 번호는 환자가 바뀔 수 있어 식별정보로 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 동명이인 평가 오류를 예방하려면 직종에 관계없이 모든 환자 접촉에서 두 가지 식별자를 확인하는 D가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008355
- https://www.who.int/docs/default-source/patient-safety/patient-safety-solutions/ps-solution2-patient-identification.pdf
