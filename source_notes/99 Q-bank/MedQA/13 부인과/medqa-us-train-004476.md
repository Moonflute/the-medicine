---
type: qbank
schema_version: 1
id: medqa-us-train-004476
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:45fbbcdad3c870ddaae6f5b3e229240a6ba974e0778b495c2a7964173a310e8c
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁근종"
  - "근층내 자궁근종"
  - "과다월경"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geq3vOyihSAoVXRlcmluZSBGaWJyb2lkcykubWQ
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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9UcmFuZXhhbWljQWNpZC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 큰 근층내 근종 여러 개로 과다월경과 철결핍빈혈이 있다. 자궁절제술을 선택했으며 수술까지 3개월 남았다. 철분 치료와 함께 출혈과 자궁 크기를 모두 줄일 수 있는 수술 전 치료는?

## 선택지

A. 레보노르게스트렐 자궁내장치 삽입
B. 트라넥삼산 월경기 복용
C. 에스트로겐 단독 복용
D. GnRH 작용제 단기 투여

## 해설

큰 근종으로 자궁이 커져 있으면 수술 전 GnRH 작용제로 자궁 크기와 출혈을 일시적으로 줄일 수 있다. 트라넥삼산은 출혈에는 도움이 되지만 근종 크기를 줄이지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 수술 예정인 근종 환자의 류프로라이드 B 유지. 모든 근종의 최선 영구치료가 아니라 수술 전 빈혈·크기 개선 목적임을 명시.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=60aad237-e1da-4705-cbbb-b3ca79e89ad8

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004476
- https://www.nice.org.uk/guidance/ng88/chapter/Recommendations
