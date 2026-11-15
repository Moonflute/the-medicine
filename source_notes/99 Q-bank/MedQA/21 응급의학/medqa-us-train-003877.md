---
type: qbank
schema_version: 1
id: medqa-us-train-003877
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3d3d0d24c7e2deb1ac173929b08582c7bfb3003a2068b91ddb4efafcff2524df
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "patient confidentiality"
  - "privacy"
  - "disclosure without consent"
  - "surrogate communication"
question_type: ethics
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: C
answer_change_reason: "의사결정 가능 환자의 주 보호자에게 일률적으로 정보 제공을 거부할 이유가 없다. 원문에 있는 사촌의 주 보호자 역할을 복원하고 HHS에 따라 C→A 변경."
---

# MedQA US 임상문제

## 문제

입원한 환자의 사촌이 간병을 돕겠다며 진단명과 검사 결과를 묻는다. 환자는 의사결정능력이 있고 정보 제공에 동의한 기록은 없다. 가장 적절한 대응은?

## 선택지

A. 환자에게 따로 누구에게 어떤 정보를 알려도 되는지 확인한다
B. 간병할 사람이므로 전체 진료기록을 설명한다
C. 사촌이 병명 일부를 알고 있으면 검사 결과도 알려준다
D. 환자 의사와 무관하게 가족에게는 언제나 아무 정보도 줄 수 없다

## 해설

가족이라는 이유만으로 환자의 의료정보를 공개하지 않는다. 환자에게 따로 정보 제공 대상과 범위에 대한 의사를 확인하고 관련 절차를 따른다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 의사결정 가능 환자의 주 보호자에게 일률적으로 정보 제공을 거부할 이유가 없다. 원문에 있는 사촌의 주 보호자 역할을 복원하고 HHS에 따라 C→A 변경.
- 공식/학회 근거: https://www.hhs.gov/hipaa/for-individuals/family-members-friends/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003877
- https://www.law.go.kr/법령/의료법/제19조
