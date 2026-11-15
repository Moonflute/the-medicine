---
type: qbank
schema_version: 1
id: medqa-us-train-002284
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:154bdaddb54195aa49ef8708d04b202755fdfb14fe2ad125fbaa431d36b74282
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "infected obstructed urinary system"
  - "obstructive pyelonephritis"
  - "hydronephrosis"
  - "percutaneous nephrostomy"
question_type: management
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
  - MjAg67mE64eo6riw6rO8L-yalOuhnCDtj5Dsg4kgKFVyaW5hcnkgdHJhY3Qgb2JzdHJ1Y3Rpb24pLm1k
difficulty: complex
answer: A
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

58세 여성이 40℃ 열과 오른쪽 옆구리 통증으로 내원했다. 소변에 농뇨와 세균뇨가 있고 CT에서 7 mm 요관 결석 위쪽으로 수신증이 보인다. 정맥 항생제와 함께 가장 먼저 해야 할 처치는?

## 선택지

A. 응급 요로 감압
B. 먼저 결석을 부순다
C. 진통제로 자연 배출을 기다린다
D. 항생제가 끝날 때까지 폐쇄는 관찰한다

## 해설


감염된 폐쇄성 요로는 응급이다. 요관 스텐트 또는 경피적 신루로 즉시 감압하며, 근본 결석 제거는 감염이 안정된 뒤 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002284
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10330415/
- https://uroweb.org/guidelines/urolithiasis/chapter/guidelines
