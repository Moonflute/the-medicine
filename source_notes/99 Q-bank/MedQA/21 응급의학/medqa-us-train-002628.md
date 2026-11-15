---
type: qbank
schema_version: 1
id: medqa-us-train-002628
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a5a44db3f10566588b4c8a17aa3c0d87b0d86dbd1a2592e8fc651fc54bc3905
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "hemothorax"
  - "rib fractures"
  - "chest tube thoracostomy"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-qwiOu5hOu8iCDqs6jsoIggKFJpYiBGcmFjdHVyZSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

75세 남성이 흉부 둔상으로 늑골이 골절된 지 6일 뒤 숨이 차다. 왼쪽 호흡음이 줄고 타진은 둔탁하다. 초음파로 왼쪽 흉막강 안 다량의 액체를 확인했다. 혈흉을 배액할 초기 처치는?

## 선택지

A. 심낭천자
B. 기관지경검사
C. 단순 관찰
D. 흉관 삽입

## 해설


늑골골절 뒤 늦게 발생한 호흡곤란과 한쪽 흉막강의 액체는 지연성 혈흉을 시사한다. 흉관으로 배액하고 양과 지속 출혈을 평가하며 불안정하면 외과적 지혈을 검토한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002628
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/
