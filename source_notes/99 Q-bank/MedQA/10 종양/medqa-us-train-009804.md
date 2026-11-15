---
type: qbank
schema_version: 1
id: medqa-us-train-009804
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:29e6e6ffcb5d6adfe308f061c41a17425956996587b444c360dfb5e04d9d6c48
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "신경모세포종"
  - "N-myc"
  - "후종격동 종괴"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug6rK966qo7IS47Y-s7KKFIChOZXVyb2JsYXN0b21hKS5tZA
  - MDIg7Zi47Z2h6riwL-yiheqyqeuPmSDsooXqtLQgKE1lZGlhc3RpbmFsIE1hc3MpLm1k
question_type: monitoring
difficulty: complex
answer: C
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

조직검사로 확인된 신경모세포종의 병기와 위험군을 평가 중이다. 종양에서 MYCN 증폭이 확인됐다. 이 결과를 어떻게 해석하는가?

## 선택지

A. 양성이면 신경모세포종의 원격전이를 확진한다
B. 질환 위험도와 무관해 치료 계획에는 쓰지 않는다
C. 불량한 예후와 관련해 위험군 분류에 반영한다
D. 치료 반응이 좋음을 뜻하므로 추적은 하지 않는다

## 해설


MYCN 증폭은 신경모세포종의 불량 예후 인자다. 병기, 나이와 다른 종양 특성을 함께 평가하며 증폭만으로 전이를 확진하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009804 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 신경모세포종과 MYCN의 연관 A 유지하되 모든 종양에서 MYCN 증폭이 필수라는 일반화 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009804
- https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq
