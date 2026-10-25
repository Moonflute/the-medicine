---
type: qbank
schema_version: 1
id: medqa-us-validation-001095
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7d9d27036e0815a725a6c626d88007250ec0399bd414af511511b8f0b0439e4c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "고칼슘혈증"
  - "변비"
  - "다뇨"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

64세 남성이 비정상적인 쇠약, 집중력 저하, 식욕 감소, 5일간 배변하지 못한 변비로 진료를 받으러 왔다. 소변이 맑고 많으며 비중이 낮다. 기억검사에서 3개 물체 중 1개만 기억한다. 다음 중 어떤 검사 수치가 비정상일 가능성이 가장 높은가?

## 선택지

A. 칼슘 수치
B. 납 수치
C. 칼륨 수치
D. TSH 수치

## 해설


정답 A. 고칼슘혈증은 장운동 저하로 변비·식욕저하·복통을 만들고 근력/집중력과 의식에도 영향을 줄 수 있다. 신장의 소변 농축능을 떨어뜨려 많은 묽은 소변과 탈수를 유발할 수 있어 제시 조합을 잘 설명한다. 혈청 Ca를 측정하고 실제 증가 여부를 확인한다. 아직 값이 제시되지 않았으므로 고Ca가 이미 확진된 것처럼 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001095 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 순환논법 대신 고Ca의 장운동·신경인지·신장농축 장애 기전으로 A 설명.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001095
