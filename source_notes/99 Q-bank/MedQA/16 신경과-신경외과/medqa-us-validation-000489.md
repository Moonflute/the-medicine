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
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvU2FsbWV0ZXJvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 여성이 수년간 점점 악화되는 양손 떨림으로 진료를 받으러 왔다. 컵이나 펜을 들 때 두드러지고 스트레스나 피로로 악화되며 휴식 시에는 손이 가만히 있다. 보행장애, 언어문제, 근력저하는 없다. 천식 악화로 입원한 적이 있어 살메테롤과 플루티카손을 복용한다. 가장 적절한 치료는?

## 선택지

A. 바클로펜
B. 프리미돈
C. 프로프라놀롤
D. 발프로산나트륨

## 해설

동작/자세 시 심해지고 안정 시 소실되는 양측 손 떨림은 본태성 떨림에 맞는다. Primidone(B)과 propranolol은 모두 효과가 입증된 약물이지만, 이 환자는 최근 입원이 필요했던 천식으로 비선택적 베타차단제의 위험이 있어 primidone이 적합하다. Primidone은 항경련제로 phenobarbital 등으로 대사되며 GABA-B 수용체 작용제가 아니다. GABA-B 작용제는 baclofen이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Primidone을 GABA-B 작용제라고 한 오류 교정. Propranolol은 효과가 제한적이라서가 아니라 천식 위험 때문에 피함.
- 공식/학회 근거: https://www.aan.com/Guidelines/home/GetGuidelineContent/493

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000489
