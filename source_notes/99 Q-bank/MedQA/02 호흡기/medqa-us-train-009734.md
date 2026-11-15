---
type: qbank
schema_version: 1
id: medqa-us-train-009734
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b54797bd1819771423534477c6a248dba83003129d3c62144cb37ef1b8bc249
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "respiratory syncytial virus"
  - "호흡기세포융합바이러스"
  - "bronchiolitis"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6riJ7ISxIOyEuOq4sOq0gOyngOyXvCAoQWN1dGUgQnJvbmNoaW9saXRpcykubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

생후 6개월 영아가 콧물에 이어 첫 천명과 기침이 생겼다. 늑간 함몰은 가볍고 실내 공기 산소포화도는 95%로 유지된다. 분유를 평소처럼 마시고 무호흡은 없다. 세기관지염으로 판단했을 때 적절한 초기 치료는?

## 선택지

A. 항생제를 시작한다
B. 코막힘을 완화하고 수유·수분 상태를 보면서 지지요법을 한다
C. 전신 스테로이드를 일률적으로 투여한다
D. 천명이 있으므로 모든 영아에게 정기 살부타몰 흡입을 시작한다

## 해설


전형적인 영아 세기관지염은 산소화와 수유 상태에 맞춘 지지요법이 기본이다. 산소포화도가 유지되고 수유가 가능하면 약을 일률적으로 쓰지 않는다. 호흡노력 증가, 무호흡이나 수유 저하 시 재평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 6주 영아의 급성 상기도 증상 후 천명·함몰·수유 저하는 세기관지염을 시사하며 대표 병원체는 RSV B.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009734
- https://www.ncbi.nlm.nih.gov/books/NBK622567/
