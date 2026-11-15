---
type: qbank
schema_version: 1
id: medqa-us-train-002196
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9b21f5dce622856e7a7b6398b31aca3aee0f0cc040aa3a0c70fe8f2ec3215332
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "surgical site infection"
  - "postoperative fever"
  - "wound infection"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-yImOyIoCDtm4Qg67Cc7Je0IChQb3N0b3BlcmF0aXZlIEZldmVyKS5tZA
  - MTEg7Jm46rO8L-ywveyDgSDqsJDsl7wgKFdvdW5kIEluZmVjdGlvbikubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

복강경 수술 4일 뒤 절개 부위가 붉고 눌렀을 때 아프며 고름이 나온다. 발적과 고름은 피부와 피하층에 국한돼 있고 안쪽에는 농양이 없다. 표재 절개부 감염의 기본 처치는?

## 선택지

A. 상처를 더 단단히 봉합한다
B. 필요한 봉합을 풀어 상처를 열고 배농한다
C. 해열제만 처방하고 기다린다
D. 국소 항진균제를 바른다

## 해설

절개창에 고름이 차면 상처를 열어 배농한다. 전신증상이나 주변 염증이 뚜렷하면 필요시 전신 항생제를 병행하고 깊은 감염도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수술 후 4일째의 국소 농성 상처 소견을 48–72시간 발열의 가장 흔한 원인이라는 시간표로 설명한 오류를 수정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002196
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/
