---
type: qbank
schema_version: 1
id: medqa-us-train-003002
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2aa3e925a43129c3868b17c1d5b2e472b325e2369a2192b606f2a640729e4925
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "ulcerative proctosigmoiditis"
  - "mild ulcerative colitis"
  - "mesalamine"
  - "bloody diarrhea"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shKTsgqwgKERpYXJyaGVhKS5tZA
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

궤양성 대장염이 직장에서 비장만곡부까지 이어진 28세 남성이 경미한 혈변과 절박변을 호소한다. 경구 메살라진을 적절히 복용했지만 부분 반응만 있었고 대변 감염검사는 음성이다. 관해 유도를 위해 우선 추가할 약은?

## 선택지

A. 메살라진 좌약만 추가
B. 메살라진 관장 추가
C. 아자티오프린 단독으로 변경
D. 정맥 고용량 스테로이드 투여

## 해설


좌측 대장염에서는 직장에만 닿는 좌약보다 메살라진 관장이 더 넓은 범위에 도달한다. 이 정도 활성도에서는 경구 메살라진에 관장을 병용할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 직장부터 연속된 경증 UC/직장S상결장염의 mesalamine B는 적절한 5-ASA 치료.
- https://doi.org/10.14309/ajg.0000000000003463

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003002
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13714434/
