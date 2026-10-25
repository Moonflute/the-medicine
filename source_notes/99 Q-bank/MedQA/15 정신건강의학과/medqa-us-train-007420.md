---
type: qbank
schema_version: 1
id: medqa-us-train-007420
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e37a7aced92deb8f7d25f8d94f9185c001ce04b00c112b34a5725dc586fae997
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "지속성 우울장애"
  - "기분저하증"
  - "만성 우울"
  - "Persistent depressive disorder"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남자가 4주 동안 지속된 수면 곤란과 식욕 저하로 아내와 함께 내원했다. 이 기간 동안 지속적인 슬픔과 과제에 집중하기 어려워 직장에서 성과가 나쁘다고 질책받았다. 지난 3년 동안 이런 시기가 반복되었고 각 시기 사이 증상이 없는 기간은 최대 한 달이었다. 이러한 행동으로 아내와 아이들과의 관계도 긴장되고 있다. 어머니는 4개월 전 유방암으로 사망했다. 신체검사는 정상이다. 정신상태검사에서 우울한 기분과 제한된 정동이 보인다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 지속성 우울장애
B. 우울한 기분을 동반한 적응장애
C. 주요우울장애
D. 지속성 복합 애도장애

## 해설

3년간 자주 지속되는 우울 증상과 최대 한 달의 무증상 간격은 지속성우울장애(A)를 지지한다. 반드시 경미한 증상만 있어야 하는 것은 아니며 만성 우울 경과에 더 심한 삽화가 겹칠 수도 있다. 어머니 사망보다 훨씬 전부터 이어진 경과이므로 단순 사별 반응으로 모두 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 지속성우울장애를 반드시 경미한 우울의 간헐 반복이라고 정의한 해설을 만성 경과와 짧은 무증상 간격으로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007420
