---
type: qbank
schema_version: 1
id: medqa-us-validation-000487
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7b14b086952509f0ddd2a35397a438663182e69df8673abf96916dca59f6ba6e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 췌장염"
  - "담석성 췌장염"
  - "복부 초음파"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
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

39세 여성이 등으로 퍼지는 심한 명치 통증과 리파아제 상승으로 급성 췌장염이 진단됐다. 이전에 식후 오른쪽 윗배가 아팠던 적이 있고 이번 ALT는 297 U/L다. 현재 발열이나 황달 없이 안정적이다. 담석이 원인인지 평가할 첫 검사는?

## 선택지

A. 비조영 복부 CT
B. ERCP부터 시행한다
C. 오른쪽 상복부 초음파
D. 서서 촬영하는 복부 단순 X선

## 해설


췌장염 환자의 식후 우상복부 통증 병력과 ALT 상승은 담석 원인을 의심하게 한다. 상복부 초음파로 담낭결석과 담관 확장을 먼저 평가한다. 담관염이나 지속적 담도 폐쇄의 근거 없이 ERCP를 진단 목적으로 일률적으로 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000487 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: US C는 주로 담석/담도 원인 평가이지 췌장 부종을 가장 잘 보는 보편적 영상이 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13221274/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000487
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9840919/
