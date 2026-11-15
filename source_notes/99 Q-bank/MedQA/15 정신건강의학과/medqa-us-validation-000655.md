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
answer: C
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

28세 환자가 2년 동안 뚜렷한 조증 삽화를 여러 차례 겪었다. 기분 삽화가 전체 경과의 대부분을 차지한다. 다만 조증이나 우울 삽화가 전혀 없던 4주 동안에도 환청과 망상이 지속됐다. 물질이나 신체질환은 배제했다. DSM-5-TR 기준에 가장 맞는 진단은?

## 선택지

A. 정신병적 양상을 동반한 양극성 I형 장애
B. 조현병
C. 조현정동장애 양극형
D. 망상장애

## 해설

조현정동장애는 기분 삽화가 전체 질병 경과의 대부분을 차지하면서, 기분 삽화 없이도 망상이나 환각이 적어도 2주 지속된 시기가 있어야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000655
- https://pubmed.ncbi.nlm.nih.gov/23707642/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 정신병 동반 기분장애에는 환각이 없다는 오류와 조증+정신병이면 무조건 조현정동이라는 오류 교정. 현재 동시증상·기분삽화 밖의 정신병 경과와 종적 확인으로 답 제한.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.camh.ca/en/professionals/treating-conditions-and-disorders/psychosis/psychosis---diagnosis
