---
type: qbank
schema_version: 1
id: medqa-us-train-002635
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e1b5254c721a9de57c82087aeaee2ba9695106031fe8cbc6b672ada0fe4a686e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "AIDS"
  - "Kaposi sarcoma"
  - "HHV-8"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

44세 여성이 8년간 HAART로 잘 조절되는 HIV 병력으로 감염내과 외래를 방문했다. 현재 건강하고 예방접종과 예방관리는 최신이다. 다음 중 AIDS와 관련되어 흔히 나타나는 악성종양은?

## 선택지

A. 대장 선암
B. 카포시 육종
C. 흉선종
D. 악성 흑색종

## 해설


AIDS 환자에서 흔히 나타나는 악성 종양은 HHV‑8 감염에 의해 발생하는 카포시 육종이다. 이는 피부와 점막에 보라색 병변을 일으킨다. 따라서 정답은 카포시 육종이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002635 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: AIDS와 Kaposi육종-HHV8 B 연관을 원문 대조하여 유지. 조절되는 HIV 환자 자신에게 종양이 발생했다는 오독은 없음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002635
