---
type: qbank
schema_version: 1
id: medqa-us-test-000945
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:086c0f8011495b489c572cd9b2cbc624f512c5510996cf6c4d919bd340fb634f
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "종양융해증후군"
  - "급성 골수성 백혈병"
  - "예방적 수액"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChBTUwpIChBY3V0ZSBNeWVsb2lkIExldWtlbWlhKS5tZA
  - MTAg7KKF7JaRL-yiheyWkeuCtOqzvC5tZA
question_type: prevention
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
---

# MedQA US 임상문제

## 문제

급성 골수성 백혈병 치료를 위해 입원한 지 이틀 후 35세 남성이 오심, 구토, 피로, 근육경련이 생겼다. 검사에서 백혈구 16,000/mm³, 혈소판 180,000/mm³, Na 134, K 5.9, 요산 11.2, 크레아티닌 2.2, 칼슘 6.8, 인 8.9였다. 이 환자의 현재 증상을 예방하는 데 가장 효과적이었을 처치는?

## 선택지

A. 소변 알칼리화
B. 라스부리카제
C. 알로푸리놀
D. 정맥 수액

## 해설


고요산·고칼륨·고인산·저칼슘과 신손상은 TLS에 맞는다. 예방의 기본인 적절한 IV 수액(D)은 중요하지만 단순 희석만이 목적은 아니다. 위험도에 따라 allopurinol 또는 rasburicase를 병행하며 고위험군에서는 rasburicase가 적절할 수 있다. 소변 알칼리화는 일반적으로 권하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000945 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: TLS 예방의 수액 D 유지. rasburicase는 부적절하다는 위험한 단정 제거하고 위험군별 병행 예방 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.eviq.org.au/clinical-resources/side-effect-and-toxicity-management/prophylaxis-and-treatment/108-prevention-of-tumour-lysis-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000945
