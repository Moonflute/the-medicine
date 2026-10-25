---
type: qbank
schema_version: 1
id: medqa-us-train-006116
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4f310d0486e56cd7357624abe8e336908d8994c1eb54f85268c236426235281
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "전립선암"
  - "전립선 결절"
  - "경직장 초음파 유도 생검"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 야간뇨와 약한 소변줄기로 내원했다. 1년 전 시작되어 지난 6개월 동안 악화되었고 이제 매일 밤 3~5회 소변을 본다. 고혈압으로 히드로클로로티아지드와 리시노프릴을 복용하며 30년 동안 하루 반 갑씩 흡연했다. 직장수지검사에서 전반적으로 커진 전립선과 우측 후엽의 단단한 결절이 만져진다. 소변검사는 정상이고 PSA는 6.5 ng/mL(정상 0~4)이다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 방광경검사
B. 1년 후 PSA 재검
C. 경직장 초음파 유도 전립선 생검
D. 복부 및 골반 CT

## 해설

고형 전립선 결절과 PSA 상승은 전립선암의 조직학적 평가를 고려할 근거여서 네 선지 중 C가 가장 적절하다. PSA만 추적하며 1년 기다리거나 방광경·복부 CT로 확진하려는 것은 맞지 않는다. 다만 실제 진료에서는 생검 전 전립선 MRI와 위험도 평가를 시행하고 표적·체계적 채취 및 경회음부/경직장 경로를 계획한다. EAU는 장기 내 국한 의심에서 MRI 선행을 권고하며 AUA는 초기 생검 전 MRI를 선택적으로 사용할 수 있고 두 생검 경로를 허용하므로, 이 선지는 모든 진료 환경의 전체 검사 순서를 뜻하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 조직진단 C는 유지하되 MRI 전 평가와 생검 경로 선택의 현행 차이를 명시하여 무조건 즉시 TRUS만 해야 한다는 설명을 정리.
- 공식/학회 근거: https://uroweb.org/guidelines/prostate-cancer/chapter/diagnostic-evaluation
- 공식/학회 근거: https://www.auanet.org/documents/Guidelines/PDF/Early%20Detection%20Prostate%20Cancer/EDPC%20Unabridged%20FINAL.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006116
