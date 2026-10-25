---
type: qbank
schema_version: 1
id: medqa-us-train-001639
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:460df54a7656f0090e536c53c1b6a9d0866c79f4ac2e6f3d541acb282da422ab
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "autoimmune hemolytic anemia"
  - "type II hypersensitivity"
  - "hemolysis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yekOqwgOuptOyXrSDsmqntmIjshLEg67mI7ZiIIChBdXRvaW1tdW5lIEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: mechanism
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

55세 남성이 피로와 운동 시 호흡곤란 병력이 있고 급성 상기도 감염 후 급성진료소에 내원했다. 맥박은 강하고 안색이 매우 창백하며 공막 황달이 보인다. 비장이 중등도로 커져 있고 휴식 시 산소포화도는 79%로 비재호흡 마스크 9 L의 산소가 새로 필요하다. 헤모글로빈은 6.8 g/dL이다. 다음 중 이 상태가 나타내는 과민반응 유형은 무엇인가?

## 선택지

A. I형 아나필락시스 과민반응
B. II형 세포독성 과민반응
C. III형 면역복합체 매개 과민반응
D. II형과 III형이 혼합된 세포독성·면역복합체 과민반응

## 해설


빈혈·황달·비장비대와 감염 후 발생이라는 맥락에서 자가면역 용혈빈혈을 가정하면 적혈구 표면 항원에 대한 항체와 보체/대식세포 매개 제거는 II형 과민반응(B)에 해당한다. 항체가 혈색소 자체에 강하게 결합하는 기전이 아니다. 다만 본문에는 망상적혈구·haptoglobin·직접항글로불린검사 결과가 없으므로 실제 자가면역 용혈 확진이나 warm/cold 유형까지 결정하지 않는다. 심한 저산소혈증은 빈혈만으로 단순 설명하지 말고 별도 원인을 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001639 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈색소 결합 항체라는 잘못된 표적을 적혈구 표면 항원으로 교정하고 검사 미제시의 한계를 명시했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001639
