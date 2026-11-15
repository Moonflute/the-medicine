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

32세 남성이 대동맥판 감염성 심내막염으로 치료 중이다. 발열이 지속되며, 새 심전도에서 P파와 QRS가 서로 독립적으로 나타나는 완전 방실차단이 확인됐다. 경식도 심초음파에서 특히 확인해야 할 합병증은?

## 선택지

A. 삼첨판에만 국한된 작은 증식물
B. 단순 심낭삼출
C. 대동맥판 주위 농양
D. 고립성 승모판 탈출

## 해설


대동맥판 주위 조직은 방실 전도계에 가깝다. 대동맥판 심내막염 도중 새 방실차단이 나타나면 판막 주위 농양으로 감염이 퍼졌는지 신속히 평가한다. 농양이 확인되면 조기 수술 필요성을 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: IE 임상징후와 AV dissociation의 완전차단은 판막주위 농양; TEE의 echolucent cavity C.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003613
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107
