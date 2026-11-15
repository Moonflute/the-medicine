---
type: qbank
schema_version: 1
id: medqa-us-train-005283
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6352868ef4ca15e35a78c2ccd3645b8b030dd5e1f0cc351058e09928bb1805b4
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "급성 스트레스 반응"
  - "애도"
  - "자살사고 평가"
  - "Acute stress reaction"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

가까운 사람을 갑자기 잃은 지 3주 된 환자가 악몽과 슬픔을 호소한다. 식사와 일은 하고 있지만 ‘살아가는 게 무슨 의미인지 모르겠다’고 말한다. 가장 적절한 다음 대응은?

## 선택지

A. 직장에 다니므로 안전 관련 질문 없이 경과만 본다
B. 애도 기간이 짧으므로 지금은 자살 생각을 확인하지 않는다
C. 상실의 고통을 인정하며 자살 생각과 당장의 안전을 직접 확인한다
D. 애도를 곧바로 주요우울장애로 확정하고 약만 처방한다

## 해설


애도 중에도 죽고 싶다는 생각이 있는지 공감적으로 직접 물을 수 있다. 기간이나 직장 복귀만으로 안전을 가정하지 않고, 응답에 따라 보호 계획과 추가 평가를 마련한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005283
- https://www.nice.org.uk/guidance/ng225/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영문 공감적 선지들을 한국어와 각각 대조. 초기 애도에서 정상 범위를 단정해 병리화하거나 축소하지 않고 공감·자살사고를 탐색하는 정답 타당.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
