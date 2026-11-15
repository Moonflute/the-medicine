---
type: qbank
schema_version: 1
id: medqa-us-train-009231
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4fb986bdcd25bffea1b410f5b5956749f168e20274077bd8ef4edcd0aa071a8b
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "physiologic changes in pregnancy"
  - "임신의 생리적 변화"
  - "diastolic murmur"
question_type: investigation
related_disease_slugs: []
difficulty: complex
answer: C
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

임신 20주 산모의 진찰에서 심첨부에 뚜렷한 이완기 잡음이 처음 들린다. 이전 심장질환 진단은 없다. 적절한 다음 조치는?

## 선택지

A. 임신 중 혈류 증가만으로 설명하고 추가 검사를 하지 않는다
B. 심잡음이 없어질 때까지 산전진료를 중단한다
C. 심장초음파로 판막 등 구조적 심장질환을 평가한다
D. 분만 뒤까지 어떠한 평가도 하지 않는다

## 해설

임신 중 혈류 증가로 부드러운 수축기 잡음이 들릴 수 있지만, 이완기 잡음을 정상 임신 변화로 단정하지 않는다. 심장초음파로 판막과 심장 기능을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 이완기잡음이정상생리라는반대해설교정. C비정상,다른선지정상임신혈역학.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009231
- https://academic.oup.com/eurheartj/article/46/43/4462/8234487
