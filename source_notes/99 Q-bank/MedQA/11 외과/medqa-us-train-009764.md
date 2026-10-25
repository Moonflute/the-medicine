---
type: qbank
schema_version: 1
id: medqa-us-train-009764
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d063c51d3b3a26e8d5f1fe2e50bd6ce58d2d798b4c2766a173f96ea7acf874fc
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "관통성 경부 손상"
  - "경부 총상"
  - "혈관 손상"
related_disease_slugs:
  - MTEg7Jm46rO8L-qyveu2gOyZuOyDgSAoQ2VydmljYWwgVHJhdW1hKS5tZA
  - MTEg7Jm46rO8L-2YiOq0gCDshpDsg4EubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

31세 여성이 목에 총상을 입은 지 25분 후 응급실에 이송되었다. 의식 소실은 없었다. 도착 시 심한 목 통증이 있고 불안해 보인다. 체온 37°C, 맥박 분당 105회, 호흡수 분당 25회, 혈압 100/70 mmHg이며 실내 공기에서 산소포화도는 96%이다. 사람, 장소, 시간에 대한 지남력은 정상이다. 목 우측 후방 경부에 총알 진입 상처가 있으나 출구 상처는 없다. 양측 경동맥 맥박은 만져지고 경동맥 잡음은 없다. 핀으로 찌르는 감각과 가벼운 촉각은 정상이다. 폐 청진은 깨끗하고 심장 진찰에서 잡음, 마찰음, 갤럽은 없다. 정맥 수액 소생술과 함께 다음 중 가장 적절한 처치는?

## 선택지

A. 수술적 탐색
B. CT 혈관조영술
C. 바륨 삼킴검사
D. 후두경검사

## 해설


총상 후 혈관 손상이 의심될 때 가장 빠른 비침습적 평가법은 조영제 주입 후 CT 혈관조영술이다. 이는 혈관 손상 여부와 출혈 위치를 정확히 파악한다. 따라서 다음 단계는 CT 혈관조영술이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009764 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 목 관통상에서 안정적이며 활동성 출혈·확장혈종·기도위협 등 명백한 hard sign이 없어 CTA B로 혈관/손상 경로를 평가하는 것이 적절하다. 원문·해설과 ESVS2025 대조.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://esvs.org/wp-content/uploads/2025/01/2025-Vascular-Trauma-Guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009764
