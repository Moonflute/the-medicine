---
type: qbank
schema_version: 1
id: medqa-us-train-009683
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1882ec4288d3cf52c8cf34a91e39910ad55924b494c8494f539c7c4b391032f4
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "benign prostatic hyperplasia"
  - "양성 전립선비대증"
  - "hydronephrosis"
question_type: prognosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yWkeyEsSDsoITrpr3sg5gg67mE64yA7KadIChCZW5pZ24gUHJvc3RhdGljIEh5cGVycGxhc2lhKS5tZA
  - MjAg67mE64eo6riw6rO8L-yalOuhnCDtj5Dsg4kgKFVyaW5hcnkgdHJhY3Qgb2JzdHJ1Y3Rpb24pLm1k
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

73세 남자가 빈뇨, 야간뇨, 배뇨 후 불완전 배뇨로 내원했다. 다른 건강 문제는 없고 진찰에서 크고 대칭적인 단단하고 매끄러운 전립선이 만져진다. 현재 상태의 합병증으로 가능한 것은 무엇인가?

## 선택지

A. 수신증
B. 방광암
C. 전립선염
D. 신장암

## 해설

BPH는 전립선 부위 요도를 통한 방광 출구 저항을 높일 수 있다. 지속되는 고압성 요폐가 상부요로에 영향을 주면 수신증 A가 생길 수 있으므로 가능한 합병증을 묻는 답이다. 모든 BPH에서 발생하거나 가장 흔한 합병증이라는 뜻은 아니며 방광암·신장암으로 직접 진행하는 질환도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전립관 폐쇄라는 용어와 수신증이 항상 최다 합병증이라는 과장을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009683
