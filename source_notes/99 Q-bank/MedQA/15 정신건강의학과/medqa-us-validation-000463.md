---
type: qbank
schema_version: 1
id: medqa-us-validation-000463
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:af2677893f836bf04e31922093b6c00ff2937ceeed8f27dbab0dc86d2cb3b96f
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "외상후스트레스장애"
  - "급성스트레스장애"
  - "증상 지속 기간"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yZuOyDgSDtm4Qg7Iqk7Yq466CI7IqkIOyepeyVoCAoUFRTRCkubWQ
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4ieyEsSDsiqTtirjroIjsiqQg7J6l7JWgIChBY3V0ZSBTdHJlc3MgRGlzb3JkZXIpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

심각한 사고를 직접 겪은 지 2주 된 환자가 원치 않는 기억과 악몽, 회피와 심한 과각성으로 일을 못 한다. 급성 스트레스장애로 평가됐고 안전은 확보됐다. 지금 제안할 수 있는 치료는?

## 선택지

A. 아직 한 달이 안 됐으므로 어떤 치료도 시작할 수 없다
B. 증상이 생활을 방해하므로 외상 중심 인지행동치료를 제안한다
C. 모든 사고 경험자에게 일회성 심리 디브리핑을 의무화한다
D. PTSD를 막기 위해 벤조디아제핀을 장기간 예방 투여한다

## 해설

외상 후 첫 달이라도 급성 스트레스장애 또는 임상적으로 중요한 외상 후 증상이 있으면 외상 중심 CBT를 제안할 수 있다. 모든 외상 경험자에게 일률적으로 디브리핑을 하는 것과 다르다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000463
- https://www.nice.org.uk/guidance/ng116/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. PTSD의 증상1개월 기준과 급성스트레스장애의 외상 직후 시간창을 혼동한 오류 교정. 기간 확인 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://www.ptsd.va.gov/professional/treat/essentials/acute_stress_disorder.asp
