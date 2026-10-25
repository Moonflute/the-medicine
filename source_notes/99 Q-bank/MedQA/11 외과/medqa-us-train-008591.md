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
question_type: diagnosis
difficulty: standard
answer: D
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

32세 남성이 7피트 높이에서 평평한 나무 기둥 위로 떨어진 지 15분 후 응급실로 이송되었다. 도착 당시 심한 통증이 있고 빠르게 호흡한다. 맥박 135회/분, 호흡수 30회/분, 혈압 80/40mmHg이다. 왼쪽 중간액와선 제4늑간에 충격으로 인한 상처가 있다. 청진에서 기관이 오른쪽으로 편위되고 왼쪽 폐의 호흡음이 들리지 않는다. 왼쪽 흉부 타진에서 둔탁음이 있다. 경정맥은 편평하고 심장검사는 정상이다. 큰 정맥로 두 개를 확보하고 정맥 수액 소생을 시작했다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 심장눌림증
B. 긴장성 기흉
C. 연가양 흉곽
D. 혈흉

## 해설


외상 후 왼쪽 호흡음 소실·타진 둔탁음·평평한 경정맥과 쇼크는 혈흉(D)을 지지한다. 많은 흉막강 혈액이 폐를 압박하고 반대쪽 종격동/기관 편위를 일으킬 수 있다. 긴장성 기흉은 공기 때문에 대개 과공명(hyperresonance)을 보이는 점이 다르며, 이를 덜 울리는 타진음이라고 설명하지 않는다. 심장눌림증은 맥락상 경정맥 팽창·심음 감소 등이 단서지만 모든 징후가 항상 나타나는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008591 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 긴장성 기흉 타진을 덜 울음이라고 뒤집어 설명한 오류를 과공명으로 바로잡았다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008591
