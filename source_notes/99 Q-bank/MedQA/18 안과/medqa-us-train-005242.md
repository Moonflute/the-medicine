---
type: qbank
schema_version: 1
id: medqa-us-train-005242
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e8d342ca80149ea3748cca88c43c3b5a0f8ce564d4edb5bfe43f8699d0dc4970
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "급성 폐쇄각 녹내장"
  - "안압 상승"
  - "에피네프린 금기"
  - "Acute angle-closure glaucoma"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-uFueuCtOyepSAoZ2xhdWNvbWEpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL1RpbW9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

급성 동공차단성 폐쇄각 발작으로 한쪽 눈의 안압을 약물로 낮췄다. 각막이 맑아져 시술이 가능하다. 동공차단을 해소하고 재발을 막는 처치는?

## 선택지

A. 레이저 주변홍채절개술
B. 망막 범광응고술
C. 유리체강내 항혈관내피성장인자 주사
D. 눈물점 폐쇄술

## 해설

동공차단에서는 주변홍채에 통로를 만들어 뒤쪽 방의 압력을 낮출 수 있다. 레이저 주변홍채절개술을 시행할 수 있고 이후 수정체 등 각폐쇄 원인에 맞춰 추가 치료를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 폐쇄각에서 epinephrine B의 산동 위험은 유지하되 점안 timolol이 모든 환자에게 안전하다는 단정 제거.
- 공식/학회 근거: https://www.aao.org/education/preferred-practice-pattern/primary-angle-closure-disease-ppp
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/020963s015lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005242
- https://pubmed.ncbi.nlm.nih.gov/41665581/
- https://www.rcophth.ac.uk/wp-content/uploads/2026/06/Management-of-Angle-Closure-Glaucoma.pdf
