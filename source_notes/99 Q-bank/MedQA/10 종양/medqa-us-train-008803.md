---
type: qbank
schema_version: 1
id: medqa-us-train-008803
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5a2afd65eb31f7617f7985dae615699cbaa41e133fbeb0e9eae434c133b14d4c
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "patient confidentiality"
  - "autonomy"
  - "prostate cancer recurrence"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
question_type: ethics
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

68세 남성이 딸과 함께 추적검사를 위해 내원했다. 2년 전 국소 전립선암을 진단받아 방사선 치료를 받았다. 한 달 전 딸 가까이 살기 위해 이 지역으로 이사했지만 독립적으로 생활한다. 최근 척추의 골아세포성 전이로 진단되어 다음 주 치료를 시작할 예정이다. 딸은 사적으로 아버지가 체중이 줄고 밤에 오줌을 싸며, 전립선암이 재발했는지 의사에게 울며 묻는다. 아버지는 최근 자신의 건강에 대해 딸과 이야기하지 않았다고 한다. 환자는 가족이 ‘너무 걱정할 것’이라며 자신의 상태를 가족에게 알리지 말아 달라고 의사에게 이전에 말한 바 있다. 의사가 처음으로 할 가장 적절한 말은 무엇인가?

## 선택지

A. “아버님의 주치의로서 전립선암이 재발했다는 사실을 알려드리는 것이 중요하다고 생각합니다. 하지만 치료에 잘 반응할 것이라 확신합니다.”
B. “환자의 허락 없이는 어떤 정보도 말씀드릴 수 없습니다. 아버님과 솔직하게 대화해 보시기를 권합니다.”
C. “아버님이 딸에게 솔직히 말하지 않는 것이 걱정됩니다. 의료 위임장을 받으시면 진단과 치료 선택지를 함께 논의할 수 있습니다.”
D. “아버님은 매우 아프고 세부 사항을 알려주고 싶지 않을 수 있습니다. 답답하시겠지만 아버님의 비밀을 존중해야 합니다.”

## 해설


환자는 사생활 보호를 위해 정보 제공을 거부했으며, 의료진은 환자 동의 없이는 가족에게 정보를 전달할 수 없다. 이는 환자 비밀보장의 원칙이다. 따라서 환자의 허락 없이는 정보를 제공할 수 없다고 설명한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008803
