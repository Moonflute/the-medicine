---
type: qbank
schema_version: 1
id: medqa-us-train-006421
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0f7f2d18788020418f95b0f52439f79be7f5378d34270a234288dc8b209eb019
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "육아종증 다발혈관염"
  - "폐-신장 증후군"
  - "상기도 출혈"
related_disease_slugs:
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "양성 폐-신장 증후군 및 미제시 폐결절을 창작한 해설 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

62세 남성이 수개월간 지속된 혈성 코곁굴염에 이어 객혈과 짙은 소변이 생겼다. 흉부 CT에 공동을 동반한 다수 결절, 요침사에 적혈구 원주가 있고 PR3-ANCA가 양성이다. 가장 가능성 높은 진단은?

## 선택지

A. 감염 후 사구체신염
B. IgA 신병증
C. 항사구체기저막 질환
D. 육아종증 다발혈관염

## 해설

혈성 코곁굴염, 공동성 폐결절, 사구체신염에 PR3-ANCA 양성이 동반되면 육아종증 다발혈관염이 강하게 의심된다. 중증도와 감염 가능성을 신속히 평가하며 필요하면 조직으로 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006421
- https://kdigo.org/guidelines/anca-associated-vasculitis/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 양성 폐-신장 증후군 및 미제시 폐결절을 창작한 해설 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
