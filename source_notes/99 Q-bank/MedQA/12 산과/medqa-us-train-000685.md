---
type: qbank
schema_version: 1
id: medqa-us-train-000685
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:37bb3ee21bbff5e4878400eca6d2637022881bae5847c63162e4ffb2156e25ee
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "iron deficiency anemia"
  - "active labor"
question_type: management
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만삭 초임부가 자궁경부 완전 개대 후 두 시간째 힘을 주고 있다. 태아 머리는 0에서 +1까지 계속 내려왔고 심박은 안정적이다. 산모의 활력도 정상이다. 적절한 대응은?

## 선택지

A. 하강이 진행하므로 힘주기와 태아 감시를 이어간다
B. 2시간이 됐으므로 하강과 관계없이 제왕절개한다
C. 태아가 안정적이어도 즉시 흡입분만한다
D. 진행 중이어도 분만 감시를 모두 중단한다

## 해설

분만 2기의 판단은 시간뿐 아니라 태아 하강·회전, 산모·태아 상태를 함께 본다. 하강이 진행하고 상태가 안정적이면 지금 수술이나 기구분만을 서두를 이유가 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 완전 개대 후 분만 2기임을 바로잡고 무진행 시 개별 평가 명시.
- https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2024/01/first-and-second-stage-labor-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000685
- https://doi.org/10.1097/AOG.0000000000005447
