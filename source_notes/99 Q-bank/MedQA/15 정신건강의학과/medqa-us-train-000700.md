---
type: qbank
schema_version: 1
id: medqa-us-train-000700
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c1a3fcbec4e415642e970ec820202a5fbfbde7c00a0f07deee61dc9c131bbd42
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive disorder"
  - "serotonin syndrome"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

주요우울장애 병력이 있는 32세 남성이 3시간 전 갑자기 발생한 안절부절못함과 지남력 상실로 인해 아내에 의해 응급실로 이송되었다. 환자의 아내는 그가 갑자기 땀을 흘리고, 떨림이 있으며, 혼잣말을 하기 시작했다고 말한다. 어제 환자는 우울증 악화로 정신과를 방문하였고, 기존 치료 요법에 phenelzine이 추가되었다. 다른 유의미한 과거 의학적 병력은 없다. 체온은 39.7°C(103.5°F), 혈압은 145/90 mm Hg, 맥박은 115회/분이다. 신체 검진상 피부는 홍조를 띠고 있다. 점막은 건조하며 동공은 산대되어 있다. 양측 사지에 뚜렷한 간대성 경련(clonus)이 있다. 바빈스키 징후(Babinski sign)가 양측에서 나타난다. 환자의 모든 약물은 중단되었고 정맥 수액 요법이 시작되었다. 다음 중 이 환자의 상태를 유발하기 위해 phenelzine과 상호작용했을 가능성이 가장 높은 약물은 무엇인가?

## 선택지

A. Mirtazapine
B. Bupropion
C. Sertraline
D. Lithium

## 해설


MAOI(phenelzine)와 SSRI(sertraline)의 병용은 세로토닌 축적을 초래해 세로토닌 증후군을 일으킨다. 따라서 sertraline이 가장 가능성 높은 상호작용 약물이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000700
