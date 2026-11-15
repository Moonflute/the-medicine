---
type: qbank
schema_version: 1
id: medqa-us-validation-000377
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e56543f1d62ceabc413b767cd815b94160fd992b6ab971cad8374b128ee6c5ed
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "메니에르병"
  - "변동성 감각신경성 난청"
  - "현훈"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uplOuLiOyXkOultOuzkSAoTWVuaWVyZSdzIGRpc2Vhc2UpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 환자가 30분~2시간 지속되는 현훈을 여러 차례 겪었다. 발작 때 오른쪽 귀가 먹먹하고 이명이 생기며 청력검사에서 오른쪽 저주파 감각신경성 난청이 확인됐다. 가장 가능성 높은 진단은?

## 선택지

A. 메니에르병
B. 후반고리관 이석증
C. 전정신경염
D. 중이 삼출

## 해설

20분 이상 지속되는 반복 현훈과 같은 쪽 변동성 청력저하·이명·충만감의 조합은 메니에르병에 맞는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 해설의 Weber 오른쪽 우세를 본문의 왼쪽 우세로 교정하고 오른쪽 감각신경성 난청과 연결.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000377
- https://pubmed.ncbi.nlm.nih.gov/32267799/
