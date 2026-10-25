---
type: qbank
schema_version: 1
id: medqa-us-train-007244
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:13812ef9b10762dbf07bb5ed205d36f53c917c033d437530511c75a8b60e2e0c
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "산후 정신병"
  - "산후 망상"
  - "영아에 대한 피해망상"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yCsO2bhCDsoJXsi6Drs5EgKFBvc3RwYXJ0dW0gcHN5Y2hvc2lzKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

26세 여자가 지난 24시간 동안 이상한 행동을 보여 남편과 함께 응급실에 내원했다. 남편은 아내가 혼잣말을 하고 하루 종일 방 한구석에 있으면서 아무것도 먹거나 마시지 않는다고 한다. 2주 전 아들을 출산했지만 출생 이후 아기의 존재를 보거나 인정하지 않았다. 임신 중 압도된 것처럼 보여 새 엄마가 되는 데 적응하지 못한 것이라고 생각했으나, 어젯밤 아내가 아이가 악마의 아들이므로 가능한 한 빨리 없애야 한다고 말했다고 한다. 이 환자의 아이에 대한 이상 반응을 가장 잘 설명하는 것은 무엇인가?

## 선택지

A. 주요우울장애
B. 산후 우울감
C. 분열정동장애
D. 산후 정신병

## 해설

분만 2주 후 망상, 혼잣말/행동 변화와 아기를 없애야 한다는 믿음은 산후 정신병(D)에 부합한다. 이는 산후의 심각한 정신병적 임상증후군으로 양극성 기분삽화 등과 관련될 수 있어 본문만으로 기저 진단을 확정하지 않는다. RCPsych는 정신과 응급상황으로 신속한 평가를 권고하며, 이 사례에서는 산모와 아기의 즉각적 안전 확보가 중요하다. 정상적인 산후 우울감으로 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 산후 정신병을 조현병과 단순히 별개인 질환으로 단정한 설명을 임상증후군/기분삽화 연관성과 모자 안전의 응급성으로 교정했다.
- https://www.rcpsych.ac.uk/mental-health/mental-illnesses-and-mental-health-problems/postpartum-psychosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007244
