---
type: qbank
schema_version: 1
id: medqa-us-train-010017
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:04e5bcddfa8bf132a9010ae4f724543834dbfbfc8cc633ed13525296740868c1
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신성 당뇨병"
  - "거대아 출산력"
  - "조기 포도당 선별"
question_type: prevention
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
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
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 7주 첫 산전 진료에 온 산모는 임신 전 비만이었고 이전 임신에 4,500 g 신생아를 낳았다. 당뇨병을 진단받은 적은 없다. 대한당뇨병학회 권고에 맞는 초기 평가 계획은?

## 선택지

A. 초기에는 검사하지 않고 분만 뒤에만 검사한다
B. 5–7주에 24–28주 임신성 당뇨 기준으로만 확진한다
C. 지금 공복혈당 등으로 기존 당뇨병을 평가하고, 정상이면 24–28주에 임신성 당뇨를 검사한다
D. 이전 거대아 출산을 근거로 바로 인슐린 치료를 시작한다

## 해설

첫 산전 진료에서는 공복혈당, 당화혈색소 등으로 임신 전에 발견되지 않은 당뇨병을 확인한다. 초기에 정상이더라도 임신 24–28주에 임신성 당뇨 검사를 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신1–2주 검사라는 창작 삭제 및 초기 미진단 당뇨 평가와 통상 GDM선별 구분.
- https://doi.org/10.2337/dc26-s002

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010017
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
