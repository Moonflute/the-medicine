---
type: qbank
schema_version: 1
id: medqa-us-train-003266
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7681e2096c45bfa308a7a67f154f3313cdca2c6c8b23507094887df088bccbaf
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "acute angle-closure glaucoma"
  - "elevated intraocular pressure"
  - "mid-dilated fixed pupil"
  - "timolol"
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

56세 여성이 한 시간 전 시작된 중등도 오른쪽 눈 통증, 두통, 흐린 시야로 응급실에 왔다. 빛 주위에 색깔 있는 고리가 보이고 오른쪽 동공은 중간 정도로 확장되어 빛에 반응하지 않으며 안구가 단단하고 안압은 36 mmHg이다. 다음 중 가장 적절한 응급 치료는?

## 선택지

A. 티몰롤 점안액
B. 에피네프린 점안액
C. 레이저 주변홍채절개술
D. NSAID 점안액

## 해설

급성 폐쇄각 발작에서는 신속한 안압 하강이 필요하다. 제시된 선택지 중 A, timolol 점안은 방수 생성을 줄여 초기 안압 하강에 사용할 수 있다. 실제로는 안압·금기와 중증도에 따라 다른 약제를 병용하며 이후 원인에 맞는 레이저 주변홍채절개술 등 확정 치료를 신속히 시행한다. C가 불필요하거나 모든 약제보다 항상 timolol 하나가 우월하다는 뜻은 아니다. 점안 beta 차단제도 천식·서맥·방실차단 등의 금기를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Timolol A의 응급 안압 하강 역할은 유지하되 laser iridotomy가 부적절하다는 오해를 제거.
- 공식/학회 근거: https://www.aao.org/education/preferred-practice-pattern/primary-angle-closure-disease-ppp
- 공식/학회 근거: https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/020963s015lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003266
