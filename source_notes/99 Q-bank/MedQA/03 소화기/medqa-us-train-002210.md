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
explanation_status: "manual-reviewed"
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

52세 여성의 건강검진 초음파에서 담낭벽 내부에 작은 낭성 공간과 혜성꼬리 인공물이 함께 보인다. 담낭 선근종증의 전형적 영상이고 종괴, 담석, 증상은 없다. 어떻게 관리하는가?

## 선택지

A. 6개월 간격으로 초음파를 반복한다.
B. MRCP를 정기적으로 반복한다.
C. 예방적 담낭절제술을 실시한다.
D. 담낭 선근종증에 대한 추가 추적이나 치료는 필요 없다.

## 해설


전형적인 담낭 선근종증은 양성 변화다. 증상이 없고 전형적 영상이면 국내 권고는 추적을 요구하지 않는다. 비전형적 벽 비후나 종괴가 있으면 추가 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상 소실·염증/악성 의심 없는 우연한 담낭 선근종증이므로 선택지상 추가 치료 없음 D. 지속 통증의 다른 원인 평가는 별개.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002210
- https://doi.org/10.3348/kjr.2024.0914
