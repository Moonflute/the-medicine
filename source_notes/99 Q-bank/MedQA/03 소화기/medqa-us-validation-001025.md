---
type: qbank
schema_version: 1
id: medqa-us-validation-001025
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:43d926ba170412fa265443cea02c2c9e158425a3ef61eb24fa9e3a11727a521c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "크론병"
  - "말단회장 협착"
  - "비타민 B12 결핍"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

크론병으로 말단 회장을 절제한 45세 여성이 손발 저림과 보행 불안정을 호소한다. 혈색소 9.2 g/dL, MCV 110 fL이고 혈액도말에서 과분엽 호중구가 보인다. 가장 먼저 의심할 결핍은?

## 선택지

A. 엽산
B. 비타민 B12
C. 철
D. 비타민 D

## 해설


비타민 B12는 말단 회장에서 흡수된다. 회장 절제 후 거대적혈구 빈혈과 신경 증상이 함께 생기면 B12 결핍을 의심한다. 엽산 결핍도 거대적혈구 빈혈을 일으키지만 이 회장 절제력과 신경 소견은 B12에 더 잘 맞는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001025 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 텍스트에 명시된 말단회장 string sign과 B12 결핍성 거대적아구 소견을 Crohn B에 연결. 추가 영상이 없어도 해당 명시 소견으로 질문 판단 가능.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001025
- https://doi.org/10.1093/ecco-jcc/jjad108
