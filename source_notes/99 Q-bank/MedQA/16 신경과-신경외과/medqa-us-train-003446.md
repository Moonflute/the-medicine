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
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy4oO2VmOydtOuouCDsuZjrp6QgKEFsemhlaW1lcidzIERpc2Vhc2UpLm1k
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
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Eb25lcGV6aWwubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

77세 여성이 딸과 함께 정기 검진을 받으러 왔다. 2년 전부터 간단한 지시를 잊거나 심부름을 하기 어려워졌고, 최근에는 공과금을 납부하지 못하며 때때로 집으로 가는 길도 잊는다. 최근 남편이 사망하여 때때로 슬프다고 하며 혼자 살고 엄격한 채식(vegan)을 한다. 비만, 고혈압, 판토프라졸로 조절되는 위식도역류질환, 당뇨병의 병력이 있다. 다음 중 이 환자의 증상에 가장 도움이 될 치료는?

## 선택지

A. 도네페질
B. 플루옥세틴과 인지행동치료
C. 비타민 B12 투여와 판토프라졸 중단
D. 중재가 필요하지 않다

## 해설

점진적 기억 저하와 재무·길찾기 등 일상 기능 저하는 알츠하이머병을 포함한 치매를 시사한다. 적절한 평가로 진단한 경우 도네페질(A)은 인지·기능 증상을 완화하는 선택이다. 근본 병리를 치료해 질병 진행을 멈추는 약으로 단정해서는 안 된다. 실제 평가에서는 식이·PPI 관련 B12 결핍, 우울증 등 가역적 원인도 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. vegan/PPI/사별등경쟁진단단서누락복원. donepezil을확정적인질병수정제로오해시키지않도록수정.
- 공식/학회 근거: https://www.nia.nih.gov/health/how-alzheimers-disease-treated

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003446
