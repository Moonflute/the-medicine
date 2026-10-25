---
type: qbank
schema_version: 1
id: medqa-us-train-004284
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:46e414b888998a507a415a2ac5d4e662028217bfe65f8b253174c8e7d1c87e1b
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "하시모토 갑상샘염"
  - "갑상샘기능저하증"
  - "고프로락틴혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-qzoO2UhOuhnOudve2LtO2YiOymnSAoSHlwZXJwcm9sYWN0aW5lbWlhKS5tZA
question_type: 임상증례 객관식
difficulty: simple
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 여자가 수개월 동안 악화된 피로로 내원했다. 직장에서 깨어 있으려면 매일 커피를 거의 두 배로 마셔야 하고 균형 잡힌 건강한 식사를 유지하는데도 체중이 크게 증가했다. 혈액검사에서 갑상샘과산화효소 항체가 양성이다. 이 상태와 일치하는 추가 소견은 무엇인가?

## 선택지

A. 활발한 심부건반사
B. 설사
C. 유즙분비
D. 안구돌출

## 해설

임상적 갑상샘저하에서는 TRH자극이 증가해 PRL이 상승하고 galactorrhea C가 생길 수 있다. Anti-TPO는 자가면역갑상샘염을 지지하지만 단독으로 현재 기능저하나 고PRL을 확정하지 않으며 TSH/freeT4·PRL과 약물 등 원인을 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Hashimoto 저하에서 TRH→PRL의 기전을 제시하고 항TPO만으로 모든환자 고PRL이라고 단정하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004284
