---
type: qbank
schema_version: 1
id: medqa-us-train-003140
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:64046b6b3592e9042b621f00b06246206bcdccd5cb8739fe1ec2dbfc7e617990
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Pringle maneuver"
  - "liver trauma"
  - "hepatoduodenal ligament"
  - "portal triad clamping"
related_disease_slugs: []
question_type: diagnosis
difficulty: standard
answer: C
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

교통사고 뒤 간 손상으로 개복한 환자에서 간문부 유입 혈류를 차단하는 프링글 수기를 시행했다. 그래도 간 뒤쪽에서 대량 출혈이 계속된다. 어떤 손상을 우선 의심하는가?

## 선택지

A. 담낭관 손상
B. 위십이지장동맥 손상
C. 간정맥 또는 간 뒤 하대정맥 손상
D. 비장정맥 손상

## 해설


프링글 수기는 간동맥과 문맥에서 간으로 들어오는 혈류를 줄이지만 간정맥과 하대정맥의 출혈은 막지 못한다. 유입 차단에도 간 뒤쪽 출혈이 계속되면 이 부위의 정맥 손상을 의심한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Pringle 수기는 portal triad를 포함한 hepatoduodenal ligament C를 압박해 간 유입혈류를 차단하는 해부 문항.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003140
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7106618/
