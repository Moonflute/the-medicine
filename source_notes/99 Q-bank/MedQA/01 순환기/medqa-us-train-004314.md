---
type: qbank
schema_version: 1
id: medqa-us-train-004314
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c55c191eea1901d1af1867c2714dbef8ed9501735f9cc878f0808d695fcfb19e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "환자 개인정보 보호"
  - "HIPAA"
  - "정보 공개 동의"
related_disease_slugs: []
question_type: 임상증례 객관식
difficulty: standard
answer: B
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

54세 남자가 전벽 심근경색으로 응급 관상동맥 스텐트와 재관류술을 받았다. 환자는 아내, 성인 자녀, 사촌에게 자신의 치료와 건강정보를 공개해도 된다고 말했다. 이후 합병증 없이 회복 중이다. 입원 3일째 병실 밖 복도에서 환자의 사촌인 여성이 예후와 경과를 물었다. 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 환자 본인에게 직접 물어보라고 안내
B. 환자의 입원 경과와 예상 예후를 설명
C. HIPAA 환자 비밀보호 규정에 따라 언급을 거부
D. 이 사람에게 정보를 공유해도 되는지 환자에게 확인

## 해설


환자는 사촌이 예후를 물었을 때 환자 본인의 동의 없이 정보를 제공하면 HIPAA 위반이 된다. 환자에게 직접 물어보게 하거나 정보를 제공하기 전에 환자에게 확인을 받아야 한다. 가장 적절한 단계는 환자에게 직접 물어보라고 안내하는 것이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004314
