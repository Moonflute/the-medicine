---
type: qbank
schema_version: 1
id: medqa-us-train-002283
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a57235941d76e6ab208ef179fed1c3c4af61c247e24b67933f1d487a69358a79
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "complicated urinary tract infection"
  - "uncomplicated cystitis"
  - "Candida albicans"
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

성생활을 하는 49세 여성이 배뇨통과 빈뇨로 내원했다. 이전 요로감염은 없지만 어머니가 요로감염을 자주 앓았다고 한다. 제2형 당뇨병, 고혈압, 자궁경부암, 고콜레스테롤혈증 병력이 있다. 하루 담배 한 갑과 와인 한 잔을 마신다. 체온 36.7°C, 혈압 126/74 mmHg, 맥박 87회/분이다. 치골상부 압통이 있고 소변검사에서 백혈구, 백혈구에스터라제, 아질산염이 다수 검출된다. 다음 중 어떤 요인이 요로감염을 복잡성으로 분류하지 않게 하는가?

## 선택지

A. 원인균이 칸디다 알비칸스이다
B. 원인균이 녹농균이다
C. 환자에게 유치 카테터가 있다
D. 환자에게 신장결석이 있다

## 해설


녹농균(대장균 등) 감염은 요로감염을 복합성으로 만든다. 복합성 요로감염은 구조적 이상, 카테터, 신장결석 등과 연관되며, 녹농균 감염 자체는 복합성 분류를 초래한다. 따라서 녹농균이 원인균인 경우가 복합성을 유발한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002283
