---
type: qbank
schema_version: 1
id: medqa-us-train-002974
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16efbd56a5e7ec20e485daf930019f404101eccb289655c0568f90c01b19cfd4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "multiple myeloma"
  - "rouleaux formation"
  - "hypercalcemia"
  - "monoclonal gammopathy"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

75세 남성이 지속되는 허리 통증으로 내원했다. 통증은 하루 종일 일정하고 일상활동을 할 때 피로가 심해졌다. 평소 식단을 유지하고 운동을 덜 했는데도 지난 한 달 동안 체중이 10파운드 이상 감소했다. 진찰에서 오른쪽 흉골연의 수축기 잡음, 양측 폐기저부의 경미한 수포음, 요추 압통이 있다. 혈청 칼슘은 12.8 mg/dL이고 크레아티닌은 1.6 mg/dL이다. 말초혈액도말검사를 시행할 때 다음 중 가장 가능성 높은 소견은?

## 선택지

A. 비정형 림프구
B. 연전 형성
C. 분열적혈구
D. 표적세포

## 해설


다발성 골수종 환자에서 고칼슘혈증과 신장 기능 저하가 동반되며, 말초혈액 도말에서 연전(rouleaux) 형성이 흔히 관찰된다. 다른 소견은 해당 질환과 관련이 적다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002974 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고령의 지속 골통·고칼슘혈증·신기능저하가 시사하는 MM에서 rouleaux B가 기대된다는 형태학 문항을 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002974
