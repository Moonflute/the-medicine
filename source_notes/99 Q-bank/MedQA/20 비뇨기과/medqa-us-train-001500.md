---
type: qbank
schema_version: 1
id: medqa-us-train-001500
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c167359a42a4d5c0b6bc12984765c2b526e550f044e2f30c2e0730ce7aef567e
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "prostate cancer"
  - "elevated PSA"
  - "prostate nodule"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

97세 남성이 응급실에서 요폐를 치료받은 지 5일 후 비뇨기과에 내원했다. 고혈압, 제2형 당뇨병, 뇌졸중, 이상지질혈증, 과거 심근경색 및 오른쪽 고관절의 중증 골관절염 병력이 있다. 약을 잘 복용하지 않고 여러 동반질환이 잘 조절되지 않는다. 병원에서 폴리 카테터로 요폐를 치료했다. 진료실에서 전립선특이항원(PSA)은 6.0 ng/mL(정상 <4 ng/mL)이고 직장수지검사에서 압통이 없으며 돌처럼 단단한 결절이 여러 개 있는 전립선이 만져진다. 폴리 카테터를 제거하자 스스로 소변을 볼 수 있었다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 방광요도경검사
B. 경직장 전립선 생검
C. 안심시킴
D. PSA 재검

## 해설

단단한 결절성 전립선은 암을 의심하게 하지만, 이 환자는 97세이며 여러 중증 동반질환이 조절되지 않아 진단·치료의 위해가 기대 이득보다 클 가능성이 높다. 증상 완화와 환자의 치료 목표를 확인하여 침습적 생검을 자동 진행하지 않는 C가 가장 적절하다. 자발 배뇨 회복이 암을 배제하는 것은 아니다. 이후 불편한 폐색·통증 등은 적극적으로 완화하며 환자의 선호와 기능상태를 함께 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. C를 유지하되 배뇨가 가능해져 암 평가가 필요 없다는 잘못된 이유를 극고령·중증 동반질환·기대여명과 목표 기반 결정으로 교체.
- 공식/학회 근거: https://uroweb.org/guidelines/prostate%25E2%2580%2590cancer/chapter/treatment
- 공식/학회 근거: https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001500
