---
type: qbank
schema_version: 1
id: medqa-us-train-004204
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:99f02a09c72f7d4dcbaa5c9b22a47405a92a12a06147b87fdd3bd5427ef2b917
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "긴장성 기흉"
  - "관통성 흉부 외상"
  - "침 흉강절개술"
question_type: 임상증례 객관식
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4tOyepeyEsSDquLDtnYkgKFRlbnNpb24gUG5ldW1vdGhvcmF4KS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GZW50YW55bC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여군이 시리아 파병 중 왼쪽 흉부에 총상을 입었다. 총격을 피해 농가로 몸을 숨긴 뒤 전투 의무병이 일차평가를 시행했다. 자발호흡 중이었으나 부상 2분 후 심한 호흡곤란이 발생했다. 초조하고 빈호흡이 있으며 왼쪽 제2늑골 중간쇄골선에 입구, 제4늑골 중간액와선에 출구가 있다. 왼쪽 흉벽에 염발음이 있다. 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 기관내 삽관
B. 펜타닐 정맥 투여
C. 흉부 초음파
D. 침 흉강절개술

## 해설

관통 흉부손상 후 급격한 심한 호흡곤란·초조는 전투현장에서 긴장성 기흉을 우려하게 한다. 보기 중 즉각 바늘 흉강감압(D)을 시행하는 것이 적합하다. 바늘감압은 흉관삽입과 다른 술기이며 이후 재평가와 확정 배액이 필요할 수 있다. 본문에 없는 호흡음이나 타진 소견을 실제로 관찰한 것처럼 추가해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Needle thoracostomy와 흉관 삽입을 같은 술기로 설명한 오류 및 없는 청진 소견 제거.
- 공식/학회 근거: https://jts.health.mil/assets/docs/cpgs/US_Army_Aeromedical_Evacuation_Standard_Medical_Operating_Guidelines_26NOV2025.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004204
