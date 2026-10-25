---
type: qbank
schema_version: 1
id: medqa-us-train-007304
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cf4fa13e267301caaefd18a25b1b0e1b0560bfcfc39e0d221952142e5677ceee
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "당뇨병성 자율신경병증"
  - "신경인성 방광"
  - "범람성 요실금"
question_type: prognosis
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsi6Dqsr3rs5Hspp0gKERpYWJldGljIE5ldXJvcGF0aHkpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

비만, 스텐트 삽입 후 관상동맥질환, 고혈압, 고지혈증, 인슐린 의존성 당뇨병 병력이 있는 76세 여자가 정기검진을 위해 외래에 내원했다. 당뇨병 치료를 잘 따르지 않았고 혈당을 규칙적으로 확인하지 않으며 식사 때 인슐린 투여를 자주 잊는다. 3개월 전 당화혈색소는 14.1%였다. 당뇨병으로 당뇨병성 망막병증과 신경병증이 악화되었다. 임상 양상에 근거할 때 다음 중 어떤 질환이 발생할 위험이 가장 높은가?

## 선택지

A. 복압성 요실금
B. 범람성 요실금
C. 직장 탈출
D. 치질

## 해설

오래 조절되지 않은 당뇨 신경병증은 방광 충만 감각 저하와 배뇨근 수축력 저하를 일으켜 잔뇨·요폐와 범람성 요실금 B를 유발할 수 있다. 이는 방광이 과도하게 수축하는 절박성 요실금의 기전과 다르다. 당뇨 환자 모두에서 한 가지 유형만 생기는 것은 아니나 선지 중 관련 위험이 가장 높은 것은 B이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 당뇨 신경병증에 의한 범람성 요실금을 방광 과민으로 잘못 설명한 기전 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007304
