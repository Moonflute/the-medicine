---
type: qbank
schema_version: 1
id: medqa-us-train-006617
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0fb01d4c7ef0aaee04fc279263d1d437c9d04a821c8d0bd95e9f1c3b4d64aa67
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "고환 염전"
  - "거근반사 소실"
  - "급성 음낭"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmOyXvOyghCAoVGVzdGljdWxhciB0b3JzaW9uKS5tZA
difficulty: simple
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

11세 남아가 2시간 전 시작된 왼쪽 음낭의 갑작스럽고 심한 통증으로 응급실에 내원했다. 두 차례 구토했고 배뇨통이나 빈뇨는 없다. 고환 외상은 없었다. 체온은 37.7°C(99.9°F)이다. 왼쪽 음낭이 붓고 붉으며 압통이 있다. 왼쪽 고환은 위로 올라가 있고 부어 있으며 가로로 누워 있다. 거근반사는 소실되어 있다. 초음파 검사를 기다리는 중이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 부고환염
B. 생식세포 종양
C. 유행성이하선염 고환염
D. 고환 염전

## 해설

급작스러운 심한 고환통, 구토, 높고 가로로 놓인 고환과 소실된 거고근반사는 D, 고환염전에 합당하다. 이는 정삭이 비틀리면서 혈류가 저해되는 응급상태이며 감염성 음낭염이나 별개의 고환 비틀림과 구별되는 질환이라는 뜻이 아니다. 임상 의심이 높으면 대기 중인 초음파 때문에 수술적 평가를 지연해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고환염전을 음낭염 또는 고환 비틀림과 다른 상태라고 설명한 모순 교정.
- 공식/학회 근거: https://uroweb.org/guidelines/paediatric-urology/chapter/acute-scrotum

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006617
