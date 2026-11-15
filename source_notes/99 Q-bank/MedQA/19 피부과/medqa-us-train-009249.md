---
type: qbank
schema_version: 1
id: medqa-us-train-009249
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3cd3171d324b0a14d1c3cc6f450da55b46a25debd6b561322caad0f3135aac5a
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "seborrheic keratosis"
  - "지루각화증"
  - "benign skin lesion"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yVheyEsSDtnZHsg4nsooUgKE1hbGlnbmFudCBNZWxhbm9tYSkubWQ
difficulty: complex
answer: C
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남성이 목과 허리의 통증 없는 갈색 구진으로 내원했다. 병변은 여러 개이고 표면이 밀랍 같으며 피부에 붙여 놓은 듯 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 흑자 악성종
B. 기저세포암
C. 지루각화증
D. 피부섬유종

## 해설

여러 개의 경계가 뚜렷하고 밀랍처럼 보이는 붙인 듯한 구진은 지루각화증의 전형적인 형태다. 색이나 모양이 비전형적으로 변하면 피부경이나 조직검사로 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 지루각화증 C를 유지하되 다른 선지는 색소침착을 설명하지 못한다는 잘못된 감별을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009249
