---
type: qbank
schema_version: 1
id: medqa-us-train-004530
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:027e1a9e6667fdb1770e7f57e02ae70d171e7ef3bde8e8520a7873a6854bc137
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "다발골수종"
  - "골용해성 병변"
  - "고칼슘혈증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: investigation
difficulty: standard
answer: B
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

70세 남성이 수개월간의 피로와 요통으로 내원했다. 가벼운 낙상 뒤 통증이 심해졌으며 허리뼈에 국소 압통이 있다. 혈색소 10.5 g/dL, 혈청 칼슘 11.1 mg/dL이다. 다발골수종이 의심될 때 단클론 단백을 확인할 초기 검사는?

## 선택지

A. 골수 생검
B. 혈청 단백 전기영동
C. 혈청 비타민 D 수치
D. 전립선 생검

## 해설


고령 환자에서 뼈 통증, 빈혈, 고칼슘혈증이 함께 나타나면 다발골수종을 의심한다. 혈청 단백 전기영동은 단클론 단백을 찾는 초기 검사다. 혈청 면역고정과 유리경쇄 등을 함께 평가할 수 있고, 골수 검사는 확진에 쓰인다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004530 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 빈혈·고칼슘·골통의 MM 평가 SPEP B 유지; ALP110을 상승으로, 없는 두개골 그림을 확인한 것처럼 설명한 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004530
