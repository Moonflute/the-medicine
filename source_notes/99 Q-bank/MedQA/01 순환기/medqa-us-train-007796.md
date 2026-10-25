---
type: qbank
schema_version: 1
id: medqa-us-train-007796
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2c83158439f17950681f14da816bfdb1f6b153aae7f048db0c6bf2eddf1c3d64
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "primary prevention"
  - "coronary artery disease risk"
  - "trans fat reduction"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: prevention
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

암로디핀으로 고혈압을 치료 중인 49세 남자가 심장질환 합병증 위험을 줄이는 방법을 상담하기 위해 내원했다. 긴 상담 후 관상동맥질환 위험을 낮추기 위해 트랜스지방 섭취를 크게 줄이기로 했다. 이 환자가 시작하는 예방의 유형은?

## 선택지

A. 일차 예방
B. 이차 예방
C. 삼차 예방
D. 지연 예방

## 해설


고혈압 환자가 아직 심혈관 질환이 없고 위험 인자를 감소시키기 위해 트랜스지방 섭취를 줄이는 것은 질병 발생을 예방하는 1차 예방에 해당한다. 2차 예방은 이미 질환이 있는 경우이며, 삼차·지연 예방은 해당되지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 관상동맥질환 발생 전에 식이 위험인자를 줄이는 임상 예방은 일차 예방 A에 해당.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007796
