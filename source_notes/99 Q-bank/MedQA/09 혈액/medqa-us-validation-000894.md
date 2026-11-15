---
type: qbank
schema_version: 1
id: medqa-us-validation-000894
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:44ed9bebc39746089a745f4fe9b26e549adaa87dfbc1fd55444d498336d49f85
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 통풍"
  - "고요산혈증"
  - "종양융해증후군"
related_disease_slugs:
  - MTAg7KKF7JaRL-yiheyWkeuCtOqzvC5tZA
question_type: management
difficulty: standard
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
---

# MedQA US 임상문제

## 문제

종양 부담이 큰 버킷 림프종 환자가 항암을 앞두고 있다. 요산은 이미 12mg/dL이고 신기능도 악화됐다. 정량검사에서 G6PD 활성은 정상이다. 정맥 수액과 면밀한 전해질 감시와 함께, 이미 상승한 요산을 빠르게 낮출 약제는?

## 선택지

A. 라스부리카제
B. 알로푸리놀만 투여
C. 콜히친
D. 탄산수소나트륨 단독

## 해설


고위험 종양용해증후군에서 이미 요산이 높으면 라스부리카제로 기존 요산을 빠르게 분해할 수 있다. 알로푸리놀은 새 요산 생성을 줄이지만 기존 요산은 직접 제거하지 않는다. 라스부리카제는 G6PD 결핍 환자에게 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000894 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항암 후 요산 생성 예방 allopurinol B 유지. 모든 환자에 동일 TLS 예방법으로 단정하지 않고 AML의 bendamustine 단독 기재가 통상 요법 아님을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/10.1111/bjh.70092

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000894
- https://pubmed.ncbi.nlm.nih.gov/40903841/
