---
type: qbank
schema_version: 1
id: medqa-us-train-005768
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7cf44697c43966d40eef6b2845029876a1880688e90abf40f54c20e0560d7e75
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "황산마그네슘 독성"
  - "자간증 치료"
  - "호흡억제"
  - "Magnesium sulfate toxicity"
question_type: management
related_disease_slugs: []
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

자간증 예방을 위해 황산마그네슘을 투여받던 산모가 심하게 졸려 하며 호흡수가 분당 6회로 줄고 심부건반사가 사라졌다. 주입을 중단하고 환기를 보조한다. 추가로 즉시 투여할 해독 치료는?

## 선택지

A. 정맥 추가 황산마그네슘
B. 정맥 항응고제
C. 정맥 옥시토신
D. 정맥 글루콘산칼슘

## 해설

호흡 억제와 심부건반사 소실은 황산마그네슘 독성 징후다. 주입을 멈추고 환기를 보조하며 정맥 글루콘산칼슘으로 마그네슘의 작용에 대응한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 마그네슘 중독에서 약물 중단 외 필수 호흡지지·칼슘 해독 보강.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/019316s024lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005768
- https://rightdecisions.scot.nhs.uk/ggc-clinical-guidelines/maternity/common-obstetric-problems-intrapartum-labour-ward/hypertension-eclampsia-management-402/
