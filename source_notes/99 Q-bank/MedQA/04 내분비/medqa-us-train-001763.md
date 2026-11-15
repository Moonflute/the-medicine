---
type: qbank
schema_version: 1
id: medqa-us-train-001763
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ebcec798d2bf05ffaa6a936b0d7d39bf23dcd179ce213b682fe9e5dd1e9e8ed2
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "acromegaly"
  - "growth hormone adenoma"
  - "anterior pituitary"
related_disease_slugs:
  - MDQg64K067aE67mEL-unkOuLqOu5hOuMgOymnSAoQWNyb21lZ2FseSkubWQ
question_type: diagnosis
difficulty: complex
answer: A
publication_status: "withheld"
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

43세 남성이 두통으로 내원했다. 최근 몇 년 동안 장갑 크기가 커지고 반지가 맞지 않게 됐다. 고혈압과 당뇨병도 있다. 이 증상을 함께 설명할 종양이 주로 발생하는 부위는?

## 선택지

A. 뇌하수체 전엽
B. 뇌하수체 후엽
C. 췌장
D. 간

## 해설


성인이 된 뒤 손 크기가 커지고 두통과 대사 이상이 동반되면 말단비대증을 의심한다. 가장 흔한 원인은 뇌하수체 전엽의 성장호르몬 분비 선종이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반지/장갑크기 증가·두통·DM은 GH과다/acromegaly. 원인 기관은 전엽 A이며 누락 외모사진 없이 병력으로 판단 가능.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001763
