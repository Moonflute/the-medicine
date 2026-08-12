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
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

폐렴으로 입원한 86세 남성의 사촌이 처음 병원을 방문해 예후와 퇴원 예정일을 물었다. 환자는 호전 중이고 며칠 내 퇴원이 가능할 것으로 보인다. 다음 중 가장 적절한 대응은?

## 선택지

A. 사촌을 병실로 데려가 환자에게 경과 공개가 괜찮은지 묻는다
B. 사촌을 병실로 데려가 환자와 사촌 모두에게 계획을 설명한다
C. 현재 환자 치료에 대해 논의할 수 없다고 설명한다
D. 환자 경과를 잘 모른다고 사촌에게 말한다

## 해설


환자는 현재 호전 중이며 퇴원 시점은 환자 본인과 가족이 직접 논의해야 하는 사안이다. 환자 동의 없이 치료 정보는 제3자에게 제공할 수 없으므로 사촌에게 현재 치료 내용은 논의할 수 없다고 설명한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003877
