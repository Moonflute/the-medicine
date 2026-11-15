---
type: qbank
schema_version: 1
id: medqa-us-train-006034
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:96b438703d78634313f07102ad78a105505f9df49f414d64cdefedb340912808
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "신세포암"
  - "혈뇨"
  - "고형 신장 종괴"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-y9qe2MpeyVlCAoUmVuYWwgQ2VsbCBDYXJjaW5vbWEpLm1k
  - MDUg7Iug7J6lL-2YiOuHqC5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 지속되는 옆구리 통증과 혈뇨로 내원했다. 혈색소는 19.5 g/dL이고 CT에서 왼쪽 신장 실질에서 자란 큰 고형 종괴가 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 신우 요로상피암
B. 신장 혈관근지방종
C. 신세포암
D. 다낭신장병

## 해설

신장 실질에서 자란 고형 종괴에 혈뇨가 있으면 신세포암을 의심한다. 일부는 에리트로포이에틴 분비로 적혈구증가증을 동반할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. RCC의 EPO 관련 적혈구증가증을 없다고 설명한 정반대 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006034
