---
type: qbank
schema_version: 1
id: medqa-us-train-004342
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7f0c4c4bd108bd50b2ac4be880c3e9343aa205866f5bd09ebe303ad7dface013
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "낭성섬유증"
  - "기관지확장증"
  - "남성 불임"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 남성이 어린 시절부터 반복되는 부비동염과 매일 나오는 가래로 내원했다. 흉부 CT에 기관지확장증이 있고, 심장은 오른쪽에 있으며 간은 왼쪽에 있다. 이 소견들을 가장 잘 설명하는 진단은?

## 선택지

A. 낭성섬유증
B. 알레르기성 기관지폐 아스페르길루스증
C. 공통가변면역결핍증
D. 원발성 섬모운동이상증

## 해설

만성 부비동염, 기관지확장증, 내장 역위가 함께 있으면 원발성 섬모운동이상증을 시사한다. 점액섬모 청소가 잘 되지 않아 어릴 때부터 상·하기도 감염이 반복될 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원답 D인데 해설이 CF/sweat chloride C로 오연결. PCD의 situs/정자운동 기전으로 교체.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004342
- https://publications.ersnet.org/lookup/doi/10.1183/13993003.00745-2025
