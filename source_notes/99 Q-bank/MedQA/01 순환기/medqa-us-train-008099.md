---
type: qbank
schema_version: 1
id: medqa-us-train-008099
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:906fdc42578b0776c379a3e860d23d47359967c30cc76f4479fdd20498f00955
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "infective endocarditis prophylaxis"
  - "prior infective endocarditis"
  - "dental procedure"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: prevention
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성이 치아 발치 수술을 받을 예정이다. 신체검사는 정상이고 혈압 126/84 mm Hg, 맥박 72회/분으로 규칙적이며 약물은 복용하지 않는다. 다음 중 감염성 심내막염 예방을 위한 항생제 예방투여가 필요한 심장질환은?

## 선택지

A. 비후성 폐쇄성 심근병증
B. 심실중격결손
C. 감염성 심내막염 과거력
D. 승모판 역류

## 해설


감염성 심내막염 병력이 있는 환자는 고위험군으로, 치과 시술 전 항생제 예방투여가 필요하다. 따라서 정답은 과거 감염성 심내막염이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 치아 발치 전 감염성 심내막염 과거력 C는 항생제 예방 고위험 적응증이며 해설과 일치.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008099
