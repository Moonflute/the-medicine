---
type: qbank
schema_version: 1
id: medqa-us-validation-001182
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0fd1ae87ca300aa25643b18bd34bec0f9d2279cc127d65d20b52f8839e89f2b6
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "각성제 사용"
  - "약물중독"
  - "동공확대"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-usvOyniCDqtIDroKgg67CPIOykkeuPheyEsSDsnqXslaAgKFN1YnN0YW5jZS1SZWxhdGVkIGFuZCBBZGRpY3RpdmUgRGlzb3JkZXJzKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 여아가 식욕부진과 4개월간 4 kg 체중감소로 진료를 받으러 왔다. 동공이 9 mm로 확대되고 빛에 거의 반응하지 않으며 손 떨림과 빈맥이 있다. 학업 성적이 떨어지고 부모와 갈등이 많으며 불안하고 안절부절못한다. 할머니에게 갑상선 질환이 있고 두 남성과 성관계를 하며 콘돔은 불규칙하게 사용한다. 진단을 위한 가장 적절한 다음 단계는?

## 선택지

A. 혈청 전해질 측정
B. 복부 초음파
C. 독성학 선별검사
D. HIV 선별검사

## 해설

현저한 동공 확대·떨림·빈맥과 식욕·행동 변화는 교감신경 자극 물질 사용 가능성을 평가하게 하므로 제시된 다음 진단검사 중 독성 선별검사가 적절하다. 선별검사만으로 물질·중독을 확증하거나 음성으로 완전 배제하지 않으며 병력·진찰과 필요 시 확증 분석으로 해석한다. 갑상선 원인과 성위험에 따른 HIV/STI 예방검진도 임상적으로 따로 평가할 사항이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001182

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 독성 선별검사를 확증으로 설명한 오류 교정. 원문 성위험·갑상선 가족력 복원해 다른 예방·감별 필요성도 보존.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.fda.gov/medical-devices/drugs-abuse-tests/drugs-abuse-home-use-test
