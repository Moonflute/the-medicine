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

35세 남성이 구토와 혼돈으로 내원했다. 교정 칼슘 14.7 mg/dL, PTH는 상승해 있고 혈압 89/55 mmHg, 점막이 매우 건조하다. 폐울혈은 없다. 혈관 내 용적을 회복하기 위해 즉시 시작할 처치는?

## 선택지

A. 수분 제한
B. 정맥 푸로세미드 단독
C. 경구 수분 섭취만 권고
D. 정맥 0.9% 생리식염수

## 해설

증상성 중증 고칼슘혈증에 혈관 내 용적 감소가 있으므로 등장성 수액으로 먼저 순환을 회복한다. 과부하를 감시하고, 칼슘을 낮추는 추가 치료와 부갑상선 원인 치료를 병행해 계획한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문 Ca14.2를 복원하고 급성 hyperCa에서 calcitonin D의 신속·단기효과 및 투여경로 제품차를 명시.
- https://www.ema.europa.eu/en/documents/referral/calcitonins-article-31-referral-annex-iii_en.pdf
- https://asbmr.onlinelibrary.wiley.com/doi/full/10.1002/jbmr.4677

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003903
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5314807/
