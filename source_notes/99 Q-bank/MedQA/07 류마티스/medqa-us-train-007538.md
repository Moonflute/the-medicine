---
type: qbank
schema_version: 1
id: medqa-us-train-007538
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:be996d10b86bbe6a4d0d117b7b92bf0349c73fc89c8de97004aff8668e77f63d
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "건선관절염"
  - "지염"
  - "손톱 오목"
  - "원위지간관절 미란"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-uwmOydkeyEsSDqtIDsoIjsl7wgKFJlYWN0aXZlIEFydGhyaXRpcykubWQ
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

47세 남성이 여러 손가락과 발가락이 통째로 붓고 왼쪽 무릎에 관절염이 생겼다. 두피의 인설성 건선판과 손톱 함몰이 있다. 손 X선에서 원위지간관절 미란과 관절 주위 신생골이 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 류마티스관절염
B. 건선관절염
C. 손 골관절염
D. 반응성 관절염

## 해설


지염, 손톱 건선과 원위지간관절의 침범에 신생골이 동반된 양상은 건선관절염을 지지한다. 단순 비듬만으로 두피 건선을 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007538 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: dactylitis·손톱함몰·DIP 미란과 신생골의 PsA B를 본문·선지·해설과 대조 확인.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007538
- https://doi.org/10.1136/ard-2024-225531
