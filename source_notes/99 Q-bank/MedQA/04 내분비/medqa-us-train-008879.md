---
type: qbank
schema_version: 1
id: medqa-us-train-008879
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e5ecfc11fd4867902eb15f4d42bc57bcf8b2b61061fb885579c40dea58168340
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "prolactinoma"
  - "hyperprolactinemia"
  - "bitemporal hemianopia"
related_disease_slugs:
  - MDQg64K067aE67mEL-2UhOuhnOudve2LtCDrtoTruYQg7KKF7JaRIChQcm9sYWN0aW5vbWEpLm1k
  - MDQg64K067aE67mEL-qzoO2UhOuhnOudve2LtO2YiOymnSAoSHlwZXJwcm9sYWN0aW5lbWlhKS5tZA
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

44세 여성이 경미한 자동차 사고 후 외래에 내원했다. 옆에서 오는 차를 보지 못했고 이런 일이 처음이 아니라고 한다. 건강 문제를 묻자 양쪽 유두에서 희끄무레한 분비물이 흘러 블라우스를 자주 적신다고 한다. 성생활을 하고 있고 지난 3개월 동안 월경이 없었지만 조기 폐경의 초기 징후라고 생각한다. 오심, 구토, 최근 체중 증가는 없다. 현재 약물은 복용하지 않는다. 시야검사에서 양측 귀쪽 시야 소실이 보인다. 다음 중 상태 진단에 가장 도움이 되는 검사는 무엇인가?

## 선택지

A. 소변 임신검사
B. 혈청 프로락틴 수치
C. 혈청 에스트로겐과 프로게스테론 수치
D. 갑상선자극호르몬 수치

## 해설


정답 B. 유즙분비·무월경과 양귀쪽 시야 결손은 뇌하수체 prolactinoma 등 시신경교차 압박 병변을 시사한다. Prolactinoma는 시상하부가 아니라 뇌하수체 선종이다. 혈청 prolactin이 가장 직접적인 생화학 검사이며 임신 가능성 배제와 TSH/약물 평가, 적응증에 따른 뇌하수체 MRI도 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008879 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: prolactinoma의 위치를 시상하부 아닌 뇌하수체로 교정; 임신검사도 임상 평가에 필요.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008879
