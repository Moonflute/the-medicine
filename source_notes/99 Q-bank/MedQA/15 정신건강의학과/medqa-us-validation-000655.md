---
type: qbank
schema_version: 1
id: medqa-us-validation-000655
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:adb1497af432ec766091b4fc7854db803ea695857a489169b7ebdacd7d0ca36d
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "분열정동장애"
  - "조증"
  - "환청"
  - "Schizoaffective disorder"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOygleuPmeyepeyVoCAoU2NoaXpvYWZmZWN0aXZlIGRpc29yZGVyKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 1주일간 비정상적으로 활력이 넘치고 잠을 자지 않으며, 과거에도 비슷한 에피소드가 있었다. 8개월 전부터 자신이 유명 가수이며 세계 순회공연을 간다고 믿고, 목소리가 직장을 그만두라고 말한 뒤 일을 하지 않았다. 면담에서 압박된 말투와 환청이 있다. 가장 가능성 높은 진단은?

## 선택지

A. 분열정동장애
B. 분열형 인격장애
C. 망상장애
D. 정신병적 특징을 동반한 기분장애

## 해설

현재 조증 양상과 정신병적 증상이 함께 있고, 간헐적 조증 시기와 별개로 수개월간 망상·환청이 지속된 경과는 제시된 선택지 중 조현정동장애를 시사한다. 다만 실제 진단에서는 기분삽화가 전체 활성·잔류기 경과의 대부분을 차지하는지와 기분삽화 없이 적어도 2주 정신병이 지속된 시기를 종적으로 확인해야 한다. 정신병적 특징을 동반한 기분장애에도 환각이 있을 수 있으므로 환각 존재만으로 구별하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000655

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 정신병 동반 기분장애에는 환각이 없다는 오류와 조증+정신병이면 무조건 조현정동이라는 오류 교정. 현재 동시증상·기분삽화 밖의 정신병 경과와 종적 확인으로 답 제한.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.camh.ca/en/professionals/treating-conditions-and-disorders/psychosis/psychosis---diagnosis
