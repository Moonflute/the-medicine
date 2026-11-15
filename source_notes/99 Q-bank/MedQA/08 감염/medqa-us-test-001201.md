---
type: qbank
schema_version: 1
id: medqa-us-test-001201
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:87d9dfe1c438d4fee46386db27b75d46a21754102e2c5623817c2853e0038166
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "우측 심내막염"
  - "삼첨판 심내막염"
  - "정맥주사 약물사용"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

삼첨판 심내막염에 반코마이신을 경험적으로 투여하던 중 혈액배양에서 메티실린 감수성 황색포도알균만 확인됐다. 베타락탐 알레르기는 없다. 적절한 확정 치료는?

## 선택지

A. 반코마이신을 계속한다
B. 세파졸린 정맥 투여로 좁힌다
C. 경구 리팜핀 단독으로 전환한다
D. 반코마이신과 겐타마이신을 병용한다

## 해설


메티실린 감수성 황색포도알균의 심내막염에는 세파졸린이나 항포도알균 페니실린이 우선이다. 베타락탐을 사용할 수 있는 환자에서 경험적으로 투여한 반코마이신을 그대로 유지하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001201 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈액배양 후 주사약물 관련 IE 경험적 B 유지. MSSA까지 언제나 vancomycin 1차라는 해설 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001201
- https://doi.org/10.1093/eurheartj/ehad193
- https://www.idsociety.org/practice-guideline/staphylococcus-aureus-bacteremia/
