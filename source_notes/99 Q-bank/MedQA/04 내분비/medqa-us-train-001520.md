---
type: qbank
schema_version: 1
id: medqa-us-train-001520
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8dfed2e2fe36ac41cf46aac49b82d519f3fb7a8a0ccc03f6871a46aaab5f3241
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hyperprolactinemia"
  - "galactorrhea"
  - "amenorrhea"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoO2UhOuhnOudve2LtO2YiOymnSAoSHlwZXJwcm9sYWN0aW5lbWlhKS5tZA
  - MTMg67aA7J246rO8L-ustOyblOqyvSAoQW1lbm9ycmhlYSkubWQ
question_type: management
difficulty: simple
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZvZG9wYS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 여성이 3개월간 무월경과 양측 유즙 분비가 있다. 반복 측정한 프로락틴이 148 ng/mL이고 임신·갑상선기능저하·약물 원인은 배제됐다. 뇌하수체 MRI에서 7mm 선종이 보이며 시야 이상은 없다. 일차 약물치료는?

## 선택지

A. 옥트레오타이드
B. 레보티록신
C. 카베르골린
D. 하이드로코르티손

## 해설

증상이 있는 프로락틴 분비 선종에서는 도파민 작용제인 카베르골린을 우선 고려한다. 치료 중 프로락틴과 생식 기능, 필요 시 종양 크기를 추적한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저prolactin 및 비prolactinoma에 cabergoline이라는 반대 설명 교정.
- https://www.nature.com/articles/s41574-023-00886-5

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001520
