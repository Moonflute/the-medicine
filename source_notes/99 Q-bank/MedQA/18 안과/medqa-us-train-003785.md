---
type: qbank
schema_version: 1
id: medqa-us-train-003785
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:41f0bf7dc560ce92150033a0f2b411c9a96ab3afd62abc914aac5df97b2514a5
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "acute angle-closure glaucoma"
  - "increased intraocular pressure"
  - "fixed mid-dilated pupil"
  - "intravenous acetazolamide"
  - "Acute angle-closure glaucoma"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-uFueuCtOyepSAoZ2xhdWNvbWEpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 환자에게 갑작스러운 눈 통증, 각막부종과 고정된 중간산동이 있다. 안압은 48 mmHg이고 급성 동공차단성 폐쇄각 발작으로 판단했다. 응급 안과 처치를 준비하며 할 초기 치료는?

## 선택지

A. 국소 스테로이드만 투여한다
B. 망막 레이저 치료를 먼저 한다
C. 아세타졸아미드와 적절한 점안 안압하강제로 신속히 안압을 낮춘다
D. 산동제를 먼저 투여해 각막이 맑아지기를 기다린다

## 해설

급성 폐쇄각 발작은 안압을 즉시 낮춰야 한다. 전신·점안 약의 금기를 확인하고 사용할 수 있는 약을 병용한 뒤 동공차단을 해소한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Acetazolamide A를 초기 약제로 유지하면서 단독 최효과 약이라는 과장을 교정하고 확정 치료와 구분.
- 공식/학회 근거: https://www.aao.org/education/preferred-practice-pattern/primary-angle-closure-disease-ppp

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003785
- https://pubmed.ncbi.nlm.nih.gov/41665581/
