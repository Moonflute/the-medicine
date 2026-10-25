---
type: qbank
schema_version: 1
id: medqa-us-train-003613
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b93641f7c11bedf1623ddf8d5f37debab3cdd5b38ef9a6109dd86dfa6df0848a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "infective endocarditis"
  - "aortic root abscess"
  - "complete heart block"
  - "perivalvular abscess"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: C
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

32세 남성이 2일간의 혼란과 빠르게 진행하는 호흡곤란으로 응급실에 왔다. 발열과 오한이 5일간 있었고, 과거 C형 간염과 정맥 헤로인 사용력이 있다. 양손바닥과 발바닥에 통증 없는 반점, 손톱 밑 선상 출혈, 양측 폐부종이 있었다. 심전도에서 P파와 QRS가 서로 독립적으로 규칙적인 간격으로 나타났다. 경식도 심초음파에서 가장 가능성 높은 소견은?

## 선택지

A. 우심방 내 고에코성 얇은 선형 구조
B. 심낭과 심외막 사이의 무에코 공간
C. 판막 주위 비후와 에코가 없는 공동
D. 삼첨판의 진동성 이동 종괴

## 해설


감염성 심내막염에서 심전도에 완전 차단이 나타날 수 있으며, 초음파에서 판막 주위 비후와 무에코 공동(주위 농양)이 보인다. 이는 판막 주위 농양을 시사한다. 따라서 판막 주위 비후와 에코가 없는 공동이 정답이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: IE 임상징후와 AV dissociation의 완전차단은 판막주위 농양; TEE의 echolucent cavity C.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003613
