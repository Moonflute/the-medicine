---
type: qbank
schema_version: 1
id: medqa-us-train-005036
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d1f9009136ffcbf8605e1baca12ef17e4aac28b9fe1cb31a2136bd3876d7be24
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "생전유언"
  - "사전의료의향서"
  - "대리 의사결정"
question_type: ethics
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 여자가 집에서 갑자기 넘어져 구급대에 의해 소생술을 받은 뒤 이송되었다. 현재 GCS 6으로 기계환기 중이다. 5년 전 작성한 생전유언에는 모든 심폐소생술, 기관삽관과 기계환기 생명유지치료를 거부한다고 명시되어 있다. 의료 결정에 대한 영구적 대리권을 가진 아들은 환자를 계속 살려 달라고 요청한다. 아들에게 할 가장 적절한 답변은?

## 선택지

A. 환자의 의사에 따라 기계환기를 중단해야 합니다.
B. 추가 관리 결정은 병원 윤리위원회에 회부하겠습니다.
C. 호스피스 치료 대상이 될 수 있습니다.
D. 추가 조치를 위해 주치의의 의견을 받아야 합니다.

## 해설

문서가 유효하고 환자의 현재 상황에 적용되는 치료거부 의사를 반영한다면, 대리인은 자신의 선호보다 환자의 의사를 따라야 하므로 A가 보기 중 맞다. 의사결정능력, 문서의 구체적 조건과 이후 변경 여부를 확인하고 가족에게 설명하며 적절한 완화치료를 제공한다. 단순히 5년 전 작성되었다는 이유로 무효가 되거나, 문서 내용을 확인하지 않고 모든 경우 즉시 환기를 중단한다는 뜻은 아니다. 이견이 지속되면 윤리/법적 지원을 이용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 사전의향의 유효성과 현 상황 적용 여부를 확인하고 환자 의사를 대리인보다 우선하는 A의 근거 보완.
- 공식/학회 근거: https://code-medical-ethics.ama-assn.org/ethics-opinions/advance-directives

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005036
