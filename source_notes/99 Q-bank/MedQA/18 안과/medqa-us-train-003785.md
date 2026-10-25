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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 갑자기 발생한 심한 오른쪽 눈 통증과 시야흐림, 오심으로 응급실에 왔다. 오른쪽 눈은 단단하고 결막이 충혈되었으며 각막이 흐리고 동공은 6 mm로 산대되어 빛에 반응하지 않았다. 다음 중 가장 적절한 초기 치료는?

## 선택지

A. 정맥 아세타졸아미드
B. 망막 광응고술
C. 국소 에피네프린
D. 국소 프레드니솔론

## 해설

심한 안통·오심, 단단한 안구, 각막 혼탁과 고정된 산동은 급성 폐쇄각 발작에 합당하다. 선지 중 A, 정맥 acetazolamide는 방수 생성을 억제하여 초기 안압 하강에 사용할 수 있다. 실제 초기 치료는 금기와 중증도에 따라 국소 안압 하강제 등을 병용하고, 이후 원인에 맞는 주변홍채절개술 등의 확정 치료를 진행한다. 망막 광응고나 국소 steroid 단독으로 안압 응급을 해결할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Acetazolamide A를 초기 약제로 유지하면서 단독 최효과 약이라는 과장을 교정하고 확정 치료와 구분.
- 공식/학회 근거: https://www.aao.org/education/preferred-practice-pattern/primary-angle-closure-disease-ppp

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003785
