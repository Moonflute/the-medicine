---
type: qbank
schema_version: 1
id: medqa-us-validation-001011
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3201cea0b6edcb78edb0cc1dc9e79eac564aa4d109c801c2fcc48c17421d75ac
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "예방접종 금기"
  - "조절되지 않는 발작"
  - "다운증후군"
question_type: prevention
related_disease_slugs:
  - MTIg7IKw6rO8L-uLpOyatOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv64uk7Jq0IOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15개월 아이가 DTaP 4차 접종을 앞두고 있다. 최근 열 없이 반복해서 발작했고 약물로도 아직 조절되지 않아 원인을 평가 중이다. DTaP 접종은 어떻게 할까?

## 선택지

A. 이후의 모든 백신을 영구 중단한다
B. 접종 전 해열제를 먹인 뒤 예정대로 맞힌다
C. 백일해 성분 없이 접종하고 이후에도 제외한다
D. 신경학적 상태를 평가하고 안정될 때까지 DTaP를 연기한다

## 해설

조절되지 않는 발작이나 진행성 신경질환은 백일해 성분 백신의 주의사항이다. 상태가 명확해지고 안정될 때까지 해당 접종을 미루되, 모든 백신을 영구 중단할 이유는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 조절 안 되는 경련의 예방접종 주의사항을 생백신 일반이 아닌 DTaP 신경학적 precaution으로 교정.
- https://www.cdc.gov/vaccines/hcp/imz-best-practices/contraindications-precautions.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001011
