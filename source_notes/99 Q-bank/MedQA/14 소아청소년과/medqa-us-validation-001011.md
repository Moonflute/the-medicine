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

다운증후군이 있는 15개월 남아가 건강검진을 받으러 왔다. 12개월 예방접종 후 38.7°C 발열이 있었고 약물로 조절되지 않는 발작 장애가 있다. 현재 콧물이 있지만 활력징후는 정상이고 예방접종은 최신 상태다. 이 시점에 한 가지 이상의 정기 예방접종을 시행할 때 상대적 금기인 것은?

## 선택지

A. 난백 단백질 알레르기
B. 이전 예방접종 후 38.7°C 발열
C. 현재 상기도 감염
D. 조절되지 않는 발작 장애

## 해설

조절되지 않는 발작/진행성 신경질환(D)은 DTaP 접종을 신경학적 상태가 명확해지고 안정될 때까지 유예할 수 있는 주의사항이다. 모든 생백신을 일률 금기화하는 이유가 아니다. 경한 URI, 이전38.7°C 발열 또는 달걀 알레르기만으로 정기 백신 전체를 중단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 조절 안 되는 경련의 예방접종 주의사항을 생백신 일반이 아닌 DTaP 신경학적 precaution으로 교정.
- https://www.cdc.gov/vaccines/hcp/imz-best-practices/contraindications-precautions.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001011
