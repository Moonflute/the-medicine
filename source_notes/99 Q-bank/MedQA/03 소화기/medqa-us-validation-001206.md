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

55세 여성이 건강검진을 받으러 왔다. 간기능검사에서 알칼리성 인산분해효소만 130 U/L로 상승하고 다른 검사와 신체검사는 정상이다. 이 환자에서 가장 적절한 다음 처치는?

## 선택지

A. 골주사검사
B. 복부 초음파
C. 감마글루타밀전이효소 측정
D. 항미토콘드리아 항체 측정

## 해설


정답 C. ALP는 간담도계뿐 아니라 뼈 등에서도 유래하므로 고립 상승 시 간 기원인지 먼저 확인한다. GGT를 함께 측정하거나 검사 재확인을 하는 것이 적절하다. GGT 동반 상승은 간담도 기원을 지지하지만 담도폐쇄나 담관 손상에만 특이적인 것은 아니다. 영어 원문은 ALP 정상범위 20–70 U/L를 제시하므로 130은 이 검사실에서 상승이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001206 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고립 ALP 상승은 간/뼈 등 원인 구분이 필요하며 GGT를 담도폐쇄 특이 검사라고 한 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gi.org/guideline/evaluation-of-abnormal-liver-chemistries/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001206
