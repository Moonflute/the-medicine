---
type: qbank
schema_version: 1
id: medqa-us-train-003950
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:047dedf67f72e0ef31cc0bc991cde7beebb7968e03f2310d59a1257d08f476e9
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "essential tremor"
  - "familial tremor"
  - "postural tremor"
  - "primidone"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rs7jtg5zshLEg65ao66a8IChFc3NlbnRpYWwgdHJlbW9yKS5tZA
difficulty: complex
answer: B
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 여성이 수년간 양손의 떨림으로 내원했다. 최근 7개월간 악화되어 커피를 쏟거나 접수 업무 중 타이핑하기 어렵다. 양손을 뻗었을 때 리드미컬한 떨림이 증가하고, 가족력으로 아버지도 머리 떨림이 있었다. 갑상샘 증상은 없고 기관지천식이 잘 조절되고 있다. 다음 중 가장 적절한 관리는?

## 선택지

A. 클로나제팜
B. 프리미돈
C. 프로프라놀롤
D. 안심시키기

## 해설

본태성 떨림은 프로프라놀롤 또는 프리미돈으로 치료할 수 있다. 이 환자는 기관지천식이 있어 비선택적 베타차단제 프로프라놀롤을 피하고 프리미돈(B)을 선택한다. 경증이라서만 선택하는 약이 아니며, 실제로 원문에는 커피를 쏟고 업무 중 타이핑이 힘들 정도의 기능장애가 있다. 어지럼·졸림 등을 고려하여 개별 적용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. primidone선택을경증/환자선호창작으로설명한오류수정. 천식으로propranolol회피하는핵심기전과기능장애복원.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1f0f5fb3-5292-4d04-b590-3c90a663eec8&type=display
- 공식/학회 근거: https://www.ninds.nih.gov/sites/default/files/2025-05/Tremor.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003950
