---
type: qbank
schema_version: 1
id: medqa-us-test-000379
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:896a4a57bcdc6a135d2e9ebe7bbe04e304e082b044cdb4fb6aa9eb0f9502cf9e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "유문부 폐쇄"
  - "소화성 궤양"
  - "위출구 폐쇄"
  - "Gastric outlet obstruction"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 남성이 조기 포만감과 전날 먹은 음식물이 섞인 비담즙성 구토를 반복한다. CT에서 위가 크게 팽창하고 유문부 통과가 막혀 있지만 자유공기는 없다. 구토가 계속되고 점막이 마른 환자에서 첫 처치는?

## 선택지

A. 금식, 정맥 수액·전해질 보정과 비위관 감압
B. 경구 수분 보충과 위장관 운동촉진제
C. 감압 없이 바로 유문부 풍선확장술
D. 병변 평가 없이 응급 위절제술

## 해설

위출구 폐쇄로 구토와 위 팽창이 지속되면 금식과 비위관 감압으로 흡인 위험을 줄이고 수액·전해질을 보정한다. 이후 내시경 등으로 위치와 양성·악성 원인을 평가해 치료를 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 위전이라는 오기 제거 및 소화성 궤양 관련 유문·십이지장 구부 염증/부종에 의한 위출구 폐쇄로 구체화.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000379
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13496030/
