---
type: qbank
schema_version: 1
id: medqa-us-train-007080
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f93d4927703414c034d8807caf0819c3a49f172a48339ee0eba14b41069fd97f
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성 폐쇄성 폐질환 급성 악화"
  - "기관지경련"
  - "무스카린 길항제"
  - "이프라트로피움"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: management
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

COPD가 있는 60세 남성의 호흡곤란이 갑자기 심해졌다. 두 폐에서 호기성 천명이 들린다. 조절 산소를 투여하는 중이고 활력은 안정적이다. 악화 초기에 기관지를 신속히 확장하는 흡입 약은?

## 선택지

A. 티오트로피움 단독 흡입
B. 흡입 플루티카손 단독
C. 포르모테롤 단독 흡입
D. 살부타몰을 흡입시키고 필요에 따라 이프라트로피움을 병용

## 해설

COPD 급성 악화에는 속효성 베타₂작용제(살부타몰)가 초기 기관지확장제이며, 속효성 항무스카린제인 이프라트로피움을 추가할 수 있다. 장기작용 유지 흡입제나 흡입 스테로이드 단독은 즉시 기관지확장 치료를 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Muscarinic blocker D는 선택지 중 맞으나 모든α/beta차단제가 COPD금기라는 오류와 중증저산소 단독처치 오용 교정.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007080
- https://new.lungkorea.org/board/guide/view/13792
