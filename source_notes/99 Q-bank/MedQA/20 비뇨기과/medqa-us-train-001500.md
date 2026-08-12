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
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
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


PSA 상승과 전립선 결절은 전립선암을 의심하게 하지만, 카테터 제거 후 환자가 정상 배뇨를 하고 증상이 없으며 추가 검사가 필요하지 않다. PSA는 변동성이 크므로 재검보다 현 상황을 관찰하는 것이 적절하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001500
