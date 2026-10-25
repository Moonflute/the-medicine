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
answer: C
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

25세 여성이 최근 행동이 폭력적으로 변해 걱정된다는 남편과 함께 정신과를 방문했다. 남편의 가족이 전국을 가로질러 방문했는데, 아내가 어젯밤 저녁 식사 중 시부모를 칼로 위협했다고 한다. 경찰이 진정시키기 위해 출동해야 했다. 남편은 아내가 지난 9개월 동안 매우 이상하게 행동했으며, 처음 그를 불안하게 만든 것은 아내가 거실의 장식용 도자기 작품을 통해 죽은 시누이가 자신에게 말한다고 인정한 일이었다고 한다. 처음에는 농담이라고 생각했지만, 곧 집 안에서 유령들이 자신에게 말하는 소리가 들린다는 호소가 지속되고 악화되는 것을 깨달았다. 또한 4주 동안 불면과 의도하지 않은 체중 12파운드 감소가 있었다. 이 기간 내내 슬퍼 보였고, 남편에 따르면 자신이 무가치하다고 호소했다. 최근 의욕이 부족해 개인위생도 나빠졌으며, 유령들이 집에 혼자 남지 않도록 가능한 한 많은 사람을 죽이라고 한다고 주장한다. 남편은 아내가 자신이나 다른 사람을 해칠까 봐 매우 걱정한다. 현재 복용 중인 약물이나 불법 약물은 없고, 담배와 술도 하지 않는다고 한다. 환자는 정신과 의사와 눈을 맞추거나 말하려 하지 않고 남편이 대신 이야기하게 한다. 다음 중 이 환자에게 가장 가능성 높은 진단은?

## 선택지

A. 분열정동장애
B. 단기 정신병적 장애
C. 조현병
D. 망상장애

## 해설

9개월간 망상·환청, 기이하고 위험한 행동 및 동기·위생 저하가 지속된 반면 우울 증상은 4주간 제시되어 조현병(C)이 가장 적합하다. 분열정동장애는 정신병 증상과 주요 기분삽화가 함께 있으면서 기분삽화가 질병 전체 기간의 대부분을 차지해야 하는데 본문은 이를 충족하지 않는다. 기존 해설도 조현병을 말하면서 A를 정답으로 연결했다. 자살 충동은 직접 제시되지 않았으며 명령환청에 따른 자신·타인 위해 위험은 별도로 즉시 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정신병9개월중기분삽화4주는대부분기간요건미충족. APA기준에따라원답분열정동A→조현병C;해설/답오연결교정.
- https://www.psychiatry.org/patients-families/schizophrenia/what-is-schizophrenia
- https://library.samhsa.gov/sites/default/files/SAMHSA_Digital_Download/PEP20-02-01-004_Final_508.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002084
