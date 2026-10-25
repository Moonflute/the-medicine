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
answer: C
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

9세 여아가 친구의 팔꿈치에 왼쪽 귀 위 관자뼈를 맞은 1시간 후 두통과 복시로 응급실에 왔다. 의식소실은 없었지만 20분간 혼란스러웠고 충격을 기억하지 못했다. 머리를 오른쪽 어깨 쪽으로 기울이고 있었으며 왼쪽 눈의 상사시가 오른쪽을 볼 때와 왼쪽 어깨 쪽으로 머리를 기울일 때 악화되었다. 다음 중 안구 증상의 가장 가능성 높은 원인은?

## 선택지

A. 동안신경 손상
B. 안구뒤 출혈
C. 활차신경 손상
D. 중뇌 등쪽 손상

## 해설

왼쪽 상사시가 오른쪽 주시와 왼쪽 머리 기울임에서 악화되고 보상적으로 머리를 오른쪽으로 기울이는 것은 왼쪽 상사근 마비에 합당하다. 상사근은 활차신경(CN IV)의 지배를 받으므로 C가 정답이다. 상사근은 특히 내전된 눈의 하전과 내회전에 관여한다. 외직근은 외전신경(CN VI)의 지배를 받으므로 기존 해설의 외직근 마비 설명은 틀리다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 활차신경 마비를 외직근 마비로 잘못 설명한 오류를 상사근으로 교정. 본문에 Bielschowsky 양상이 있어 사진은 필수 아님.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003494
