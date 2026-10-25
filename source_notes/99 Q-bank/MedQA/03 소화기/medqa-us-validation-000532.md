---
type: qbank
schema_version: 1
id: medqa-us-validation-000532
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0a249d60b0b690cd376717dca5e2427a0f746469924ff47e6c0ca632b855acf2
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 담관염"
  - "담석"
  - "발열·황달·복통"
  - "Acute cholangitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzqtIDsl7wgKENob2xhbmdpdGlzKS5tZA
question_type: diagnosis
difficulty: simple
answer: C
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

42세 여성이 2일간의 심한 복통과 발열로 응급실에 왔다. 담석 병력이 있고 2주 후 담낭절제술을 예정했지만 현재 황달과 백혈구증가증, 총 빌리루빈 6.4 mg/dL이 있다. 진단은?

## 선택지

A. 급성 췌장염
B. 만성 췌장염
C. 급성 담관염
D. 원발성 경화성 담관염

## 해설


정답 C. 담석 병력이 있는 환자의 급성 복통, 발열과 황달은 담관 폐쇄에 감염이 동반된 급성 담관염을 시사한다. 전통적 Charcot 삼징은 복통·발열·황달이며 백혈구증가증은 감염을 지지하는 추가 검사 소견이다. 만성 경화성 담관염이나 만성 췌장염보다는 급성 담관 감염이 가장 부합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000532 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Charcot 삼징을 발열·황달·백혈구증가가 아닌 복통·발열·황달로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000532
