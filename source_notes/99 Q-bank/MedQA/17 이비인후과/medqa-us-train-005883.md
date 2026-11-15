---
type: qbank
schema_version: 1
id: medqa-us-train-005883
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c2a5fb02c0c25ec1fabc627b8ea49d6d6d0d559b00a00738c9d46cc9c92174a2
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "루드비히 협심증"
  - "악하 공간 감염"
  - "치성 감염"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-y5mOyEsSDqsJDsl7wgKE9kb250b2dlbmljIEluZmVjdGlvbikubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

하악 어금니 감염 뒤 양쪽 턱밑이 단단하게 붓고 혀가 위로 밀린 환자가 침을 삼키지 못한다. 목소리가 변하고 숨 들이쉴 때 소리가 난다. 우선 처치는?

## 선택지

A. 진통제를 투여하고 경과를 본다
B. 경부 CT가 끝날 때까지 기도 조치를 보류한다
C. 경구 항균제만 처방한다
D. 응급 기도 확보를 위해 즉시 전문팀을 부른다

## 해설

치성 감염으로 구강저와 턱밑이 붓는 루드비히 앙기나는 빠르게 기도를 위협할 수 있다. 기도 확보를 영상 때문에 늦추지 않고 정맥 치료와 감염원 조절도 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Ludwig angina를 심장 협심증으로 오해하지 않도록 용어와 감염 공간 설명을 교정; 치성 감염 케이스·정답 D 유지.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005883
- https://www.ncbi.nlm.nih.gov/books/NBK482354/
