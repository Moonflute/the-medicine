---
type: qbank
schema_version: 1
id: medqa-us-train-009077
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5e98dbc2ae4379c573a56d252faf038b7cbe23f46cdf51dd035f98d9f4bcdbbf
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "anticholinergic delirium"
  - "diphenhydramine"
  - "urinary retention"
  - "Delirium"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yErOunnSAoRGVsaXJpdW0pLm1k
difficulty: complex
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

치매가 있는 76세 환자에게 가려움으로 디펜히드라민을 투여했다. 몇 시간 뒤 혼란이 심해지고 입이 마르며 소변을 못 본다. 방광은 크게 팽창했다. 가장 적절한 대응은?

## 선택지

A. 수면을 위해 디펜히드라민을 더 준다
B. 새로 진행한 치매로 보고 다음 날 진료한다
C. 요폐는 별개라며 진정제부터 투여한다
D. 디펜히드라민을 중단하고 요폐를 함께 치료하며 섬망 원인을 평가한다

## 해설


강한 항콜린 작용은 노인에게 섬망, 구강 건조와 요폐를 일으킬 수 있다. 약을 중단하고 요폐를 해소하는 동시에 감염·탈수 등 다른 유발 요인도 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009077
- https://pubmed.ncbi.nlm.nih.gov/37139824/
- https://www.nice.org.uk/guidance/cg103/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 디펜히드라민 항콜린성 섬망·요폐 답 유지. 원문에 없는 구강 건조를 관찰 소견으로 단정하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
