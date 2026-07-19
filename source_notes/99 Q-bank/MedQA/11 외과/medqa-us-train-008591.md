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
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
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


외상 후 흉부 타진에서 둔탁음, 청진에서 폐음 소실, 혈압 저하는 혈흉(혈액이 흉강에 고임)과 일치한다. 긴장성 기흉는 과도한 공기 축적으로 흉부 압력이 증가하지만 타진은 과도한 공기음(덜 울음)이다. 심장눌림증은 심장음 변동을 동반한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008591
