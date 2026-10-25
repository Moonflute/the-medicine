---
type: qbank
schema_version: 1
id: medqa-us-train-002563
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:694ec11ca64d1ae020287f8616c9695a0a236ccaeb8f2ec91bba45ecb3b5580d
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "benign prostatic hyperplasia"
  - "postrenal obstruction"
  - "hydronephrosis"
  - "renal ultrasound"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yWkeyEsSDsoITrpr3sg5gg67mE64yA7KadIChCZW5pZ24gUHJvc3RhdGljIEh5cGVycGxhc2lhKS5tZA
  - MjAg67mE64eo6riw6rO8L-yalOuhnCDtj5Dsg4kgKFVyaW5hcnkgdHJhY3Qgb2JzdHJ1Y3Rpb24pLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 1주간 피로와 오심으로 내원했다. 6개월간 밤에 두 번씩 소변을 보러 일어나고 가끔 배뇨통이 있다. 직장검사에서 대칭적으로 커지고 매끈한 전립선이 만져진다. 혈청 크레아티닌은 1.9 mg/dL, PSA는 2.1 ng/mL이고 소변에는 단백 1+가 있으나 혈뇨나 적혈구 원주는 없다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 복부 및 골반 CT
B. 경직장 초음파
C. 신장 초음파
D. 요관 스텐트 삽입

## 해설

LUTS와 커진 전립선, 크레아티닌 상승이 있어 폐색성 신병증 가능성을 평가한다. C, 신장 초음파는 수신증 등 상부요로 확장을 확인하는 적절한 초기 영상이다. 단백뇨만으로 폐색 원인이 확정되지는 않고 감염·발열 소견이 없어 신우신염이라고 부를 근거도 없다. 확인 없이 요관 스텐트를 바로 삽입하는 것보다 폐색 여부와 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 신장 초음파 C의 평가 대상을 존재하지 않는 수신성 신우신염이 아니라 수신증/폐색으로 교정.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg97/chapter/recommendations
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng148/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002563
