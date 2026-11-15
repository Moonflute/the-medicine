---
type: qbank
schema_version: 1
id: medqa-us-train-002652
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ecc781e40e2a99f2d25a579d62293a36b80b9b2a3ee479a2957ad3b050e9c35f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Budd-Chiari syndrome"
  - "hepatic vein obstruction"
  - "hepatomegaly"
  - "ascites"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-uyhOuTnC3tgqTslYTrpqwg7Kad7ZuE6rWwIChCdWRkLUNoaWFyaSBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

진성적혈구증가증이 있는 환자에게 오른쪽 윗배 통증, 압통성 간비대와 새 복수가 생겼다. 경정맥 팽창은 없다. 간정맥 유출로 폐쇄가 의심될 때 우선 시행할 검사는?

## 선택지

A. 간 탄성도 검사
B. 비조영 복부 CT
C. 간정맥·하대정맥 도플러 초음파
D. 경피 간생검

## 해설


복통, 압통성 간비대, 새 복수와 혈전 위험은 버드–키아리 증후군의 단서다. 도플러 초음파로 간정맥·하대정맥의 혈류와 혈전을 평가하고 필요시 조영 CT나 MRI를 추가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: RUQ 통증·압통간비대·복수와 적혈구 증가 단서는 Budd-Chiari/간정맥폐쇄 C.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002652
- https://doi.org/10.1016/j.jhep.2025.08.001
