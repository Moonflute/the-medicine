---
type: qbank
schema_version: 1
id: medqa-us-validation-000016
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5f208821aefe3a9df52eb21cbe2d619ebae6a8b95a2be2031e504f10ec7668af
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "적대적 반항장애"
  - "청소년 행동장애"
  - "반항적 행동"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yggeuMgOyggSDrsJjtla0g7J6l7JWgIChPcHBvc2l0aW9uYWwgRGVmaWFudCBEaXNvcmRlcikubWQ
difficulty: standard
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

13세 청소년이 10개월째 집과 학교에서 자주 버럭 화를 내고, 어른과 말다툼하며 규칙을 따르지 않는다. 다른 사람을 탓하고 일부러 성가시게 해 관계와 학교생활에 지장이 있다. 지속적인 기본권 침해, 절도, 심각한 공격은 없다. 진단은?

## 선택지

A. 품행장애
B. 반사회성 성격장애
C. 반응성 애착장애
D. 적대적 반항장애

## 해설


오래 지속되는 화·과민, 논쟁적·반항적 행동이 여러 환경에서 기능을 방해하는 양상이다. 다른 사람의 권리를 심각하게 침해하는 행동이 특징인 품행장애와 구분한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000016
- https://www.nice.org.uk/guidance/cg158

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 annoys classmates를 권리침해성 괴롭힘으로 과하게 옮긴 표현을 성가시게 함으로 교정. ODD 원정답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
