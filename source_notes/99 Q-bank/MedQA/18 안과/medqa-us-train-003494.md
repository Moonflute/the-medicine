---
type: qbank
schema_version: 1
id: medqa-us-train-003494
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b86758764c36e44c0a618de06dc7252cef27dd39d9e4ef02a5502ce6356e2b8
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "trochlear nerve palsy"
  - "fourth cranial nerve injury"
  - "traumatic diplopia"
  - "skew deviation"
question_type: diagnosis
related_disease_slugs:
  - MTgg7JWI6rO8L-qyieuLpOuemOuBvCAoZXh0ZXJuYWwgaG9yZGVvbHVtKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

외상 뒤 9세 아이에게 수직 복시가 생겼다. 왼눈이 상대적으로 위에 있고, 오른쪽을 보거나 머리를 왼쪽으로 기울이면 더 심해진다. 손상된 신경은?

## 선택지

A. 왼쪽 외전신경
B. 오른쪽 동안신경
C. 오른쪽 안면신경
D. 왼쪽 활차신경

## 해설

반대쪽을 볼 때와 병변 쪽으로 머리를 기울일 때 위쪽 편위가 커지면 같은 쪽 상사근 마비에 맞는다. 상사근을 지배하는 신경은 활차신경이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 활차신경 마비를 외직근 마비로 잘못 설명한 오류를 상사근으로 교정. 본문에 Bielschowsky 양상이 있어 사진은 필수 아님.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003494
- https://eyewiki.aao.org/Cranial_Nerve_4_Palsy
