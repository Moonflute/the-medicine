---
type: qbank
schema_version: 1
id: medqa-us-train-003446
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:137bda244308dc64140b749f7d8ead0869cab312740a89433338ec242f88bb1a
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Alzheimer disease"
  - "major neurocognitive disorder"
  - "progressive memory loss"
  - "donepezil"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy4oO2VmOydtOuouCDsuZjrp6QgKEFsemhlaW1lcidzIERpc2Vhc2UpLm1k
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
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Eb25lcGV6aWwubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

77세 여성이 진행하는 기억 저하와 보행 불안정으로 왔다. 엄격한 채식을 오래 했고 큰적혈구빈혈 및 양발 진동·위치감각 저하가 있다. 신경퇴행성 치매로 단정하기 전에 우선 확인할 검사는?

## 선택지

A. 아밀로이드 PET
B. 아포지단백 E 유전자형
C. 혈청 비타민 B12
D. 뇌척수액 타우 단독

## 해설

채식, 큰적혈구빈혈과 후주 감각저하의 조합은 비타민 B12 결핍의 단서다. 결핍 여부를 평가하고 신경 증상이 있으면 교정을 지체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. vegan/PPI/사별등경쟁진단단서누락복원. donepezil을확정적인질병수정제로오해시키지않도록수정.
- 공식/학회 근거: https://www.nia.nih.gov/health/how-alzheimers-disease-treated

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003446
- https://www.nice.org.uk/guidance/ng239/chapter/Recommendations
