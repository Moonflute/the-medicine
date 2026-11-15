---
type: qbank
schema_version: 1
id: medqa-us-train-008967
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8f2f7d4674c25e84ff895f6e74d7f3183115f82374a2cd40d63f6aea392f575f
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "idiopathic intracranial hypertension"
  - "pseudotumor cerebri"
  - "lumbar puncture"
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

비만한 22세 여성이 3주째 두통과 일시적인 시야 흐림을 호소한다. 안저에서 양측 유두부종이 확인됐다. 뇌 MRI에서 종괴나 폐쇄성 수두증은 없고 MR 정맥조영술에서 정맥동혈전증도 배제됐다. 두개내압과 뇌척수액 성분을 확인할 다음 검사는?

## 선택지

A. 응급 개두술
B. 아세타졸아미드 치료
C. 뇌척수액 단락술
D. 요추천자

## 해설

유두부종이 있을 때 먼저 영상으로 요추천자가 위험해질 수 있는 원인과 뇌정맥동혈전증을 배제한다. 이후 요추천자로 개방압을 정확히 측정하고 뇌척수액 성분을 확인한다. 빈 안장 소견만으로 특발성 두개내고혈압을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안압과 두개내압 혼동 및 비타민 A 복용 중 특발성 확정 오류 교정. LP D는 영상 안전성 확인 후 진단적 개방압 측정 목적.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC6166610/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008967
