---
type: qbank
schema_version: 1
id: medqa-us-test-001206
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e93ec327d9df253fd7bc22311a8020c7731ec1d299b87e87139d95bf5d2079e5
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철결핍성 빈혈"
  - "소구성 저색소성 빈혈"
  - "중앙 창백 증가"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: diagnosis
difficulty: standard
answer: D
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

78세 남성이 6개월간 점점 심해지는 피로와 두통, 간헐적 복통으로 진료를 받으러 왔다. 체중 변화는 없었고 식사는 주로 감자와 살코기였다. 고혈압·제2형 당뇨병·만성 어깨통증이 있고 hydrochlorothiazide, metformin, ibuprofen을 매일 복용한다. 결막과 점막이 창백했으며 말초혈액도말에서 중앙 창백 증가와 적혈구 크기 변이가 보였다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 엽산 결핍
B. 혈관내 용혈
C. 에리트로포이에틴 생성 저하
D. 철 결핍

## 해설


중앙 창백 증가와 적혈구 크기 차이는 철결핍(D)을 지지한다. 고령 남성에서 식사만을 원인으로 단정하지 않고 만성 위장관 출혈 등도 평가해야 한다. 특히 원문에는 매일 ibuprofen 복용이 있어 출혈 위험 평가와 관련된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001206 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 저색소·anisocytosis의 철결핍 D 유지. 원문 NSAID 복용 누락 복구, 고령남성 빈혈을 식이만으로 설명한 해설 제한.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001206
