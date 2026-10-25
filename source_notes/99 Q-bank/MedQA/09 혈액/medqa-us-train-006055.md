---
type: qbank
schema_version: 1
id: medqa-us-train-006055
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:834f45083039ac67a62f921c1c7cbeb11e72317c808ca74dae3461fb84b98642
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "베타 지중해빈혈 중증형"
  - "소구성 빈혈"
  - "골수외 조혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
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

13개월 여아가 점점 심해지는 복부팽만, 수유곤란 및 성장부전으로 소아과에 왔다. 주산기 병력은 특이하지 않고 가족은 8년 전 수단에서 이민 왔다. 체온은 36.8°C(98.2°F), 혈압은 100/55 mmHg, 맥박은 분당 99회이다. 결막 창백, 간비장비대, 두정골과 전두골 융기가 보인다. 혈색소 8.7 g/dL, MCV 62 μm³, RDW 12.2%, 망상적혈구 2.1%, 백혈구 10,200/mm³, 혈소판 392,000/mm³이다. 말초혈액도말에서 소구성 적혈구, 표적세포 및 많은 유핵 적혈구가 보인다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 알파 지중해빈혈 중증형
B. 포도당-6-인산 탈수소효소 결핍
C. 겸상적혈구병
D. 베타 지중해빈혈 중증형

## 해설


HbF가 감소하는 영아기 이후 심한 소구성 빈혈·간비장비대·성장부전과 전두/두정골 융기는 beta-thalassemia major D에 부합한다. Beta 사슬 부족에 따른 비효율 조혈·용혈과 보상성 골수 확장/골수외 조혈이 핵심이다. HbF는 증가하지만 HbA2는 유전형·수혈 등 조건에 따라 달라 정상으로 일률 고정할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006055 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골수외 혈색소화라는 오류를 골수외 조혈·골수 확장으로 교정; beta-thal major D 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006055
