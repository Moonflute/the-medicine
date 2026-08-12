---
type: qbank
schema_version: 1
id: medqa-us-train-005983
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ee7614d8a4acb6be37e37392a95afcfb3f618c108503abcf49ab6df72fe4d230
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "환자 비밀보장"
  - "전립선암 골전이"
  - "배우자 정보 요청"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
question_type: ethics
difficulty: complex
answer: A
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

68세 남성이 배우자와 함께 추적진료를 위해 내원했다. 2년 전 국소 전립선암을 진단받아 방사선치료를 받았고 최근 척추 골형성성 전이가 발견되어 다음 주 물리치료를 시작할 예정이다. 배우자는 남편이 체중이 줄고 침대에 소변을 보며 최근 건강에 대해 자신과 이야기하지 않는다며 의사에게 전립선암이 재발한 것인지 눈물로 묻는다. 환자는 배우자가 너무 걱정할 것이라며 자신의 상태를 알리지 말아 달라고 의사에게 말한 적이 있다. 다음 중 의사가 처음 할 말로 가장 적절한 것은 무엇인가?

## 선택지

A. 허락 없이는 어떤 정보도 말씀드릴 수 없습니다. 남편과 솔직하게 대화해 보시길 권합니다.
B. 남편이 솔직하게 말하지 않는 점이 걱정됩니다. 의학적 위임장을 받으면 진단과 치료 선택지를 함께 논의할 수 있습니다.
C. 노년 부부를 돕는 경험이 있으니 남편과 함께 앉아 이 상황을 논의합시다.
D. 죄송하지만 법정 신고 대상 질환이 아니므로 동의 없이는 의료정보를 말씀드릴 수 없습니다.

## 해설


환자는 배우자의 정보 요구에 대해 비밀보장을 원한다. 의사는 환자의 동의 없이는 정보를 제공할 수 없으며, 먼저 환자와 솔직히 대화하도록 권유해야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005983
