---
type: qbank
schema_version: 1
id: medqa-us-train-002086
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:986f97f7e1a09dddd01d943ccca83e0b30b89fd5dde8000ea2ba48038c341763
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "dementia with Lewy bodies"
  - "alpha-synuclein"
  - "visual hallucinations"
  - "parkinsonism"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-ugiOu5hCDshozssrQg7LmY66ekIChEZW1lbnRpYSB3aXRoIExld3kgQm9kaWVzKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjIztgqjsiqgg7Kad7ZuE6rWwIChQYXJraW5zb25pc20pLm1k
difficulty: complex
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZvZG9wYS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

루이소체 치매가 있는 81세 환자에게 환시가 있다. 보호자가 예전에 다른 환자에게 처방된 약을 먹여도 되는지 묻는다. 심한 약물 과민 반응과 운동 악화 때문에 특히 피할 약은?

## 선택지

A. 할로페리돌
B. 도네페질
C. 멜라토닌
D. 아세트아미노펜

## 해설

루이소체 치매에서는 강한 도파민 차단 항정신병약에 민감해 심한 경직, 의식 저하가 생길 수 있다. 급성 유발 원인과 약물 필요성을 먼저 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 파킨슨증 발병 10개월 이내의 인지저하·인지 변동·환시는 루이소체 질환 A를 지지한다. 모든 파킨슨 환자의 환각을 동일 원인으로 단정한 해설을 수정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002086
- https://pubmed.ncbi.nlm.nih.gov/28592453/
