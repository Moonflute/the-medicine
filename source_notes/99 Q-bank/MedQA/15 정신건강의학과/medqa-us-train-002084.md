---
type: qbank
schema_version: 1
id: medqa-us-train-002084
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:301883729b32898ffae6419f9969e63f347a28afe0f212fe1ad7f3544f5d0554
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "schizoaffective disorder"
  - "psychosis"
  - "auditory hallucinations"
  - "major depressive episode"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOygleuPmeyepeyVoCAoU2NoaXpvYWZmZWN0aXZlIGRpc29yZGVyKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yCsO2bhCDsoJXsi6Drs5EgKFBvc3RwYXJ0dW0gcHN5Y2hvc2lzKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: complex
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
original_answer: A
answer_change_reason: "APA의 분열정동장애 설명상 주요 기분삽화가 전체 활동기 질병 기간 대부분에 있어야 한다. 본문은 정신병적 증상이 9개월 지속되고 우울 증상은 4주로 제한되어 조현병 C가 가장 적합하다."
---

# MedQA US 임상문제

## 문제

25세 여성이 10개월 동안 피해망상과 환청을 보였고 학업과 자기 관리 기능이 크게 떨어졌다. 이 기간 중 기준을 충족하는 주요우울삽화는 4주뿐이었고, 우울이 없는 달에도 정신병 증상이 지속됐다. 가장 가능성 높은 진단은?

## 선택지

A. 조현정동장애
B. 정신병적 양상이 있는 주요우울장애
C. 조현양상장애
D. 조현병

## 해설

기분 삽화가 전체 경과의 일부에 불과하고 독립적인 정신병 증상과 기능 저하가 지속되면 조현병에 더 가깝다. 조현정동장애에서는 주요 기분 삽화가 전체 질병 기간의 대부분을 차지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정신병9개월중기분삽화4주는대부분기간요건미충족. APA기준에따라원답분열정동A→조현병C;해설/답오연결교정.
- https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia
- https://library.samhsa.gov/sites/default/files/SAMHSA_Digital_Download/PEP20-02-01-004_Final_508.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002084
- https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia/
