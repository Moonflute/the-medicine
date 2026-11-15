---
type: qbank
schema_version: 1
id: medqa-us-validation-000489
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:24fb7e6db47d8038396feda9f9fa17b9b154f8de0f905bcc9ca86d137d8f7545
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "본태성 떨림"
  - "활동성 떨림"
  - "프리미돈"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rs7jtg5zshLEg65ao66a8IChFc3NlbnRpYWwgdHJlbW9yKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvU2FsbWV0ZXJvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

본태떨림이 있는 51세 환자가 손 떨림 때문에 글을 쓰기 어렵다. 최근 입원할 만큼 천식이 악화됐다. 프로프라놀롤을 피해야 하는 이 환자에서 근거가 있는 대안은?

## 선택지

A. 프리미돈
B. 레보도파/카비도파
C. 바클로펜
D. 페니토인

## 해설

프로프라놀롤은 비선택적 베타차단제라 천식에서 기관지 수축을 일으킬 수 있다. 프리미돈은 대안이며 시작할 때 졸림과 어지럼에 주의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Primidone을 GABA-B 작용제라고 한 오류 교정. Propranolol은 효과가 제한적이라서가 아니라 천식 위험 때문에 피함.
- 공식/학회 근거: https://www.aan.com/Guidelines/home/GetGuidelineContent/493

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000489
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3208950/
