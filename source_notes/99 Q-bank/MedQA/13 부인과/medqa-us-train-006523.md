---
type: qbank
schema_version: 1
id: medqa-us-train-006523
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a51cb7b37faf4d07c4d80d7819b67b0816a7832032ff9392f5e4d47fd9f62a2
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "골다공증 선별"
  - "폐경 후 여성"
  - "예방 건강검진"
question_type: investigation
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 폐경 여성이 골다공증 평가를 처음 받는다. 아직 골절이나 요통은 없고 골밀도를 측정한 적도 없다. 국내 골다공증 지침에 맞는 검사는?

## 선택지

A. 혈중 칼슘 수치만으로 골다공증을 배제한다
B. 요추 단순 X선만으로 골밀도를 판정한다
C. 골절이 생긴 뒤에만 검사를 한다
D. 요추와 대퇴골의 이중에너지 X선 흡수계측(DXA)

## 해설

65세 이상 여성은 골다공증을 평가할 대상이다. 표준 골밀도 검사는 중심부 DXA이며, 혈중 칼슘이 정상이거나 증상이 없다고 골다공증이 배제되지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 65세 골밀도 선별 A 유지. 불명확한 자궁경부 선별 이력만으로 추가 검사가 모두 불필요하다는 설명 수정.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening%20
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006523
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11103071/
