---
type: qbank
schema_version: 1
id: medqa-us-train-009872
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:365d2957df7b79ce74f8527d839871df345746a37682c6431861004a2d641c40
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "악성빈혈"
  - "내인자 항체"
  - "자가면역 갑상선염"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yVheyEsSDruYjtmIggKFBlcm5pY2lvdXMgQW5lbWlhKS5tZA
question_type: investigation
difficulty: standard
answer: A
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

51세 백인 여성이 정기 검진을 위해 일차진료의에게 내원했다. 고기와 채소가 균형 잡힌 건강한 식사를 하며 매일 저녁 식사와 함께 와인 한 잔을 마신다고 한다. 전혈구검사와 혈액도말검사에서 혈색소 8.7 g/dL, 헤마토크릿 27%, MCV 111 fL, 대적혈구와 여러 개의 과분엽 호중구가 보인다. 내인자에 대한 자가항체가 있는 자가면역 질환을 의심할 때, 다음 중 어떤 소견이 추가로 나타날 가능성이 가장 높은가?

## 선택지

A. 혈청 TSH 상승
B. 건선
C. 구순염
D. 복부 산통

## 해설


거대적아구성 빈혈과 내인자 항체는 자가면역 위염에 따른 B12 흡수장애, 즉 악성빈혈을 시사한다. 이는 자가면역 갑상선질환과 동반될 수 있어 선택지 중 TSH 상승(A)이 적절하다. 악성빈혈은 적혈구를 항체로 직접 파괴하는 자가면역 용혈성 빈혈과 동일한 질환이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009872 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 내인자 항체 악성빈혈과 자가면역 갑상선질환/TSH↑ A 연결 유지. 악성빈혈을 자가면역 용혈빈혈과 동일시한 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009872
