---
type: qbank
schema_version: 1
id: medqa-us-train-002261
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e305b71cb7650834cfa24bca18e44b9c4af98aabf0b04306158838f1b958161e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "anterior cerebral artery stroke"
  - "medial frontal lobe infarct"
  - "contralateral leg weakness"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC9NQ0Eg6rK97IOJIChNQ0EgaW5mYXJjdGlvbikubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

74세 오른손잡이 여성이 뇌졸중이 의심되어 병원으로 의뢰되었다. 응급실에서 혈압 159/98 mmHg, 맥박 88회/분, 호흡 20회/분이었다. 말수가 적고 자신의 상태에 무관심했지만 신체검사에는 협조했다. 신경학적검사에서 의식은 명료하고 사람·장소·시간에 대한 지남력은 정상이었다. 시야 결손은 없고 오른쪽으로의 주시 편위가 있으나 인형눈 머리회전으로 운동범위는 완전했다. 안면 비대칭은 없고 청력은 대체로 정상이다. 혀 편위가 없고 구개 상승은 대칭이며 발성도 좋다. 회내근 또는 하지의 드리프트는 없었다. 오른쪽 다리의 가벼운 촉각이 감소했지만 가벼운 촉각·압력·통증, 고유감각과 운동감각은 정상이다. 근력은 양쪽 상지가 5+, 오른쪽 하지가 5+, 왼쪽 고관절과 허벅지가 3+, 왼쪽 다리와 발이 2+이다. 머리 CT와 MRI에서 허혈 부위가 확인되었다. 다음 중 어느 동맥의 폐색이 가장 가능성 높은가?

## 선택지

A. 오른쪽 전대뇌동맥
B. 오른쪽 중대뇌동맥 줄기(M1)
C. 오른쪽 중대뇌동맥 하부분지
D. 왼쪽 중대뇌동맥 하부분지

## 해설

상지·얼굴에 비해 왼쪽 하지의 근력저하가 두드러지고 말수 감소·무감동이 있어 우측 내측 전두엽과 하지 운동영역을 공급하는 오른쪽 전대뇌동맥(A) 영역이 가장 합당하다. 중대뇌동맥 병변은 대체로 얼굴·상지 우세 결손 또는 언어·시야 등 피질 증상을 보인다. 다만 원문에 함께 적힌 오른쪽 다리 촉각저하와 하지를 포함한 드리프트 없음은 다른 검사 결과와 완전히 일관되지 않으며, 이들을 우측 ACA의 전형적 소견이라고 설명해서는 안 된다. 주된 운동 분포와 무감동을 기준으로 한 최선답이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 좌측 하지 우세 운동결손·무감동으로 우측 ACA A가 가장 타당하나 우측 다리 감각저하라는 원문의 불일치는 숨기지 않는다. 병변 측과 다리 우세 분포를 명시했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002261
