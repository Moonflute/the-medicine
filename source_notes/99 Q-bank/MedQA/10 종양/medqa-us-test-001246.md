---
type: qbank
schema_version: 1
id: medqa-us-test-001246
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0327cc37269104f30fbf27bcc3b14a33e1d57970fe61c35cfe34bd4fb561fe8e
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "악성 중피종"
  - "석면 노출"
  - "삼출성 흉수"
  - "Malignant mesothelioma"
related_disease_slugs:
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
question_type: diagnosis
difficulty: complex
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

79세 여성이 2개월간 마른기침, 피로, 체중 4.5 kg 감소, 경미한 운동 시 호흡곤란으로 진료를 받으러 왔다. 심부전과 고혈압이 있고 3개월 전 인도에 다녀왔으며 50년간 섬유공장에서 일했다. 47갑년 흡연력이 있고 오른쪽 흉부 X선에서 결절성 흉막 병변과 중등도 흉수가 보였다. 흉수는 탁하고 단백질 3.8 g/dL, LDH 248 U/L였다. 가장 가능성 높은 원인은?

## 선택지

A. 기관지 선암
B. 중피종
C. 신증후군
D. 울혈성 심부전

## 해설


흉막 결절과 흉수는 중피종(B)을 시사하며 오래된 섬유산업 직업력은 석면 노출 가능성을 확인할 단서이다. 그러나 본문만으로 석면 노출을 입증하거나 선암이 흉막 전이를 하지 않는다고 단정하지 않는다. 확진에는 적절한 조직 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001246 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 흉막 결절·삼출과 장기 섬유산업 노출의 mesothelioma B 유지. 원문에서 석면이 직접 확인된 것처럼 단정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001246
