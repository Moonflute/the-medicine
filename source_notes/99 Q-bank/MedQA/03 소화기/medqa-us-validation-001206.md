---
type: qbank
schema_version: 1
id: medqa-us-validation-001206
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ab7f4f4c3816ebb2b7fd3d11db298ba4078920d98ed7513bedb3a8bd7abfaf9e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "알칼리성 인산분해효소 상승"
  - "감마글루타밀전이효소"
  - "담즙정체"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sm5DrsJzshLEg64u07KaZ7ISxIOuLtOq0gOyXvCAoUEJDKSAoUHJpbWFyeSBCaWxpYXJ5IENob2xhbmdpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

55세 여성의 ALP가 두 차례 165 U/L(정상 상한 120)이다. AST, ALT, 빌리루빈과 진찰은 정상이다. 먼저 ALP가 간담도에서 유래했는지 가려내려면 어떤 검사를 하는가?

## 선택지

A. 혈청 칼슘
B. 직접 빌리루빈
C. 감마글루타밀전이효소(GGT)
D. 항미토콘드리아 항체

## 해설


ALP는 간담도와 뼈 등에서 모두 나올 수 있다. GGT가 함께 높으면 간담도 기원을 지지하지만, 그 자체로 담도폐쇄나 특정 원인을 확진하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001206 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고립 ALP 상승은 간/뼈 등 원인 구분이 필요하며 GGT를 담도폐쇄 특이 검사라고 한 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gi.org/guideline/evaluation-of-abnormal-liver-chemistries/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001206
