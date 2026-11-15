---
type: qbank
schema_version: 1
id: medqa-us-train-008877
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b076b1ae13a30f66d350c70bc73f63a0b43802c8785c4c0fda578b29e371905f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "pernicious anemia"
  - "intrinsic factor deficiency"
  - "gastric carcinoma"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yVheyEsSDruYjtmIggKFBlcm5pY2lvdXMgQW5lbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: D
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

비타민 B12 결핍과 항내인자 항체 양성으로 자가면역 위염에 의한 악성빈혈을 새로 진단했다. 최근 위내시경을 받은 적은 없다. B12를 보충하는 것 외에 할 위 평가로 적절한 것은?

## 선택지

A. 신경 증상이 회복되면 위 평가는 하지 않는다
B. 복부 단순 X선으로 위 점막을 평가한다
C. 종양 표지자만 확인해 위종양을 배제한다
D. 위내시경과 부위별 조직검사로 위축 범위와 동반 병변을 평가한다

## 해설


악성빈혈은 진행된 자가면역 위염의 한 모습이다. 최근 내시경 평가가 없다면 위축 범위와 위암·신경내분비종양 같은 동반 병변을 내시경과 조직검사로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008877 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: B12 저하와 내인자 투여로 교정되는 역사적 Schilling 결과는 악성빈혈/자가면역 위염을 시사하며 위암 위험 D와 연결. 다른 선택지 및 해설 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008877
- https://gastro.org/clinical-guidance/diagnosis-and-management-of-atrophic-gastritis/
- https://www.esge.com/management-of-epithelial-precancerous-conditions-and-early-neoplasia-of-the-stomach-maps-iii-esge-ehmsg-esp-guideline-update-2025
