---
type: qbank
schema_version: 1
id: medqa-us-train-001802
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:28faf21640ebede4b83582e26a146e30cd3613bb8fcf6df5a85eb53c836640b5
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Chiari II malformation"
  - "myelomeningocele"
  - "hydrocephalus"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: C
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

4세 남아가 두통과 목 통증으로 내원했다. 출생 직후 허리 부위의 척수수막류를 수술받았다. 뇌 MRI에서 작은 후두개와와 소뇌 벌레·뇌간의 아래쪽 이동, 뇌실 확장이 보인다. 가장 가능성 높은 기형은?

## 선택지

A. 수모세포종
B. 뇌실 내 출혈
C. 키아리 II형 기형
D. 전정신경초종

## 해설

키아리 II형은 척수수막류와 연관되며 작은 후두개와에서 소뇌와 뇌간이 아래로 이동한다. 뇌척수액 흐름이 방해되어 수두증을 동반할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 척수수막류 병력과 후두개와 증상의 Chiari II C는 본문으로 지지되며 뇌실내출혈 동반과 보지 못한 MRI 확인 문구를 제거한다.
- 공식/학회 근거: https://www.ninds.nih.gov/sites/default/files/2025-05/chiari-malformation.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001802
