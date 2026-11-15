---
type: qbank
schema_version: 1
id: medqa-us-test-001214
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:4c9a237156e52e90c901c0f78d3883f7450753bd515524d87b428da39de833fa
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "본태성 떨림"
  - "작용 떨림"
  - "프로프라놀롤"
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZvZG9wYS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 4년째 양팔을 뻗거나 글씨를 쓸 때 손이 떨린다. 진찰에서 서동이나 경직은 없고, 컵을 들기 어려워 약을 원한다. 천식·서맥·전도 장애는 없다. 적절한 초기 약물은?

## 선택지

A. 프로프라놀롤
B. 레보도파/카비도파
C. 벤즈트로핀
D. 카르바마제핀

## 해설

기능을 방해하는 본태떨림에는 프로프라놀롤을 초기 약물로 사용할 수 있다. 천식, 서맥 또는 전도 이상 등 금기를 확인하고 다른 선택지도 개별화한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. propranolol을 보편적으로 가장 효과적인 치료라고 단정한 과장 수정. 제시된 초기 약물 답 D 유지.
- 공식/학회 근거: https://www.ninds.nih.gov/sites/default/files/2025-05/Tremor.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001214
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3208950/
- https://pubmed.ncbi.nlm.nih.gov/41556478/
