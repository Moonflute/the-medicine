---
type: qbank
schema_version: 1
id: medqa-us-train-009339
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:05235f073b757b99cf2aa1809a97761ec6a5d1dcb0a4d45a95bd19da2cc29d1f
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "transient ischemic attack"
  - "일과성 허혈발작"
  - "transient focal neurologic deficit"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 여성이 다리 근력저하로 응급실에 왔다. 4시간 전 개를 산책시키다가 갑자기 왼쪽 다리에 힘이 빠졌고 다른 증상은 없었다. 약 3시간 지속되다가 응급실로 오는 차 안에서 완전히 호전되어 현재는 정상적으로 움직인다. 20년간 고혈압과 고지혈증이 있다. 심박수 80회/분, 혈압 148/92 mmHg, 호흡수 14회/분이며 신경학적 검사를 포함한 진찰은 정상이고 양측 상하지 근력은 5/5이다. 비조영 두부 CT가 제시되었다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 급성 사지 허혈
B. 허혈성 뇌졸중
C. 지주막하출혈
D. 일과성 허혈발작

## 해설

갑자기 발생한 국소 운동결손이 완전히 회복된 임상 경과는 보기 중 TIA(D)에 가장 가깝다. 다만 현행 조직 기반 정의에서는 급성 경색이 없어야 하므로, 증상 지속시간이 짧거나 회복되었다는 사실만으로 뇌경색을 배제하지 못한다. 누락된 CT가 정상이라고 단정할 수 없고 정상 CT도 작은 급성 경색을 배제하지 않는다. 신속한 뇌/혈관 평가와 이차예방이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 임상적으로 D가 가장 가능하나 보이지 않는 CT가 정상이라고 한 허위 관찰과 시간만으로 TIA 확정 오류 제거.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/anti-platelet-therapy-in-ischemic-stroke-and-tia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009339
