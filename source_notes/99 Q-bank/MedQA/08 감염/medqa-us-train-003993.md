---
type: qbank
schema_version: 1
id: medqa-us-train-003993
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c500fdd20b17c9a0a4a23e1c4d9cfc3fae27915007eb147b8d73e4c539d62af5
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "급성 신우신염"
  - "복잡성 요로감염"
  - "당뇨병"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

30세 비임신 여성이 고열, 오른쪽 옆구리 통증과 늑골척추각 압통으로 왔다. 초음파에서 요로 폐쇄는 없지만 반복 구토로 물이나 약을 삼키지 못한다. 소변배양을 채취한 뒤 적절한 처치는?

## 선택지

A. 귀가 후 경구 항생제 복용을 시도한다
B. 수액만 주고 배양 결과를 기다린다
C. 입원해 수액과 정맥 항생제로 치료한다
D. 요로 스텐트부터 삽입한다

## 해설


신우신염에서 구토로 경구 치료와 수분섭취가 어렵다면 입원해 정맥 치료를 한다. 폐쇄가 확인되지 않으면 요로 배액술을 일률적으로 먼저 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003993 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고열·전신증상의 신우신염 입원 IV 치료 D 유지; 모든 신우신염 입원 및 영상/배액 영구 불필요라는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/complicated-urinary-tract-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003993
- https://doi.org/10.3947/ic.2018.50.1.67
