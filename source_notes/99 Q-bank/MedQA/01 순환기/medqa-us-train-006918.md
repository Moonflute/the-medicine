---
type: qbank
schema_version: 1
id: medqa-us-train-006918
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1c8ba6f11a97124962006b732bdd4695d8a4774d034a4b1874fe9ac4afa90585
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "1도 방실차단"
  - "베라파밀 관련 PR 연장"
  - "무증상 서맥"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uwqeyLpOywqOuLqCAoQVYgYmxvY2spLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 여성이 편두통 예방을 위해 베라파밀을 복용 중이다. 실신이나 어지럼은 없고 맥박 75회/분, 혈압 124/76 mmHg이다. 심전도에서 PR 간격이 280 ms이며 모든 P파 뒤에 QRS가 이어진다. 가장 적절한 대응은?

## 선택지

A. 베라파밀의 영향을 검토하고 경과를 관찰한다
B. 동기화 심율동전환을 한다
C. 메토프롤롤을 추가한다
D. 즉시 영구 심박동기를 삽입한다

## 해설

PR 간격만 길고 방실 전도가 1:1로 유지되므로 1도 방실차단이다. 증상이 없다면 약물과 가역적 요인을 확인하며 관찰한다. 베라파밀이나 베타차단제는 방실결절 전도를 더 늦출 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 무증상1도차단 관찰 A는 유지하고 진행차단에 beta차단을 치료로 쓰는 오류 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006918
