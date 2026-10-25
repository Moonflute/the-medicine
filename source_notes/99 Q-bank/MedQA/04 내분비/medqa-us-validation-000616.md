---
type: qbank
schema_version: 1
id: medqa-us-validation-000616
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:224b620cee6e47cc9eaa775f78618e05d969aedf76d2823562d9e9a7e6e097f9
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "고삼투성 고혈당 상태"
  - "심한 탈수"
  - "시야 흐림"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOyCvO2IrOyVleyEsSDqs6DtmIjri7kg7IOB7YOcIChISFMpIChIeXBlcm9zbW9sYXIgSHlwZXJnbHljZW1pYyBTdGF0ZSkubWQ
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

비만과 당뇨병 병력이 있는 67세 남성이 피로와 혼란, 다뇨로 응급실에 왔다. 며칠 동안 점점 혼란해졌고 점막이 건조하며 활력징후에서 맥박 160회/분이다. 이 환자에서 함께 나타날 가능성이 높은 소견은?

## 선택지

A. 시야 흐림
B. 수막 자극 징후
C. 발작
D. 떨림

## 해설


정답 A. 당뇨·비만이 있는 고령 환자의 다뇨·탈수와 진행하는 혼란은 심한 고혈당/고삼투 상태를 고려하게 한다. 고혈당에 따른 수정체의 삼투성 변화 등으로 시야가 흐려질 수 있다. 혈당·삼투질농도가 없어 HHS가 이미 확진된 것은 아니며 발작 등 다른 신경학적 합병증도 가능하다. 선택지 중 이 대사상태와 직접적으로 잘 연결되는 것은 시야 흐림이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000616 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 당뇨·비만이 한국어에 누락되어 복원, HHS 의심과 확진 구분/시야 흐림 A 설명.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000616
