---
type: qbank
schema_version: 1
id: medqa-us-train-008156
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b616467514ccddf37f3952802b4c246bddd010e41614dd6cff863bdd1b689c0a
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "persistent depressive disorder"
  - "dysthymia"
  - "chronic depression"
  - "Persistent depressive disorder"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 건강검진을 위해 내원했다. 급성 증상은 없지만 절망감, 식욕부진, 집중곤란, 수면장애가 있다. 자존감이 낮고 3년 동안 증상이 지속되었으며 일년에 몇 주 동안 호전되는 시기가 있었다. 혼자 살고 자신이 매력적이지 않다고 느껴 연애도 하지 않는다. 천식 병력이 있고 아버지는 주요우울장애를 앓다 자살했다. 신체검사에서 우울해 보이고 안절부절못하며 불안해한다. 가장 가능성 높은 진단은?

## 선택지

A. 순환기분장애
B. 파괴적 기분조절곤란장애
C. 지속성 우울장애
D. 계절성 정동장애

## 해설

성인에서 우울한 기분과 관련 증상이 2년 이상 지속되고 증상이 없는 기간이 길지 않은 만성 경과는 지속성 우울장애를 시사한다. 이 사례는 3년 경과와 연간 수 주의 호전을 보여 제시된 선택지 중 이에 해당한다. 지속성 우울장애가 항상 경증이거나 주요우울장애가 항상 단기간이라는 뜻은 아니며 주요우울삽화가 만성 경과 중 동반될 수도 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008156

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 지속성 우울장애를 반드시 경증·주요우울장애는 짧은 질환이라고 설명한 오류 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
