---
type: qbank
schema_version: 1
id: medqa-us-train-007290
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7ae5b4a5359276de230d5b616cabc627a3d34c8c68165a80d5346a54165ff0ee
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "급성 세균성 전립선염"
  - "소변 배양"
  - "전립선 압통"
  - "요로감염"
question_type: investigation
related_disease_slugs:
  - MDUg7Iug7J6lL-yalOuhnOqwkOyXvC5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

39세 남성이 고열과 오한, 빈뇨, 회음부 통증으로 내원했다. 부드럽게 진찰했을 때 전립선이 붓고 압통이 심하다. 항생제를 지연시키지 않으면서 원인균을 확인할 검사는?

## 선택지

A. 전립선 마사지 뒤 분비물 배양
B. 중간뇨 배양
C. 혈청 PSA 검사
D. 전립선 조직검사

## 해설


급성 세균성 전립선염에서는 중간뇨 배양으로 원인균과 감수성을 확인한다. 마사지나 생검은 균혈증 위험이 있어 급성기에 피한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007290
- https://pc.icjournal.org/DOIx.php?id=10.3947%2Fic.2018.50.1.67
