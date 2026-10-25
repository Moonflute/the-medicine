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
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
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

신기능 저하와 ACE 억제제 병용은 리튬 축적·독성 위험을 높이므로 혈중농도·신기능·수분 상태를 평가하고 리튬을 중단하거나 재조정할 필요가 있다. 제시된 선택지 중 리튬 대신 발프로산으로 기분조절 치료를 변경하는 방안이 적절하다. 발프로산은 신장보호제가 아니고 리튬과 상호작용이 전혀 없는 무위험 약도 아니므로 간기능·혈액검사 등 자체 안전성 평가가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003260

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 신기능 저하에서 리튬 중단·대안 선택 답 유지. 발프로산을 신장보호제로 설명한 허위 이득 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b839ff4b-f62d-41ab-a823-550a756d58ec
