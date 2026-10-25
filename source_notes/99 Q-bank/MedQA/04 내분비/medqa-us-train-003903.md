---
type: qbank
schema_version: 1
id: medqa-us-train-003903
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8274d65d8d23ac3b16d23f44b2564e34a7c2cc663a267c099dcf813b94d7647f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "severe hypercalcemia"
  - "primary hyperparathyroidism"
  - "nephrolithiasis"
  - "calcitonin"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
question_type: management
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

35세 남성이 2주간 복부경련, 구토, 변비, 잦은 배뇨, 간헐적인 다리 통증으로 내원했다. 혈청 PTH가 상승했고 칼슘은 14.2 mg/dL였으며 오른쪽 신장에 여러 결석이 있었다. 다음 중 가장 빠르게 증상을 완화할 치료는?

## 선택지

A. 식이 칼슘 섭취 감소
B. 생리식염수와 정맥 푸로세미드
C. 생리식염수와 정맥 펜타닐
D. 생리식염수와 정맥 칼시토닌

## 해설

Ca14.2mg/dL의 증상성 중증 고칼슘혈증에서는 적절한 등장성 수액으로 혈관내용적을 회복시키고 빠르게 작용하는 calcitonin을 병용하는 D가 선택지 중 적절하다. Calcitonin은 tachyphylaxis로 효과가 단기간이므로 원인치료·지속적인 Ca저하 계획이 필요하다. 통상 SC/IM 제제를 사용하며 일부 허가 제품의 IV infusion은 제품별 지침에 따라야 한다. 모든 calcitonin을 임의 IV bolus로 투여한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문 Ca14.2를 복원하고 급성 hyperCa에서 calcitonin D의 신속·단기효과 및 투여경로 제품차를 명시.
- https://www.ema.europa.eu/en/documents/referral/calcitonins-article-31-referral-annex-iii_en.pdf
- https://asbmr.onlinelibrary.wiley.com/doi/full/10.1002/jbmr.4677

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003903
