---
type: qbank
schema_version: 1
id: medqa-us-validation-000895
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:23ae491456b1a240de6d82c7d8fc2d199f5a7bd540efcfd031f51d1c4e298c18
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "로키산홍반열"
  - "Rickettsia rickettsii"
  - "점막피부 발진"
  - "Rocky Mountain spotted fever"
related_disease_slugs:
  - MDgg6rCQ7Je8L-udvOyehOuzkSAoTHltZSBEaXNlYXNlKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
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

29세 여성이 6일간 점점 악화되는 발열, 두통, 발진으로 진료를 받으러 왔다. 발열 2일 후 손목과 발목에서 시작해 몸통, 손바닥, 발바닥으로 퍼진 반점구진성 발진이 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 발진티푸스
B. 라임병
C. 로키산홍반열
D. Q열

## 해설


발열 후 손·발목에서 시작해 몸통·손바닥·발바닥으로 퍼지는 반점구진성 발진은 로키산홍반열(RMSF)의 전형적인 피부소견이다. 이는 Rickettsia rickettsii 감염에 의해 발생한다. 따라서 가장 가능성 높은 진단은 로키산홍반열이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000895 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발열 후 손목/발목에서 몸통·손발바닥으로 퍼지는 발진은 RMSF C. 누락 그림 없이도 분포·시간 경과가 본문에 충분히 명시됨.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000895
