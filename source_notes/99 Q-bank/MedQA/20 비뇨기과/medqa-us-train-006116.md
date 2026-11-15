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

62세 남성의 직장수지검사에서 전립선 우엽에 단단한 결절이 만져진다. 감염 소견이 없는 상태에서 다시 측정한 PSA는 6.5 ng/mL이다. 처음 조직검사를 계획할 때 표적 병변과 채취 전략을 정하는 데 도움이 되는 검사는?

## 선택지

A. 방광경검사
B. 골반 단순 X선
C. 전립선 다중매개 MRI
D. 전신 뼈스캔

## 해설

전립선암이 의심되면 조직검사 전에 MRI를 시행해 임상적으로 중요한 의심 병변과 표적을 찾을 수 있다. 필요에 따라 표적 생검과 체계적 생검을 조합하며, MRI만으로 조직학적 진단을 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 조직진단 C는 유지하되 MRI 전 평가와 생검 경로 선택의 현행 차이를 명시하여 무조건 즉시 TRUS만 해야 한다는 설명을 정리.
- 공식/학회 근거: https://uroweb.org/guidelines/prostate-cancer/chapter/diagnostic-evaluation
- 공식/학회 근거: https://www.auanet.org/documents/Guidelines/PDF/Early%20Detection%20Prostate%20Cancer/EDPC%20Unabridged%20FINAL.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006116
- 대한비뇨기종양학회 전립선암 진료지침, 선별검사 및 진단: https://www.kuos.or.kr/file/home/data/2023/Chapter1.pdf
