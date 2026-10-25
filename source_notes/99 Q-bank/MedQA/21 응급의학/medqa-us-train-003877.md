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
explanation_status: manual-reviewed
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

폐렴으로 입원한 86세 남성의 사촌이 처음 병원을 방문해 자신이 주 보호자여서 귀가 준비가 필요하다며 예후와 퇴원 예정일을 물었다. 환자는 호전 중이고 며칠 내 퇴원이 가능할 것으로 보인다. 다음 중 가장 적절한 대응은?

## 선택지

A. 사촌을 병실로 데려가 환자에게 경과 공개가 괜찮은지 묻는다
B. 사촌을 병실로 데려가 환자와 사촌 모두에게 계획을 설명한다
C. 현재 환자 치료에 대해 논의할 수 없다고 설명한다
D. 환자 경과를 잘 모른다고 사촌에게 말한다

## 해설

환자의 정보는 환자 의사에 따라 보호하지만, 관련 가족/보호자에게 동의하에 필요한 정보를 공유할 수 있다. 사촌이 주 보호자로 퇴원 준비를 위해 묻고 있으므로 환자에게 공개 허락을 확인하는 A가 가장 적합하다. 사촌이라는 이유나 이전 면회 부재만으로 무조건 거부하지 않는다. 허락 전 상세 정보를 먼저 공개하는 B도 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 의사결정 가능 환자의 주 보호자에게 일률적으로 정보 제공을 거부할 이유가 없다. 원문에 있는 사촌의 주 보호자 역할을 복원하고 HHS에 따라 C→A 변경.
- 공식/학회 근거: https://www.hhs.gov/hipaa/for-individuals/family-members-friends/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003877
