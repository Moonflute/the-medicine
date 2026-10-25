---
type: qbank
schema_version: 1
id: medqa-us-test-001242
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:3764b089e243a3362be5ea96cb0dd08991e8e1e54e9f0c53ed915c07f8a5d7e9
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "골다공증"
  - "랄록시펜"
  - "심부정맥혈전증"
question_type: prognosis
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9SYWxveGlmZW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

무증상 65세 여성이 골밀도검사에서 T점수 -2.6을 보였다. 골흡수를 막고 유방암 위험을 줄이는 약물치료를 시작했다. 이 약물이 증가시키는 이상반응은?

## 선택지

A. 피부 감염
B. 골육종
C. 고콜레스테롤혈증
D. 심부정맥혈전증

## 해설

랄록시펜은 뼈에서 에스트로겐 작용을 통해 골흡수를 억제하고 유방에서는 길항해 침윤성 유방암 위험을 낮춘다. VTE/DVT(D) 위험을 증가시킬 수 있어 과거 VTE 환자에는 금기이다. 모든 조직에서 에스트로겐을 차단하기 때문에 혈전이 생긴다는 설명이나 DVT가 가장 흔한 부작용이라는 표현은 부적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: SERM의 조직선택 작용 및 혈전 위험 기전 교정.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e2967d3c-238c-40cf-b3d8-89482a502928

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001242
