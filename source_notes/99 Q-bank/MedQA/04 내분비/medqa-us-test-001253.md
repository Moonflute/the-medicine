---
type: qbank
schema_version: 1
id: medqa-us-test-001253
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5995b1c19dd07e10154589b62c16219986abfb8573a6f995769f0669bf34d0ef
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "스타틴 유발 간독성"
  - "트랜스아미나제 상승"
  - "심바스타틴"
  - "Statin-induced liver injury"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rj4XshLEg6rCE7Je8IChUb3hpYyBIZXBhdGl0aXMpLm1k
question_type: mechanism
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고혈압, 고지혈증, 당뇨병이 있는 66세 남성이 기저치보다 높은 간기능검사 결과로 진료를 받으러 왔다. 심바스타틴, 메트포르민, 페노피브레이트, 히드로클로로티아지드, 아스피린, 글리부라이드, 리시노프릴을 복용한다. 이 중 트랜스아미나제 상승에 기여할 수 있는 약물은?

## 선택지

A. 메트포르민
B. 심바스타틴
C. 글리부라이드
D. 리시노프릴

## 해설

제시된 보기 중 심바스타틴(B)은 혈청 트랜스아미나제 상승과 관련될 수 있다. 가벼운 무증상 효소 상승이 곧 중증 간독성을 의미하지는 않으며, 실제 평가에서는 동시 복용 페노피브레이트와 다른 간질환 원인, 증상 및 상승 정도도 확인한다. 메트포르민은 신장으로 배설되어 신기능 저하에서 축적될 수 있지만 일반적으로 신장을 직접 손상시키는 약이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. 스타틴 간효소 상승 가능성과 매우 드문 실제 간독성을 구별하고 메트포르민을 신손상 약물처럼 설명한 오류 제거.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=871251c0-36a1-4a32-9eab-ff6c1e925ca9

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001253
