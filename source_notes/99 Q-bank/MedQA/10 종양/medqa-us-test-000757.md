---
type: qbank
schema_version: 1
id: medqa-us-test-000757
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:fb150ab13eefaded0925101319bb754ceaf6550a64dadbb16e0744ddda720d50
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "출혈성 방광염"
  - "시클로포스파미드"
  - "호지킨 림프종 치료"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YuOyngO2CqCDrprztlITsooUgKEhvZGdraW4gTHltcGhvbWEpLm1k
  - MjAg67mE64eo6riw6rO8L-y2nO2YiOyEsSDrsKnqtJHsl7wgKEhlbW9ycmhhZ2ljIEN5c3RpdGlzKS5tZA
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvRG94b3J1YmljaW4ubWQ
---

# MedQA US 임상문제

## 문제

이전에 건강했던 29세 남성이 5주 동안 서서히 커지는 왼쪽 목 종괴로 가정의학과에 왔다. 발열이나 최근 상기도감염은 없었다. 체온 37.1°C(98.7°F), 혈압 115/72 mmHg, 맥박 82회/분이었다. 왼쪽 목 중간에 4 cm 크기의 단단하고 압통 없는 종괴가 있었고 절제생검에서 호지킨 세포가 보였다. 종양내과에서 화학요법을 시작한 뒤 첫 주기 후 소변이 붉어졌고 혈액이 양성이었다. 이 상태의 가장 가능성 높은 원인은?

## 선택지

A. 블레오마이신
B. 시클로포스파미드
C. 독소루비신
D. 에토포시드

## 해설


시클로포스파미드는 화학요법 중 방광 점막을 손상시켜 출혈성 방광염을 일으킬 수 있다. 환자의 혈뇨와 혈뇨 양성은 이 약물에 의한 부작용을 시사한다. 따라서 시클로포스파미드가 원인이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000757 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 실제 혈뇨 양성은 cyclophosphamide 출혈성방광염 B를 지지. doxorubicin의 비출혈성 붉은 소변과 구별하는 약물이상반응 내용 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000757
