---
type: qbank
schema_version: 1
id: medqa-us-train-004206
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ece6a396959c36d7ef53f2702a11699422ffc8415080868a2eafbe5f5d345ce0
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "통풍"
  - "요산 결정"
  - "잔틴 산화효소 억제제"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2Gte2SjSAoR291dCkubWQ
question_type: prevention
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
---

# MedQA US 임상문제

## 문제

55세 한국인 남성이 반복 통풍으로 장기 요산저하 치료를 시작하려 한다. eGFR은 32 mL/min/1.73m²이다. 알로푸리놀에 의한 중증 피부 이상반응 위험을 투약 전에 평가할 검사는?

## 선택지

A. HLA-B27
B. HLA-B*15:02
C. 항히스톤 항체
D. HLA-B*58:01

## 해설


HLA-B*58:01은 알로푸리놀에 의한 중증 피부 이상반응 위험과 연관된다. 한국인, 특히 신기능 저하 환자에서 투약 전 확인을 고려하며 양성이면 대체약을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004206 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반복 결정확인 통풍에서 장기 요산저하를 위한 xanthine oxidase inhibitor D가 적절하다. 급성 항염증제와 장기 질병조절 목적을 구분해 ACR 권고와 대조했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10563586/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004206
- https://pubmed.ncbi.nlm.nih.gov/30580048/
- https://doi.org/10.1002/acr.24180
