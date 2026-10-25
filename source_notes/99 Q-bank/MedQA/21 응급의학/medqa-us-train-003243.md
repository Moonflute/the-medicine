---
type: qbank
schema_version: 1
id: medqa-us-train-003243
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a838972957990ff02fda5ff49a800904e7bfb72175388283ae3402cc359dadd4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "open pneumothorax"
  - "sucking chest wound"
  - "three-sided occlusive dressing"
  - "penetrating chest trauma"
  - "Open pneumothorax"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2dieu2gCDsmbjsg4EubWQ
difficulty: standard
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

말리에서 군사 공격 중 흉부에 자상을 입은 22세 군인이 전투 의무병에게 실려 왔다. 호흡곤란이 있고 의식과 지남력은 정상이다. 왼쪽 네 번째 늑간의 중간쇄골선에 2 cm 상처가 있으며 호흡할 때마다 상처에서 피가 거품처럼 나온다. 경정맥 팽창은 없고 왼쪽 타진에서 과공명과 호흡음 감소가 있으며 기관은 중앙에 있다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 부분 폐쇄성 드레싱
B. 응급 심낭천자
C. 응급 심초음파
D. 산소 보충

## 해설

호흡에 따라 공기/혈액이 드나드는 흉부 상처는 개방성 기흉을 시사한다. 보기 중 공기 유입을 막고 배출이 가능하도록 하는 드레싱(A)이 적합하다. 현대 전투외상 지침은 vented chest seal을 우선 사용하고 긴장성 기흉 발생을 감시한다. 상처 지름 2cm가 보편적 진단 기준은 아니며, 드레싱 후에도 호흡·순환을 재평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 개방성 기흉의 2cm 절대 기준 및 삼면드레싱만 표준이라는 오류 교정.
- 공식/학회 근거: https://jts.health.mil/assets/docs/cpgs/US_Army_Aeromedical_Evacuation_Standard_Medical_Operating_Guidelines_26NOV2025.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003243
