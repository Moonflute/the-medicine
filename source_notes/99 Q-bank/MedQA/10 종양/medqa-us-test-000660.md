---
type: qbank
schema_version: 1
id: medqa-us-test-000660
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:dba97e2777c6189a53534ae38d00844200cca236a98145e1b827653f9851581b
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "전립선암"
  - "폐 전이"
  - "악성 폐결절"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
question_type: prognosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

제2형 당뇨병 병력이 있는 64세 남성이 비뇨기과로 의뢰되었다. 4개월 넘게 배뇨통과 배뇨 시작 곤란이 있었고 하루 약 9회, 밤에도 여러 번 소변을 본다. 직장수지검사에서 전립선에 단단한 결절이 여러 개 만져졌고 CT에서 3 cm 크기의 오른쪽 폐결절이 보였다. 방광과 전립선 초음파에서 잔뇨가 200 mL를 초과하고 전립선은 불균질했다. 생검에서 2등급 전립선 선암이 확인되었고 9개월 후 고세렐린으로 잘 조절되었다. 같은 크기의 폐결절을 고려할 때 CT에서 다음 중 어떤 소견이 보이면 결절을 절제할 가능성이 가장 높은가?

## 선택지

A. ‘팝콘’ 모양
B. 부분 고형 성분
C. 방사상으로 뻗는 미세 선조
D. 두 배가 되는 시간이 1개월 미만

## 해설


방사상 미세 선조가 뻗는 가시모양 경계는 악성 폐결절 가능성을 높여 C가 타당하다. 원발 폐암과 전이는 별도로 평가해야 하며 전립선암 병력만으로 전이라고 확정할 수 없다. 절제 여부는 전체 위험도와 병기·수술 적합성을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000660 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 가시모양 경계의 악성 위험 C 유지. 전립선암 병력만으로 폐결절을 전이라고 단정한 해설을 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubs.rsna.org/doi/10.1148/radiol.2017161659

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000660
