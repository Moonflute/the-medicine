---
type: qbank
schema_version: 1
id: medqa-us-validation-000988
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3f07ac1b1e69c7b9912d1faf38ff72d27a45542cf1d4f79e745aba43ff35116b
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "암성 통증"
  - "오피오이드 내성"
  - "하이드로모르폰"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shoztmZTquLAg7JWULm1k
question_type: management
difficulty: complex
answer: B
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9ab2xwaWRlbS5tZA
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL0tldG9yb2xhYy5tZA
---

# MedQA US 임상문제

## 문제

췌장암 환자가 서방형 모르핀으로 하루 대부분 통증을 잘 조절하고 있다. 다만 하루 한두 번 식사 뒤 짧게 심한 통증이 치솟는다. 의식과 호흡은 안정적이다. 이러한 돌발통에 대한 처방은?

## 선택지

A. 돌발통이 올 때마다 서방형 모르핀을 추가 복용한다
B. 속효성 오피오이드 구제약을 마련하고 빈도와 효과를 추적한다
C. 현재 오피오이드를 모두 중단하고 수면제만 추가한다
D. 진통제는 추가하지 않고 통증이 쌓일 때까지 기다린다

## 해설


기저 통증이 안정적이어도 돌발통에는 속효성 오피오이드를 사용할 수 있다. 자주 필요해지면 원인과 기저 진통요법을 재평가하고 진정·호흡 상태를 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000988 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 암성통증 조절 실패에서 hydromorphone B로의 opioid rotation 유지하되 고효능 약이면 무조건 내성 극복·동일 mg 투여라는 위험 설명 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/about-cancer/treatment/side-effects/pain/pain-hp-pdq
- https://ascopubs.org/doi/10.1200/JCO.22.02198

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000988
- https://doi.org/10.1200/JCO.22.02198
- https://www.cancer.go.kr/download.do?uuid=718e6e53-b442-471e-b884-b49724a4a011.pdf
