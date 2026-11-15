---
type: qbank
schema_version: 1
id: medqa-us-train-004049
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ab950a8de3e6619498f61c5266b68ff717423b483cfab7a52d5085a55d3300b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "산후 우울감"
  - "산후 기분 변화"
  - "산후정신병 감별"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yCsO2bhCDsoJXsi6Drs5EgKFBvc3RwYXJ0dW0gcHN5Y2hvc2lzKS5tZA
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

출산 7일 된 산모가 분만 후 사흘째부터 자주 울고 예민해졌지만 오늘은 조금 좋아졌다. 아기 돌봄과 식사는 유지하고, 쉬면 잠들 수 있다. 자살 생각, 망상이나 혼란은 없다. 우선할 조치는?

## 선택지

A. 안전과 경과 평가 없이 즉시 항정신병약을 시작한다
B. 산후 기분 변화는 항상 치료가 필요 없으므로 추적하지 않는다
C. 증상이 며칠 지속된 것만으로 주요우울장애를 확진한다
D. 수면·돌봄 지원을 마련하고 가까운 시일에 경과를 다시 확인한다

## 해설

출산 후 며칠 내 시작한 가벼운 감정 변화는 흔히 2주 안에 가라앉는다. 지원을 제공하고, 지속되거나 기능이 떨어지면 우울증을 평가한다. 망상·혼란 또는 안전 우려가 생기면 즉시 도움을 연결한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004049
- https://pubmed.ncbi.nlm.nih.gov/37486660/
- https://www.nice.org.uk/guidance/cg192/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 산후우울감 원정답 유지. 2주 이내면 무조건 안심만 한다는 인상 대신 기능·안전·정신병 경고소견 재평가 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.acog.org/programs/perinatal-mental-health/summary-of-perinatal-mental-health-conditions
