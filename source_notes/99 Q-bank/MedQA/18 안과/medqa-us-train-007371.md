---
type: qbank
schema_version: 1
id: medqa-us-train-007371
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1df34e671a983e2be2d94b9b15c59c57853a302426005f320b26822e572cea5
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "마르팡 증후군"
  - "수정체 상방 아탈구"
  - "FBN1 유전자"
  - "15번 염색체"
question_type: investigation
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uniOultO2MoSDspp3tm4TqtbAgKE1hcmZhbiBTeW5kcm9tZSkubWQ
difficulty: standard
answer: C
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

16세 환자가 수정체가 위가쪽으로 아탈구돼 검사받았다. 키와 팔이 길고 척추측만이 있어 마르팡증후군을 평가 중이다. 시력 교정과 별개로 놓치면 안 될 초기 검사는?

## 선택지

A. 뇌파검사
B. 경동맥 초음파
C. 대동맥 뿌리를 보는 심장초음파
D. 상부위장관 내시경

## 해설

마르팡증후군에서는 수정체 아탈구를 평가하는 동시에 대동맥 뿌리 확장을 확인한다. 확장 여부와 진행 속도에 맞춰 심장영상 추적을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 마르팡의 유전자/단백질 오기와 수정체가 눈꺼풀 위로 탈구된다는 해부학 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007371
- https://doi.org/10.1161/CIR.0000000000001106
