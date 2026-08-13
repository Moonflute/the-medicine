---
type: qbank
schema_version: 1
id: medqa-us-train-003260
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2d582b848ed8b2ec71e9067e15c25911f46ac92269b5cf320951258fbf32b0fd
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "lithium toxicity"
  - "chronic kidney disease"
  - "lithium-induced nephropathy"
  - "switch to valproate"
question_type: adverse_effect
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-umrO2KrCDspJHrj4UgKExpdGhpdW0gUG9pc29uaW5nKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
---

# MedQA US 임상문제

## 문제

57세 여성이 손 사용 곤란과 팔·하지 부종으로 진료를 받았고 검사 이상으로 응급실에 보내졌다. 피부가 유난히 매끄럽고 노화가 거의 없어 보인다. 과거에 여러 차례 자살 시도, 양극성장애, 비만, 당뇨병, 불안이 있고 리튬, 인슐린, 캅토프릴, 클로나제팜을 복용한다. 혈청 나트륨 140, 칼륨 5.2, 중탄산염 20, BUN 39, 크레아티닌 2.2 mg/dL이다. 집에서 복용하던 약을 다시 시작한 뒤 체온 37.5°C, 혈압 155/90 mmHg, 호흡수 11회/분이다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 약물을 계속하고 메트포르민을 시작한다
B. 약물을 계속하고 니페디핀을 추가한다
C. 리시노프릴을 시작하고 캅토프릴을 중단한다
D. 발프로산을 시작하고 리튬을 중단한다

## 해설


리튬은 신장에 축적되어 만성 신부전과 전해질 이상을 일으키며, 혈청 리튬 농도와 신기능 악화 시 대체가 필요하다. 발프로산은 리튬과 교차작용이 없으며, 신장 보호에 도움이 된다. 따라서 리튬 중단 후 발프로산 시작이 적절하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003260
