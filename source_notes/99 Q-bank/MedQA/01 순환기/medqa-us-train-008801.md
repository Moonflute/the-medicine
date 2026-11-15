---
type: qbank
schema_version: 1
id: medqa-us-train-008801
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:473d57883666361daa08d1d54b16ed793508684e1c2df7e63d46fb60a208db0d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "mitral valve prolapse"
  - "myxomatous degeneration"
  - "mitral regurgitation"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDsnbztg4jspp0gKE1pdHJhbCBWYWx2ZSBQcm9sYXBzZSkubWQ
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDsl63rpZggKE1pdHJhbCBSZWd1cmdpdGF0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 두근거림으로 왔다. 심첨부에서 중기 수축기 클릭 뒤 후기 수축기 잡음이 들리고, 일어서자 클릭이 앞당겨지고 잡음이 길어진다. 가장 가능성 높은 판막 이상은?

## 선택지

A. 류마티스성 승모판협착
B. 승모판 탈출
C. 대동맥판 역류
D. 삼첨판 역류

## 해설

중기 수축기 클릭에 후기 수축기 잡음이 이어지는 것은 승모판 탈출의 특징이다. 기립으로 좌심실 혈액량이 줄면 판막 탈출이 수축기 중 더 이르게 발생해 클릭이 앞당겨진다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 점액종성 변성을 근육성 변성과 동의어로 쓴 오역을 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008801
- https://academic.oup.com/eurheartj/article/46/44/4635/8234488
