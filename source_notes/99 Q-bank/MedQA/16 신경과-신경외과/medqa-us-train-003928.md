---
type: qbank
schema_version: 1
id: medqa-us-train-003928
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eec22946c17d8559eaeff153ba87a11f2f3d009fb9ec830570c0b3e4c568d346
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "essential tremor"
  - "postural tremor"
  - "propranolol"
  - "beta-blocker"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rs7jtg5zshLEg65ao66a8IChFc3NlbnRpYWwgdHJlbW9yKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZvZG9wYS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

58세 남성이 건강검진에서 혈압 154/96 mmHg와 손을 뻗거나 글을 쓸 때 나타나는 미세한 떨림으로 내원했다. 안정 시 떨림은 없었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 신경과 의뢰
B. 레보도파 시작
C. 로사르탄 처방
D. 프로프라놀롤 시작

## 해설

식사·글쓰기 때 손이 떨리고 안정 시 떨림이나 다른 파킨슨징후가 없어 본태성 활동성 떨림을 시사한다. 기능을 방해하는 사지 떨림의 1차 약물 중 하나인 프로프라놀롤(D)은 혈압도 낮출 수 있어 주어진 선지 중 적절하다. 다만 짧은 기간의 한쪽 자세떨림만으로 확정하지 않으며 약물·갑상선 등 원인과 다른 신경징후를 평가한다. 천식·서맥 등 금기를 확인하고, 혈압만을 위한 모든 환자에서 베타차단제가 일률적인 1차 약제라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 프로프라놀롤 D는 활동성 떨림을 겨냥한 선택이지 모든 자세떨림·고혈압의 보편적 최선 치료라고 단정하지 않도록 제한했다.
- 공식/학회 근거: https://www.aan.com/Guidelines/home/GetGuidelineContent/493

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003928
