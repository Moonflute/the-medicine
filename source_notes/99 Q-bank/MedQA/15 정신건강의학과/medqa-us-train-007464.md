---
type: qbank
schema_version: 1
id: medqa-us-train-007464
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2cf0400cd6e63e69f46cb4f959c84e8da37c4841f638c7df56d2a0c108ffcb28
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "알코올 사용장애"
  - "날트렉손"
  - "알코올 갈망"
  - "알코올 의존"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsgqzsmqkg7J6l7JWgIChBbGNvaG9sIFVzZSBEaXNvcmRlcikubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9OYWx0cmV4b25lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Ub3BpcmFtYXRlLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

알코올 사용장애 환자가 현재 위험한 금단 상태는 아니며 음주량을 줄이고 싶다. 오피오이드 진통제는 사용하지 않고 간기능을 평가해 금기가 없음을 확인했다. 상담과 함께 과음을 줄이기 위한 일차 약은?

## 선택지

A. 디아제팜
B. 아미트립틸린
C. 가바펜틴을 우선 단독 투여
D. 날트렉손

## 해설


날트렉손은 알코올 사용장애에서 과음과 갈망을 줄이는 일차 선택 중 하나다. 시작 전 오피오이드 사용이나 금단 여부와 간 상태를 확인한다. 급성 알코올 금단을 치료하는 약은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007464
- https://pubmed.ncbi.nlm.nih.gov/37844924/
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f821dd49-3fa7-4d33-99de-19023ff1ae65

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영한 본문·모든 선지·답·해설 확인. 위험 음주·기능 영향이 있는 알코올 사용장애 치료의 일부로 날트렉손 선택 적절; 급성 금단 치료와는 다름.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
