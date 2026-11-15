---
type: qbank
schema_version: 1
id: medqa-us-train-008591
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f4cf10056a671086dc9898d8102d8f42684ebb812c5a33982d8439c9339ad800
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "hemothorax"
  - "thoracic trauma"
  - "hemorrhagic shock"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
  - MTEg7Jm46rO8L-2dieu2gCDsmbjsg4EubWQ
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 남성이 흉부 둔상 뒤 혈압 80/42 mmHg, 맥박 135회/분이다. 왼쪽 호흡음이 거의 들리지 않고 외상 초음파에서 왼쪽 흉막강에 많은 액체가 보인다. 수혈 소생과 흉부외과 연락을 하면서 할 초기 처치는?

## 선택지

A. 침상에서 반복 흉부 X선만 촬영
B. 왼쪽 흉관을 삽입해 흉막강의 피를 배액한다
C. 왼쪽 흉부 바늘 감압만 시행
D. 흉부 CT 결과가 나올 때까지 흉막강 처치를 미룬다

## 해설


외상성 다량 혈흉으로 쇼크가 오면 흉관으로 배액하면서 수혈하고 출혈량과 혈역학 반응을 확인한다. 수혈에도 불안정하거나 지속 출혈이 심하면 응급 수술을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008591 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 긴장성 기흉 타진을 덜 울음이라고 뒤집어 설명한 오류를 과공명으로 바로잡았다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008591
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/
