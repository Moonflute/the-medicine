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
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
difficulty: complex
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9SYWxveGlmZW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 폐경 여성이 DXA에서 골다공증을 진단받았다. 과거 심부정맥혈전증이 있으며 신기능과 혈중 칼슘은 정상이다. 골다공증 치료를 검토할 때 혈전 병력 때문에 피해야 할 약은?

## 선택지

A. 알렌드로네이트
B. 리세드로네이트
C. 랄록시펜
D. 졸레드론산

## 해설

랄록시펜은 정맥혈전색전증 위험을 높일 수 있어 현재 또는 과거 혈전색전증이 있는 환자에게 피한다. 골절 위험과 다른 금기를 확인해 대체 치료를 고른다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: SERM의 조직선택 작용 및 혈전 위험 기전 교정.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e2967d3c-238c-40cf-b3d8-89482a502928

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001242
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11439573/
