---
type: qbank
schema_version: 1
id: medqa-us-train-008245
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1c77bff8923feb89f62b9ccccda5e0524a514972d6f0935e803064c5bbc2f598
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "multiple myeloma"
  - "plasma cell dyscrasia"
  - "hypercalcemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: diagnosis
difficulty: complex
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

정기검사에서 IgG 단클론 단백이 3.2g/dL이고 골수의 클론성 형질세포는 18%다. 고칼슘혈증, 신손상, 빈혈과 골용해 병변은 없다. 유리경쇄 비와 MRI에서도 골수종 정의 사건은 없다. 현재 진단은?

## 선택지

A. 의미불명 단클론 감마병증
B. 무증상 다발골수종
C. 활동성 다발골수종
D. 발덴스트룀 거대글로불린혈증

## 해설


골수 클론성 형질세포가 10% 이상 60% 미만이거나 단클론 단백이 기준 이상이지만 골수종 정의 사건이 없으면 무증상 다발골수종에 부합한다. 진행 위험을 따로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008245 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골통·체중감소·빈혈·신기능/칼슘 이상에서 plasma cell dyscrasia D가 기계적 통증보다 부합함을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008245
- https://www.myeloma.org/international-myeloma-working-group-imwg-criteria-diagnosis-multiple-myeloma
- https://www.nature.com/articles/s41571-025-01041-x
