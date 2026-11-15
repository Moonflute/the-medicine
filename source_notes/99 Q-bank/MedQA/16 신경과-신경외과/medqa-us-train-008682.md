---
type: qbank
schema_version: 1
id: medqa-us-train-008682
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b26bf0191f328cc9d517febb19482896ab13ec825590fdedd022b0d3b4a81ac5
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "idiopathic intracranial hypertension"
  - "pseudotumor cerebri"
  - "acetazolamide"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tirnrsJzshLEg65GQ6rCc64K0IOqzoO2YiOyVlSAoSWRpb3BhdGhpYyBJbnRyYWNyYW5pYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

특발 두개내고혈압 환자가 체중 관리와 아세타졸아미드 치료 중이다. 며칠 사이 양쪽 시야가 빠르게 좁아지고 유두부종이 악화됐다. 다음 처치는?

## 선택지

A. 같은 약으로 수개월 더 관찰한다
B. 두통 여부만 묻고 시야 추적을 종료한다
C. 예정된 외래에서 진통제만 추가한다
D. 시기능을 보존할 응급 수술 처치를 전문팀에 즉시 의뢰한다

## 해설

특발 두개내고혈압에서 빠르게 진행하는 시야 손상은 시력 보존이 시급한 상황이다. 약물 반응을 기다리지 않고 뇌척수액 단락술이나 시신경초 개창술 등을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경한 시야손실 IIH의 acetazolamide A 확인. 약물이 모든 증상에 가장 효과적이라는 단정 제거하고 체중·시야 추적 보완.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC6166610/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008682
