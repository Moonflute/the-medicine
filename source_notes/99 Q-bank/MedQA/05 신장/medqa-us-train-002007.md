---
type: qbank
schema_version: 1
id: medqa-us-train-002007
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef84a8b972dd253f332d7c88358dd150e5eae55cf93c947593a4cff53c4ff57a
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "end-stage renal disease"
  - "hemodialysis"
  - "cardiovascular mortality"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: prognosis
difficulty: simple
answer: D
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

58세 여성이 조절되지 않는 고혈압에 이차적인 만성콩팥병으로 신장내과에서 추적 중이다. GFR이 계속 감소해 혈액투석을 시작할 시점에 가까워졌다. 만성 혈액투석 환자에서 가장 흔한 사망 원인은 무엇인가?

## 선택지

A. 뇌졸중
B. 고칼륨혈증
C. 감염
D. 심혈관질환

## 해설


만성 혈액투석 환자에서 사망 원인 1위는 심혈관 질환이며, 이는 동맥경화와 관련된 사망 위험이 가장 높다. 따라서 정답은 D이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 혈액투석 환자 주요 사망 원인군을 묻는 문항에서 심혈관질환 D. 개별 사망기전을 죽상경화만으로 한정해 판정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002007
