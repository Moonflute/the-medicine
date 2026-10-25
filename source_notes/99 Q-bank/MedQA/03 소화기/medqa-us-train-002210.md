---
type: qbank
schema_version: 1
id: medqa-us-train-002210
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6bf21ba182298c4c091457bfbc158d25198333bdbdce7bba59ba87cc0b6e2e7e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "gallbladder adenomyomatosis"
  - "biliary colic"
  - "incidental finding"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJwg7Jqp7KKF7ZiVIOuzkeuzgCAoR2FsbGJsYWRkZXIgUG9seXBvaWQgTGVzaW9uKS5tZA
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

52세 여성이 몇 시간 전부터 시작된 오른쪽 상복부 통증으로 응급진료소에 왔다. 과거에도 비슷한 통증이 있었지만 오늘보다 경미했다. 과거력은 특이사항이 없다. 제산제를 복용했지만 효과가 없었다. 체온 37°C, 호흡 16회/분, 맥박 78회/분, 혈압 122/98 mmHg이다. 신체검사는 정상이고 통증은 가라앉았다. 의사는 담낭염을 의심해 확인을 위해 제한적 복부 초음파를 시행했으나 담낭염 증거는 없고 담낭 선근종증이 우연히 발견되었다. 악성종양을 의심할 임상 소견은 없다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 바륨 연하검사
B. 내시경적 역행성 담췌관조영술
C. 자기공명 담췌관조영술
D. 추가 치료가 필요하지 않다

## 해설


우연히 발견된 담낭 선근종증은 양성 병변이며, 증상이 없고 악성 소견이 없으므로 추가 치료 없이 관찰한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상 소실·염증/악성 의심 없는 우연한 담낭 선근종증이므로 선택지상 추가 치료 없음 D. 지속 통증의 다른 원인 평가는 별개.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002210
