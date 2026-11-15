---
type: qbank
schema_version: 1
id: medqa-us-train-007722
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:07f7f77c953d72f4e13f5ec96f1585b9e439a10b8a6f5cc3472e78af03d49ec9
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "benign prostatic hyperplasia"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yWkeyEsSDsoITrpr3sg5gg67mE64yA7KadIChCZW5pZ24gUHJvc3RhdGljIEh5cGVycGxhc2lhKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNiDruYTrh6jCt-yLoOyepS9GaW5hc3RlcmlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남성이 약한 소변줄기와 배뇨 시작 곤란으로 잠과 일상에 지장이 있다. 전립선은 매끈하며 경미하게 커져 있다. 요검사는 정상이고 요폐는 없다. 비교적 빠른 증상 완화를 위해 사용할 약은?

## 선택지

A. 피나스테리드
B. 옥시부티닌 단독
C. 푸로세미드
D. 탐스로신

## 해설

알파1 차단제는 방광목과 전립선 평활근 긴장을 줄여 배뇨 증상을 비교적 빠르게 완화한다. 피나스테리드의 효과는 수개월에 걸쳐 나타나며 크게 커진 전립선의 진행 예방에 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 괴로운 LUTS를 경증으로 단정한 설명을 교정하고 alpha blocker의 빠른 완화 및 부작용을 명시.
- 공식/학회 근거: https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007722
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4778754/
