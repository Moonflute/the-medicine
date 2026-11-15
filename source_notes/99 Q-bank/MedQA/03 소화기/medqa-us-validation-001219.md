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

57세 남성이 영상에서 확인된 만성 췌장염으로 진료 중이다. 최근 지방변과 체중 감소가 생겨 췌장 외분비기능부전을 평가하려 한다. 성형변 검체를 얻을 수 있다면 우선 시행할 검사는?

## 선택지

A. 대변 엘라스타제 검사
B. 혈청 리파아제 검사
C. 분변잠혈검사
D. 대변 세균 배양

## 해설


췌장 외분비기능부전을 평가할 때 대변 엘라스타제가 편리한 초기 검사다. 물설사는 희석 때문에 낮게 나올 수 있어 적절한 점도의 검체를 쓴다. 췌장 CT가 외분비 기능을 직접 측정하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001219 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CT A의 만성 췌장염 초기 구조평가 취지 유지; 가장 민감하다는 일률적 표현 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.14309/AJG.0000000000000535

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001219
- https://gastro.org/clinical-guidance/epidemiology-evaluation-management-exocrine-pancreatic-insufficiency/
