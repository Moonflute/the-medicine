---
type: qbank
schema_version: 1
id: medqa-us-validation-001219
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:56fe1b434d1ba062ba6cc73d015b4e20168c0686923e4936139e3120a656feea
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "만성 췌장염"
  - "췌장 외분비 기능부전"
  - "지방변"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEg7LeM7J6l7Je8IChDaHJvbmljIFBhbmNyZWF0aXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sp4DrsKnrs4AgKFN0ZWF0b3JyaGVhKS5tZA
question_type: investigation
difficulty: simple
answer: A
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

57세 남성이 반복되는 명치 통증으로 응급실에 왔다. 오랜 알코올 사용력과 노숙 생활이 있으며 기름지고 악취 나는 설사가 동반된다. 증상은 지속적이지만 평소와 비슷한 정도이다. 이 상태에 대한 가장 적절한 초기 진단검사는?

## 선택지

A. CT 촬영
B. 리파아제
C. 세크레틴 자극검사
D. 대변 충란 및 기생충 검사

## 해설


정답 A. 반복 복통·장기 음주력·지방변은 만성 췌장염과 췌장 외분비부전을 의심하게 한다. 초기 진단에는 CT 또는 MRI로 구조 변화를 평가하며 선택지 중 CT가 적절하다. CT가 초기 미세 질환에서 항상 가장 민감한 검사는 아니며 불확실하면 EUS나 기능검사 등을 추가할 수 있다. 만성 췌장염에서는 lipase가 정상일 수도 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001219 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CT A의 만성 췌장염 초기 구조평가 취지 유지; 가장 민감하다는 일률적 표현 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.14309/AJG.0000000000000535

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001219
